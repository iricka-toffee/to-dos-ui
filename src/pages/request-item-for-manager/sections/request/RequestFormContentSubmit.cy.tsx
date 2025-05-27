import { RequestFormContent } from "./RequestFormContent"
import { RequestFormState } from "./state/RequestFormState"
import { RequestFormStateContext } from "./state/RequestFormStateContext"

describe(`RequestFormContent`, () => {
  it(`
    GIVEN selected type
    WHEN submit form
    SHOULD call onSubmit with current type
  `, () => {
    const state = new RequestFormState()
    const onSubmit = cy.stub().as("onSubmit")
    cy.mount(
      <RequestFormStateContext.Provider value={state}>
        <RequestFormContent onSubmit={onSubmit} />
      </RequestFormStateContext.Provider>
    )
    cy.get('select#type').select('Laptop')
    cy.contains('button', 'Отправить').click()
    cy.get('@onSubmit').should('have.been.calledOnce')
    cy.get('@onSubmit').its('firstCall.args.0').should('deep.equal', {
      type: 'Laptop',
    })
  })
})
