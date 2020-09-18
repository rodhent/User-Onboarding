const { cyan } = require("color-name");

describe("User onboarding app", () => {
  describe("Inputs and submit button", () => {
    it("can navigate to http://localhost:3000", () => {
      cy.visit("http://localhost:3000/");
      cy.url().should("include", "localhost");
    });

    it("Can display HTML form validation when inputs are improper", () => {
      cy.get("input:invalid").should("have.length", 0);
      cy.get('[type="email"]').type("not_an_email");

      cy.get("input:invalid").should("have.length", 1);
      cy.get('[type="email"]').then(($input) => {
        expect($input[0].validationMessage).to.eq(
          "Please include an '@' in the email address. 'not_an_email' is missing an '@'."
        );
      });
    });

    it("Can put something in the 'Username' input", () => {
      cy.get('input[name="username"]')
        .type("Margaret Nelson")
        .should("have.value", "Margaret Nelson");
    });

    it("Can put something in the 'email' input", () => {
      cy.get('input[name="email"]').type("marg@nelson.com");
    });

    it("Can put something 'password' input", () => {
      cy.get('input[name="password"]').type("1234567");
    });

    it("Can fill out role form", () => {
      cy.get('select[name="role"]').select("Hacker-Beast");
    });

    it("Can check terms of service box", () => {
      cy.get('input[type="checkbox"]').check();
    });

    it("Can submit form", () => {
      cy.get("#submitBtn").click();
    });
  });
});
