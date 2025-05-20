import { RequestForm } from './RequestForm'

//test 1

/*
it(`
  GIVEN RequestForm
  WHEN it is mounted
  SHOULD render the component
`, () => {
  cy.mount(<RequestForm />)
  cy.get('form').should('exist')
})
*/

//test 2

/*
it(`
  GIVEN RequestForm
  WHEN it is mounted
  SHOULD render label with text "Тип"
`, () => {
  cy.mount(<RequestForm />)
  cy.get('label[for="type"]').should('exist').and('contain.text', 'Тип')
})
*/

//test 3


it(`
  GIVEN RequestForm
  WHEN it is mounted
  SHOULD render a select field with id "type"
`, () => {
  cy.mount(<RequestForm />)
  cy.get('select#type').should('exist').and('be.visible')
})


