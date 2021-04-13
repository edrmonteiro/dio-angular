define('Tags', () => {
    it ('Adicionar', () => {
        cy.login('eduardo@email.com', '12345678')
        cy.contains('eduardormonteiro').click()
        cy.location('pathname').should('contains', '/profile')
        cy.get('.article-preview').get('h1').first().click()
        cy.contains('Edit Article').click()
        cy.get('[placeholder="Enter tags"]').type('dundeons{enter}')
        cy.get('[placeholder="Enter tags"]').type('dragons{enter}')
        cy.contains('Publish Article').click()
        cy.get('.tag-list').contains('dragons')
    })
})

