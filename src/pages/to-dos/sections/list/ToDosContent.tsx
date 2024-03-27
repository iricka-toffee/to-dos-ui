import { useContext } from "react"
import { ToDosStateContext } from "./state/ToDosStateContext"
import { observer } from "mobx-react-lite"

export const ToDosContent = observer(() => {
  const toDosState = useContext(ToDosStateContext)

  return (
    <ul>
      {
        toDosState
          .toDos
          .map(({
            id,
            name,
          }) => (
            <li
              key={`to-do-${id}`}
            >
              {name}
            </li>
          ))
      }
    </ul>
  )
})
