import React from 'react'

const EstadisticasVideo = () => {
  return (
    <div className='flex flex-col gap-y-5 py-0'>

        <div className='flex justify-between xs:justify-around flex-col sm:flex-row pt-6 gap-y-8 sm:gap-y-0'>
            <section className='relative'>
                {/* TITULO VIDEO */}
                <div className='font-bold absolute top-[-3rem]'>
                    <h1 className='text-xl'>Video</h1>
                </div>
                {/* TOTAL DE REPRODUCCIONES */}
                <div className='mb-6 bg-[#E9E7F9] rounded-lg mx-auto py-6 flex flex-col justify-center items-center w-full'>
                    <div className='flex justify-center items-center gap-3 w-full'>
                        <div className='w-[60px] h-[60px] bg-[#5149E4] rounded-2xl'>
                            <img src="" alt="" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-xs text-gray-400'>Total de Reproducciones</h2>
                            <p className='font-bold'>3000</p>
                        </div>
                    </div>
                </div>
                {/* MÁS VISTOS */}
                <div className='xl:w-full flex flex-col mx-auto w-max gap-y-4'>
                    <h1 className='text-[#8A96B1] font-light text-base'>Más vistos</h1>
                    <section className='grid lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-2 xl:grid-rows-2 grid-cols-1 grid-rows-none gap-4'>
                        <div className='flex justify-center gap-3 items-center'>
                            <p className='text-[#BABABA] font-bold text-3xl min-w-[26.61px] w-[21.61px]'>1.</p>
                            <div className='min-w-[60px] min-h-[60px] bg-[#7882BF] rounded-2xl'>
                                <img src="" alt="" />
                            </div>
                            <p className='text-sm'>Nombre del video</p>
                        </div>
                        <div className='flex justify-center gap-3 items-center'>
                            <p className='text-[#BABABA] font-bold text-3xl min-w-[26.61px] w-[21.61px]'>2.</p>
                            <div className='min-w-[60px] min-h-[60px] bg-[#7882BF] rounded-2xl'>
                                <img src="" alt="" />
                            </div>
                            <p className='text-sm'>Nombre del video</p>
                        </div>
                        <div className='flex justify-center gap-3 items-center'>
                            <p className='text-[#BABABA] font-bold text-3xl min-w-[26.61px] w-[21.61px]'>3.</p>
                            <div className='min-w-[60px] min-h-[60px] bg-[#7882BF] rounded-2xl'>
                                <img src="" alt="" />
                            </div>
                            <p className='text-sm'>Nombre del video</p>
                        </div>
                        <div className='flex justify-center gap-3 items-center'>
                            <p className='text-[#BABABA] font-bold text-3xl min-w-[26.61px] w-[21.61px]'>4.</p>
                            <div className='min-w-[60px] min-h-[60px] bg-[#7882BF] rounded-2xl'>
                                <img src="" alt="" />
                            </div>
                            <p className='text-sm'>Nombre del video</p>
                        </div>
                    </section>
                </div>
            </section>
            
            <hr className='w-[1px] bg-slate-400 h-[316px] hidden sm:block'/>
            
            <section className='xl:w-max flex flex-col mx-auto sm:mx-0 w-max gap-y-4'>
                <h1 className='text-[#8A96B1] font-light text-base'>Más vistos</h1>
                <section className='flex flex-col gap-3'>
                    <div className='flex justify-center gap-3 items-center'>
                        <p className='text-[#BABABA] font-bold text-3xl min-w-[26.61px] w-[21.61px]'>1.</p>
                        <div className='min-w-[60px] min-h-[60px] bg-[#7882BF] rounded-2xl'>
                            <img src="" alt="" />
                        </div>
                        <p className='text-sm'>Nombre del video</p>
                    </div>
                    <div className='flex justify-center gap-3 items-center'>
                        <p className='text-[#BABABA] font-bold text-3xl min-w-[26.61px] w-[21.61px]'>2.</p>
                        <div className='min-w-[60px] min-h-[60px] bg-[#7882BF] rounded-2xl'>
                            <img src="" alt="" />
                        </div>
                        <p className='text-sm'>Nombre del video</p>
                    </div>
                    <div className='flex justify-center gap-3 items-center'>
                        <p className='text-[#BABABA] font-bold text-3xl min-w-[26.61px] w-[21.61px]'>3.</p>
                        <div className='min-w-[60px] min-h-[60px] bg-[#7882BF] rounded-2xl'>
                            <img src="" alt="" />
                        </div>
                        <p className='text-sm'>Nombre del video</p>
                    </div>
                    <div className='flex justify-center gap-3 items-center'>
                        <p className='text-[#BABABA] font-bold text-3xl min-w-[26.61px] w-[21.61px]'>4.</p>
                        <div className='min-w-[60px] min-h-[60px] bg-[#7882BF] rounded-2xl'>
                            <img src="" alt="" />
                        </div>
                        <p className='text-sm'>Nombre del video</p>
                    </div>
                </section>
            </section>
        </div>

    </div>
  )
}

export default EstadisticasVideo
