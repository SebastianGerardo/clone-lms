import React from 'react'
import Ciclo from './Ciclo'
import Profesores from './Profesores'
import '../../../index.css'
import ControlCenter from './ControlCenter'
import TableCatalogo from './TableCatalogo'

const Administracion = () => {
  return (
    <div className='p-8 flex flex-col gap-8'>
       {/* Section 1 */}
       <section className='lg:max-w-[1024px] lg:w-[1024px] lg:mx-auto flex flex-col lg:gap-y-12'>
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
       </section>
    </div>
  )
}

export default Administracion
