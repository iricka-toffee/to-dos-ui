import { makeAutoObservable } from "mobx"

export class RequestFormState {
  _type = ``
  _maxPrice: number | null = null
  _dueDate: string | null = null
  _forWhomEmployeeId: number | null = null
  _count = 1
  _itemUrl = ``
  _shouldIBuyAtItemUrl: boolean | null = null
  _specification = ``
  _description = ``

  constructor() {
    makeAutoObservable(this)
  }

  get type() { return this._type }
  get maxPrice() { return this._maxPrice }
  get dueDate() { return this._dueDate }
  get forWhomEmployeeId() { return this._forWhomEmployeeId }
  get count() { return this._count }
  get itemUrl() { return this._itemUrl }
  get shouldIBuyAtItemUrl() { return this._shouldIBuyAtItemUrl }
  get specification() { return this._specification }
  get description() { return this._description }

  changeType({ newType }: { newType: string }) {
    this._type = newType
  }

  changeMaxPrice({ newMaxPrice }: { newMaxPrice: number | null }) {
    this._maxPrice = newMaxPrice
  }

  changeCount({ newCount }: { newCount: number }) {
    this._count = newCount
  }

  changeDueDate({ newDueDate }: { newDueDate: string | null }) {
    this._dueDate = newDueDate
  }

  changeForWhomEmployeeId({ newForWhomEmployeeId }: { newForWhomEmployeeId: number | null }) {
    this._forWhomEmployeeId = newForWhomEmployeeId
  }

  changeItemUrl({ newItemUrl }: { newItemUrl: string }) {
    this._itemUrl = newItemUrl
  }

  changeShouldIBuyAtItemUrl({ newShouldIBuyAtItemUrl }: { newShouldIBuyAtItemUrl: boolean | null }) {
    this._shouldIBuyAtItemUrl = newShouldIBuyAtItemUrl
  }

  changeSpecification({ newSpecification }: { newSpecification: string }) {
    this._specification = newSpecification
  }

  changeDescription({ newDescription }: { newDescription: string }) {
    this._description = newDescription
  }
}
