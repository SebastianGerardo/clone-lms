import React from 'react'
import LoginLeft from './components/LoginLeft'
import LoginRight from './components/LoginRight'

const Login = () => {
  return (
    <div className='grid w-screen max-w-screen h-screen max-h-screen lg:grid-cols-2 overflow-hidden'>
        
        {/* Lado Izquierdo del Login */}
        <LoginLeft/>

        {/* Lado derecho del Login */}
        <LoginRight/>

    </div>
  )
}

export default Login
