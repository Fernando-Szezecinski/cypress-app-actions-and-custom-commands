declare namespace Cypress {
    interface Chainable {

        /**
         * Navigates to the login page of the base application
         */
        visitLoginPage() : Chainable<Element>
         /**
         * Action used for login into our application
         * 
         * @param username - Takes an username or id
         * @param password - Takes an user password
         */
         login(username: string, password: string): Chainable<Element>
    }
}

Cypress.Commands.add('visitLoginPage', () => {
    cy.visit(`${Cypress.env('base_address')}/login.html`)
})

Cypress.Commands.add("login", (username, password) => {
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()
})