import { setupClerkTestingToken } from "@clerk/testing/cypress";

describe("Sign-In Flow", () => {
  before(() => {
    setupClerkTestingToken();
  });

  it("should sign in successfully and redirect to the homepage", () => {
    // Visit the sign-in page
    cy.visit("http://localhost:3000/sign-in");

    // Type the email address and press Enter
    cy.get('#identifier-field').type("gabrielhanny234@gmail.com{enter}");

    // Optionally wait for the password field to appear if it's dynamic
    cy.get('#password-field', { timeout: 10000 }).should('be.visible').type("Danny234#");

    // Click the "Continue" button or submit the form
    cy.get('.cl-internal-2iusy0', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Verify the welcome message is visible (adjust text if necessary)
    cy.get("[data-testid='welcome-msg']").should("be.visible").and("contain.text", "Welcome Back, Chris");

  });
});

