import React, { useState } from 'react'
import TableBasic from '../../../../../components/Tables/TableBasic'
import { columnsAlumnos, ContentTableAlumnos } from './components/TableAlumnos'

const Alumnos = () => {

    const [apiAlumnos, setApiAlumnos] = useState(() => {
        const dataLocal = localStorage.getItem('dataLocal')
        if (dataLocal) {
            return JSON.parse(dataLocal)
        } else {
            return []
        }
    })

    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
      setSearch(e.target.value)
    }

    const filtrarAlumnos = apiAlumnos.filter((alumno) => {
      return Object.keys(alumno).some((key) => {
        const value = alumno[key];
        return value && typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase());
      });
    });

  return (
    <section className='p-8'>
      <div className='max-w-[1200px] mx-auto flex flex-col gap-y-12'>
          <TableBasic columns={columnsAlumnos} data={filtrarAlumnos} tableTitle={<ContentTableAlumnos handleSearch={handleSearch} />} />
      </div>
    </section>
  )
}

export default Alumnos
