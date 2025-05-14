import { CreateItemState } from "./CreateItemState"

it(`
  GIVEN initial state jf the form
  WHEN ask for type
  SHOULD return an empty string
  `, () => {
  const сreateItemState = new CreateItemState()

  expect(сreateItemState.type).to.eq(``)
},
)