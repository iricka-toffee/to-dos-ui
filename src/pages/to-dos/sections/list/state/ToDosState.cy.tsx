describe(`ToDosState`, () => {
  it(`
  GIVEN initial state with no ToDos
  WHEN ask for them
  SHOULD return an empty array
  `, () => {
    const toDosState = new ToDosState()

    expect(toDosState.toDos).to.deep.eq([])
  })
})
