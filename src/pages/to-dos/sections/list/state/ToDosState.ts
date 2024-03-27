import { makeAutoObservable } from 'mobx'
import { ToDo } from '../../../../../api-types'

export class ToDosState {
  private _toDos: ToDo[] = []
  private _needToReloadToDos: boolean = false

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

  get needToReloadToDos() {
    return this._needToReloadToDos
  }

  triggerToDosReload() {
    this._needToReloadToDos = !this._needToReloadToDos
  }
}
