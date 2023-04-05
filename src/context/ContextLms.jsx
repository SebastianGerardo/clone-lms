import React, {createContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { VerificarSesion } from '../helpers/ApiUsuarios'

export const UserContext = createContext()

const ContextLms = ({children}) => {
  const [usuarioLogin, setUsuarioLogin] = useState([])
  const [showMenu, setShowMenu] = useState(false);
  const  navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    VerificarSesion(token).then((res) => {
      if (res.statusCode === "200") {
        navigate("/dashboard", {
          replace: true,
          state: {
            logged: true
          }
            })
        setUsuarioLogin(res.data)
      } else {
        navigate("/login", {replace: true, state: {logged: false}})
      }
    })
  }, [])

  return (
    <UserContext.Provider value={{usuarioLogin, setUsuarioLogin, showMenu, setShowMenu}}>
        {children}
    </UserContext.Provider>
  )
}

export default ContextLms
