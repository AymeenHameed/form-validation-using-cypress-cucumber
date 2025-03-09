
  export class Form {
    // Method to visit the demo test site
    visitwebPage() {
      cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html', { failOnStatusCode: false }); // Visit the Google website
    }
  }