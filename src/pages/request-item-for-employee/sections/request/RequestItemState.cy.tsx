import { RequestItemState } from "./RequestItemState"

it(`
  GIVEN initial state of the form
  WHEN ask for description
  SHOULD return an empty string
  `, () => {
  const requestItemState = new RequestItemState()

  expect(requestItemState.description).to.eq(``)
})
