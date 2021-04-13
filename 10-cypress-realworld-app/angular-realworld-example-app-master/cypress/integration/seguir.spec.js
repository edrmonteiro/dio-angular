describe('Seguir', () => {
    it ('Seguir Usuário', () => {
        const user = 'user' + (new Date()).getTime()
        const pass = 'pass' + (new Date()).getTime()
        cy.visit('/register', { timeout: 10000})
        cy.get('[formcontrolname=username]').type(user)
        cy.get('[formcontrolname=email]').type(user + '@email.com')
        cy.get('[formcontrolname=password]').type(pass)
        cy.get('.btn').click()
        cy.wait(10000)
        cy.visit('/profile/testecypress')
        cy.contains('Follow').click()
    })
})
