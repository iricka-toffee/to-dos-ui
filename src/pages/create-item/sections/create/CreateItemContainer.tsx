import { useContext } from "react"
import { CreateItemStateContext } from "./state/CreateItemStateContext"
import { CreateItemContent } from "./CreateItemContent"

export function CreateItemContainer() {
  const createItemState = useContext(CreateItemStateContext)

  if (!createItemState) {
    return <div>Loading...</div>
  }

  return (
    <div style={{
      padding: `1rem`,
    }}>
      <h1>Create Item</h1>
      <CreateItemContent />
    </div>
  )
}