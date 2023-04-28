import React from 'react'
import TableBasic from '../../../../components/Tables/TableBasic'
import { ApiCatalogo } from '../../../../helpers/ApiAdministracion'
import { ApiCursoVideo } from '../../../../helpers/ApiCursos'
import { columnsTableCursos } from './components/TableCursos'

const CursoMain = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex flex-col gap-y-12'>
        <TableBasic columns={columnsTableCursos} data={ApiCatalogo} title="Videos" />
    </div>
  )
}

export default CursoMain
