import { RequestForm } from './RequestForm'

describe('RequestForm - создание заявки Laptop', () => {
  it('должен отправлять POST-запрос и показывать сообщение об успехе', () => {
    cy.intercept('POST', '/api/inventory-api/requests/for-employee', {
      statusCode: 200,
      body: {
        newRequestId: 123,
        message: 'success',
      },
    }).as('createRequest')

    cy.mount(<RequestForm />)
    cy.get('select[name="type"]').select('Laptop')
    cy.get('form').submit()

    cy.wait('@createRequest').its('request.body').should('deep.equal', { type: 'Laptop' })
    cy.contains('success').should('be.visible')
  })
})
