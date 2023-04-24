import React, { useState } from "react";

const RegistrarPadre = ({ handleChange, formData }) => {
  return (
    <div className="text-start flex flex-col gap-4">
      <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
        Información del Apoderado
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
              name="tipoDocumentoApoderado"
              onChange={handleChange}
            >
              <option value="">---</option>
              <option
                selected={formData?.tipoDocumentoApoderado == "DNI"}
                value="DNI"
              >
                DNI
              </option>
              <option
                selected={
                  formData?.tipoDocumentoApoderado == "Carnet de Extranjeria"
                }
                value="Carnet de Extranjeria"
              >
                Carnet de Extranjeria
              </option>
              <option
                selected={formData?.tipoDocumentoApoderado == "Pasaporte"}
                value="Pasaporte"
              >
                Pasaporte
              </option>
            </select>
            <input
              value={formData?.dniApoderado}
              onChange={handleChange}
              type="text"
              name="dniApoderado"
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
              value={formData?.nombreApoderado}
              onChange={handleChange}
              type="text"
              name="nombreApoderado"
              placeholder="Diego"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* APELLIDO-PATERNO */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Apellido Paterno
            </span>
            <input
              value={formData?.apellidoPaternoApoderado}
              onChange={handleChange}
              type="text"
              name="apellidoPaternoApoderado"
              placeholder="Ramirez"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* APELLIDO-MATERNO */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Apellido Materno
            </span>
            <input
              value={formData?.apellidoMaternoApoderado}
              onChange={handleChange}
              type="text"
              name="apellidoMaternoApoderado"
              placeholder="Ramirez"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>
        {/* NIVEL */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Dirección
            </span>
            <input
              value={formData?.direccionApoderado}
              onChange={handleChange}
              type="text"
              name="direccionApoderado"
              placeholder="Calle Leonardo da Vinci, 7"
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
              value={formData?.telefonoApoderado}
              onChange={handleChange}
              type="text"
              name="telefonoApoderado"
              placeholder="222444999"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* PARENTEZCO */}
        <div className="w-full  col-start-1 col-end-2">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Parentezco
            </span>
            <input
              value={formData?.parentezco}
              onChange={handleChange}
              type="text"
              name="parentezco"
              placeholder="Padre/Madre"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* EMAIL */}
        <div className="col-span-2">
          <div className="w-full col-start-0  col-end-3">
            <label className="flex flex-col gap-y-1">
              <span className="block text-sm font-medium text-gray-400">
                Email
              </span>
              <input
                value={formData?.correoApoderado}
                onChange={handleChange}
                type="text"
                name="correoApoderado"
                placeholder="example@gmail.com"
                className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrarPadre;