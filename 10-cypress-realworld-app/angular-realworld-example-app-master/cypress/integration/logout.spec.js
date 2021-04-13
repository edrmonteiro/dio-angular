define('Logout', () => {
    it ('Logout via Perfil', () => {
        cy.login('eduardo@email.com', '12345678')
        cy.contains('Settings').click()
        cy.url().should('include', '/settings')
        cy.get('.btn-outline-danger').click()
    })    
})


