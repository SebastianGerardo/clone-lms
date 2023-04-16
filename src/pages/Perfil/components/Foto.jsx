import React from "react";
import Prueba from '../../../assets/img/prueba.jpg';

const Foto = () => {
  return (
    <div className="bg-white h-full  px-4">
      {/* BOTÓN DE EDITAR */}
      <div className="w-full">
        <div className="w-full">
          <div className="w-full col-start-1 col-end-4">
            {/* TITULO FORMULARIO */}
            <div className="w-full flex mb-2 relative ">
              <div className="flex justify-start border-b border-gray-300 mt-1 flex-wrap w-full mx-auto lg:mx-0">
                <h2 className="text-base font-medium text-blue-600 leading-27 tracking-normal font-poppins-medium text-left mb-3">
                  Foto{" "}
                </h2>
              </div>
            </div>

            {/* FORMULARIO */}
            <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">

              <div className="w-full col-start-1 col-end-4">
                <div className="flex flex-col items-center mt-3">
                  {/* SVG DE USUARIO */}
                  <img
          src=""
          alt="Foto de usuario"
          className="mt-0"
        />                  
                </div>

                <div className="flex flex-wrap items-center mt-3 justify-center lg:justify-normal gap-3">
                  {/* IMPORTAR IMAGEN */}
                  <button
                    type="submit"
                    className="w-full max-w-max md:flex-1 border border-slate-300 bg-gray-200 text-gray-800 px-5 py-3 rounded-md text-xs"
                  >
                    IMPORTAR IMAGEN
                  </button>

                  {/* GUARDAR CAMBIOS */}
                  <button
                    type="submit"
                    className="w-full mb-0 max-w-max md:flex-1 border border-slate-300 bg-blue-700 text-white px-5 py-3 rounded-md text-xs"
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

export default Foto;