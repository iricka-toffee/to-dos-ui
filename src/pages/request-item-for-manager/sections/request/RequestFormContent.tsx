import { useContext } from "react"
import { observer } from "mobx-react-lite"
import { RequestFormStateContext } from "./state/RequestFormStateContext"

export const RequestFormContent = observer(() => {
  const formState = useContext(RequestFormStateContext)

  return (
    <>
      <label htmlFor="type">Тип</label>
      <select id="type" value={formState.type} onChange={() => { }}>
        {/* options will be added later */}
      </select>
    </>
  )
})
