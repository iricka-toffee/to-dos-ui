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

  it(`
  GIVEN ToDos page
  WHEN add a new ToDo
  SHOULD see it in the list
  `, () => {
    cy.visit(`/to-dos`)

    const newToDoName = `[E2E-SMOKE] ${new Date()}`

    cy
      .get(`[data-cy="new-to-do-name-input"]`)
      .type(newToDoName)

    cy
      .get(`[data-cy="add-new-to-do-button"]`)
      .click()

    cy
      .get(`[data-cy="to-dos"]`)
      .contains(newToDoName)
  })
})
