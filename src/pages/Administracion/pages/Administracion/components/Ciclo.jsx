import React from 'react'
import CircularProgress from '../../../../../components/ProgressStatus/CircularProgress'

const Ciclo = () => {
  return (
    <div className='bg-[#F2F8FF] max-w-max flex flex-col justify-between sm:flex-row md:flex-row lg:flex-row xl:flex-row w-max lg:w-full rounded-2xl p-6 pb-5  gap-10'>
        {/* RADIAL DEL CIRCULO */}
      <section className="bg-primary-100  rounded-xl text-gray-300 flex flex-col justify- gap-6">
        <div className='flex gap-2 items-center'>
            <h4 className="text-xl text-[#11223E] font-extrabold">
                Ciclo 1
            </h4>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className='h-full flex flex-col justify-center items-center gap-2'>
            <CircularProgress 
              percentage={10} 
              sizeCircle={230}
              progressCircle={66}
              textContent={"Ciclo 1"}
              colorText={"#0052CA"} 
              colorFondo={"#ccc"} 
              colorRelleno={"#3751FE"}
              strokeWidth={20} 
              fontSize={"15px"} 
              fontWeight={"bold"} 
            />
            <h1 className='text-center text-[#11223E]'>Progreso</h1>
        </div>
      </section>
        
        {/* CONTENIDO DEL CICLO */}
      <section className='flex flex-col gap-y-10'>

        <div className='flex flex-col'>

            {/* ICONO PUNTITOS */}
          <div className='flex justify-end mr-1'>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
                  <path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
                  <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
              </svg>
          </div>

            {/* BOTONES EDITAR */}
          <section className='flex justify-evenly bg-white rounded-lg p-2 text-xs text-[#4B4C53]'>
              <button className='text-[#0052CA]'>Editar</button>
              <button>Nuevo</button>
              <button>Borrar</button>
          </section>

            {/* FECHA INICIO */}
          <section className='flex flex-col gap-y-1 font-bold mt-4'>
              <h1 className='text-[#11223E] font-extrabold'>FECHA INICIO</h1>
              <div className='flex gap-2'>
                  <span className='text-[#3751FE] text-3xl'>24</span> 
                  <span className='flex items-end'>
                      <h2 className='text-[#48566F]'>de enero</h2>
                  </span>
              </div>
          </section>
        </div>
            
        <div className='flex flex-col gap-y-4'>
            {/* ESTADO */}
          <section className='flex flex-col gap-y-1 font-bold text-gray-400'>
              <h1 className='text-[#11223E] font-extrabold'>ESTADO</h1>
              <div className='flex gap-2 text-center font-medium'>
                  <button className='bg-white justify-evenly px-7 rounded-md text-xs'>Activo</button>
                  <button className='bg-[#0052CA] text-white px-7 justify-evenly rounded-md text-xs'>Inactivo</button>
              </div>
          </section>
          {/* COSTO */}
          <section className='flex flex-col gap-y-2 font-bold text-gray-400'>
              <h1 className='text-[#11223E] font-extrabold'>COSTO</h1>
              <div className='flex flex-col gap-y-2 text-center font-medium text-xs'>
                  <button className='bg-white justify-evenly max-w-max px-4 rounded-md'>Promociones</button>
                  <button className='bg-[#0052CA] text-white max-w-max px-4 rounded-md'>Descuentos</button>
                  <button className='bg-white justify-evenly max-w-max px-4 rounded-md'>Modalidades de pago</button>
              </div>
          </section>
        </div>
            
      </section>
         
    </div>
  )
}

export default Ciclo
