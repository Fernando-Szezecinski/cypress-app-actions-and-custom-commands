describe('Feedback test', () => {
    it('Should submit feedback form', () => {
        cy.visitFeedbackPage()
        cy.submitFeedback('Peter', 'peter@test.com', 'My feedback', 'This is my awesome feedback')
    })
})