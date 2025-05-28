import { useMemo } from "react"
import { observer } from "mobx-react-lite"
import { RequestFormState } from "./state/RequestFormState"
import { RequestFormStateContext } from "./state/RequestFormStateContext"
import { RequestFormContent } from "./RequestFormContent"

export const RequestFormContainer = observer(() => {
  const formState = useMemo(() => new RequestFormState(), [])

  function handleSubmit(values: { type: string }) {
    // Здесь пока просто выводим значения, позже будет API
    alert(`Заявка: ${JSON.stringify(values)}`)
  }

  return (
    <RequestFormStateContext.Provider value={formState}>
      <RequestFormContent onSubmit={handleSubmit} />
    </RequestFormStateContext.Provider>
  )
})
