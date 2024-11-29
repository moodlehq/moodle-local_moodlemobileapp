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
 * Helper functions for converting a Moodle WS structure to a TS type.
 */

if (file_exists("$CFG->libdir/external/classes/external_api.php")) {
    require_once('ws_functions.php');
} else {
    require_once('ws_functions_41.php');
}

/**
 * Fix a comment: make sure first letter is uppercase and add a dot at the end if needed.
 */
function fix_comment($desc) {
    $desc = trim($desc);
    $desc = ucfirst($desc);

    if (substr($desc, -1) !== '.') {
        $desc .= '.';
    }

    $lines = explode("\n", $desc);
    if (count($lines) > 1) {
        $desc = array_shift($lines)."\n";

        foreach ($lines as $line) {
            $spaces = strlen($line) - strlen(ltrim($line));
            $desc .= str_repeat(' ', $spaces - 3) . '// '. ltrim($line)."\n";
        }
    }

    return $desc;
}

/**
 * Get an inline comment based on a certain text.
 */
function get_inline_comment($desc) {
    if (empty($desc)) {
        return '';
    }

    return ' // ' . fix_comment($desc);
}

/**
 * Add the TS documentation of a certain element.
 */
function get_ts_doc($type, $desc, $indentation) {
    if (empty($desc)) {
        // If no key, it's probably in an array. We only document object properties.
        return '';
    }

    return $indentation . "/**\n" .
           $indentation . " * " . fix_comment($desc) . "\n" .
           (!empty($type) ? ($indentation . " * @type {" . $type . "}\n") : '') .
           $indentation . " */\n";
}

/**
 * Specify a certain type, with or without a key.
 */
function convert_key_type($key, $type, $required, $indentation) {
    if ($key) {
        // It has a key, it's inside an object.
        return $indentation . "$key" . ($required == VALUE_OPTIONAL || $required == VALUE_DEFAULT ? '?' : '') . ": $type";
    } else {
        // No key, it's probably in an array. Just include the type.
        return $type;
    }
}

/**
 * Print structure ready to use.
 */
function print_ws_structures($structures) {
    foreach ($structures as $wsname => $structure) {
        $type = getTSTypeFromName($wsname);

        print_ws_structure($wsname, $type, $structure, true);
        print_ws_structure($wsname, $type, $structure, false);
    }
}

/**
 * Print params or return structures.
 */
function print_ws_structure($wsname, $type, $structure, $useparams) {
    if ($useparams) {
        $comment = "Params of $wsname WS.";
        $type .= 'WSParams';
        $typestructure = $structure->parameters_desc;
        $export = '';
    } else {
        $comment = "Data returned by $wsname WS.";
        $type .= 'WSResponse';
        $typestructure = $structure->returns_desc;
        $export = 'export ';
    }

    echo "
/**
 * $comment";
    if (!empty($structure->description)) {
        echo "
 *
 * WS Description: $structure->description";
    }
    if (isset($structure->deprecated) && $structure->deprecated) {
        echo "
 *
 * @deprecatedonmoodle since ADDVERSIONHERE. This WS method is deprecated";
    }
    /* echo "
 * WS Type: $structure->type
 * Allowed from AJAX: " . ($structure->allowed_from_ajax ? 'yes' : 'no') . "
 * Read only session: " . ($structure->readonlysession ? 'yes' : 'no') . "
 * Login required: " . ($structure->loginrequired ? 'yes' : 'no');*/
echo "
 */
{$export}type $type = ".convert_to_ts(null, $typestructure).";\n";
}

/**
 * Returns TS Type From WS Name.
 */
function getTSTypeFromName($wsname) {
    $type = implode('', array_map('ucfirst', explode('_', $wsname) ) );
    $search = [
        '/^Block/',
        '/^Mod/',
        '/^Enrol/',
        '/^Gradereport/',
        '/^CoreCalendar/',
        '/^CoreBadges/',
        '/^CoreBlog/',
        '/^CoreCompetency/',
        '/^CoreFiles/',
        '/^CoreMessage/',
        '/^CoreNotes/',
        '/^MessageAirnotifier/',
        '/^ReportInsights/',
        '/^ToolLp/',
        '/^ToolMobile/',
    ];

    $replaces = [
        'AddonBlock',
        'AddonMod',
        'AddonEnrol',
        'CoreGradesGradereport',
        'AddonCalendar',
        'AddonBadges',
        'AddonBlog',
        'AddonCompetency',
        'AddonPrivateFiles',
        'AddonMessages',
        'AddonNotes',
        'AddonMessageOutputAirnotifier',
        'AddonReportInsights',
        'AddonCompetency',
        'CoreSite',
    ];

    return preg_replace($search, $replaces, $type);
}

/**
 * Concatenate two paths.
 */
function concatenate_paths($left, $right, $separator = '/') {
    if (!is_string($left) || $left == '') {
        return $right;
    } else if (!is_string($right) || $right == '') {
        return $left;
    }

    $lastCharLeft = substr($left, -1);
    $firstCharRight = $right[0];

    if ($lastCharLeft === $separator && $firstCharRight === $separator) {
        return $left . substr($right, 1);
    } else if ($lastCharLeft !== $separator && $firstCharRight !== '/') {
        return $left . '/' . $right;
    } else {
        return $left . $right;
    }
}
