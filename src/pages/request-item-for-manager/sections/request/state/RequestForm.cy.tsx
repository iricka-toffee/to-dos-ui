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

/*
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
*/

//test 6

/*
it(`
  GIVEN RequestForm
  WHEN it is mounted
  SHOULD render number input with label "Количество"
`, () => {
  cy.mount(<RequestForm />)

  cy.get('label[for="count"]')
    .should('exist')
    .and('contain.text', 'Количество')

  cy.get('input#count')
    .should('exist')
    .and('have.attr', 'type', 'number')
})
*/

//test 7

/*
it(`
  GIVEN RequestForm
  WHEN it is mounted
  SHOULD render a select field with label "Для кого"
`, () => {
  cy.mount(<RequestForm />)

  cy.get('label[for="employee"]')
    .should('exist')
    .and('contain.text', 'Для кого')

  cy.get('select#employee')
    .should('exist')
    .and('be.visible')
})
*/

//test 8

/*
it(`
  GIVEN RequestForm
  WHEN it is mounted
  SHOULD render date input with label "Дедлайн"
`, () => {
  cy.mount(<RequestForm />)

  cy.get('label[for="dueDate"]')
    .should('exist')
    .and('contain.text', 'Дедлайн')

  cy.get('input#dueDate')
    .should('exist')
    .and('have.attr', 'type', 'date')
})
*/

//test 9

/*
it(`
  GIVEN filled form
  WHEN user submits the form
  SHOULD call onSubmit with form values
`, () => {
  const handleSubmit = cy.stub().as('submitHandler')

  cy.mount(<RequestForm onSubmit={handleSubmit} />)

  cy.get('select#type').select('Laptop')

  cy.get('input#maxPrice').type('15000')
  cy.get('input#count').type('3')
  cy.get('select#employee').select('Иван Иванов')
  cy.get('input#dueDate').clear().type('2025-06-01')

  // Подожди перед отправкой — чтобы Cypress успел записать всё
  cy.wait(50)

  cy.get('form').submit()

  cy.get('@submitHandler').should('have.been.calledOnce')
  cy.get('@submitHandler').its('firstCall.args.0').should('deep.equal', {
    type: 'Laptop',
    maxPrice: 15000,
    count: 3,
    employee: 'Иван Иванов',
    dueDate: '2025-06-01',
  })
})
*/

//test 10

/*
it(`
  GIVEN filled form
  WHEN user clicks the submit button
  SHOULD call onSubmit with form values
`, () => {
  const handleSubmit = cy.stub().as('submitHandler')

  cy.mount(<RequestForm onSubmit={handleSubmit} />)

  cy.get('select#type').select('Laptop')
  cy.get('input#maxPrice').clear().type('15000')
  cy.get('input#count').clear().type('3')
  cy.get('select#employee').select('Иван Иванов')
  cy.get('input#dueDate').clear().type('2025-06-01')

  cy.contains('button', 'Отправить').click()

  cy.get('@submitHandler').should('have.been.calledOnce')
  cy.get('@submitHandler').its('firstCall.args.0').should('deep.equal', {
    type: 'Laptop',
    maxPrice: 15000,
    count: 3,
    employee: 'Иван Иванов',
    dueDate: '2025-06-01',
  })
})
*/

//test 11

it(`
  GIVEN filled form
  WHEN user submits it
  SHOULD show confirmation message
`, () => {
  const handleSubmit = cy.stub().as('submitHandler')

  cy.mount(<RequestForm onSubmit={handleSubmit} />)

  cy.get('select#type').select('Laptop')
  cy.get('input#maxPrice').clear().type('15000')
  cy.get('input#count').clear().type('3')
  cy.get('select#employee').select('Иван Иванов')
  cy.get('input#dueDate').clear().type('2025-06-01')

  cy.contains('button', 'Отправить').click()

  cy.contains('Заявка отправлена').should('exist')
})