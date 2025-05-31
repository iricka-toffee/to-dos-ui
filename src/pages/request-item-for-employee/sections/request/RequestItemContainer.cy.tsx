import * as apiModule from '../../../../common/utils/HttpClient'

// Мокаем api.post **до** импорта компонента
before(() => {
  (cy.stub(apiModule.api, 'post').resolves({ status: 200 }) as unknown as Cypress.Chainable).as('postStub')
})

import { mount } from 'cypress/react18'
import { RequestItemContainer } from './RequestItemContainer'
import { RequestItemStateContext } from './state/RequestItemStateContext'
import { RequestItemState } from './state/RequestItemState'

describe('RequestItemContainer Component Test without cy.visit', () => {
  it(`
    GIVEN user types a description
    WHEN clicks Submit
    SHOULD call api.post with the correct payload
  `, () => {
    const requestItemState = new RequestItemState()

    mount(
      <RequestItemStateContext.Provider value={requestItemState}>
        <RequestItemContainer />
      </RequestItemStateContext.Provider>
    )

    cy.get('[data-cy=request-item-input]').type('Тестовое описание')
    cy.get('[data-cy=submit-button]').click()

    cy.get('@postStub').should('have.been.calledOnceWithExactly', '/request-item-page-for-employee', {
      description: 'Тестовое описание',
    })
  })
})