import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { CreateItemStateContext } from "./state/CreateItemStateContext"
import { CreateItemButton } from "../list/components/create-item-button/CreateItemButton"

type Props = {
  onSubmitClick: () => Promise<void>,
}

export const CreateItemContent = observer(({
  onSubmitClick,
}: Props) => {
  const state = useContext(CreateItemStateContext)

  return (
    <form>
      <label htmlFor="type">Type:</label>
      <select
        id="type"
        value={state.type}
        onChange={(e) => state.setType(e.target.value)}
        data-cy="type-select"
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

      <CreateItemButton onClick={onSubmitClick} />
    </form>
  )
})
