declare namespace Cypress {
    interface Chainable {

        /**
         * Navigates to the home page of the base application
         */
        visitHomePage() : Chainable<Element>
    }
}

Cypress.Commands.add("visitHomePage", () => {
    cy.visit(Cypress.env('base_address'))
})