import React, { useState } from 'react'
import TableBasic from '../../../../../components/Tables/TableBasic'
import { NombreTabla } from '../../../../../components/Tables/TableComponents'
import { columnsApoderados, ContentTableApoderados } from './components/TableApoderados'

const Apoderados = () => {

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

    const filtrarApoderados = apiAlumnos.filter((alumno) => {
      return Object.keys(alumno).some((key) => {
        const value = alumno[key];
        return value && typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase());
      });
    });

    console.log('estoy en la tabla', apiAlumnos)

  return (
    <section className='p-8'>
      <div className='max-w-[1200px] mx-auto flex flex-col gap-y-12'>
          <TableBasic columns={columnsApoderados} data={filtrarApoderados} title={<NombreTabla children={<ContentTableApoderados handleSearch={handleSearch} />}/>} />
      </div>
    </section>
  )
}

export default Apoderados
