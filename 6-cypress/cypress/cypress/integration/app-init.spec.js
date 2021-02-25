describe('App initialization', () => {
  it('Displays todos from API on load', () => {
    cy.server();
    cy.route('GET', '/ToDoModels', 'fixture:todos').as('load');

    cy.visit('/');
    cy.wait('@load');


    cy.seedAndVisit();

    cy.get('.task-wrapper').should('have.length', 4);
  });
});
