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
it(`
  GIVEN initial state of the form
  WHEN change description multiple times
  SHOULD keep the last value
`, () => {
  const requestItemState = new RequestItemState()
  requestItemState.changeDescription({
    newDescription: `First Desc`,
  })
  requestItemState.changeDescription({
    newDescription: `Second Desc`,
  })
  expect(requestItemState.description).to.equal(`Second Desc`)
})

it(`
  GIVEN initial state of the form
  WHEN change description multiple times
  SHOULD keep the last value
`, () => {
  const requestItemState = new RequestItemState()
  requestItemState.changeDescription({
    newDescription: `First Desc`,
  })
  requestItemState.changeDescription({
    newDescription: `Second Desc`,
  })
  expect(requestItemState.description).to.equal(`Second Desc`)
})

it(`
    GIVEN initial state of the form
    WHEN change description to empty string 
    SHOULD correctly handle
`, () => {
  const requestItemState = new RequestItemState()
  requestItemState.changeDescription({
    newDescription: ``,
  })
  expect(requestItemState.description).to.equal(``)
})

it(`
  GIVEN a very long description 
  WHEN it is set
  SHOULD trim or reject if longer than max allowed
`, () => {//ограничение по тексту
  const requestItemState = new RequestItemState()
  const longText = "a".repeat(300)// генерится 300 "а"
  requestItemState.changeDescription({
    newDescription: longText
  })

  expect(requestItemState.description.length).to.be.at.most(200)//проверка, что текста в дескрипшене не должно быть больше или равно 200
})
