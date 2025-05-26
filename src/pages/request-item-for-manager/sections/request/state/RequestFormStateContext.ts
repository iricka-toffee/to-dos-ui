import { createContext } from "react"
import { RequestFormState } from "./RequestFormState"

export const RequestFormStateContext = createContext<RequestFormState>(null as unknown as RequestFormState)
