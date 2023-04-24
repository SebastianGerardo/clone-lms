import React, { useMemo, useState } from 'react'
import { MoreIcon } from '../../../../../assets/svgs/NormalSvgs'
import CircularProgress from '../../../../../components/ProgressStatus/CircularProgress'
import { ApiCiclo } from '../../../../../helpers/ApiAdministracion'
import {NavLink} from 'react-router-dom'

const Ciclo = () => {
  const [dataApi, setDataApi] = useState(ApiCiclo)
  const [index, setIndex] = useState(0)
  const [selectedCicloId, setSelectedCicloId] = useState(dataApi.length > 0 ? dataApi[0].id : null)

  const handleCicloClick = (ciclo) => {
    if (index + 1 !== ciclo) {
      setIndex(ciclo - 1)
      setSelectedCicloId(ciclo)
    }
  }

  const dataCiclo = useMemo(() => {
    return dataApi[index]
  })

  return (
    <div className='bg-[#F2F8FF] max-w-max flex flex-col justify-between sm:flex-row md:flex-row lg:flex-row xl:flex-row w-max lg:w-full rounded-2xl p-6 pb-5  gap-10'>
        {/* RADIAL DEL CIRCULO */}
      <section className="bg-primary-100  rounded-xl text-gray-300 flex flex-col justify- gap-6">
        <div className='flex gap-2 items-center'>
          <select className='cursor-pointer border-none bg-transparent text-xl text-[#11223E] font-extrabold outline-none' name="" id="" onChange={(e) => handleCicloClick(parseInt(e.target.value))}>
              {dataApi.map((ciclo) => (
                  <option key={ciclo.id} value={ciclo.id}>{ciclo.nombre}</option>
              ))}
          </select>
        </div>
        <div className='h-full flex flex-col justify-center items-center gap-2'>
            <CircularProgress 
              percentage={10} 
              sizeCircle={230}
              progressCircle={dataCiclo.process}
              textContent={dataCiclo.nombre}
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
          <div className='flex justify-end mr-1 cursor-pointer'>
              <MoreIcon width={20} height={20} color={"#9CA3AF"}/>
          </div>

            {/* BOTONES EDITAR */}
          <section className='flex justify-evenly bg-white rounded-lg p-2 text-xs text-[#4B4C53]'>
                <NavLink className='hover:text-blue-500 transition-all duration-100' to='/dashboard/administracion/edit/ciclos' state={{ logged: true }}>Editar</NavLink>
                <NavLink  className='hover:text-blue-500 transition-all duration-100' to='/dashboard/administracion/edit/ciclos' state={{ logged: true }}>Nuevo</NavLink>
                <button className='hover:text-blue-500 transition-all duration-100'>Borrar</button>
          </section>

            {/* FECHA INICIO */}
          <section className='flex flex-col gap-y-1 font-bold mt-4'>
              <h1 className='text-[#11223E] font-extrabold'>FECHA INICIO</h1>
              <div className='flex gap-2'>
                  <span className='text-[#3751FE] text-3xl'>{dataCiclo?.fechaInicio}</span> 
                  <span className='flex items-end'>
                      <h2 className='text-[#48566F]'>de {dataCiclo?.mesInicio}</h2>
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
