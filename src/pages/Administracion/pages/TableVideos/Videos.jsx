import React from 'react'
import TableBasic from '../../../../components/Tables/TableBasic'
import { ApiVideos } from '../../../../helpers/ApiVideos'
import { columnsVideos, ContentTableVideos } from './components/ColumnsVideos'
// import TableVideos from './components/TableVideos'

const Videos = () => {
  return (
    <section className='p-8'>
      <div className='max-w-[1200px] mx-auto flex flex-col gap-y-12'>
          {/* <TableVideos/> */}
          <TableBasic columns={columnsVideos} data={ApiVideos} tableTitle={<ContentTableVideos />} />
      </div>
    </section>
  )
}

export default Videos
