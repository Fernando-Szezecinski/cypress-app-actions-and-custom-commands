declare namespace Cypress {
    interface Chainable {
        /**
         * Submits HTTP request just like login.html page would do
         */
        ensureUserIsLoggedIn() : Chainable<Element>
    }
}



Cypress.Commands.add('ensureUserIsLoggedIn', () => {
    cy.log('called ensureUserIsLoggedIn')
})