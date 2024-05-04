import { ToDo } from "../../../../api-types"
import { ToDosContent } from "./ToDosContent"
import { ToDosState } from "./state/ToDosState"
import { ToDosStateContext } from "./state/ToDosStateContext"

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

  it(`
  GIVEN two ToDos
  WHEN click on the 2nd of them
  SHOULD add its id to the list of selected ids
  `, () => {
    mountComponent()

    cy
      .get<ToDosState>(`@toDosState`)
      .then(toDosState => {
        toDosState.initialize({
          toDos: [
            {
              id: 5,
              name: `Fifth`,
            },
            {
              id: 6,
              name: `Sixth`,
            },
          ] as ToDo[],
        })
      })

    cy
      .get(`[data-cy="to-do"]`)
      .contains(`Sixth`)
      .click()

    cy
      .get<ToDosState>(`@toDosState`)
      .should((toDosState) => {
        expect(toDosState.selectedToDoIds).to.contains(6)
      })
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
