import React from 'react'
import TableBasic from '../../components/Tables/TableBasic'
import { ApiAlumno } from '../../helpers/ApiEstadisticas'
import EstadisticasProfesor from './components/EstadisticasProfesor'
import EstadisticasVideo from './components/EstadisticasVideo'
import { columnsDataEstadisticas } from './components/TableEstadisticas'

const Estadisticas = () => {
  return (
    <section className='p-8'>
        <div className='max-w-[1024px] mx-auto flex flex-col gap-y-12'>
            <EstadisticasVideo />
            <EstadisticasProfesor />
            <TableBasic columns={columnsDataEstadisticas} data={ApiAlumno} tableTitle="Alumnos" />
        </div>
    </section>
  )
}

export default Estadisticas
