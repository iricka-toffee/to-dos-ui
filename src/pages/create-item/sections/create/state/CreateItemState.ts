import { makeAutoObservable } from "mobx"

export class CreateItemState {
  private _type: string = ``

  constructor() {
    makeAutoObservable(this)
  }

  get type() {
    return this._type
  }
}