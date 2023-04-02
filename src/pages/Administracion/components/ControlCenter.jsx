import React from 'react'
import { NavLink } from 'react-router-dom'
import escudo from '../../../assets/icons/escudo.svg'

const ControlCenter = () => {
  return (
    <div className='flex flex-col gap-y-6 sm:grid sm:grid-cols-1 sm:gap-y-6 md:grid md:gap-y-6 md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3 place-items-center'>
      {/* VIDEOS */}
      <section className='flex gap-6 items-center bg-[#F9F9F9] min-w-max w-max p-6 rounded-xl'>
        <div>
            <div className='flex justify-center items-center rounded-xl w-[5.5rem] h-[5.5rem] max-w-[5.5rem] max-h-[5.5rem] bg-blue-200/70'>
              <img src={escudo} alt="escudo" />
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-xl'>Videos</h1>
            <div className='flex gap-5 rounded-lgs text-xs text-gray-400'>
                <button className='text-blue-500'>Editar</button>
                <button>Nuevo</button>
                <button>Borrar</button>
            </div>
        </div>
      </section>
      {/* PADRES DE FAMILIA */}
      <section className='flex gap-6 items-center bg-[#F9F9F9] min-w-max w-max p-6 rounded-xl'>
        <div>
            <div className='flex justify-center items-center rounded-xl w-[5.5rem] h-[5.5rem] max-w-[5.5rem] max-h-[5.5rem] bg-blue-200/70'>
              <img src={escudo} alt="escudo" />
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-xl'>Padres de fam.</h1>
            <div className='flex gap-5 rounded-lgs text-xs text-gray-400'>
                <button className='text-blue-500'>Editar</button>
                <button>Nuevo</button>
                <button>Borrar</button>
            </div>
        </div>
      </section>
      {/* ALUMNOS */}
      <section className='md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-3 xl:col-start-auto xl:col-end-auto flex gap-6 items-center bg-[#F9F9F9] min-w-max w-max p-6 rounded-xl'>
        <div>
            <div className='flex justify-center items-center rounded-xl w-[5.5rem] h-[5.5rem] max-w-[5.5rem] max-h-[5.5rem] bg-blue-200/70'>
              <img src={escudo} alt="escudo" />
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-xl'>Alumnos</h1>
            <div className='flex gap-5 rounded-lgs text-xs text-gray-400'>
                <button className='text-blue-500'>Editar</button>
                <NavLink to='/dashboard/administracion/create/alumno' state={{ logged: true }}>Nuevo</NavLink>
                <button>Borrar</button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default ControlCenter
