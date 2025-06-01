import { RequestForm } from './RequestForm'

it(`
  GIVEN RequestForm
  WHEN it is mounted
  SHOULD render the component
`, () => {
  cy.mount(<RequestForm />)
  cy.get('form').should('exist')
})
