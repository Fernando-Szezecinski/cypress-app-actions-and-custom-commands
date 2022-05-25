declare namespace Cypress {
    interface Chainable {

        /**
         * Navigates to the account summary of the current base application
         */
        visitAccountSummaryPage() : Chainable<Element>

        /**
         * Verify that account boards are visible: 'Cash Accounts', 'Investment Accounts', 'Credit Accounts' and 'Loan Accounts'
         */
         ensureAccountsBoardsAreVisible() : Chainable<Element>
    }
}


Cypress.Commands.add('visitAccountSummaryPage', () => {
    cy.visit(`${Cypress.env('base_address')}/bank/account-summary.html`)
})

Cypress.Commands.add("submitFeedback", (name, email, subject, message) => {
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#subject').type(subject)    
    cy.get('#comment').type(message)
    cy.contains('Send Message').click()
})

Cypress.Commands.add('ensureAccountsBoardsAreVisible', () => {
    cy.get('h2.board-header').as('boards')
    cy.get('@boards').should('be.visible')
    cy.get('@boards')
        .should(($h) => {
            expect($h).to.have.length(4)
            expect($h.eq(0)).to.contain('Cash Accounts')
            expect($h.eq(1)).to.contain('Investment Accounts')
            expect($h.eq(2)).to.contain('Credit Accounts')
            expect($h.eq(3)).to.contain('Loan Accounts')
        })
})