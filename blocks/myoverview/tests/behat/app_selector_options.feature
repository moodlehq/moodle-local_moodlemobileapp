@block @block_myoverview @app @javascript
Feature: Overview filter selector options
  In order to select by courses
  As a student
  I want to see options to filter the course overview

  Background:
    Given the following "users" exist:
      | username |
      | student1 |
      | student2 |
      | student3 |
      | student4 |
      | student5 |
      | student6 |
    And the following "courses" exist:
      | shortname   | fullname             | startdate        | enddate         |
      | INPROGRESS1 | IN PROGRESS COURSE 1 | ## yesterday ##  | ## tomorrow ##  |
      | INPROGRESS2 | IN PROGRESS COURSE 2 | ## yesterday ##  | ## tomorrow ##  |
      | INPROGRESS3 | IN PROGRESS COURSE 3 | ## yesterday ##  | ## tomorrow ##  |
      | PAST        | PAST COURSE          | ## 2 days ago ## | ## yesterday ## |
      | FUTURE      | FUTURE COURSE        | ## tomorrow ##   | ## 2 days ##    |
    And the following "course enrolments" exist:
      | user     | course      | role    |
      | student1 | INPROGRESS1 | student |
      | student1 | PAST        | student |
      | student1 | FUTURE      | student |
      | student2 | INPROGRESS1 | student |
      | student2 | PAST        | student |
      | student3 | INPROGRESS1 | student |
      | student3 | FUTURE      | student |
      | student4 | PAST        | student |
      | student5 | INPROGRESS1 | student |
      | student5 | PAST        | student |
      | student5 | FUTURE      | student |
      | student6 | INPROGRESS1 | student |
      | student6 | INPROGRESS2 | student |
      | student6 | INPROGRESS3 | student |
      | student6 | PAST        | student |
      | student6 | FUTURE      | student |
    # Disable recent courses so that we're only checking visibility in course overview.
    And the following config values are set as admin:
      | disabledfeatures | CoreBlockDelegate_AddonBlockRecentlyAccessedCourses | tool_mobile |

  Scenario: Student has a past, in progress and future course
    When I enter the app
    And I log in as "student1"
    Then I should see "In progress"
    And I should see "IN PROGRESS COURSE 1"
    And I should not see "PAST COURSE"
    And I should not see "FUTURE COURSE"
    When I press "In progress" in the app
    Then I should see "All"
    And I should see "In progress"
    And I should see "Past"
    And I should see "Future"
    And I should see "Hidden"
    And I should see "Starred"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'All']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Past']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'In progress']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Future']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Hidden']]" "xpath_element" should contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Starred']]" "xpath_element" should contain "item-radio-disabled"

  Scenario: Student has in progress and past course
    When I enter the app
    And I log in as "student2"
    Then I should see "In progress"
    And I should see "IN PROGRESS COURSE 1"
    And I should not see "PAST COURSE"
    When I press "In progress" in the app
    Then the "class" attribute of "//ion-item[*//ion-label[text() = 'All']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Past']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'In progress']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Future']]" "xpath_element" should contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Hidden']]" "xpath_element" should contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Starred']]" "xpath_element" should contain "item-radio-disabled"

  Scenario: Student has in progress and future course
    When I enter the app
    And I log in as "student3"
    Then I should see "In progress"
    And I should see "IN PROGRESS COURSE 1"
    And I should not see "FUTURE COURSE"
    When I press "In progress" in the app
    Then the "class" attribute of "//ion-item[*//ion-label[text() = 'All']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Past']]" "xpath_element" should contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'In progress']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Future']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Hidden']]" "xpath_element" should contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Starred']]" "xpath_element" should contain "item-radio-disabled"

  Scenario: Student has only past course
    When I enter the app
    And I log in as "student4"
    Then I should see "All"
    And I should see "PAST COURSE"
    When I press "All" in the app
    Then the "class" attribute of "//ion-item[*//ion-label[text() = 'All']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Past']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'In progress']]" "xpath_element" should contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Future']]" "xpath_element" should contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Hidden']]" "xpath_element" should contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Starred']]" "xpath_element" should contain "item-radio-disabled"

  Scenario: Student has a past, in progress and future course, but in progress course is hidden
    Given I log in as "student5"
    And I press "Actions for current course IN PROGRESS COURSE 1"
    And I click on "Hide IN PROGRESS COURSE 1 from view" "link"
    When I enter the app
    And I log in as "student5"
    Then I should see "All"
    And I should not see "IN PROGRESS COURSE 1"
    And I should see "PAST COURSE"
    And I should see "FUTURE COURSE"
    When I press "All" in the app
    Then the "class" attribute of "//ion-item[*//ion-label[text() = 'All']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Past']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'In progress']]" "xpath_element" should contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Future']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Hidden']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Starred']]" "xpath_element" should contain "item-radio-disabled"

  Scenario: Student has a past, in progress, future, hidden and starred courses
    Given I log in as "student6"
    And I press "Actions for current course IN PROGRESS COURSE 2"
    And I click on "Hide IN PROGRESS COURSE 2 from view" "link"
    And I press "Actions for current course IN PROGRESS COURSE 3"
    And I click on "Star for IN PROGRESS COURSE 3" "link"
    When I enter the app
    And I log in as "student6"
    Then I should see "In progress"
    And I should see "IN PROGRESS COURSE 1"
    And I should not see "IN PROGRESS COURSE 2"
    And I should see "IN PROGRESS COURSE 3"
    And I should not see "PAST COURSE"
    And I should not see "FUTURE COURSE"
    When I press "In progress" in the app
    Then the "class" attribute of "//ion-item[*//ion-label[text() = 'All']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Past']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'In progress']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Future']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Hidden']]" "xpath_element" should not contain "item-radio-disabled"
    And the "class" attribute of "//ion-item[*//ion-label[text() = 'Starred']]" "xpath_element" should not contain "item-radio-disabled"
