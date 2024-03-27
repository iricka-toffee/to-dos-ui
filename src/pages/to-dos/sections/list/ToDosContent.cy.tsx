import { ToDo } from "../../../../api-types"
import { ToDosContent } from "./ToDosContent"
import { ToDosState } from "./state/ToDosState"

describe(`ToDosContent`, () => {
  it(`
  GIVEN two ToDos
  WHEN render the component
  SHOULD see them
  `, () => {
    mountComponent()

    cy
      .get<ToDosState>(`@toDosState`)
      .then(toDosState => {
        toDosState.initialize({
          toDos: [
            {
              name: `First ToDo`,
            },
            {
              name: `Second ToDo`,
            },
          ] as ToDo[],
        })
      })

    cy.contains(`First ToDo`)
    cy.contains(`Second ToDo`)
  })
})

function mountComponent() {
  const toDosState = new ToDosState()

  cy
    .wrap(toDosState)
    .as(`toDosState`)

  cy.mount(
    <ToDosStateContext.Provider value={toDosState}>
      <ToDosContent />
    </ToDosStateContext.Provider>,
  )
}
