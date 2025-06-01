import { RequestFormContainer } from "./RequestFormContainer"

describe(`RequestFormContainer`, () => {
  it(`
    GIVEN RequestFormContainer
    WHEN select type and submit
    SHOULD show alert with correct values
  `, () => {
    cy.window().then(win => cy.stub(win, "alert").as("alert"))
    cy.mount(<RequestFormContainer />)
    cy.get('select#type').select('Monitor')
    cy.contains('button', 'Отправить').click()
    cy.get('@alert').should('have.been.calledOnce')
    cy.get('@alert').should('have.been.calledWith', JSON.stringify({ type: "Monitor" }).replace(/^/, "Заявка: "))
  })
})
