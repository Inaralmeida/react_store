import { createContext, useState } from "react";

export const UserContext = createContext({ auth: false })


const UserProvider = ({ children }) => {
  const [estaLogado, setEstaLogado] = useState(false)

  return (
    <UserContext.Provider value={{ estaLogado, setEstaLogado }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider