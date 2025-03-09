Feature: Reset button functionality

  Scenario: Verify that the reset button clears all form fields
    Given I open the form page
    When I fill in the form with some data
    And I click the reset button
    Then All fields should be empty
