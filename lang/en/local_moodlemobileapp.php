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
 * Version details.
 *
 * @package    local
 * @subpackage moodlemobileapp
 * @copyright  2014 Juan Leyva <juanleyvadelgado@gmail.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

$string['pluginname'] = 'Moodle Mobile language strings';
$string['appstoredescription'] = 'NOTE: This official Moodle Mobile app will ONLY work with Moodle sites that have been set up to allow it.  Please talk to your Moodle administrator if you have any problems connecting.

If your Moodle site has been configured correctly, you can use this app to:

- browse the content of your courses, even when offline
- receive instant notifications of messages and other events
- quickly find and contact other people in your courses
- upload images, audio, videos and other files from your mobile device
- view your course grades
- and more!

Please see http://docs.moodle.org/en/Mobile_app for all the latest information.

We’d really appreciate any good reviews about the functionality so far, and your suggestions on what else you want this app to do!

The app requires the following permissions:
Record audio - For recording audio to upload to Moodle
Read and modify the contents of your SD card - Contents are downloaded to the SD Card so you can see them offline
Network access - To be able to connect with your Moodle site and check if you are connected or not to switch to offline mode
Run at startup - So you receive local notifications even when the app is running in the background
Prevent phone from sleeping - So you can receive push notifications anytime';

