import { ToDosState } from "./state/ToDosState"
import { ToDosStateContext } from "./state/ToDosStateContext"

describe(`ToDosContainer`, () => {
  it(`
  GIVEN two ToDos from network
  WHEN render the component
  SHOULD see them
  `, () => {
    cy.intercept(
      `GET`,
      `*/to-dos`,
      {
        toDos: [
          {
            id: 1,
            name: `Un`,
          },
          {
            id: 2,
            name: `Deux`,
          },
        ],
      },
    )

    mountComponent()

    cy.contains(`Deux`)
  })
})

function mountComponent() {
  const toDosState = new ToDosState()

  cy.mount(
    <ToDosStateContext.Provider value={toDosState}>
      <ToDosContainer />
    </ToDosStateContext.Provider>,
  )
}
