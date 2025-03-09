
    Feature: Web form testing
    
      To validate the contact form is working fine
         
         Scenario: Successful form submission
       Given I open the form page
       When I fill in the contact form with valid data
       And I submit the form
       Then I should see a success message 
    
          Scenario: Form submission with missing required fields
        Given I open the form page
        When I try to submit the form without filling required fields
        Then I should see an error message

          Scenario: Invalid email format check
        Given I open the form page
        When I enter an invalid email format
        Then I should see an invalid email error
        
#   Scenario 4 is failed because the website doesn't contain checks on name. This should be reported
          Scenario: Verify Invalid name input
        Given I open the form page
        When I enter the numbers and special symbols in name
        Then I should see an invalid name error

        