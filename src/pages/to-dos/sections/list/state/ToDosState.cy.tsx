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

  it(`
  GIVEN three ToDos
  WHEN select them one by one
  SHOULD end up in list of selected ids
  `, () => {
    const toDosState = new ToDosState()

    const toDosForInitialization = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
    ] as ToDo[]

    toDosState.initialize({
      toDos: toDosForInitialization,
    })

    expect(toDosState.selectedToDoIds).to.deep.eq([])

    toDosState.toggleToDoSelection({
      toDoId: 2,
    })

    expect(toDosState.selectedToDoIds).to.deep.eq([
      2,
    ])

    toDosState.toggleToDoSelection({
      toDoId: 1,
    })

    toDosState.toggleToDoSelection({
      toDoId: 3,
    })

    expect(toDosState.selectedToDoIds).to.deep.eq([
      2,
      1,
      3,
    ])
  })
})
