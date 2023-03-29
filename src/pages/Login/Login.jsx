import React from 'react'
import logoGoogle from '../../assets/icons/google.png'
import loginImg1 from '../../assets/img/loginImg-1.png'

const Login = () => {
  return (
    <div className='grid w-screen max-w-screen h-screen max-h-screen lg:grid-cols-2 overflow-hidden'>
        {/* Lado Izquierdo del Login */}
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
            <form action="" className='flex flex-col gap-y-2'>
                <label className="flex flex-col gap-y-2">
                    <span className="block text-sm font-medium text-slate-700">
                        E-mail
                    </span>
                    <input required type="email" name="email" placeholder="email@example.com" className="mt-1 p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                </label>
                <label className="flex flex-col gap-y-2">
                    <span className="block text-sm font-medium text-slate-700">
                        Contraseña
                    </span>
                    <input required type="email" name="email" placeholder="*********" className="mt-1 p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                </label>
                <div className='text-end py-1'>
                    <a href='#' className='text-gray-400'>
                        Olvidé mi contraseña
                    </a>
                </div>
                <div className='cursor-pointer bg-blue-700 my-4 text-white text-center py-4 rounded-md'>
                    <button>Sign in</button>
                </div>
            </form>
            {/* Link para crear cuenta */}
            <div className='text-center mb-4'>
                <span className='text-gray-400'>¿Aún no tienes una cuenta?</span>
                <a href="#" className='text-blue-700'>Crear una cuenta</a>
            </div>
        </div>
      </section>

        {/* Lado derecho del Login */}
        <section className='hidden lg:block bg-[#F7FAFC] overflow-hidden'>
            <div className='flex flex-col gap-y-2 p-20 pb-12 pr-0 h-screen max-h-screen'>
                <h1 className='font-bold text-2xl'>Empieza a aprender ahora</h1>
                <span className='text-gray-500 text-sm'>Elige tus cursos</span>
                <span className='my-4'>°°°</span>
                <div className='w-full h-full overflow-hidden'>
                <img src={loginImg1} alt="" className='w-full h-full object-cover' />
                </div>
            </div>
        </section>

    </div>
  )
}

export default Login
