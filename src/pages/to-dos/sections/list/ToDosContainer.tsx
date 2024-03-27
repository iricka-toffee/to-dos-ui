import { useContext, useEffect } from "react"
import { ToDosStateContext } from "./state/ToDosStateContext"
import { observer } from "mobx-react-lite"
import { ToDosContent } from "./ToDosContent"
import { api } from "../../../../common/utils/HttpClient"
import { ToDosResponse } from "../../../../api-types"

export const ToDosContainer = observer(() => {
  const toDosState = useContext(ToDosStateContext)

  useEffect(() => {
    async function loadToDosAsync() {
      const {
        data: {
          toDos,
        },
      } = await api.get<ToDosResponse>(`/to-dos`)

      toDosState.initialize({
        toDos,
      })
    }

    loadToDosAsync()
  }, [])

  return (
    <ToDosContent />
  )
})
