import React from 'react'
import EstadisticasProfesor from './components/EstadisticasProfesor'
import EstadisticasVideo from './components/EstadisticasVideo'
import TableEstadisticas from './components/TableEstadisticas'

const Estadisticas = () => {
  return (
    <section className='p-8'>
        <div className='max-w-[1024px] mx-auto flex flex-col gap-y-12'>
            <EstadisticasVideo />
            <EstadisticasProfesor />
            <TableEstadisticas />
        </div>
    </section>
  )
}

export default Estadisticas
