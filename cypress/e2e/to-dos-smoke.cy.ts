describe(`ToDos Smoke`, () => {
  it(`
  GIVEN ToDos page
  WHEN open it
  SHOULD see some ToDos
  `, () => {
    cy.visit(`/to-dos`)

    cy
      .get(`[data-cy="to-do"]`)
      .should(`have.length.greaterThan`, 0)
  })
})