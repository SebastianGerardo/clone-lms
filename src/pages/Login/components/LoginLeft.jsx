import React, { useState } from 'react'
import logoGoogle from '../../../assets/icons/google.png'
import { pruebaUsuario } from '../../../helpers/ApiUsuarios'
import { useNavigate } from 'react-router-dom'

const LoginLeft = () => {
  const [inputUser, setInputUser] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setInputUser({
        ...inputUser,
        [e.target.name]: e.target.value
    })
  }

//   console.log(pruebaUsuario.password)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputUser.email === pruebaUsuario.email && inputUser.password === pruebaUsuario.password) {
        return navigate('/dashboard', {replace: true, state: {usuario: pruebaUsuario, logged: true}})
    } else {
        return console.log('Usuario incorrecto')
    }
  }

  return (
    <section className='flex justify-center items-center'>
          {/* Contenido */}
        <div className='flex flex-col w-[80%] lg:max-w-[50%] lg:w-[50%]'>
            <span className='text-center text-blue-700 mb-20 font-bold text-4xl'>Logotipo</span>
            {/* Botón de Google */}
            <button className='flex justify-center items-center bg-black text-white py-4 rounded-md'>
                <img src={logoGoogle} alt="logoGoogle" className='w-6 h-6 mr-2' />
                <span>Conectar con Google</span>
            </button>
            <div className="flex justify-center items-center text-gray-400/80 text-center my-6">
                <span className="inline-block w-[10%] h-[1px] bg-gray-300 mr-2"></span>
                <span className='mb-0.5'>Iniciar sesión con correo electronico</span>
                <span className="inline-block w-[10%] h-[1px] bg-gray-300 ml-2"></span>
            </div>
            {/* Formulario Login */}
            <form onSubmit={handleSubmit} action="" className='flex flex-col gap-y-2'>
                <label className="flex flex-col gap-y-2">
                    <span className="block text-sm font-medium text-slate-700">
                        E-mail
                    </span>
                    <input onChange={handleInputChange} type="email" name="email" placeholder="email@example.com" className="mt-1 p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                </label>
                <label className="flex flex-col gap-y-2">
                    <span className="block text-sm font-medium text-slate-700">
                        Contraseña
                    </span>
                    <input onChange={handleInputChange} type="password" name="password" placeholder="*********" className="mt-1 p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                </label>
                <div className='text-end py-1'>
                    <a href='#' className='text-gray-400'>
                        Olvidé mi contraseña
                    </a>
                </div>
                {/* BOTÓN */}
                <input className='cursor-pointer bg-blue-700 my-4 text-white text-center py-4 rounded-md' type="submit" value="Sign in" />
            </form>
            {/* Link para crear cuenta */}
            <div className='text-center mb-4'>
                <span className='text-gray-400'>¿Aún no tienes una cuenta?</span>
                <a href="#" className='text-blue-700'>Crear una cuenta</a>
            </div>
        </div>
      </section>
  )
}

export default LoginLeft
