describe('Homepage', () => {
  it('Displays the logo', () => {
    cy.visit('/')
    cy.get('svg').should("be.visible");
  })
})
