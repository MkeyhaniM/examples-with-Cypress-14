/// <reference types="cypress" />

describe("N2N", () => {
  it("should visit", () => {
    cy.visit("http://localhost:5174/");
  });
});
