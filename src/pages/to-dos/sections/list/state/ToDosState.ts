import { makeAutoObservable } from 'mobx'
import { ToDo } from '../../../../../api-types'

export class ToDosState {
  private _toDos: ToDo[] = []

  constructor() {
    makeAutoObservable(this)
  }

  initialize({
    toDos,
  }: {
    toDos: ToDo[],
  }) {
    this._toDos = toDos
  }

  get toDos() {
    return this._toDos
  }
}
