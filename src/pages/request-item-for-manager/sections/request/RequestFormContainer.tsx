import { useMemo, useState } from "react"
import { observer } from "mobx-react-lite"
import { RequestFormState } from "./state/RequestFormState"
import { RequestFormStateContext } from "./state/RequestFormStateContext"
import { RequestFormContent } from "./RequestFormContent"

export const RequestFormContainer = observer(() => {
  const formState = useMemo(() => new RequestFormState(), [])
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  async function handleSubmit(values: { type: string }) {
    setSuccessMessage(null)
    const res = await fetch("/api/request-item/requests/for-manager", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    if (res.ok) {
      const data = await res.json()
      setSuccessMessage(data.message)
    }
  }

  return (
    <RequestFormStateContext.Provider value={formState}>
      <RequestFormContent onSubmit={handleSubmit} />
      {successMessage && <div>{successMessage}</div>}
    </RequestFormStateContext.Provider>
  )
})

export default RequestFormContainer
