import React from 'react'

const Login = () => {
  return (
    <div className='grid w-screen h-screen grid-cols-2'>
        {/* Lado Izquierdo del Login */}
      <section className='flex justify-center items-center'>
          {/* Contenido */}
        <div className='flex flex-col max-w-[50%] w-[50%]'>
            <span className='text-center text-blue-700 mb-20 font-bold text-4xl'>Logotipo</span>
            <button className='bg-black text-white py-4 rounded-md'>Conectar con Google</button>
            <span className='text-gray-400 text-center my-6'>Iniciar con correo electronico</span>
            {/* Formulario Login */}
            <form action="" className='flex flex-col gap-y-2'>
                <label class="flex flex-col gap-y-2">
                    <span class="block text-sm font-medium text-slate-700">
                        E-mail
                    </span>
                    <input type="email" name="email" placeholder="email@example.com" className="mt-1 p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                </label>
                <label class="flex flex-col gap-y-2">
                    <span class="block text-sm font-medium text-slate-700">
                        Contraseña
                    </span>
                    <input type="email" name="email" placeholder="*********" className="mt-1 p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                </label>
            </form>
                <div className='text-end py-3'>
                    <a href='#' className='text-gray-400'>
                        Olvidé mi contraseña
                    </a>
                </div>
                <div className='cursor-pointer bg-blue-700 my-4 text-white text-center py-4 rounded-md'>
                    <button>Sign in</button>
                </div>
            {/* Link para crear cuenta */}
            <div className='text-center mb-4'>
                <span className='text-gray-400'>¿Aún no tienes una cuenta?</span>
                <a href="#" className='text-blue-700'>Crear una cuenta</a>
            </div>
        </div>
      </section>

        {/* Lado derecho del Login */}
      <section className='hidden lg:block bg-[#F7FAFC]'>
            <h1>Soy la imagen</h1>
      </section>
    </div>
  )
}

export default Login
