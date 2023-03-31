import React, {createContext} from 'react'

export const LmsContext = createContext()

const ContextLms = ({children}) => {
  const [usuarioLogin, setUsuarioLogin] = useState([])
  return (
    <LmsContext.Provider value={{usuarioLogin, setUsuarioLogin}}>
        {children}
    </LmsContext.Provider>
  )
}

export default ContextLms
