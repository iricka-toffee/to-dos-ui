import { ToDosResponse } from "../../../../api-types"
import { ToDosContainer } from "./ToDosContainer"
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

  it(`
  GIVEN two ToDos from network
  WHEN select both of them
  AND click Complete
  SHOULD make complete network call with the ids in the body
  `, () => {
    const toDosResponse: ToDosResponse = {
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
    }

    cy.intercept(
      `GET`,
      `*/to-dos`,
      toDosResponse,
    )

    cy
      .intercept(
        `POST`,
        `*/to-dos/complete`,
        `true`, // because it needs this to be specified and to be string, even if it is not correct by the API contract
      )
      .as(`completeToDosNetworkCall`)

    mountComponent()

    cy
      .contains(`Un`)
      .click()

    cy
      .contains(`Deux`)
      .click()

    cy.get(`[data-cy=complete-selected-to-dos-button]`)
      .click()

    cy.get(`@completeToDosNetworkCall`)
      .its(`request.body`)
      .should(`deep.equal`, {
        toDoIds: [
          1,
          2,
        ],
      })
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
