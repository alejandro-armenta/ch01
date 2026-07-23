import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

export const AuthContext = createContext({ token: null, setToken: () => {} })

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null)

  return (
    //setotken va a ser setToken de aqui y value va a ser nulo
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = { children: PropTypes.element.isRequired }

export function useAuth() {
  const { token, setToken } = useContext(AuthContext)
  return [token, setToken]
}
