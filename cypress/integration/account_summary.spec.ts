describe('Account summary page', () => {

    beforeEach(() => {
        cy.ensureUserIsLoggedIn()
    })

    it.only('should contain something', () => {
        
        cy.visitLoginPage()

        // cy.intercept('POST','**/signin.html').as('loggedIn')
        
        cy.fixture('loginData').then(({username, password}) => {
            cy.login(username, password)    
        }) 

        // cy.wait('@loggedIn').wrap(($resp) => {
        //     console.log($resp)
        // })

        cy.visitAccountSummaryPage()
        cy.ensureAccountsBoardsAreVisible()
    })
})