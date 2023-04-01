import React from 'react'
import profeImg from '../../../assets/img/profesor-img.svg'
import CircularProgress from '../../../components/ProgressStatus/CircularProgress'

const EstadisticasProfesor = () => {
  return (
    <div className='flex flex-col md:flex-row gap-x-8 md:min-h-[18rem] md:h-[18rem]'>
      <section className='flex justify-center md:justify-normal'>
        <div className="flex flex-col place-items-center w-[18.625rem] min-h-full h-full md:min-w-[50%] xl:min-w-[80%]">
                {/* TITULO Y BOTONES */}
            <section className='w-full p-2 flex justify-between items-center mb-3 mt-1'>
                <div className='flex items-center gap-2'>
                    <h1 className="text-xl font-bold">Profesores</h1>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </section>

                {/* LISTA DE PROFESORES */}
            <section className="w-full p-2 rounded-xl overflow-y-auto flex flex-col gap-y-3">
                    {/* PROFESOR 1 */}
                <div className="flex items-center justify-between border-b pb-4 border-gray-300">
                    <div className='flex items-center gap-3 font-medium text-gray-400'>
                        <div className='w-12 h-12 rounded-lg'>
                            <img
                                src={profeImg}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-sm">Nombre y Apellido</h3>
                        </div>
                    </div>
                </div>
                    {/* PROFESOR 2 */}
                <div className="flex items-center justify-between border-b py-4 border-gray-300">
                    <div className='flex items-center gap-3 font-medium text-gray-400'>
                        <div className='w-12 h-12 rounded-lg'>
                            <img
                                src={profeImg}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-sm">Nombre y Apellido</h3>
                        </div>
                    </div>
                </div>
                    {/* PROFESOR 3 */}
                <div className="flex items-center justify-between border-b py-4 border-gray-300">
                    <div className='flex items-center gap-3 font-medium text-gray-400'>
                        <div className='w-12 h-12 rounded-lg'>
                            <img
                                src={profeImg}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-sm">Nombre y Apellido</h3>
                        </div>
                    </div>
                </div>
                
            </section>

        </div>
      </section>
      <section className='w-full h-full'>
        <div className='w-full h-full flex flex-col sm:flex-row justify-evenly items-center gap-y-8 bg-[#F2F8FF] rounded-lg py-8 md:py-0'>
            <div className='w-[8.5rem] sm:relative flex max-h-max sm:h-[11.563rem] flex-col justify-center items-center text-center'>
                <h1 className='font-extrabold text-6xl mb-2'>10</h1>
                <span className='sm:absolute bottom-3 font-medium text-sm text-center'>Numero de videos</span>
            </div>
            <div className='max-h-max h-max flex flex-col justify-center items-center'>
                <CircularProgress 
                 sizeCircle={145}
                 strokeWidth={25}
                 colorFondo={"#ECEFF7"}
                 colorRelleno={"#A0CFCF"}
                 textContent={"17"}
                 fontWeight={"bold"}
                 fontSize={"1rem"}
                />
                <span className='w-[6rem] font-medium text-sm text-center'>Promedio de puntuacion</span>
            </div>
            <div className='flex flex-col max-h-max h-max justify-center items-center'>
                <CircularProgress 
                 sizeCircle={145}
                 strokeWidth={25}
                 colorFondo={"#ECEFF7"}
                 colorRelleno={"#B9EEFF"}
                 textContent={"5hrs"}
                 fontWeight={"bold"}
                 fontSize={".9rem"}
                />
                <span className='w-[5rem] font-medium text-sm text-center'>Tiempo en el sistema</span>
            </div>
        </div>
      </section>
    </div>
  )
}

export default EstadisticasProfesor
