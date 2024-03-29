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
 * Template configuraton file for github actions CI/CD.
 *
 * @package    core
 * @copyright  2020 onwards Eloy Lafuente (stronk7) {@link https://stronk7.com}
 * @license    https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

// This cannot be used out from a github actions workflow, so just exit.
getenv('GITHUB_WORKFLOW') || die; // phpcs:ignore moodle.Files.MoodleInternal.MoodleInternalGlobalState

unset($CFG);
global $CFG;
$CFG = new stdClass();

$CFG->dbtype    = getenv('dbtype');
$CFG->dblibrary = 'native';
$CFG->dbhost    = '127.0.0.1';
$CFG->dbname    = 'test';
$CFG->dbuser    = 'test';
$CFG->dbpass    = 'test';
$CFG->prefix    = 'm_';
$CFG->dboptions = ['dbcollation' => 'utf8mb4_bin'];

$host = 'localhost';
$CFG->wwwroot   = "http://localhost";
$CFG->dataroot  = realpath(dirname(__DIR__)) . '/moodledata';
$CFG->admin     = 'admin';
$CFG->directorypermissions = 0777;

$CFG->pathtophp = getenv('pathtophp');

require_once(__DIR__ . '/lib/setup.php');
