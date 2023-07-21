<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Helper functions converting moodle strings to json.
 */

/**
 * Builds all languages specified in the list.
 * @param $time_first Time of the first execution.
 */
function build_languages($time_first) {
    global $LANGUAGES;
    global $LAST_RUN_LANGUAGES;
    global $STATS;

    load_languages();

    $now = time();
    $maxlangs = MAX_LANGS;

    // Process the languages.
    foreach ($LANGUAGES as $language) {
        if (!get_langpack_folder($language->lang)) {
            echo "Cannot translate $language->lang, folder not found\n";
            continue;
        }

        if (isset($LAST_RUN_LANGUAGES[$language->lang])) {
            $lastrun = $LAST_RUN_LANGUAGES[$language->lang];
            # Check already parsed in this script.
            if (isset($lastrun->lastupdate) && $lastrun->lastupdate > $time_first) {
                continue;
            }
        }

        build_lang($language);
        $LAST_RUN_LANGUAGES[$language->lang] = $language;

        $maxlangs--;
        if ($maxlangs <= 0) {
            break;
        }
    }

    // Include stats and save.
    $LAST_RUN_LANGUAGES['languages'] = new StdClass();
    $LAST_RUN_LANGUAGES['languages']->local = $STATS->local;
    $LAST_RUN_LANGUAGES['languages']->total = $STATS->total;

    save_json('languages.json', $LAST_RUN_LANGUAGES);
}

/**
 * Loads lang index keys.
 */
function load_languages() {
    global $LANGUAGES;
    global $LAST_RUN_LANGUAGES;
    global $LANGINDEX;
    global $STATS;

    $LANGUAGES = load_csv(LANGPACKSFOLDER . '/languages.md5', ['lang', 'md5', 'name']);
    $LAST_RUN_LANGUAGES = load_json('languages.json');

    // Loads lang index keys.
    $local = 0;
    $total = 0;

    // Process the index file, just once.
    $langindexjson = load_json('langindex.json');

    $LANGINDEX = [];
    foreach ($langindexjson as $appkey => $value) {
        if ($value == APPMODULENAME) {
            $file = $value;
            $lmskey = $appkey;
            $local++;
        } else {
            $exp = explode('/', $value, 2);
            $file = $exp[0];
            if (count($exp) == 2) {
                $lmskey = $exp[1];
            } else {
                $exp = explode('.', $appkey, 3);

                if (count($exp) == 3) {
                    $lmskey = $exp[2];
                } else {
                    $lmskey = $exp[1];
                }
            }
        }

        if (!isset($LANGINDEX[$file])) {
            $LANGINDEX[$file] = [];
        }

        $LANGINDEX[$file][$appkey] = $lmskey;
        $total++;
    }

    if ($total == 0) {
        die("Langindex error. exiting...");
    }

    $STATS = new StdClass();
    $STATS->local = $local;
    $STATS->total = $total;

    echo "Strings to translate $total\n";
    echo "Local strings $local\n";
    echo "Languages ".count($LANGUAGES)."\n";
}

/**
 * Build translations files from langpack.
 *
 * @param $language Language object including name and code.
 */
