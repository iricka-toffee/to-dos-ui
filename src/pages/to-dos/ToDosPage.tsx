import { useMemo } from "react"
import { ToDosContainer } from "./sections/list/ToDosContainer"
import { ToDosState } from "./sections/list/state/ToDosState"
import { ToDosStateContext } from "./sections/list/state/ToDosStateContext"

export function ToDosPage() {
  const toDosState = useMemo(
    () => new ToDosState(),
    [],
  )

  return (
    <ToDosStateContext.Provider value={toDosState}>
      <ToDosContainer />
    </ToDosStateContext.Provider>
  )
}
