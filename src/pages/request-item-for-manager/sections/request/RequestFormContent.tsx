import { useContext } from "react"
import { observer } from "mobx-react-lite"
import { RequestFormStateContext } from "./state/RequestFormStateContext"

const typeOptions = [
  { value: "", label: "Выберите тип" },
  { value: "Laptop", label: "Laptop" },
  { value: "DesktopComputer", label: "DesktopComputer" },
  { value: "Chair", label: "Chair" },
  { value: "Monitor", label: "Monitor" },
  { value: "Keyboard", label: "Keyboard" },
  { value: "Mouse", label: "Mouse" },
]

export const RequestFormContent = observer(() => {
  const formState = useContext(RequestFormStateContext)

  return (
    <>
      <label htmlFor="type">Тип</label>
      <select
        id="type"
        value={formState.type}
        onChange={e => formState.changeType({ newType: e.target.value })}
      >
        {typeOptions.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </>
  )
})
