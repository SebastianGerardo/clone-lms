import React from 'react'
import { Outlet } from 'react-router-dom'
import TableCursos from './pages/CursoMain/components/TableCursos'

const Cursos = () => {
  return (
    <section className='p-8'>
        <Outlet />
    </section>
  )
}

export default Cursos
