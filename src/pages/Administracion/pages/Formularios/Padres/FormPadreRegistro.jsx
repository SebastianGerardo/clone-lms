import React, { useState } from "react";

const FormPadreRegistro = () => {

  const [colorBoton, setColorBoton] = useState(false)
  const [active, setActive] = useState(true)

  const activarInput = () => {
    setActive(!active)
  }

  return (
      <div className="bg-white h-full py-4 px-20">
          {/* BOTÓN DE EDITAR */}
        <div className="flex items-center justify-between mb-3">
          {/* BOTÓN DE ALUMNO */}
          <div className="w-full h-33 font-poppins text-22 leading-33 text-black">
          Padres de Familia
          </div>
          {/* BOTONES */}
            {
              active
             ?
              // BOTÓN EDITAR
            <div className="box-border bg-gray-50 border border-blue-500 rounded-lg">
              <button 
              onClick={activarInput}
              onMouseEnter={() => setColorBoton(!colorBoton)}
              onMouseLeave={() => setColorBoton(!colorBoton)}
              className={`flex gap-2 px-4 py-2 font-medium rounded-lg transition duration-75 ${colorBoton ? 'text-white bg-blue-500' : 'text-blue-500 bg-white'}`}
              >
                  {/* ICONO EDITAR */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke={colorBoton ? '#fff' : '#3B82F6'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z" stroke={colorBoton ? '#fff' : '#3B82F6'} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.91 4.1499C15.58 6.5399 17.45 8.4099 19.85 9.0899" stroke={colorBoton ? '#fff' : '#3B82F6'} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Edit</span>
              </button>
            </div>
              :
              // BOTÓN GUARDAR
            <div className="box-border bg-gray-50 border border-green-500 rounded-lg">
              <button 
              onClick={activarInput}
              onMouseEnter={() => setColorBoton(!colorBoton)}
              onMouseLeave={() => setColorBoton(!colorBoton)}
              className={`flex gap-2 px-4 py-2 font-poppins-medium rounded-lg transition duration-75 ${colorBoton ? 'text-white bg-green-500' : 'text-green-500 bg-white'}`}
              >
                  {/* ICONO GUARDAR */}
                
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18" stroke={colorBoton ? '#fff' : '#22C55E'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path opacity="0.4" d="M8 7H16" stroke={colorBoton ? '#fff' : '#22C55E'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path opacity="0.4" d="M9 11H15" stroke={colorBoton ? '#fff' : '#22C55E'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.2091 14.7698L14.6691 18.3098C14.5291 18.4498 14.3991 18.7098 14.3691 18.8998L14.1791 20.2498C14.1091 20.7398 14.4491 21.0798 14.9391 21.0098L16.2891 20.8198C16.4791 20.7898 16.7491 20.6598 16.8791 20.5198L20.4191 16.9798C21.0291 16.3698 21.3191 15.6598 20.4191 14.7598C19.5291 13.8698 18.8191 14.1598 18.2091 14.7698Z" stroke={colorBoton ? '#fff' : '#22C55E'} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.6992 15.2798C17.9992 16.3598 18.8392 17.1998 19.9192 17.4998" stroke={colorBoton ? '#fff' : '#22C55E'} strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <span>Guardar</span>
              </button>
            </div>
            }
        </div>

        <div className="w-full">
          <div className="w-full">
              {/* INFORMACION DEL PADRE */}
            <div className="flex justify-between items-center">
          
                <p className="text-left-gray-600 tracking-normal ml-0 text-xs font-poppins-normal leading-6 opacity-50">
                  Datos personales
                </p>
            </div>

            <div className="w-full mb-6 flex flex-col gap-3">

                {/* TITULO FORMULARIO */}
                <div className="w-full flex mb-6 relative top-9">
                    <div className="flex-1">
                        <h2 className="text-black leading-27 tracking-normal font-poppins-medium text-left text-lg mb-3">
                        Información personal
                        </h2>
                    </div>
                    <div className="flex-1 ">
                        <h2 className="text-black leading-27 tracking-normal font-poppins-medium text-right text-lg mb-3">
                        Mis hijos
                        </h2>
                    </div>
                </div>
  



                {/* FORMULARIO */}
              <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">

                  {/* NOMBRE */}
                <div className="w-full">
                  <label className="flex flex-col gap-y-1">
                      <span className="block text-sm font-poppins-medium text-gray-400">
                          Nombre
                      </span>
                      <input disabled={active} type="text" name="nombre" placeholder="Alex" className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500" />
                  </label>
                </div>

                  {/* APELLIDO */}
                <div className="w-full">
                  <label className="flex flex-col gap-y-1">
                      <span className="block text-sm font-poppins-medium text-gray-400">
                          Apellido
                      </span>
                      <input disabled={active} type="text" name="apellido" placeholder="Adriana" className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500" />
                  </label>
                </div>

                  {/* NIVEL */}
                <div className="w-full">
                  <label className="flex flex-col gap-y-1">
                      <span className="block text-sm font-poppins-medium text-gray-400">
                          Nombre
                      </span>
                      <input disabled={active} type="text" name="Nombre" placeholder="Secundaria" className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500" />
                  </label>
                </div>

                  {/* TIPO DE DOCUMENTO */}
                <div className="w-full flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-gray-400">
                      Tipo de Documento
                  </span>
                  <div className="flex items-center gap-3">
                    <select disabled={active} className="w-20 max-h-[3rem] bg-formButton border border-slate-300 rounded-lg p-3 focus:outline-none disabled:bg-gray-300/50 disabled:text-gray-500" defaultValue="Elige" name="tipoDocumento">
                      <option value="">DNI</option>
                      <option value="">Carnet de Extranjeria</option>
                      <option value="">Pasaporte</option>
                    </select>
                    <input disabled={active} type="text" name="email" placeholder="23226459" className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500" />
                  </div>
                </div>

                  {/* NUMERO DE CONTACTO */}
                <div className="w-full">
                  <label className="flex flex-col gap-y-1">
                      <span className="block text-sm font-poppins-medium text-gray-400">
                          Numero de contacto
                      </span>
                      <input disabled={active} type="text" name="numeroContacto" placeholder="222444999" className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500" />
                  </label>
                </div>

                  {/* GRADO */}
                <div className="w-full">
                  <label className="flex flex-col gap-y-1">
                      <span className="block text-sm font-poppins-medium text-gray-400">
                          Nombre de usuario
                      </span>
                      <input disabled={active} type="text" name="nombre-de-usuario" placeholder="Alex.com" className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500" />
                  </label>
                </div>

                  {/* EMAIL */}
                <div className="w-full col-start-1 col-end-3">
                  <label className="flex flex-col gap-y-1">
                      <span className="block text-sm font-poppins-medium text-gray-400">
                          Email
                      </span>
                      <input disabled={active} type="text" name="correo" placeholder="alexm@gmail.com" className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500" />
                  </label>
                </div>
                
                  {/* CICLOS - MATRICULA */}
                <div className="w-full">
                  <label className="flex flex-col gap-y-1">
                      <h1>Matricula</h1>
                      <span className="block text-sm font-poppins-medium text-gray-400">
                         Ciclos
                      </span>
                      <input disabled={active} type="text" name="ciclos" placeholder="4" className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500" />
                  </label>
                </div>
                
                  {/* ESTADO */}
                <div className="w-full lg:w-[50%] flex flex-col gap-y-1">
                  <span className="block text-smfont-poppins-mediumtext-gray-400">
                      Estado
                  </span>
                  <select disabled={active} className="max-h-[3rem] w-full rounded-lg p-3 bg-formButton border border-slate-300 focus:outline-none disabled:bg-gray-300/50 disabled:text-gray-500" defaultValue="sinValidar" name="tipoDocumento">
                    <option value="sinValidar">Sin validar</option>
                    <option value="registrado">Registrado</option>
                    <option value="cActivo">C.Activo</option>
                    <option value="cInactivo">C.Inactivo</option>
                  </select>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
  );
};
export default FormPadreRegistro;
