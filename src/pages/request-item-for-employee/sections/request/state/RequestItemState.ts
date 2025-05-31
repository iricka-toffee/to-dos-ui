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
    const MaxLenghtDescription = 200;
    if (newDescription.length > MaxLenghtDescription) {
      this._description = newDescription.slice(0, MaxLenghtDescription);
    } else {
      this._description = newDescription;
    }
  }
}