import React from "react";

const Datos = () => {
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
                  Datos del Alumno{" "}
                </h2>
              </div>
            </div>

            {/* FORMULARIO */}
            <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">
              {/* NOMBRE */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                    Nombres
                  </span>
                  <input
                    type="text"
                    name="nombres"
                    placeholder="Nombres"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

              {/* APELLIDO-PATERNO */}
              <div className="w-full">
                <label className="flex  flex-col gap-y-1 ">
                  <span className="block text-sm font-poppins-medium text-black">
                    Apellido Paterno
                  </span>
                  <input
                    type="text"
                    name="apellidoPaterno"
                    placeholder="Apellido Paterno"
                    className="p-3  mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

              {/* APELLIDO-MATERNO */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                    Apellido Materno
                  </span>
                  <input
                    type="text"
                    name="apellidoMaterno"
                    placeholder="Apellido Materno"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>
              {/* SEXO */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                    Sexo
                  </span>
                  <select
                    name="sexo"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  >
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                  </select>
                </label>
              </div>

              {/* DNI */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                    DNI
                  </span>
                  <input
                    type="text"
                    name="dni"
                    placeholder="DNI"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                    pattern="[0-9]{8}"
                    title="Ingresa un número de 8 dígitos"
                    required
                  />
                </label>
              </div>

              {/* FECHA-NACIMIENTO */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                    Fecha de Nacimiento
                  </span>
                  <input
                    type="date"
                    name="fechaNacimiento"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

              {/* DOMICILIO */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                    Domicilio Actual
                  </span>
                  <input
                    type="text"
                    name="domicilioActual"
                    placeholder="Domicilio Actual"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

              {/* TELEFONO */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                    Teléfono
                  </span>
                  <input
                    type="text"
                    name="telefono"
                    pattern="[0-9]{8}"
                    placeholder="Teléfono"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

              {/* EMAIL */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                    Email
                  </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="Example@gmail.com"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

              <div className="w-full col-start-1 col-end-4">
                {/* ESTADO-CIVIL */}
                <div className="flex w-full">
                  <div className="w-full">
                    <label className="flex flex-col gap-y-1">
                      <span className="block text-sm font-poppins-medium text-black">
                        Estado Civil
                      </span>
                      <select
                        name="estadoCivil"
                        className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500 "
                      >
                        <option value="soltero">Soltero</option>
                        <option value="casado">Casado</option>
                        <option value="viudo">Viudo</option>
                        <option value="divorciado">Divorciado</option>
                      </select>
                    </label>
                  </div>
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
export default Datos;
