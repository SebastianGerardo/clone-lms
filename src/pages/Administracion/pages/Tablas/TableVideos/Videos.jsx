import React from 'react'
import TableBasic from '../../../../../components/Tables/TableBasic'
import { NombreTabla } from '../../../../../components/Tables/TableComponents'
import { ApiVideos } from '../../../../../helpers/ApiVideos'
import { columnsVideos, ContentTableVideos } from './components/TableVideos'

const Videos = () => {
  return (
    <section className='p-8'>
      <div className='max-w-[1200px] mx-auto flex flex-col gap-y-12'>
          {/* <TableVideos/> */}
          <TableBasic columns={columnsVideos} data={ApiVideos} title={<NombreTabla children={<ContentTableVideos />} />} />
      </div>
    </section>
  )
}

export default Videos
