import { CreateItemContent } from "./CreateItemContent"
import { CreateItemState } from "./state/CreateItemState"
import { CreateItemStateContext } from "./state/CreateItemStateContext"

describe(`CreateItemContent`, () => {
  describe(`Initialization`, initializationTests)

})

function initializationTests() {
  it(`
  GIVEN initial CreateItemState
  WHEN render the component
  SHOULD show a dropdown with available types
  `, () => {
    mountComponent()

    cy.get(`select`)
      .should(`exist`)

    cy.get(`option`)
      .then((options) => {
        const optionValues = [
          ...options,
        ].map((o) => o.text)
        expect(optionValues).to.include.members([
          `Laptop`,
          `DesktopComputer`,
          `Chair`,
          `Monitor`,
          `Keyboard`,
          `Mouse`,
        ])
      })
  })
}

function mountComponent({
  onSubmitClick = () => Promise.resolve(),
}: {
  onSubmitClick?: () => Promise<void>,
} = {}) {
  const state = new CreateItemState()

  cy.wrap(state)
    .as(`createItemState`)

  cy.mount(
    <CreateItemStateContext.Provider value={state}>
      <CreateItemContent onSubmitClick={onSubmitClick} />
    </CreateItemStateContext.Provider>,
  )
}
