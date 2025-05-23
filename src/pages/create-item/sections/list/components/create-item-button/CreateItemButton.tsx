import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { CreateItemStateContext } from "../../../create/state/CreateItemStateContext"

export const CreateItemButton = observer(({
  onClick,
}: {
  onClick: () => void,
}) => {
  const state = useContext(CreateItemStateContext)

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!state.type}
      data-cy="create"
    >
      Create
    </button>
  )
})
