import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { CreateItemStateContext } from "./state/CreateItemStateContext"

type CreateItemContent = {
  onSubmitClick: () => Promise<void>,
}

export const CreateItemContent = observer(({
  onSubmitClick,
}: CreateItemContent) => {
  const state = useContext(CreateItemStateContext)

  const handleChange = (value: string) => {
    state.setType(value)
    onSubmitClick()
  }

  return (
    <div>
      <label htmlFor="type">Type:</label>
      <select
        id="type"
        value={state.type}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option
          value=""
          disabled
        >
          Select a type
        </option>
        {
          state
            .availableTypes
            .map((type) => (
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            ))
        }
      </select>
    </div>
  )
})
