import { createContext } from "react"
import { RequestItemState } from "./RequestItemState"

export const RequestItemStateContext = createContext<RequestItemState>(null as unknown as RequestItemState)