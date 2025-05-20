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

/*
it(`
  GIVEN RequestForm
  WHEN it is mounted
  SHOULD render a select field with id "type"
`, () => {
  cy.mount(<RequestForm />)
  cy.get('select#type').should('exist').and('be.visible')
})
*/

//test 4

/*
it(`
  GIVEN RequestForm
  WHEN it is mounted
  SHOULD render "Monitor" and "Laptop" as select options
`, () => {
  cy.mount(<RequestForm />)

  cy.get('select#type option')
    .should('have.length.at.least', 2)
    .then((options) => {
      const values = [...options].map((o) => o.textContent)
      expect(values).to.include.members(['Monitor', 'Laptop'])
    })
})
*/

//test 5


it(`
  GIVEN RequestForm
  WHEN it is mounted
  SHOULD render number input with label "Максимальная цена"
`, () => {
  cy.mount(<RequestForm />)

  cy.get('label[for="maxPrice"]')
    .should('exist')
    .and('contain.text', 'Максимальная цена')

  cy.get('input#maxPrice')
    .should('exist')
    .and('have.attr', 'type', 'number')
})
