let baseUrl: string | undefined;

describe('home page', () => {
    

    beforeEach(() => {
        baseUrl = Cypress.env('base_url');
        if(typeof baseUrl !== 'string') throw new Error('base_url is not a string');

        cy.visit(baseUrl);
    });

    it('should have a greeting text', () => {
        cy.get('.greeting-text').should('contain.text', 'Carlos');
    });
});
