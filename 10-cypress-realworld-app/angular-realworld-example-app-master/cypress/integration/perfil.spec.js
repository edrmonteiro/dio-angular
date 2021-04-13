define('Profile', () => {
    it ('Edit PRofile', () => {
        cy.login('eduardo@email.com', '12345678')
        cy.contains('eduardo').click()
        cy.contains('Edit Profile Settings').click()
        cy.get('[formcontrolname="image"]').clear()
        cy.get('[formcontrolname="image"]')
            .type('https://thispersondoesnorexist.com/image')
        cy.get('[formcontrolname="password"').type('12345678')
        cy.contains('Update Settings').click()
    })



    
})

