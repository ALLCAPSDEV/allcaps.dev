describe('Homepage', () => {
  it('Displays the logo', () => {
    cy.visit('/');
    cy.get('[data-cy=main-logo]').should("be.visible");
  })
})
