import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { Form } from "./POM/visitURL";
const form = new Form()

Given("I open the form page", () => {
  form.visitwebPage()
});
When("I fill in the contact form with valid data", () => {
  cy.get("[name='first_name']").type("Aymen");
  cy.get("[name='last_name']").type("Hameed");
  cy.get("[name='email']").type("aymen@example.com");
  cy.get("textarea.feedback-input").type("This is a test message.");
});

When("I submit the form", () => {
  cy.get("[type='submit']").click();
});

Then("I should see a success message", () => {
  cy.contains("Thank You for your Message!").should("be.visible");
});

//Scenerio 2
When("I try to submit the form without filling required fields", () => {
  cy.get("[type='submit']").click();
});

Then("I should see an error message", () => {
  cy.contains("Error: all fields are required").should("be.visible");
});

//Scenerio 3
When("I enter an invalid email format", () => {
  cy.get("[name='email']").type("invalid-email");
  cy.get("[type='submit']").click();
});

Then("I should see an invalid email error", () => {
  cy.contains("Error: Invalid email address").should("be.visible");
 // cy.get("body").should("contain.text", "Error: Invalid email address");
});

//Scenerio 4 
When ("I enter the numbers and special symbols in name",() =>{
  cy.get("[name='first_name']").type("123./");
  cy.get("[name='last_name']").type("123.///");
  cy.get("[name='email']").type("aymen@example.com");
  cy.get("textarea.feedback-input").type("This is a test message.");
  cy.get("[type='submit']").click();
})
Then("I should see an invalid name error", () => {
  cy.contains("Error: Invalid name format").should("be.visible");
})