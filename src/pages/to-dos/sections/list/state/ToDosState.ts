import { makeAutoObservable } from 'mobx'
import { ToDo } from '../../../../../api-types'

export class ToDosState {
  private _toDos: ToDo[] = []
  private _needToReloadToDos: boolean = false
  private _selectedToDoIds: number[] = []

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

  get selectedToDoIds() {
    return this._selectedToDoIds
  }

  get needToReloadToDos() {
    return this._needToReloadToDos
  }

  toggleToDoSelection({
    toDoId,
  }: {
    toDoId: number,
  }) {
    this._selectedToDoIds.push(toDoId)
  }

  triggerToDosReload() {
    this._needToReloadToDos = !this._needToReloadToDos
  }
}
