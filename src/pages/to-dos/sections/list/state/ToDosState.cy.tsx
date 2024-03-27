import { ToDo } from "../../../../../api-types"
import { ToDosState } from "./ToDosState"

describe(`ToDosState`, () => {
  it(`
  GIVEN initial state with no ToDos
  WHEN ask for them
  SHOULD return an empty array
  `, () => {
    const toDosState = new ToDosState()

    expect(toDosState.toDos).to.deep.eq([])
  })

  it(`
  GIVEN initial state with no ToDos
  WHEN initialize it with two ToDos
  SHOULD return them from toDos
  `, () => {
    const toDosState = new ToDosState()

    const toDosForInitialization = [
      {
        name: `First Fizz`,
      },
      {
        name: `Second Buzz`,
      },
    ] as ToDo[]

    toDosState.initialize({
      toDos: toDosForInitialization,
    })

    expect(toDosState.toDos).to.deep.eq(toDosForInitialization)
  })
})
