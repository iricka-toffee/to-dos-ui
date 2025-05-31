import { mount } from 'cypress/react18'
import { RequestItemContent } from './RequestItemContent'
import { RequestItemStateContext } from './state/RequestItemStateContext'
import { RequestItemState } from './state/RequestItemState'

describe('RequestItemContent Component Test', () => {
  let requestItemState: RequestItemState

  beforeEach(() => {
    // Создаем экземпляр состояния
    requestItemState = new RequestItemState()
  })

  it(`
    GIVEN multiline text is set in the input field
    WHEN rendered to preview
    THEN each line should be displayed separately
  `, () => {
    // Задаем многолинейный текст
    requestItemState.changeDescription({
      newDescription: `Первый абзац.
Второй абзац.
Третий абзац.`
    })

    // Монтируем компонент
    mount(
      <RequestItemStateContext.Provider value={requestItemState}>
        <RequestItemContent onSubmitClick={async () => { }} />
      </RequestItemStateContext.Provider>
    )

    // Проверяем, что каждое предложение отображается отдельно
    cy.get('[data-cy=request-item-preview]')
      .contains('Первый абзац.')
      .contains('Второй абзац.')
      .contains('Третий абзац.')

    // Проверяем, что соблюдаются CSS-правила для отображения текста
    cy.get('[data-cy=request-item-preview]')
      .should('have.css', 'word-wrap', 'break-word')
      .and('have.css', 'white-space', 'pre-wrap')
  })
})