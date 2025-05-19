import { makeAutoObservable } from "mobx"

export class CreateItemState {
  private _type: string = ``

  constructor() {
    makeAutoObservable(this)
  }

  get type() {
    return this._type
  }

  get availableTypes(): string[] {
    return [
      `Laptop`,
      `DesktopComputer`,
      `Chair`,
      `Monitor`,
      `Keyboard`,
      `Mouse`,
    ]
  }

  setType(value: string) {
    if (this.availableTypes.includes(value)) {
      this._type = value
    }
  }
}