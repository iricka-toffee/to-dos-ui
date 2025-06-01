import { RequestFormContent } from "./RequestFormContent"
import { RequestFormState } from "./state/RequestFormState"
import { RequestFormStateContext } from "./state/RequestFormStateContext"

describe(`RequestFormContent`, () => {
  it(`
    GIVEN RequestFormContent
    WHEN render
    SHOULD see label and select for type
  `, () => {
    const state = new RequestFormState()
    cy.mount(
      <RequestFormStateContext.Provider value={state}>
        <RequestFormContent />
      </RequestFormStateContext.Provider>
    )
    cy.get('label[for="type"]').should('exist').and('contain.text', 'Тип')
    cy.get('select#type').should('exist').and('be.visible')
  })
})
