import { useContext } from "react"
import { observer } from "mobx-react-lite"
import { CreateItemStateContext } from "./state/CreateItemStateContext"
import { CreateItemContent } from "./CreateItemContent"
import { api } from "../../../../common/utils/HttpClient"

export const CreateItemContainer = observer(() => {
  const createItemState = useContext(CreateItemStateContext)

  if (!createItemState) {
    return <div>Loading...</div>
  }

  const onSubmit = async () => {
    await api.post(`/items`, {
      type: createItemState.type,
    })
  }

  return <CreateItemContent onSubmitClick={onSubmit} />
})
