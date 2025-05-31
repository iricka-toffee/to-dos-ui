import { RequestItemPage } from "./RequestItemPage"

describe(`CreateItemPage`, () => {
  it(`
  GIVEN the page is loaded
  WHEN rendered
  SHOULD render CreateItemContainer and pass the state via context
  `, () => {
    cy.mount(<RequestItemPage />)
      .should("exist")
  })
})