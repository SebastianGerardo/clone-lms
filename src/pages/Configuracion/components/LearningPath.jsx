import React, { useState } from "react";

const LearningPath = () => {
  const [colorBoton, setColorBoton] = useState(false);
  const [active, setActive] = useState(true);

  const activarInput = () => {
    setActive(!active);
  };

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
                  LearningPath
                </h2>
              </div>
            </div>

            {/* FORMULARIO */}
            <form className="flex flex-col sm:grid sm:grid-cols-2 my-0 gap-y-2 gap-x-5 w-full min-[1400px]:w-[50%]">
              {/* NOMBRE */}
              <div className="w-full">
                <label className="flex  flex-col gap-y-1 ">
                  <span className="block text-sm font-poppins-medium text-black">
                    Duracion
                  </span>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Semana 1"
                    className="p-3  mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

              {/* APELLIDO */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                  Semana 1
                  </span>
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Curso 1"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

              <div className="w-full col-start-1 col-end-3">
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
export default LearningPath;