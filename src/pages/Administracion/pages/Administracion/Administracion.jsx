import React from 'react'
import TableBasic from '../../../../components/Tables/TableBasic'
import Ciclo from './components/Ciclo'
import ControlCenter from './components/ControlCenter'
import Profesores from './components/Profesores'
import { columnsCatalogo } from './components/ColumnsCatalogo'
import { ApiCatalogo } from '../../../../helpers/ApiAdministracion'
import ButtonManager from '../../../../components/Buttons/ButtonManager'

const Administracion = () => {
  return (
    <div className='p-8 xl:p-7 flex flex-col gap-8'>
       {/* Section 1 */}
       <section className='xl:max-w-[1024px] xl:w-[1024px] lg:mx-auto flex flex-col lg:gap-y-12'>
        <section className="xl:max-h-[23.25rem] xl:h-[23.25rem] grid place-items-center grid-cols-1 max-[1165px]:flex max-[1165px]:flex-col md:grid-cols-1 lg:grid-cols-[auto_auto] xl:grid-cols-[auto_auto] gap-8" >

            {/* Card 1 */}
              <Ciclo />

            {/* Card 2 */}
            <Profesores />

        </section>
        <section>
          <ControlCenter />
        </section>
        <section>
          <TableBasic columns={columnsCatalogo} data={ApiCatalogo} nombreTabla={"Catálogo"} childrenTitle={<ButtonManager />} />
        </section>
       </section>
    </div>
  )
}

export default Administracion
