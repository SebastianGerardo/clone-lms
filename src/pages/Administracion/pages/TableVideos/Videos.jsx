import React from 'react'
import TableVideos from './components/TableVideos'

const Videos = () => {
  return (
    <section className='p-8'>
      <div className='max-w-[1200px] mx-auto flex flex-col gap-y-12'>
          <TableVideos/>
      </div>
    </section>
  )
}

export default Videos
