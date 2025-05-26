import { RequestFormState } from "./RequestFormState"

describe(`RequestFormState`, () => {
  it(`
    GIVEN state
    WHEN change methods called
    SHOULD update corresponding fields
  `, () => {
    const state = new RequestFormState()

    // maxPrice
    state.changeMaxPrice({ newMaxPrice: 12345 })
    expect(state.maxPrice).to.eq(12345)
    state.changeMaxPrice({ newMaxPrice: null })
    expect(state.maxPrice).to.eq(null)

    // count
    state.changeCount({ newCount: 3 })
    expect(state.count).to.eq(3)
    state.changeCount({ newCount: 1 })
    expect(state.count).to.eq(1)

    // dueDate
    state.changeDueDate({ newDueDate: "2025-06-01" })
    expect(state.dueDate).to.eq("2025-06-01")

    // forWhomEmployeeId
    state.changeForWhomEmployeeId({ newForWhomEmployeeId: 42 })
    expect(state.forWhomEmployeeId).to.eq(42)

    // itemUrl
    state.changeItemUrl({ newItemUrl: "https://example.com/item" })
    expect(state.itemUrl).to.eq("https://example.com/item")

    // shouldIBuyAtItemUrl
    state.changeShouldIBuyAtItemUrl({ newShouldIBuyAtItemUrl: true })
    expect(state.shouldIBuyAtItemUrl).to.eq(true)

    // specification
    state.changeSpecification({ newSpecification: "16GB RAM" })
    expect(state.specification).to.eq("16GB RAM")

    // description
    state.changeDescription({ newDescription: "Для нового сотрудника" })
    expect(state.description).to.eq("Для нового сотрудника")
  })
})
