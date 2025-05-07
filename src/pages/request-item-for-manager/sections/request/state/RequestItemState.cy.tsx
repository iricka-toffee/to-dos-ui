import { RequestItemState } from "./RequestItemState"

it(`
  GIVEN initial state of the form
  WHEN ask for max price
  SHOULD return null
  `, () => {
  const requestItemState = new RequestItemState()

  expect(requestItemState.maxPrice).to.eq(null)
})
