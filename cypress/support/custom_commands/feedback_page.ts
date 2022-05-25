declare namespace Cypress {
    interface Chainable {

        /**
         * Navigates to the feedback page of the current base application
         */
        visitFeedbackPage() : Chainable<Element>
        /**
         * Action used for submitting user's feedback
         * @param name - It takes the name of user who's going to submit the feedback
         * @param email - It takes the user's email (no backend validation)
         * @param subject - It takes feedback's subject
         * @param message - It takes the feedback content
         */
        submitFeedback(name: string, email: string, subject: string, message: string)
    }
}


Cypress.Commands.add('visitFeedbackPage', () => {
    cy.visit(`${Cypress.env('base_address')}/feedback.html`)
})

Cypress.Commands.add("submitFeedback", (name, email, subject, message) => {
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#subject').type(subject)    
    cy.get('#comment').type(message)
    cy.contains('Send Message').click()
})