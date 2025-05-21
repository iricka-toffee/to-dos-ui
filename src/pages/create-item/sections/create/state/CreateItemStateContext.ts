import { createContext } from "react"
import { CreateItemState } from "./CreateItemState"

export const CreateItemStateContext = createContext<CreateItemState>(null as unknown as CreateItemState)