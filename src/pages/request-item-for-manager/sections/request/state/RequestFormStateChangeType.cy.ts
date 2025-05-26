import { RequestFormState } from "./RequestFormState"

describe(`RequestFormState`, () => {
  it(`
    GIVEN state
    WHEN changeType called
    SHOULD update type
  `, () => {
    const state = new RequestFormState()
    state.changeType({ newType: "Laptop" })
    expect(state.type).to.eq("Laptop")
    state.changeType({ newType: "Monitor" })
    expect(state.type).to.eq("Monitor")
  })
})
