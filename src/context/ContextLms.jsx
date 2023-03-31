import React, {createContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { VerificarSesion } from '../helpers/ApiUsuarios'

export const UserContext = createContext()

const ContextLms = ({children}) => {
  const [usuarioLogin, setUsuarioLogin] = useState([])
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
        navigate("/", {replace: true, state: {logged: false}})
      }
    })
  }, [])

  return (
    <UserContext.Provider value={{usuarioLogin, setUsuarioLogin}}>
        {children}
    </UserContext.Provider>
  )
}

export default ContextLms
