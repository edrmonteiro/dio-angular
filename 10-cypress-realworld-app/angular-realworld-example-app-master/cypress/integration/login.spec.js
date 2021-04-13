define('Conclude login', () => {
    const user = 'user' + (new Date()).getTime()
    const pass = 'pass' + (new Date()).getTime()
    it ('Sucesso', () => {
        cy.login('eduardo@email.com', '12345678')
        cy.get('.nav-item:nth-child(4) > .nav-link').click()
        cy.get('.btn:nth-child(5)').click()
        cy.url().should('contain', '/settings')
    })



    
})


