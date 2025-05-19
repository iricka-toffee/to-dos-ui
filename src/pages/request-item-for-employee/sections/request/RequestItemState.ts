import { makeAutoObservable } from 'mobx'

export class RequestItemState {
  private _description: string = ``

  constructor() {
    makeAutoObservable(this)
  }

  get description() {
    return this._description
  }

  changeDescription({
    newDescription,
  }: {
    newDescription: string,
  }) {
    this._description = newDescription
  }
}
