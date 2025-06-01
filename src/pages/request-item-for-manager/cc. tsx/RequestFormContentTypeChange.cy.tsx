import { RequestFormContent } from "./RequestFormContent"
import { RequestFormState } from "./state/RequestFormState"
import { RequestFormStateContext } from "./state/RequestFormStateContext"

describe(`RequestFormContent`, () => {
  it(`
    GIVEN RequestFormContent
    WHEN select type changed
    SHOULD update mobx state
  `, () => {
    const state = new RequestFormState()
    cy.mount(
      <RequestFormStateContext.Provider value={state}>
        <RequestFormContent />
      </RequestFormStateContext.Provider>
    )
    cy.get('select#type').select('Laptop')
    cy.wrap(state).its('type').should('eq', 'Laptop')
    cy.get('select#type').select('Monitor')
    cy.wrap(state).its('type').should('eq', 'Monitor')
  })
})
