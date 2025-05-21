import { useMemo } from "react"
import { CreateItemState } from "./create/state/CreateItemState"
import { CreateItemStateContext } from "./create/state/CreateItemStateContext"
import { CreateItemContainer } from "./create/CreateItemContainer"

export function CreateItemPage() {
  const createItemState = useMemo(() => new CreateItemState(), [])

  return (
    <CreateItemStateContext.Provider value={createItemState}>
      <CreateItemContainer />
    </CreateItemStateContext.Provider>
  )
}