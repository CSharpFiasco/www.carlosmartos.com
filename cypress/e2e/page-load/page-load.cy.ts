/// <reference types="cypress" />
let baseUrl: string | undefined;
const exceptionUrls = ['https://ieeexplore.ieee.org/document/7739674', 'https://stackoverflow.com/users/5303894/csharpfiasco'] as const;

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

      if (!href) throw new Error('href is not defined');
      if (exceptionUrls.includes(href)) return;

      cy.request(href).its('status').should('eq', 200);
    });
  });
});
