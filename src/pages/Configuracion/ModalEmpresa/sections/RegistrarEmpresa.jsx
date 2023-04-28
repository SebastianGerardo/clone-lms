import React from "react";

const RegistrarEmpresa = ({ handleChange, formData }) => {
  return (
    <div className="text-start flex flex-col gap-4">
      <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
        Información de Identidad de la Empresa
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">
        {/* Nombre Comercial */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Nombre Comercial
            </span>
            <input
              value={formData?.nombreAlumno}
              onChange={handleChange}
              type="text"
              name="nombreComercial"
              placeholder="Academia Encinas"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* Razón Social */}
        <div className="w-full col-span-2">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Razón Social
            </span>
            <input
              value={formData?.apellidoAlumno}
              onChange={handleChange}
              type="text"
              name="razonSocial"
              placeholder="Empresa de Servicios Educativos Albert Einstein - Academia Encinas"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* Tipo de Documento */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Tipo de Documento
            </span>
            <input
              value={formData?.nivelAlumno}
              onChange={handleChange}
              type="number"
              name="ruc"
              placeholder="RUC"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* Número de documento */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Número de documento
            </span>
            <input
              value={formData?.telefonoAlumno}
              onChange={handleChange}
              type="number"
              name="telefonoAlumno"
              placeholder="20406889191"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* Nombre corto */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Nombre corto
            </span>
            <input
              value={formData?.gradoAlumno}
              onChange={handleChange}
              type="text"
              name="nombreCorto"
              placeholder="ESEAE SRL"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* País */}
        <div className="w-full col-start-1 col-end-4">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              País
            </span>

            <select className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500">
              <option value="">Selecciona un país</option>
              <option value="Argentina">Argentina</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Brasil">Brasil</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cuba">Cuba</option>
              <option value="Dominica">Dominica</option>
              <option value="Ecuador">Ecuador</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Haití">Haití</option>
              <option value="Honduras">Honduras</option>
              <option value="Jamaica">Jamaica</option>
              <option value="México">México</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Panamá">Panamá</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Perú">Perú</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="República Dominicana">República Dominicana</option>
              <option value="Trinidad y Tobago">Trinidad y Tobago</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </label>
        </div>
      </form>
    </div>
  );
};

export default RegistrarEmpresa;
