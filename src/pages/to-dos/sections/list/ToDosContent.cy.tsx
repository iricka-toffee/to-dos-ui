import { ToDosContent } from "./ToDosContent"

describe(`ToDosContent`, () => {
  it(`
  GIVEN two ToDos
  WHEN render the component
  SHOULD see them
  `, () => {
    cy.mount(
      <ToDosContent />,
    )

    cy.contains(`First ToDo`)
    cy.contains(`Second ToDo`)
  })
})
