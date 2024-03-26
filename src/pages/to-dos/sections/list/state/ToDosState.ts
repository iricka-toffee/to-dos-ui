import { ToDo } from '../../../../../api-types'

export class ToDosState {
  private _toDos: ToDo[] = []

  get toDos() {
    return this._toDos
  }
}
