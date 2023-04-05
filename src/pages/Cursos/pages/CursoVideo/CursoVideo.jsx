import React from 'react'
import VideoPlyr from './components/VideoPlyr'
import profeImg from '../../../../assets/img/user-img.svg'

const CursoVideo = () => {
  return (
    <div className='grid grid-cols-[auto_25rem]'>
      <section>
        <VideoPlyr/>
        <section className='flex flex-col gap-4 p-4 text-gray-400'>
          <h1 className='text-xl font-semibold text-black'>Nombre del curso</h1>
          <div className='flex gap-4 text-sm'>
            <span className='font-semibold'>Ciclo: 2</span>
            <span className='font-normal'>Duracion: 60min</span>
            <span className='font-normal text-[#50B5FF]'>Nivel: Básico</span>
          </div>
          <div className='flex items-center gap-3'>
            <div className='w-14 h-w-14'>
              <img className='w-full h-full object-cover' src={profeImg} alt="profesor" />
            </div>
            <span className='font-medium text-sm'>PROFESOR: NOMBRE Y APELLIDO</span>
          </div>
          <div className='flex border-b border-gray-300 font-medium text-sm'>
            <button className='w-max px-4 py-2'>
              Detalles del Curso
            </button>
            <button className='w-max px-4 py-2 border-b-2 font-semibold border-black text-black'>
              Tarea
            </button>
            <button className='w-max px-4 py-2 flex gap-2 items-center'>
              <div className='bg-[#50B5FF] text-white w-6 h-6 rounded-full flex items-center justify-center'>3</div>
              Exámenes    
            </button>
          </div>
          <div className='flex flex-col gap-3 p-5 rounded-xl border border-[#F1F1F5] bg-[#FAFAFB]'>
            <h2 className='text-black font-medium'>Texto</h2>
            <p className='text-sm'>Let’s return to design thinking. Over time designers have built up their own 
              body of approaches to solving classes of problems.
            </p>
            <button className='w-max rounded-xl px-4 py-2 text-sm mt-1 bg-[#0052CA] text-white'>Ver detalles</button>
          </div>
        </section>
      </section>
      <section className='flex flex-col'>
        <h1>Modulo</h1>
        <div>
          <div>
            <div>1</div>
            <p>Intro</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CursoVideo
