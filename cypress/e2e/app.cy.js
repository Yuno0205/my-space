describe('Navigation', () => {
  it('should navigate to the blogs page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // Find a link with an href attribute containing "blogs" and click it
    cy.get('a[href*="blogs"]').click();

    // The new url should include "/blogs"
    cy.url().should('include', '/blogs');

    // The new page should contain an h1 with "blogs"
    cy.get('h1').contains('blogs');
  });
});
