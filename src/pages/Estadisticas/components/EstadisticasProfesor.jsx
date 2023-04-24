import React, { useState } from 'react'
import { useMemo } from 'react'
import profeImg from '../../../assets/img/user-img.svg'
import { ArrowDownIcon2 } from '../../../assets/svgs/NormalSvgs'
import CircularProgress from '../../../components/ProgressStatus/CircularProgress'
import { ApiProfesor } from '../../../helpers/ApiEstadisticas'

const EstadisticasProfesor = () => {
    const [dataApi, setDataApi] = useState(ApiProfesor)
    const [index, setIndex] = useState(0)
    const [selectedProfesorId, setSelectedProfesorId] = useState(dataApi.length > 0 ? dataApi[0].id : null)

    // ESTA FUNCION SE ENCARGA DE CAMBIAR EL INDEX DEL PROFESOR SELECCIONADO
    const handleProfesorClick = (profesor) => {
        if(index + 1 !== profesor.id) {
            setIndex(profesor.id - 1)
            setSelectedProfesorId(profesor.id)
        }
    }
    
    // EL MEMO ALMACENA LA ULTIMA DATA, Y SOLO RENDERIZA SI HAY UN CAMBIO EN EL INDEX
    const profesorData = useMemo(() => {
        return dataApi[index]
    }, [index])
    
  return (
    <div className='flex flex-col md:flex-row gap-x-8 md:min-h-[18rem] md:h-[18rem]'>
      <section className='flex justify-center md:justify-normal'>
        <div className="flex flex-col place-items-center w-[18.625rem] min-h-full h-full md:min-w-[50%] xl:min-w-[80%]">
                {/* TITULO Y BOTONES */}
            <section className='w-full p-2 flex justify-between items-center mb-3 mt-1'>
                <div className='flex items-center gap-2'>
                    <h1 className="text-xl font-bold">Profesores</h1>
                    <ArrowDownIcon2 />
                </div>
            </section>

                {/* LISTA DE PROFESORES */}
            <section className="w-full p-2 rounded-xl overflow-y-auto flex flex-col gap-y-3">
                {
                    dataApi.length > 0 ? (dataApi.map((profesor) => (
                        <div 
                         key={profesor.id} 
                         onClick={() => handleProfesorClick(profesor)} 
                         className='flex items-center justify-between border-b pb-4'
                        >
                            <div 
                             className={`w-full flex items-center gap-3 font-medium cursor-pointer border-2 py-3 px-4 rounded-lg text-gray-400 hover:border-[#00B0FF] transition-all duration-200 ease-in-out
                             ${profesor.id === selectedProfesorId ? 'border-[#00B0FF]' : 'border-gray-300'}`}
                              
                            >
                                <div className='w-12 h-12 rounded-lg'>
                                    <img
                                        src={profeImg}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-sm">{profesor.nombres}</h3>
                                </div>
                            </div>
                        </div>
                    ))) 
                    : 
                    (
                        <h1 className='text-center text-base text-gray-400'>No hay profesores disponibles en este momento.</h1>
                    )
                }
            </section>
        </div>
      </section>

      <section className='w-full h-full'>
        <div className='w-full h-full flex flex-col sm:flex-row justify-evenly items-center gap-y-8 bg-[#F2F8FF] rounded-lg py-8 md:py-0'>
            <div className='w-[8.5rem] sm:relative flex max-h-max sm:h-[11.563rem] flex-col justify-center items-center text-center'>
                <h1 className='font-extrabold text-6xl mb-2'>{profesorData.estadisticas.numeroVideos || "0"}</h1>
                <span className='sm:absolute bottom-3 font-medium text-sm text-center'>Numero de videos</span>
            </div>
            <div className='max-h-max h-max flex flex-col justify-center items-center'>
                <CircularProgress 
                 sizeCircle={145}
                 strokeWidth={25}
                 progressCircle={profesorData.estadisticas.promedioPuntuacion || "0"}
                 colorFondo={"#ECEFF7"}
                 colorRelleno={"#A0CFCF"}
                 textContent={profesorData.estadisticas.promedioPuntuacion || "0"}
                 fontWeight={"bold"}
                 fontSize={"1rem"}
                />
                <span className='w-[6rem] font-medium text-sm text-center'>Promedio de puntuacion</span>
            </div>
            <div className='flex flex-col max-h-max h-max justify-center items-center'>
                <CircularProgress 
                 sizeCircle={145}
                 strokeWidth={25}
                 progressCircle={profesorData.estadisticas.tiempoSistema || "0"}
                 colorFondo={"#ECEFF7"}
                 colorRelleno={"#B9EEFF"}
                 textContent={`${profesorData.estadisticas.tiempoSistema || "0"}hrs`}
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
