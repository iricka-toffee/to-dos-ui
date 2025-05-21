import { CreateItemPage } from "./CreateItemPage"

describe(`CreateItemPage`, () => {
  it(`
  GIVEN the page is loaded
  WHEN rendered
  SHOULD render CreateItemContainer and pass the state via context
  `, () => {
    cy.mount(<CreateItemPage />)

    cy.get(`select`)
      .should(`exist`)
  })
})
