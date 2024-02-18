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

  it('should have valid links', () => {
    cy.get('a').each(($a) => {
      const href = $a.prop('href');

      cy.request({
        url: href,
        failOnStatusCode: false,
      })
        .its('status')
        .should((status) => {
          expect(status).to.be.oneOf([200, 418, 403]);
        });
    });
  });
});
