describe('Login test', () => {
    it('should login into an application' ,() => {
        cy.visitLoginPage()

        cy.waitForSeconds(2)

        cy.fixture('loginData').then(({username, password}) => {
            cy.login(username, password)    
        })        
    })
})