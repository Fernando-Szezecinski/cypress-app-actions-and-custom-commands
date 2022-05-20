describe('Demo', () => {
    it('should login into an application' ,() => {
        cy.visitLoginPage()
        cy.login('username', 'password')
    })
})