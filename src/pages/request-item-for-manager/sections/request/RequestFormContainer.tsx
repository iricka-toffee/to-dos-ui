import { useMemo } from "react"
import { observer } from "mobx-react-lite"
import { RequestFormState } from "./state/RequestFormState"
import { RequestFormStateContext } from "./state/RequestFormStateContext"
import { RequestFormContent } from "./RequestFormContent"

export const RequestFormContainer = observer(() => {
  const formState = useMemo(() => new RequestFormState(), [])

  return (
    <RequestFormStateContext.Provider value={formState}>
      <RequestFormContent />
    </RequestFormStateContext.Provider>
  )
})
