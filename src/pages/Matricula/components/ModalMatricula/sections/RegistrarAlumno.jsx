import React from "react";

const RegistrarAlumno = ({ handleChange, formData }) => {
  return (
    <div className="text-start flex flex-col gap-4">
      <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
        Información del Alumno
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">
        
        {/* TIPO DE DOCUMENTO */}
        <div className="w-full flex flex-col gap-y-1">
          <span className="block text-sm font-medium text-gray-400">
            Tipo de Documento
          </span>
          <div className="flex items-center gap-3">
            <select
              className="w-20 max-h-[3rem] bg-formButton border border-slate-300 rounded-lg p-3 focus:outline-none disabled:bg-gray-300/50 disabled:text-gray-500"
              name="tipoDocumentoAlumno"
              onChange={handleChange}
            >
              <option value="">---</option>
              <option
                selected={formData.tipoDocumentoAlumno == "DNI"}
                value="DNI"
              >
                DNI
              </option>
              <option
                selected={
                  formData.tipoDocumentoAlumno == "Carnet de Extranjeria"
                }
                value="Carnet de Extranjeria"
              >
                Carnet de Extranjeria
              </option>
              <option
                selected={formData.tipoDocumentoAlumno == "Pasaporte"}
                value="Pasaporte"
              >
                Pasaporte
              </option>
            </select>
            <input
              value={formData?.dniAlumno}
              onChange={handleChange}
              type="text"
              name="dniAlumno"
              autoComplete="off"
              placeholder="12345678"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </div>
        </div>
        
        {/* NOMBRE */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Nombre
            </span>
            <input
              value={formData?.nombreAlumno}
              onChange={handleChange}
              type="text"
              name="nombreAlumno"
              placeholder="Diego"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* APELLIDO */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Apellido
            </span>
            <input
              value={formData?.apellidoAlumno}
              onChange={handleChange}
              type="text"
              name="apellidoAlumno"
              placeholder="Ramirez"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* NIVEL */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Nivel
            </span>
            <input
              value={formData?.nivelAlumno}
              onChange={handleChange}
              type="text"
              name="nivelAlumno"
              placeholder="Secundaria"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        

        {/* NUMERO DE CONTACTO */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Numero de contacto
            </span>
            <input
              value={formData?.telefonoAlumno}
              onChange={handleChange}
              type="text"
              name="telefonoAlumno"
              placeholder="222444999"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* GRADO */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Grado
            </span>
            <input
              value={formData?.gradoAlumno}
              onChange={handleChange}
              type="text"
              name="gradoAlumno"
              placeholder="5to"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* EMAIL */}
        <div className="w-full col-start-1 col-end-3">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Email
            </span>
            <input
              value={formData?.correoAlumno}
              onChange={handleChange}
              type="email"
              name="correoAlumno"
              placeholder="example@gmail.com"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

      </form>
    </div>
  );
};

export default RegistrarAlumno;