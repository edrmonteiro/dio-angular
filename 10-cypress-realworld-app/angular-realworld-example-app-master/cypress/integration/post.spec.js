define('Post', () => {
    beforeEach(() => {
        cy.login('eduardo@email.com', '12345678')
    })
    it ('Novo', () => {
        const tit = 'Cypress E2E'
        cy.contains('New Article').click()
        cy.location('pathname').should('equal', '/editor')
        cy.get('[formcontrolname=title]').type(tit)
        cy.get('[formcontrolname=description]').type('Ponta a Ponta')
        cy.get('[formcontrolname=body]').type('Agilidadde, Qualidade')
        cy.contains('Publish Article').click()
        cy.get('h1').contains(tit)
    })
})

