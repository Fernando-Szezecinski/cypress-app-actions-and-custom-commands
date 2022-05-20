declare namespace Cypress {
    interface Chainable {
        /**
         * Action used for login into our application
         * 
         * @param username - Takes an username or id
         * @param password - Takes an user password
         */
        login(username: string, password: string): Chainable<Element>
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


Cypress.Commands.add("login", (username, password) => {
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()
})

Cypress.Commands.add("submitFeedback", (name, email, subject, message) => {
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#subject').type(subject)    
    cy.get('#comment').type(message)
    cy.contains('Send Message').click()
})