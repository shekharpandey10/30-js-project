import React, { createContext, useState } from 'react'
export const NewContext = createContext(null)
function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <NewContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </NewContext.Provider>
  )
}

export default AuthProvider
