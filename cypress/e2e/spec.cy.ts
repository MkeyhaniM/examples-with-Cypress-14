/// <reference types="cypress" />

describe("Check todo app", () => {
  it("get todo app ", () => {
    cy.visit("http://localhost:5173/");
  });

  it("check elements", () => {
    cy.get("h1").should("contain", "Todo App");
    cy.get("p").should(
      "contain",
      "No tasks available. Start by adding a new task!"
    );
  });

  it("add a task to app", () => {
    cy.get("input[type='text']").type("go to gym");
  });

  it("submit to add task", () => {
    cy.get("button[type='submit']").click();
  });
});
