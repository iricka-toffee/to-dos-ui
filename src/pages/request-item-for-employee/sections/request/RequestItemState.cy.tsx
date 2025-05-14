import { RequestItemState } from "./RequestItemState"

describe(`RequestItemState`, () => {
  it(`
  GIVEN initial state of the form
  WHEN ask for description
  SHOULD return an empty string
  `, () => {
    const requestItemState = new RequestItemState()

    expect(requestItemState.description).to.eq(``)
  })

  it(`
  GIVEN initial state of the form
  WHEN change description to non-empty
  SHOULD can read back the same description
  `, () => {
    const requestItemState = new RequestItemState()

    requestItemState.changeDescription({
      newDescription: `This is a test description`,
    })

    expect(requestItemState.description).to.eq(`This is a test description`)
  })
})
