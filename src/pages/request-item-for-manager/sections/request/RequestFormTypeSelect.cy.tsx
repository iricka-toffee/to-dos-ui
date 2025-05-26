// filepath: /Users/macbook/Documents/Prog-semestr-task/to-dos-ui/src/pages/request-item-for-manager/sections/request/RequestFormTypeSelect.cy.tsx
import { RequestForm } from './RequestForm'

it(`
  GIVEN RequestForm
  WHEN it is mounted
  SHOULD render a select field with id "type"
`, () => {
  cy.mount(<RequestForm />)
  cy.get('select#type').should('exist').and('be.visible')
})
