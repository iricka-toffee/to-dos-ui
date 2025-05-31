import { useContext } from "react"
import { observer } from "mobx-react-lite"
import { RequestItemStateContext } from "./state/RequestItemStateContext"
import { RequestItemContent } from "./RequestItemContent"
import { api } from "../../../../common/utils/HttpClient"

export const RequestItemContainer = observer(() => {
  const requestItemState = useContext(RequestItemStateContext)

  const onSubmit = async () => {
    await api.post(`/request-item/requests/me`, {
      description: requestItemState.description,
    })
  }

  return (
    <RequestItemContent
      onSubmitClick={onSubmit}
    />
  )
})
