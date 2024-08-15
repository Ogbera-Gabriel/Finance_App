import { setupClerkTestingToken } from "@clerk/testing/cypress";

it("sign up", () => {
  setupClerkTestingToken()

  cy.visit("/sign-up")
  
})