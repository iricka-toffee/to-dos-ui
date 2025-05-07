import { makeAutoObservable } from 'mobx'

export class RequestItemState {
  private _maxPrice: null | number = null

  constructor() {
    makeAutoObservable(this)
  }

  get maxPrice() {
    return this._maxPrice
  }
}