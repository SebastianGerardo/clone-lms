import React from 'react'
import CircularProgress from '../../components/ProgressStatus/CircularProgress'
import Ciclo from './components/Ciclo'
import Profesores from './components/Profesores'
import '../../index.css'
import ControlCenter from './components/ControlCenter'
import TableCatalogo from './components/TableCatalogo'

const Administracion = () => {
  return (
    <div className='p-8 flex flex-col gap-8'>
       {/* Section 1 */}
       <section className="xl:max-h-[23.25rem] xl:h-[23.25rem] grid place-items-center grid-cols-1 admin_breakpoint md:grid-cols-1 lg:grid-cols-[auto_auto] xl:grid-cols-[auto_auto] gap-8" >

          {/* Card 1 */}
            <Ciclo />

          {/* Card 2 */}
          <Profesores />

       </section>
       <section>
        <ControlCenter />
       </section>
       <section>
        <TableCatalogo />
       </section>
    </div>
  )
}

export default Administracion
