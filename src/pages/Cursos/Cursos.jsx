import React from 'react'
import TableCursos from './components/TableCursos'

const Cursos = () => {
  return (
    <section className='p-8'>
        <div className='max-w-[1200px] mx-auto flex flex-col gap-y-12'>
            <TableCursos />
        </div>
    </section>
  )
}

export default Cursos
