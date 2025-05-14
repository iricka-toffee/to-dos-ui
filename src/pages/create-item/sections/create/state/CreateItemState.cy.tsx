import { CreateItemState } from "./CreateItemState"

it(`
  GIVEN initial state jf the form
  WHEN ask for type
  SHOULD return an empty string
  `, () => {
  const сreateItemState = new CreateItemState()

  expect(сreateItemState.type).to.eq(``)
},
)it(`  GIVEN initial state of the form  WHEN ask for available types  SHOULD return fixed array ['Laptop', 'PC', 'Mouse']`, () => {  const createItemState = new CreateItemState()  expect(createItemState.availableTypes).to.deep.equal([    `Laptop`,    `PC`,    `Mouse`,  ])})