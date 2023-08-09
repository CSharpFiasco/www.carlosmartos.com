let baseUrl: string;

describe('home page', () => {
    

    beforeEach(() => {
        baseUrl = Cypress.env('base_url');
        cy.visit(baseUrl);
    });

    it('should have a greeting text', () => {
        cy.get('.greeting-text').should('contain.text', 'Carlos');
    });
});
