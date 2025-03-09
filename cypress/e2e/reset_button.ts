import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { Form } from "./POM/visitURL";
const form = new Form()

Given("I open the form page", () => {
  form.visitwebPage()
});

When("I fill in the form with some data", () => {
  cy.get("[name='first_name']").type("Aymen");
  cy.get("[name='last_name']").type("Hameed");
  cy.get("[name='email']").type("aymen@example.com");
  cy.get("textarea.feedback-input").type("This is a test message.");
});

When("I click the reset button", () => {
  cy.get("[type='reset']").click();  
});

Then("All fields should be empty", () => {
  cy.get("[name='first_name']").should("have.value", "");
  cy.get("[name='last_name']").should("have.value", "");
  cy.get("[name='email']").should("have.value", "");
  cy.get("textarea.feedback-input").should("have.value", "");
});
