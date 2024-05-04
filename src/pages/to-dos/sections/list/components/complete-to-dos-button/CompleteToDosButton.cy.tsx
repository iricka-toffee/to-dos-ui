import { ToDo } from "../../../../../../api-types"
import { ToDosState } from "../../state/ToDosState"
import { ToDosStateContext } from "../../state/ToDosStateContext"
import { CompleteToDosButton } from "./CompleteToDosButton"

describe(`CompleteToDosButton`, () => {
  describe(`Initialization`, initializationTests)
})

function initializationTests() {
  it(`
  GIVEN no ToDos
  WHEN render the component
  SHOULD see the disabled button
  `, () => {
    mountComponent({
      toDosForInitialization: [],
    })

    cy
      .get(`[data-cy=complete-selected-to-dos-button]`)
      .should(`be.disabled`)
  })
}

function mountComponent({
  toDosForInitialization,
}: {
  toDosForInitialization: unknown[],
}) {
  const toDosState = new ToDosState()
  
  toDosState.initialize({
    toDos: toDosForInitialization as ToDo[],
  })

  cy
    .wrap(toDosState)
    .as(`toDosState`)

  cy.mount(
    <ToDosStateContext.Provider value={toDosState}>
      <CompleteToDosButton
        onClick={() => {}}
      />
    </ToDosStateContext.Provider>,
  )
}
