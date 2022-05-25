declare namespace Cypress {
    interface Chainable {
        /**
         * Navigates to the home page of our application
         */
        visitHomePage(): Chainable<Element>
        /**
         * Navigates to the login page of our application
         */
        visitLoginPage(): Chainable<Element>
        /**
         * Navigates to the Feedback page of our application
         */
        visitFeedbackPage(): Chainable<Element>

        /**
         * @param seconds - how many seconds should the execution wait
         */
        waitForSeconds(seconds): Chainable<Element>
    }
}

const base_address = Cypress.env('base_address')

Cypress.Commands.add('visitHomePage', () => {
    cy.visit(base_address)
})

Cypress.Commands.add("visitLoginPage", () => {
    cy.visit(`${base_address}/login.html`)
})

Cypress.Commands.add("visitFeedbackPage", () => {
    cy.visit(`${base_address}/feedback.html`)
})

Cypress.Commands.add("waitForSeconds", (seconds) => {
    cy.wait(seconds * 1000)
})