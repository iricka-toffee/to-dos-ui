import { CreateItemContainer } from "./CreateItemContainer"
import { CreateItemState } from "./state/CreateItemState"
import { CreateItemStateContext } from "./state/CreateItemStateContext"

describe(`CreateItemContainer`, () => {
  describe(`Submission`, submissionTests)
})

function submissionTests() {
  it(`
  GIVEN selected type 'Laptop'
  WHEN click Submit
  SHOULD send a POST request to /items with correct payload
  `, () => {
    // мокаем POST-запрос
    cy.intercept(`POST`, `/items`)
      .as(`createItem`)

    mountComponent()

    // выбираем тип
    cy.get(`select`)
      .select(`Laptop`)

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