$string['mm.core.cancel'] = 'Cancel';
$string['mm.core.cannotconnect'] = 'Cannot connect: Verify that your have typed correctly the URL and that your site uses Moodle 2.4 or later.';
$string['mm.core.clearsearch'] = 'Clear search';
$string['mm.core.course'] = 'Course';
$string['mm.core.downloading'] = 'Downloading';
$string['mm.core.elementseparator'] = ', ';
$string['mm.core.error'] = 'Error';
$string['mm.core.errordownloading'] = 'Error downloading file.';
$string['mm.core.humanreadablesize'] = '{{size}} {{unit}}';
$string['mm.core.loading'] = 'Loading';
$string['mm.core.lostconnection'] = 'Your authentication token is invalid or has expired, you will have to reconnect to the site.';
$string['mm.core.mod_assign'] = 'Assignment';
$string['mm.core.mod_assignment'] = 'Assignment';
$string['mm.core.mod_book'] = 'Book';
$string['mm.core.mod_chat'] = 'Chat';
$string['mm.core.mod_choice'] = 'Choice';
$string['mm.core.mod_data'] = 'Database';
$string['mm.core.mod_database'] = 'Database';
$string['mm.core.mod_external-tool'] = 'External tool';
$string['mm.core.mod_feedback'] = 'Feedback';
$string['mm.core.mod_file'] = 'File';
$string['mm.core.mod_folder'] = 'Folder';
$string['mm.core.mod_forum'] = 'Forum';
$string['mm.core.mod_glossary'] = 'Glossary';
$string['mm.core.mod_ims'] = 'IMS content package';
$string['mm.core.mod_imscp'] = 'IMS content package';
$string['mm.core.mod_label'] = 'Label';
$string['mm.core.mod_lesson'] = 'Lesson';
$string['mm.core.mod_lti'] = 'External tool';
$string['mm.core.mod_page'] = 'Page';
$string['mm.core.mod_quiz'] = 'Quiz';
$string['mm.core.mod_resource'] = 'Resource';
$string['mm.core.mod_scorm'] = 'SCORM package';
$string['mm.core.mod_survey'] = 'Survey';
$string['mm.core.mod_url'] = 'URL';
$string['mm.core.mod_wiki'] = 'Wiki';
$string['mm.core.mod_workshop'] = 'Workshop';
$string['mm.core.networkerrormsg'] = 'Network not enabled or not working.';
$string['mm.core.notapplicable'] = 'n/a';
$string['mm.core.numdays'] = '{{$a}} days';
$string['mm.core.numhours'] = '{{$a}} hours';
$string['mm.core.numminutes'] = '{{$a}} minutes';
$string['mm.core.nummonths'] = '{{$a}} months';
$string['mm.core.numseconds'] = '{{$a}} seconds';
$string['mm.core.numyears'] = '{{$a}} years';
$string['mm.core.pulltorefresh'] = 'Pull to refresh';
$string['mm.core.search'] = 'Search';
$string['mm.core.sizeb'] = 'bytes';
$string['mm.core.sizegb'] = 'GB';
$string['mm.core.sizekb'] = 'KB';
$string['mm.core.sizemb'] = 'MB';
$string['mm.core.sizetb'] = 'TB';
$string['mm.core.unexpectederror'] = 'Unexepected error. Please close and reopen the application to try again';
$string['mm.core.view'] = 'View';
$string['mm.core.wsfunctionnotavailable'] = 'The webservice function is not available.';
$string['mm.course.activitynotyetviewable'] = 'This activity or resource is not yet viewable in the app.';
$string['mm.course.activitynotyetviewablegothere'] = 'This activity or resource is not yet viewable in the app, click the button below to access it from the site.';
$string['mm.course.allsections'] = 'All sections';
$string['mm.course.contents'] = 'Contents';
$string['mm.course.couldnotloadsections'] = 'Could not load the sections, please try again later.';
$string['mm.course.couldnotloadsectioncontent'] = 'Could not load the section content, please try again later.';
$string['mm.course.gotothesite'] = 'Go to the site';
$string['mm.course.nocontentavailable'] = 'No content available at the moment.';
$string['mm.course.showall'] = 'Show all';
$string['mm.course.whoops'] = 'Whoops!';
$string['mm.courses.errorloadcourses'] = 'An error occurred while loading courses.';
$string['mm.courses.filter'] = 'Filter';
$string['mm.courses.frontpage'] = 'Front page';
$string['mm.courses.mycourses'] = 'My courses';
$string['mm.login.authenticating'] = 'Authenticating';
$string['mm.login.cancel'] = 'Cancel';
$string['mm.login.cannotdownloadfiles'] = 'File downloading is disabled in your Mobile service, the app can\'t work with this setting disabled. Please, contact your site administrator.';
$string['mm.login.credentials'] = 'Credentials';
$string['mm.login.credentialsdescription'] = 'Please provide your username and password to login on ';
$string['mm.login.confirmdeletesite'] = 'Are you sure you want to delete the site {{sitename}}?';
$string['mm.login.connect'] = 'Connect!';
$string['mm.login.connecttomoodle'] = 'Connect to Moodle';
$string['mm.login.erroraccesscontrolalloworigin'] = 'The Cross-Origin call you\'re trying to perform has been rejected. Please check https://docs.moodle.org/dev/Moodle_Mobile_development_using_Chrome_or_Chromium';
$string['mm.login.errordeletesite'] = 'An error occurred while deleting this site. Please try again.';
$string['mm.login.errorupdatesite'] = 'An error ocurred while updating the site\'s token.';
$string['mm.login.help'] = 'Help';
$string['mm.login.helpmelogin'] = '<p>There are many thousands of Moodle sites around the world. This app can only connect to Moodle sites that have specifically enabled Mobile app access.</p><p>If you can\'t connect to your Moodle site then you need to contact a Moodle administrator at the place where you want to connect and ask them to read <a href=\"http://docs.moodle.org/en/Mobile_app\" target=\"_blank\">http://docs.moodle.org/en/Mobile_app</a></p><p>To test the app in a Moodle demo site type <i>teacher</i> or <i>student</i> in the <i>Site URL</i> field and click the <b>Add button</b>.</p>';
$string['mm.login.invalidaccount'] = 'Please check your login details or ask your site administrator to check the site configuration.';
$string['mm.login.invalidmoodleversion'] = 'Invalid Moodle version. The minium version required is 2.4.';
$string['mm.login.invalidsite'] = 'The site URL is invalid.';
$string['mm.login.login'] = 'Login';
$string['mm.login.loginbutton'] = 'Login!';
$string['mm.login.logininsiterequired'] = 'You need to log in to the site in a browser window.';
$string['mm.login.mobileservicesnotenabled'] = 'Mobile Services are not enabled in your site. Please, contact your Moodle site administrator if you think mobile access should be enabled.';
$string['mm.login.newsitedescription'] = 'Please enter the URL of your Moodle site. Note that it might not be configured to work with this app.';
$string['mm.login.notloggedin'] = 'You need to be logged in.';
$string['mm.login.password'] = 'Password';
$string['mm.login.passwordrequired'] = 'Password required';
$string['mm.login.reconnect'] = 'Reconnect';
$string['mm.login.reconnectdescription'] = 'Your authentication token is invalid or has expired, you have to reconnect to the site.';
$string['mm.login.reconnectssodescription'] = 'Your authentication token is invalid or has expired, you have to reconnect to the site. You need to log in to the site in a browser window.';
$string['mm.login.siteaddress'] = 'Site address';
$string['mm.login.siteinmaintenance'] = 'Your site is in maintenance mode';
$string['mm.login.siteurl'] = 'Site URL';
$string['mm.login.siteurlrequired'] = 'Site URL required, i.e <i>http://www.yourmoodlesite.abc or https://www.yourmoodlesite.efg</i>';
$string['mm.login.username'] = 'Username';
$string['mm.login.usernamerequired'] = 'Username required';
$string['mm.login.webservicesnotenabled'] = 'Web Services are not enabled in your site. Please, contact your Moodle site administrator if you think mobile access should be enabled.';
$string['mm.settings.about'] = 'About';
$string['mm.settings.appname'] = 'Moodle Mobile {{version}}';
$string['mm.settings.cacheexpirationtime'] = 'Cache expiration time (miliseconds)';
$string['mm.settings.credits'] = 'Credits';
$string['mm.settings.deletesitefilestitle'] = 'Delete site files';
$string['mm.settings.deletesitefiles'] = 'Are you sure that you want to delete the downloaded files from the site \'{{sitename}}\'?';
$string['mm.settings.development'] = 'Development';
$string['mm.settings.enabledebugging'] = 'Enable debugging';
$string['mm.settings.errordeletesitefiles'] = 'Error deleting site files.';
$string['mm.settings.errorsyncsite'] = 'Error synchronizing the site data, please check your internet connection and try again.';
$string['mm.settings.estimatedfreespace'] = 'Estimated free space';
$string['mm.settings.general'] = 'General';
$string['mm.settings.language'] = 'Language';
$string['mm.settings.license'] = 'License';
$string['mm.settings.settings'] = 'Settings';
$string['mm.settings.spaceusage'] = 'Space usage';
$string['mm.settings.success'] = 'Success!';
$string['mm.settings.synchronization'] = 'Synchronization';
$string['mm.settings.synchronizing'] = 'Synchronizing';
$string['mm.settings.syncsitesuccess'] = 'Site data synchronized and all caches invalidated.';
$string['mm.settings.total'] = 'Total';
$string['mm.sidemenu.appsettings'] = 'App settings';
$string['mm.sidemenu.help'] = 'Help';
$string['mm.sidemenu.logout'] = 'Change site';
$string['mm.sidemenu.mycourses'] = 'My courses';
$string['mm.sidemenu.website'] = 'Website';
$string['mm.user.address'] = 'Address';
$string['mm.user.city'] = 'City';
$string['mm.user.contact'] = 'Contact';
$string['mm.user.country'] = 'Country';
$string['mm.user.description'] = 'Description';
$string['mm.user.details'] = 'Details';
$string['mm.user.detailsnotavailable'] = 'The details of this user are not available to you.';
$string['mm.user.editingteacher'] = 'Teacher';
$string['mm.user.email'] = 'Email';
$string['mm.user.interests'] = 'Interests';
$string['mm.user.invaliduser'] = 'Invalid user.';
$string['mm.user.manager'] = 'Manager';
$string['mm.user.phone1'] = 'Phone';
$string['mm.user.phone2'] = 'Mobile';
$string['mm.user.roles'] = 'Roles';
$string['mm.user.student'] = 'Student';
$string['mm.user.teacher'] = 'Non-editing teacher';
$string['mm.user.webpage'] = 'Web page';
$string['mma.calendar.calendarevents'] = 'Calendar events';
$string['mma.calendar.errorloadevent'] = 'Error loading event.';
$string['mma.calendar.errorloadevents'] = 'Error loading events.';
$string['mma.calendar.noevents'] = 'There are no events';
$string['mma.calendar.notifications'] = 'Notifications';
$string['mma.files.admindisableddownload'] = 'Please note that your Moodle administrator disabled file downloads, you can browse through the files but not download them.';
$string['mma.files.audio'] = 'Audio';
$string['mma.files.camera'] = 'Camera';
$string['mma.files.chooseaccountuploadfile'] = 'Choose an account to upload the file to.';
$string['mma.files.clicktoupload'] = 'Click the button below to upload files to your private files.';
$string['mma.files.confirmuploadfile'] = 'You are about to upload {{size}}. Are you sure you want to continue?';
$string['mma.files.couldnotloadfiles'] = 'The list of files could not be loaded.';
$string['mma.files.downloading'] = 'Downloading';
$string['mma.files.emptyfilelist'] = 'There are no files to show.';
$string['mma.files.errorcapturingaudio'] = 'Error capturing audio.';
$string['mma.files.errorcapturingimage'] = 'Error capturing image.';
$string['mma.files.errorcapturingvideo'] = 'Error capturing video.';
$string['mma.files.errorgettingimagealbum'] = 'Error getting image from album.';
$string['mma.files.errormustbeonlinetoupload'] = 'You have to be online to upload files.';
$string['mma.files.errornoapp'] = 'You don\'t have an app installed to perform this action.';
$string['mma.files.errorreadingfile'] = 'Error reading file.';
$string['mma.files.errorreceivefilenosites'] = 'There are no sites stored. Please add a site before trying to upload a file.';
$string['mma.files.errorwhiledownloading'] = 'An error occured while trying to download the file.';
$string['mma.files.errorwhileuploading'] = 'An error occured during the file upload.';
$string['mma.files.errorwhilerecordingaudio'] = 'An error occured while trying to record audio.';
$string['mma.files.file'] = 'File';
$string['mma.files.fileuploaded'] = 'The file was successfully uploaded.';
$string['mma.files.myfiles'] = 'My files';
$string['mma.files.myprivatefiles'] = 'My private files';
$string['mma.files.myprivatefilesdesc'] = 'The files that are available in your private area on this Moodle site.';
$string['mma.files.photoalbums'] = 'Photo albums';
$string['mma.files.readingfile'] = 'Reading file';
$string['mma.files.sitefiles'] = 'Site files';
$string['mma.files.sitefilesdesc'] = 'The other files that are available to you on this Moodle site.';
$string['mma.files.success'] = 'Success!';
$string['mma.files.uploadafile'] = 'Upload a file';
$string['mma.files.uploadfiles'] = 'Upload files';
$string['mma.files.uploading'] = 'Uploading';
$string['mma.files.video'] = 'Video';
$string['mma.frontpage.frontpage'] = 'Front page';
$string['mma.grades.average'] = 'Average';
$string['mma.grades.contributiontocoursetotal'] = 'Contribution to course total';
$string['mma.grades.feedback'] = 'Feedback';
$string['mma.grades.grade'] = 'Grade';
$string['mma.grades.grades'] = 'Grades';
$string['mma.grades.itemname'] = 'Grade item';
$string['mma.grades.lettergrade'] = 'Letter grade';
$string['mma.grades.percentage'] = 'Percentage';
$string['mma.grades.rank'] = 'Rank';
$string['mma.grades.range'] = 'Range';
$string['mma.grades.viewgrades'] = 'View grades';
$string['mma.grades.weight'] = 'Weight';
$string['mma.messages.addcontact'] = 'Add contact';
$string['mma.messages.blockcontact'] = 'Block contact';
$string['mma.messages.contactname'] = 'Contact name';
$string['mma.messages.contactlistempty'] = 'contact list is empty';
$string['mma.messages.contacts'] = 'Contacts';
$string['mma.messages.errorwhileretrievingcontacts'] = 'Error while retrieving the contacts from the server.';
$string['mma.messages.errorwhileretrievingdiscussions'] = 'Error while retrieving the discussions from the server.';
$string['mma.messages.errorwhileretrievingmessages'] = 'Error while retrieving the messages from the server.';
$string['mma.messages.messagenotsent'] = 'The message was not sent, please try again later.';
$string['mma.messages.messages'] = 'Messages';
$string['mma.messages.mustbeonlinetosendmessages'] = 'You must be online to send messages';
$string['mma.messages.newmessage'] = 'New message...';
$string['mma.messages.nomessages'] = 'No messages.';
$string['mma.messages.removecontact'] = 'Remove contact';
$string['mma.messages.send'] = 'Send';
$string['mma.messages.sendmessage'] = 'Send message';
$string['mma.messages.type_blocked'] = 'Blocked';
$string['mma.messages.type_offline'] = 'Offline';
$string['mma.messages.type_online'] = 'Online';
$string['mma.messages.type_search'] = 'Search results';
$string['mma.messages.type_strangers'] = 'Others';
$string['mma.messages.unblockcontact'] = 'Unlock contact';
$string['mma.mod_assign.addsubmission'] = 'Add submission';
$string['mma.mod_assign.allowsubmissionsfromdate'] = 'Allow submissions from';
$string['mma.mod_assign.attemptnumber'] = 'Attempt number';
$string['mma.mod_assign.cutoffdate'] = 'Cut-off date';
$string['mma.mod_assign.duedate'] = 'Due date';
$string['mma.mod_assign.duedateno'] = 'No due date';
$string['mma.mod_assign.submissions'] = 'Submissions';
$string['mma.mod_assign.userwithid'] = 'User with Id {{id}}';
$string['mma.mod_assign.viewsubmission'] = 'View submission';
$string['mma.mod_book.errorchapter'] = 'Error reading chapter of book.';
$string['mma.mod_folder.emptyfilelist'] = 'There are no files to show.';
$string['mma.mod_forum.errorgetforum'] = 'Error getting forum data.';
$string['mma.mod_forum.forumnodiscussionsyet'] = 'There are no discussion topics yet in this forum.';
$string['mma.mod_forum.numdiscussions'] = '{{numdiscussions}} discussions';
$string['mma.mod_forum.numreplies'] = '{{numreplies}} replies';
$string['mma.mod_imscp.deploymenterror'] = 'Content package error!';
$string['mma.mod_label.label'] = 'Label';
$string['mma.mod_label.taptoview'] = 'Tap to view the label.';
$string['mma.mod_page.errorwhileloadingthepage'] = 'Error while loading the page content.';
$string['mma.mod_resource.errorwhileloadingthecontent'] = 'Error while loading the content.';
$string['mma.mod_resource.openthefile'] = 'Open the file';
$string['mma.mod_url.accessurl'] = 'Access the URL';
$string['mma.mod_url.pointingtourl'] = 'URL this resource points to';
$string['mma.notes.addnewnote'] = 'Add a new note';
$string['mma.notes.coursenotes'] = 'Course notes';
$string['mma.notes.eventnotecreated'] = 'Note created';
$string['mma.notes.nonotes'] = 'There are no notes of this type yet';
$string['mma.notes.note'] = 'Note';
$string['mma.notes.notes'] = 'Notes';
$string['mma.notes.personalnotes'] = 'Personal notes';
$string['mma.notes.publishstate'] = 'Context';
$string['mma.notes.sitenotes'] = 'Site notes';
$string['mma.notifications.errorgetnotifications'] = 'Error getting notifications';
$string['mma.notifications.notifications'] = 'Notifications';
$string['mma.notifications.therearentnotificationsyet'] = 'There are no notifications';
$string['mma.participants.participants'] = 'Participants';

