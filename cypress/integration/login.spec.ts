describe('Login page', () => {
    it('should login into an application' ,() => {
        cy.visitLoginPage()

        cy.fixture('loginData').then(({username, password}) => {
            cy.login(username, password)    
        })        
    })
})