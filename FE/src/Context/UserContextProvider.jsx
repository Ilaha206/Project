import { createContext, useState } from "react"

export const UserContext = createContext()
function UserContextProvider({ children }) {
  const [token, settoken] = useState(null)
  const [decode, setdecode] = useState(null)
  return (
    <UserContext.Provider value={{ token, settoken, decode, setdecode }}>{children}</UserContext.Provider>
  )
}

export default UserContextProvider