import React from "react";

const DatosAcademicos = () => {
  return (
    <div className="bg-white h-full  px-4">
      {/* BOTÓN DE EDITAR */}
      <div className="w-full">
        <div className="w-full">
          <div className="w-full mb-0 flex flex-col gap-3">
            {/* TITULO FORMULARIO */}
            <div className="w-full flex mb-2 relative ">
              <div className="flex justify-start border-b border-gray-300 mt-1 flex-wrap w-full mx-auto lg:mx-0">
                <h2 className="text-base font-medium text-blue-600 leading-27 tracking-normal font-poppins-medium text-left mb-3">
                  Datos Academicos{" "}
                </h2>
            
              </div>
            </div>

            {/* FORMULARIO */}
            <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">
              {/* SEDE */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                  Sede
                  </span>
                  <input
                    type="text"
                    name="sede"
                    placeholder="Sede"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

              {/* FACULTAD */}
              <div className="w-full">
                <label className="flex  flex-col gap-y-1 ">
                  <span className="block text-sm font-poppins-medium text-black">
                  Facultad
                  </span>
                  <input
                    type="text"
                    name="facultad"
                    placeholder="Facultad"
                    className="p-3  mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

              {/* ESCUELA */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                  Escuela
                  </span>
                  <input
                    type="text"
                    name="escuela"
                    placeholder="Escuela"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>
              {/* AÑO-INGRESO */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                  Año de ingreso
                  </span>
                  <select
                    name="añoDeIngreso"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  >
                    <option value="masculino">2022</option>
                    <option value="femenino">2023</option>
                  </select>
                </label>
              </div>

              {/* NRO.MATRICULA */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                  Nro. de matrícula
                  </span>
                  <input
                    type="text"
                    name="Nro.deMatrícula                    "
                    placeholder="Nro. de matrícula                    "
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

  
              {/* CONDICION */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                  Condición                  </span>
                  <input
                    type="text"
                    name="condición"
                    placeholder="Condición"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>
              <div className="w-full col-start-1 col-end-4">
              {/* CURRICULA */}
              <div className="w-full">
          
              </div>
                <div className="flex flex-wrap items-center mt-3 justify-center lg:justify-normal gap-3">
                  {/* PAGAR-EMITIR COMPROBANTE */}
                  <button
                    type="submit"
                    className="w-full max-w-max md:flex-1 border border-slate-300 bg-blue-700 text-white px-5 py-3 rounded-md text-xs"
                  >
                    GUARDAR CAMBIOS
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DatosAcademicos;