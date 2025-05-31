import { useMemo } from "react"
import { RequestItemState } from "./request/state/RequestItemState"
import { RequestItemStateContext } from "./request/state/RequestItemStateContext"
import { RequestItemContainer } from "./request/RequestItemContainer"

export function RequestItemPage() {
  const requestItemState = useMemo(() => new RequestItemState(), [])

  return (
    <RequestItemStateContext.Provider value={requestItemState}>
      <RequestItemContainer />
    </RequestItemStateContext.Provider>
  )
}