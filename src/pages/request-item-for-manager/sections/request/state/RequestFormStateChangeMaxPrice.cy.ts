import { RequestFormState } from "./RequestFormState"

describe(`RequestFormState`, () => {
  it(`
    GIVEN state
    WHEN changeMaxPrice called
    SHOULD update maxPrice
  `, () => {
    const state = new RequestFormState()
    state.changeMaxPrice({ newMaxPrice: 12345 })
    expect(state.maxPrice).to.eq(12345)
    state.changeMaxPrice({ newMaxPrice: null })
    expect(state.maxPrice).to.eq(null)
  })
})
