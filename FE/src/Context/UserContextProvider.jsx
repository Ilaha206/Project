import { createContext, useState } from "react"

const userContext = createContext()
function UserContextProvider({children}) {
const [token, settoken] = useState(null)
const [decode, setdecode] = useState(null)
  return (
    <UserContextProvider value={{token,settoken,decode,setdecode}}>{children}</UserContextProvider>
  )
}

export default UserContextProvider