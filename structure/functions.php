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
function print_ws_structure($name, $structure, $useparams) {
    if ($useparams) {
        $type = implode('', array_map('ucfirst', explode('_', $name))) . 'WSParams';
        $comment = "Params of $name WS.";
    } else {
        $type = implode('', array_map('ucfirst', explode('_', $name))) . 'WSResponse';
        $comment = "Data returned by $name WS.";
    }

    echo "
/**
 * $comment
 */
export type $type = ".convert_to_ts(null, $structure).";\n";
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
