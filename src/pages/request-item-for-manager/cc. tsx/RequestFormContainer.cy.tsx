import { RequestFormContainer } from "./RequestFormContainer"

describe(`RequestFormContainer`, () => {
  it(`
    GIVEN RequestFormContainer
    WHEN render
    SHOULD see RequestFormContent
  `, () => {
    cy.mount(<RequestFormContainer />)
    cy.get('label[for="type"]').should('exist')
    cy.get('select#type').should('exist')
  })
})
