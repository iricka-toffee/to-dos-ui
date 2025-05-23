import { CreateItemButton } from "./CreateItemButton"
import { CreateItemState } from "../../../create/state/CreateItemState"
import { CreateItemStateContext } from "../../../create/state/CreateItemStateContext"

describe(`CreateItemButton`, () => {
  it(`
  GIVEN selected type in state
  WHEN click Create button
  SHOULD call onClick handler
  `, () => {
    const state = new CreateItemState()
    state.setType(`Laptop`)

    const onClick = cy.stub()
      .as(`onClick`)

    cy.wrap(state)
      .as(`createItemState`)

    cy.mount(
      <CreateItemStateContext.Provider value={state}>
        <CreateItemButton onClick={onClick} />
      </CreateItemStateContext.Provider>,
    )

    cy.get(`[data-cy="create"]`)
      .click()
    cy.get(`@onClick`)
      .should(`have.been.calledOnce`)
  })

  it(`
  GIVEN no type selected
  WHEN render the button
  THEN it should be disabled
  `, () => {
    const state = new CreateItemState()
    const onClick = cy.stub()

    cy.mount(
      <CreateItemStateContext.Provider value={state}>
        <CreateItemButton onClick={onClick} />
      </CreateItemStateContext.Provider>,
    )

    cy.get(`[data-cy="create"]`)
      .should(`be.disabled`)
  })
})
