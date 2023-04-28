import React from "react";

const RegistrarLocal = ({ handleChange, formData }) => {
  return (
    <div className="text-start flex flex-col gap-4">
      <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
        Información de Identidad del Salon
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">
        {/* Empresa*/}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
            Empresa
            </span>
            <input
              value={formData?.nombreAlumno}
              onChange={handleChange}
              type="text"
              name="empresa"
              placeholder="Empresa de Servicios Educativos Albert Einstein - Academia Encinas"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* Local */}
        <div className="w-full col-span-2">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
            Local
            </span>
            <input
              value={formData?.apellidoAlumno}
              onChange={handleChange}
              type="text"
              name="local"
              placeholder="Sede 1 - Jr. Huaylas Nro 220"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* Pabelón */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
            Pabelón
            </span>
            <input
              value={formData?.nivelAlumno}
              onChange={handleChange}
              type="text"
              name="pabelon"
              placeholder="C"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>
      {/* Piso */}
      <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
            Piso
            </span>
            <input
              value={formData?.nivelAlumno}
              onChange={handleChange}
              type="text"
              name="piso"
              placeholder="2do"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>
           {/* Codigo del Aula */}
           <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
            Codigo del Aula
            </span>
            <input
              value={formData?.nivelAlumno}
              onChange={handleChange}
              type="number"
              name="codigoAuola"
              placeholder="C201"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

     {/* Maximo de alumnos */}
     <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
            Maximo de alumnos
            </span>
            <input
              value={formData?.nivelAlumno}
              onChange={handleChange}
              type="number"
              name="maximoAlumnos"
              placeholder="60"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>



      </form>
    </div>
  );
};

export default RegistrarLocal;
