/// <reference types="cypress" />
let baseUrl: string | undefined;

describe('home page', () => {
  beforeEach(() => {
    baseUrl = Cypress.env('base_url');
    if (typeof baseUrl !== 'string') throw new Error('base_url is not a string');

    cy.visit(baseUrl);
  });

  it('should have expected elements', () => {
    cy.get('#greeting').should('contain.text', 'Carlos');
  });

  it('should link to resume', () => {
    cy.get('#resume-download-button')
      .should('be.visible')
      .should('have.attr', 'target', '_blank')
      .should(($a) => {
        expect($a.attr('href')).contains('pdf');
      })
      .click();
  });
});
