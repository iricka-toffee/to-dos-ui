import { CreateItemContainer } from "./CreateItemContainer"
import { CreateItemState } from "./state/CreateItemState"
import { CreateItemStateContext } from "./state/CreateItemStateContext"

describe(`CreateItemContainer`, () => {
  describe(`Submission`, submissionTests)
})

function submissionTests() {
  it(`
  GIVEN selected type 'Laptop'
  WHEN click Create button
  SHOULD send a POST request to /items with correct payload
  `, () => {
    cy.intercept(`POST`, `/items`)
      .as(`createItem`)

    mountComponent()

    cy.get(`select`)
      .select(`Laptop`)
    cy.get(`[data-cy="create"]`)
      .click()

    cy.wait(`@createItem`)
      .its(`request.body`)
      .should(`deep.equal`, {
        type: `Laptop`,
      })
  })
}

function mountComponent() {
  const state = new CreateItemState()

  cy.wrap(state)
    .as(`createItemState`)

  cy.mount(
    <CreateItemStateContext.Provider value={state}>
      <CreateItemContainer />
    </CreateItemStateContext.Provider>,
  )
}