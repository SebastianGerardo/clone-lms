import React from 'react'
import { Outlet } from 'react-router-dom'

const Cursos = () => {
  return (
    <section className='p-8'>
        <Outlet />
    </section>
  )
}

export default Cursos
