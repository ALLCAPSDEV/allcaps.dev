describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('Displays the logo', () => {
    cy.get('[data-cy=main-logo]').should("be.visible");
  })
  it('Displays the npm icon', () => {
    cy.get('[data-cy=npm-icon]').should('be.visible')
  })

  it('Displays the Github icon', () => {
    cy.get('[data-cy=github-icon]').should('be.visible')
  })

})
