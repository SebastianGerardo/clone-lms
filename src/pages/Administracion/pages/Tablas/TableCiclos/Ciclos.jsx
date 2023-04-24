import React, { useState } from 'react'
import TableBasic from '../../../../../components/Tables/TableBasic'
import { ApiCiclos } from '../../../../../helpers/ApiMatricula'
import { columnsCiclos, ContentTableCiclos } from './components/TableCiclos'

const Ciclos = () => {
    const [ciclos, setCiclos] = useState(ApiCiclos)
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
      setSearch(e.target.value)
    }

    const filtrarCiclos = ciclos.filter((alumno) => {
      return Object.keys(alumno).some((key) => {
        const value = alumno[key];
        return value && typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase());
      });
    });

    console.log('estoy en la tabla', ciclos)
  return (
    <section className='p-8'>
      <div className='max-w-[1200px] mx-auto flex flex-col gap-y-12'>
          <TableBasic columns={columnsCiclos} data={filtrarCiclos} tableTitle={<ContentTableCiclos handleSearch={handleSearch} />} />
      </div>
    </section>
  )
}

export default Ciclos
