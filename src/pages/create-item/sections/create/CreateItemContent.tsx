import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { CreateItemStateContext } from "./state/CreateItemStateContext"

export const CreateItemContent = observer(() => {
  const state = useContext(CreateItemStateContext)

  if (!state) {
    return <div>Loading...</div>
  }

  return (
    <form>
      <label htmlFor="type">Type:</label>
      <select
        id="type"
        value={state.type}
        onChange={(e) => state.setType(e.target.value)}
      >
        <option value=""
          disabled>Select a type</option>
        {state.availableTypes.map((type) => (
          <option key={type}
            value={type}>
            {type}
          </option>
        ))}
      </select>
    </form>
  )
})