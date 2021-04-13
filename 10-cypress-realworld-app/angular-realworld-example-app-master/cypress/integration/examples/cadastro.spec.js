define('Cadastro', () => {
    const user = 'user' + (new Date()).getTime()
    const pass = 'pass' + (new Date()).getTime()
    it ('Sucesso', () => {

        //cypress recorder extension
        // cy.visit('http://localhost:4200/');
        // cy.get('.home-page').click();
        // cy.get('.navbar-nav > .nav-item:nth-child(3) > .nav-link').click();
        // cy.get('.form-group:nth-child(1) > .form-control').click();
        // cy.get('.form-group:nth-child(1) > .form-control').type(user);
        // cy.get('').click();
        // cy.get('').type(user + '@email.com');
        // cy.get('.form-group:nth-child(3) > .form-control').type(pass);
        // cy.get('.btn').click();
        // cy.get('.ng-dirty:nth-child(4)').submit();
        //find the reference by the name
        cy.visit('http://localhost:4200/register')
        cy.get('[formcontrolname=username]').type(user)
        cy.get('[formcontrolname=email]').type(user + '@email.com')
        cy.get('[formcontrolname=password]').type(pass)
        cy.get('.btn').click()
        cy.get('.ng-dirty:nth-child(4)').submit()
        cy.location('pathname').should ('equal', '/register')
        cy.get('.error-messages > li:nth-child(1)')
            .should('not.be.empty')

    })
})


