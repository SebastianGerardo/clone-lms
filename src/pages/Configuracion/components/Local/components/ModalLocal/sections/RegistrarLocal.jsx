import React from "react";

const RegistrarLocal = ({ handleChange, formData, dataEmpresas }) => {
  return (
    <div className="text-start flex flex-col gap-4">
      <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
        Información de Identidad del Local
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">
        {/* Empresa*/}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Empresa
            </span>
            <select
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
              defaultValue={formData?.company}
              onChange={handleChange}
              name="company"
              id=""
            >
              <option value="">Seleccione una empresa</option>
              {dataEmpresas.length > 0 &&
                dataEmpresas.map((empresa) => (
                  <option key={empresa.id} value={empresa.id}>
                    {empresa.tradeName}
                  </option>
                ))}
            </select>
          </label>
        </div>

        <div className="w-full col-span-2">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Nombre del local
            </span>
            <input
              value={formData?.name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Empresa de Servicios Educativos Albert Einstein - Academia Encinas"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* Codigo Local UGEL */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Codigo Local UGEL
            </span>
            <input
              value={formData?.ugelCode}
              onChange={handleChange}
              type="text"
              name="ugelCode"
              placeholder="408973"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* <div className="w-full col-span-2">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Ubigeo
            </span>
            <input
              value={formData?.ubigean}
              onChange={handleChange}
              type="text"
              name="ubigean"
              placeholder="123456"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div> */}

        {/* País */}
        <div className="w-full col-span-3">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              País
            </span>

            <select
              defaultValue={formData?.country}
              name="country"
              onChange={handleChange}
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            >
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
        <div className="w-full col-span-2">
          <label className="flex flex-col gap-y-1"></label>
        </div>
      </form>
    </div>
  );
};

export default RegistrarLocal;