function build_lang(&$language) {
    global $STATS;
    global $LANGINDEX;

    $lang = $language->lang;

    $langfoldername = get_langpack_folder($lang);

    $language->local = 0;

    $parent = get_parent_language($lang);

    echo "Processing $language->name ($lang)";
    // Check parent language exists.
    if (!empty($parent)) {
        echo " Parent: $parent";
    }

    $langFile = false;
    if (file_exists($lang.'.json')) {
        // Load lang files just once.
        $langFile = load_json($lang.'.json');
    }

    $translations = [];
    // Add the translation to the array.
    foreach ($LANGINDEX as $file => $keys) {
        $lmsstring = get_translation_strings($langfoldername, $file);
        if (empty($lmsstring)) {
            continue;
        }

        foreach ($keys as $appkey => $lmskey) {
            if (!isset($lmsstring[$lmskey])) {
                continue;
            }

            $text = $lmsstring[$lmskey];

            if ($file != APPMODULENAME) {
                $text = str_replace('$a->@', '$a.', $text);
                $text = str_replace('$a->', '$a.', $text);
                $text = str_replace('{$a', '{{$a', $text);
                $text = str_replace('}', '}}', $text);
                $text = preg_replace('/@@.+?@@(<br>)?\\s*/', '', $text);
                // Prevent double.
                $text = str_replace(['{{{', '}}}'], ['{{', '}}'], $text);
            } else {
                // @TODO: Remove that line when core.cannotconnect and core.login.invalidmoodleversion are completelly changed to use $a
                if (($appkey == 'core.cannotconnect' || $appkey == 'core.login.invalidmoodleversion') && strpos($text, '2.4')) {
                    if (DEBUG) {
                        echo "****** Found 2.4 \n";
                    }
                    $text = str_replace('2.4', '{{$a}}', $text);
                }
                $language->local++;
            }

            $translations[$appkey] = html_entity_decode($text);
        }
    }

    if (!empty($parent)) {
        $translations['core.parentlanguage'] = $parent;
    } else if (isset($translations['core.parentlanguage'])) {
        unset($translations['core.parentlanguage']);
    }

    // Sort and save.
    ksort($translations);
    save_json($lang.'.json', $translations);

    $language->lastupdate = time();
    $language->translated = count($translations);
    $lmsstring = get_translation_strings($langfoldername, 'langconfig');
    $language->name = $lmsstring['thislanguage'];

    $percentage = floor($language->translated/$STATS->total * 100);
    $bar = progressbar($percentage);

    if (strlen($lang) <= 2 && !$parent) {
        echo "\t";
    }

    echo "\t\t$language->translated of $STATS->total -> $percentage% $bar ($language->local local)\n";
}

/**
 * Save json data.
 *
 * @param $path Path of the file to load.
 * @param $content Content string to save.
 */
function save_json($path, $content) {
    file_put_contents($path, str_replace('\/', '/', json_encode($content, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT))."\n");
}

/**
 * Load json data.
 *
 * @param $path Path of the file to load.
 * @returns Associative array obtained from json.
 */
function load_json($path) {
    $file = file_get_contents($path);
    return (array) json_decode($file);
}

/**
 * Load CSV data.
 *
 * @param $path Path of the file to load.
 * @param $fields Sorted fields. First param will be the array key.
 * @returns Associative array obtained from csv.
 */
function load_csv($path, $fields) {
    $csv = array_map('str_getcsv', file($path));
    $csv_sorted = [];
    foreach ($csv as $line) {
        $csv_sorted[$line[0]] = (object) array_combine($fields, $line);
    }

    return $csv_sorted;
}

/**
 * Get's lang folder from lang code.
 *
 * @param $lang Lang code.
 * @returns Folder path.
 */
function get_langpack_folder($lang) {
    $folder = LANGPACKSFOLDER.'/'.$lang;
    if (!is_dir($folder) || !is_file($folder.'/langconfig.php')) {
        return false;
    }

    return $folder;
}

/**
 * Import translation file from langpack and returns it.
 *
 * @param $langfoldername Lang folder path.
 * @param $file File name (excluding extension).
 * @returns String array.
 */
function get_translation_strings($langfoldername, $file) {
    $path = $langfoldername.'/'.$file.'.php';
    // Apply translations.
    if (!file_exists($path)) {
        return [];
    }

    $string = [];

    include($path);

    return $string;
}

/**
 * Generates an ASCII progress bar.
 *
 * @param $percentage Done part.
 * @param $length Length of the text.
 * @returns Text generated.
 */
function progressbar($percentage, $length = 10) {
    $done = floor($percentage / $length);
    return "\t".str_repeat('=', $done) . str_repeat('-', $length - $done);
}

/**
 * Get parent language code from a particular language.
 *
 * @param $lang Lang code
 * @returns Parent language code if any is available or empty otherwise.
 */
function get_parent_language($lang) {
    $langfoldername = get_langpack_folder($lang);

    $langconfigstr = get_translation_strings($langfoldername, 'langconfig');
    $parentname = isset($langconfigstr['parentlanguage']) && !empty($langconfigstr['parentlanguage']) ? $langconfigstr['parentlanguage'] : "";

    if (empty($parentname)) {
        // Guess it from language code.
        $langparts = explode('_', $lang, 2);
        $parentname = $langparts[0] ? $langparts[0] : "";
    }

    if ($parentname != $lang && get_langpack_folder($parentname)) {
        return $parentname;
    }

    return "";
}
