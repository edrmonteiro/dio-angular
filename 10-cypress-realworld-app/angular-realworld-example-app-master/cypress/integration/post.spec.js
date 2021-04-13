define('Post', () => {
    beforeEach(() => {
        cy.login('eduardo@email.com', '12345678')
    })
    it ('Novo', () => {
        cy.contains('New Article').click()
        cy.location('pathname').should('equal', '/editor')
        cy.get('[formcontrolname=title]').type('Cypress E2E')
        cy.get('[formcontrolname=description]').type('Ponta a Ponta')
        cy.get('[formcontrolname=body]').type('Agilidadde, Qualidade')
        cy.contains('Publish Article').click()
        cy.get('h1').contains('Cypress E2E')
    })
})

