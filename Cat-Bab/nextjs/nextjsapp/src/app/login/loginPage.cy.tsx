describe('Login Component', () => {
  it('should navigate to details page on button click', () => {
    // Visit the page where your Login component is rendered
    cy.visit('Cat-Bab\nextjs\nextjsapp\src\app\login\page.tsx'); // Adjust the path based on where the Login component is rendered

    // Find the button and click it
    cy.get('button')
      .contains('Details page')
      .click();

    // Verify the URL has changed
    cy.url().should('include', '/details/345');
  });
});
