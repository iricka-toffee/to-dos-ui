import { RequestFormState } from "./RequestFormState"

describe(`RequestFormState`, () => {
  it(`
    GIVEN initial state
    WHEN create
    SHOULD have default values
  `, () => {
    const state = new RequestFormState()
    expect(state.type).to.eq(``)
    expect(state.maxPrice).to.eq(null)
    expect(state.dueDate).to.eq(null)
    expect(state.forWhomEmployeeId).to.eq(null)
    expect(state.count).to.eq(1)
    expect(state.itemUrl).to.eq(``)
    expect(state.shouldIBuyAtItemUrl).to.eq(null)
    expect(state.specification).to.eq(``)
    expect(state.description).to.eq(``)
  })
})
