describe('Comentários', () => {
    it ('Escrever', () => {
        cy.login('eduardo@email.com', '12345678')
        cy.contains('Global Feed').click()
        cy.get('.preview-link').first().click()
        cy.get('.form-control').type('Sensacional!')
        cy.get('.btn-primary').click()
        cy.contains('Sensacional!')
    })
})
