import React from 'react'
import profeImg from '../../../../../assets/img/profesor-img.svg'

const Profesores = () => {
  return (
    <div className="flex flex-col place-items-center p-2 min-h-full h-full md:min-w-[50%] xl:min-w-[80%]">
        {/* TITULO Y BOTONES */}
      <section className='w-full p-2 flex justify-between items-center mb-3 mt-1'>
        <div className='flex items-center gap-2'>
            <h1 className="text-xl font-bold">Profesores</h1>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div className='flex gap-2 rounded-lg p-2 text-xs text-gray-400'>
            <button className='text-blue-500'>Editar</button>
            <button>Nuevo</button>
            <button>Borrar</button>
        </div>
      </section>

        {/* LISTA DE PROFESORES */}
      <section className="w-full p-2 rounded-xl overflow-y-auto flex flex-col gap-y-4">
            {/* PROFESOR 1 */}
        <div className="flex items-center gap-4 justify-between border-b pb-6 border-gray-300">
          <section className='flex gap-3'>
            <div className='w-12 h-12 rounded-lg'>
                <img
                    src={profeImg}
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <h3 className="font-semibold text-[#676767] text-sm">Nombre y Apellido</h3>
                <p className="text-gray-400 text-xs">hola@gmail.com</p>
            </div>
          </section>
          <section>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
                  <path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
                  <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
                </svg>
          </section>
        </div>
            {/* PROFESOR 2 */}
        <div className="flex items-center gap-4 justify-between border-b pb-6 border-gray-300">
          <section className='flex gap-3'>
            <div className='w-12 h-12 rounded-lg'>
                <img
                    src={profeImg}
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <h3 className="font-semibold text-[#676767] text-sm">Nombre y Apellido</h3>
                <p className="text-gray-400 text-xs">hola@gmail.com</p>
            </div>
          </section>
          <section>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
                  <path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
                  <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
                </svg>
          </section>
        </div>
            {/* PROFESOR 3 */}
        <div className="flex items-center gap-4 justify-between border-b pb-6 border-gray-300">
          <section className='flex gap-3'>
            <div className='w-12 h-12 rounded-lg'>
                <img
                    src={profeImg}
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <h3 className="font-semibold text-[#676767] text-sm">Nombre y Apellido</h3>
                <p className="text-gray-400 text-xs">hola@gmail.com</p>
            </div>
          </section>
          <section>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
                  <path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
                  <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
                </svg>
          </section>
        </div>
            {/* PROFESOR 4 */}
        <div className="flex items-center gap-4 justify-between border-b pb-6 border-gray-300">
          <section className='flex gap-3'>
            <div className='w-12 h-12 rounded-lg'>
                <img
                    src={profeImg}
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <h3 className="font-semibold text-[#676767] text-sm">Nombre y Apellido</h3>
                <p className="text-gray-400 text-xs">hola@gmail.com</p>
            </div>
          </section>
          <section>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
                  <path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
                  <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" stroke="#9CA3AF" strokeWidth="1.5"/>
                </svg>
          </section>
        </div>
      </section>

    </div>
  )
}

export default Profesores
