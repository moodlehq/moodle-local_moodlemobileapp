@mod @mod_choice @app @javascript
Feature: Test basic usage of choice activity in app
  In order to participate in the choice while using the mobile app
  As a student
  I need basic choice functionality to work

  Background:
    Given the following "users" exist:
      | username | firstname | lastname | email |
      | teacher1 | Teacher | teacher | teacher1@example.com |
      | student1 | Student | student | student1@example.com |
    And the following "courses" exist:
      | fullname | shortname | category |
      | Course 1 | C1 | 0 |
    And the following "course enrolments" exist:
      | user | course | role |
      | teacher1 | C1 | editingteacher |
      | student1 | C1 | student |
    And the following "activities" exist:
      | activity | name        | intro                   | course | idnumber | option |
      | choice   | Choice name | Test choice description | C1     | choice1  | Option 1, Option 2, Option 3 | 

  @app @3.8.0 @OK
  Scenario: Student sends their single choice and views results.
    Given the following "activities" exist:
      | activity | name                    | intro                          | course | idnumber | option                       | allowmultiple | allowupdate | showresults |
      | choice   | Test single choice name | Test single choice description | C1     | choice1  | Option 1, Option 2, Option 3 | 0             | 0           | 1           |
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test single choice name" in the app
    And I press "Option 1" in the app
    And I press "Option 2" in the app
    And I press "Save my choice" in the app
    And I should see "Are you sure"
    And I press "OK" in the app
    Then I should see "Option 1: 0"
    And I should see "Option 2: 1"
    And I should see "Option 3: 0"
    And I should not see "Remove my choice"
    And I press the back button in the app
    And I press "Test single choice name" in the app
    And I should see "Option 1: 0"
    And I should see "Option 2: 1"
    And I should see "Option 3: 0"

    @app @3.8.0 @OK
    Scenario: Student sends, changes and removes the multi choice
    Given the following "activities" exist:
      | activity | name                    | intro                          | course | idnumber | option                       | allowmultiple | allowupdate | showresults |
      | choice   | Test multi choice name  | Test multi choice description  | C1     | choice2  | Option 1, Option 2, Option 3 | 1             | 1           | 1           |
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test multi choice name" in the app
    And I press "Option 1" in the app
    And I press "Option 2" in the app
    And I press "Save my choice" in the app
    Then I should see "Option 1: 1"
    And I should see "Option 2: 1"
    And I should see "Option 3: 0"
    And I should see "Remove my choice"
    And I press "Option 1" in the app
    And I press "Option 3" in the app
    And I press "Save my choice" in the app
    And I should see "Option 1: 0"
    And I should see "Option 2: 1"
    And I should see "Option 3: 1"
    And I press "Remove my choice" in the app
    And I should see "Are you sure"
    And I press "Delete" in the app
    And I should not see "Remove my choice"
    And I should see "The results are not currently viewable"

  @app @3.8.0 @OK
  Scenario: Student answers, changes answer offline and sync
    Given the following "activities" exist:
      | activity | name                    | intro                          | course | idnumber | option                       | allowmultiple | allowupdate | showresults |
      | choice   | Test single choice name | Test single choice description | C1     | choice1  | Option 1, Option 2, Option 3 | 0             | 0           | 1           |
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test single choice name" in the app
    And I press "Option 1" in the app
    And I switch offline mode to "true"
    And I press "Option 2" in the app
    And I press "Save my choice" in the app
    Then I should see "Are you sure"
    And I press "OK" in the app
    And I press the back button in the app
    And I press "Test single choice name" in the app
    Then I should not see "Option 1: 0"
    And I should not see "Option 2: 1"
    And I should not see "Option 3: 0"
    And I should see "This Choice has offline data to be synchronised."
    And I switch offline mode to "false"
    And I press the back button in the app
    And I press "Test single choice name" in the app
    And I press "Information" in the app
    And I press "Refresh" in the app
    Then I should see "Option 1: 0"
    And I should see "Option 2: 1"
    And I should see "Option 3: 0"
    And I should not see "This Choice has offline data to be synchronised."

  @app @3.8.0 @OK
  Scenario: Student answers, changes answer offline and auto-sync
    Given the following "activities" exist:
      | activity | name                    | intro                          | course | idnumber | option                       | allowmultiple | allowupdate | showresults |
      | choice   | Test single choice name | Test single choice description | C1     | choice1  | Option 1, Option 2, Option 3 | 0             | 0           | 1           |
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test single choice name" in the app
    And I press "Option 1" in the app
    And I switch offline mode to "true"
    And I press "Option 2" in the app
    And I press "Save my choice" in the app
    And I should see "Are you sure"
    And I press "OK" in the app
    And I switch offline mode to "false"
    Then I should not see "Option 1: 0"
    And I should not see "Option 2: 1"
    And I should not see "Option 3: 0"
    And I should see "This Choice has offline data to be synchronised."
    And I wait "600" seconds
    Then I should see "Option 1: 0"
    And I should see "Option 2: 1"
    And I should see "Option 3: 0"
    And I should not see "This Choice has offline data to be synchronised."

  @app @3.8.0 @OK
  Scenario: Prefetch
    Given the following "activities" exist:
      | activity | name                    | intro                          | course | idnumber | option                       | allowmultiple | allowupdate | showresults |
      | choice   | Test single choice name | Test single choice description | C1     | choice1  | Option 1, Option 2, Option 3 | 0             | 0           | 1           |
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Information" in the app
    And I press "Show download options" in the app
    And I press "cloud download" near "Test single choice name" in the app
    And I switch offline mode to "true"
    And I press "Choice name" in the app
    And I should see "There was a problem connecting to the site. Please check your connection and try again."
    And I press "OK" in the app
    And I press the back button in the app
    And I press "Test single choice name" in the app
    And I press "Option 1" in the app
    And I press "Option 2" in the app
    And I press "Save my choice" in the app
    And I should see "Are you sure"
    And I press "OK" in the app
    And I press the back button in the app
    And I press "Test single choice name" in the app
    And I should not see "Option 1: 0"
    And I should not see "Option 2: 1"
    And I should not see "Option 3: 0"
    And I should see "This Choice has offline data to be synchronised."
    And I switch offline mode to "false"
    And I press the back button in the app
    And I press "Test single choice name" in the app
    Then I should see "Option 1: 0"
    And I should see "Option 2: 1"
    And I should see "Option 3: 0"
    And I should not see "This Choice has offline data to be synchronised."

  @app @3.8.0 @OK
  Scenario: Download students choice in text format
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Choice name" in the app
    And I press "Option 1" in the app
    And I press "Option 2" in the app
    And I press "Save my choice" in the app
    And I should see "Are you sure"
    And I press "OK" in the app
    When I enter the app
    And I log in as "teacher1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Choice name" in the app
    And I press "Information" in the app
    And I press "Open in browser" in the app
    And I switch to the browser tab opened by the app
    And I log in as "teacher1"
    And I press "Actions menu"
    And I follow "View 1 responses"
    And I press "Download in text format"
    And I close the browser tab opened by the app
