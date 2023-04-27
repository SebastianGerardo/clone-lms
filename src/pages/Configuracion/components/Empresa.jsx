import React from "react";

const Empresa = () => {
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
                  Empresa{" "}
                </h2>
              </div>
            </div>

            {/* FORMULARIO */}
            <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                    Nombre Comercial
                  </span>
                  <input
                    type="text"
                    name="nombreComercial"
                    placeholder="Academia Encinas"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

              {/* Razón Social*/}
              <div className="w-full col-span-2">
                <label className="flex  flex-col gap-y-1 ">
                  <span className="block text-sm font-poppins-medium text-black">
                    Razón Social{" "}
                  </span>
                  <input
                    type="text"
                    name="razonSocial"
                    placeholder="Empresa de Servicios Educativos Albert Einstein - Academia Encinas"
                    className="p-3  mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

              {/* Tipo de Documento */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                  Tipo de Documento
                  </span>
                  <input
                    type="number"
                    name="ruc"
                    placeholder="RUC"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>
              {/* Número de documento */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                  Número de documento
                  </span>
                  <input
                    type="number"
                    name="documento"
                    placeholder="20406889191"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

              {/* Nombre corto */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                  Nombre corto
                  </span>
                  <input
                    type="text"
                    name="nombreCorto"
                    placeholder="ESEAE SRL"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>

              {/* PAIS */}
              <div className="w-full col-span-1">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                    País
                  </span>
                  <select
                        name="estadoCivil"
                        className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500 "
                      >
                        <option value="Perú">Perú</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Chile">Chile</option>
                        <option value="divorciado">Bolivia</option>
                      </select>
                </label>
              </div>
              <div className="w-full col-span-2">
                <label className="flex flex-col gap-y-1">
             
                </label>
              </div>

              {/* DEPARTAMENTO */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                    Departamento
                  </span>
                  <select
                        name="departamento"
                        className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500 "
                      >
                        <option value="Amazonas">Amazonas</option>
                        <option value="Áncash">Áncash</option>
                        <option value="Apurímac">Apurímac</option>
                        <option value="Arequipa">Arequipa</option>
                        <option value="Ayacucho">Ayacucho</option>
                        <option value="Cajamarca">Cajamarca</option>
                        <option value="Callao">Callao</option>
                        <option value="Cusco">Cusco</option>
                        <option value="Huancavelica">Huancavelica</option>
                        <option value="Huánuco">Huánuco</option>
                        <option value="Ica">Ica</option>
                        <option value="Junín">Junín</option>
                        <option value="La Libertad">La Libertad</option>
                        <option value="Lambayeque">Lambayeque</option>
                        <option value="Lima">Lima</option>
                        <option value="Loreto">Loreto</option>
                        <option value="Madre de Dios">Madre de Dios</option>
                        <option value="LMoqueguaima">Moquegua</option>
                        <option value="Pasco">Pasco</option>
                        <option value="Piura">Piura</option>
                        <option value="Puno">Puno</option>
                        <option value="San Martín">San Martín</option>
                        <option value="Tacna">Tacna</option>
                        <option value="Tumbes">Tumbes</option>
                        <option value="Ucayali">Ucayali</option>

                      </select>
                </label>
              </div>

              {/* Provincia */}
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-poppins-medium text-black">
                  Provincia
                  </span>
                  <select
                        name="provincia"
                        className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500 "
                      >
                        <option value="Huaraz">Huaraz</option>
                        <option value="Cajamarca">Cajamarca</option>
                        <option value="Apurímac">Apurímac</option>
                        <option value="Ica">Ica</option>
                      </select>
                </label>
              </div>

                {/* Distrito */}
                  <div className="w-full">
                    <label className="flex flex-col gap-y-1">
                      <span className="block text-sm font-poppins-medium text-black">
                      Distrito
                      </span>
                      <select
                        name="distrito"
                        className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500 "
                      >
                        <option value="Miraflores-Lima">Miraflores - Lima</option>
                        <option value="Trujillo - La Libertad">Trujillo - La Libertad</option>
                        <option value="Víctor Larco Herrera - La Libertad">Víctor Larco Herrera - La Libertad</option>
                        <option value="La Molina - Lima">La Molina - Lima</option>
                      </select>
                    </label>
                  </div>
                {/*Dirección legal */}
                <div className="w-full col-span-2">
                <label className="flex flex-col gap-y-1">
                <span className="block text-sm font-poppins-medium text-black">
                Dirección legal
                  </span>
                  <input
                    type="text"
                    name="direccionLegal"
                    placeholder="Jr. Huaylas Nro 220"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>
               {/*Teléfono*/}
               <div className="w-full ">
                <label className="flex flex-col gap-y-1">
                <span className="block text-sm font-poppins-medium text-black">
                Teléfono
                  </span>
                  <input
                    type="number"
                    name="telefono"
                    placeholder="043-422110"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>
               {/*email */}
               <div className="w-full ">
                <label className="flex flex-col gap-y-1">
                <span className="block text-sm font-poppins-medium text-black">
                Email
                  </span>
                  <input
                    type="text"
                    name="email"
                    placeholder="consultas@ae.edu.pe"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>
                 {/*Página webmail */}
                 <div className="w-full ">
                <label className="flex flex-col gap-y-1">
                <span className="block text-sm font-poppins-medium text-black">
                Página web
                  </span>
                  <input
                    type="text"
                    name="paginaWeb"
                    placeholder="www.academiaencinas.edu.pe"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>
                 {/*Representante legal */}
                 <div className="w-full ">
                <label className="flex flex-col gap-y-1">
                <span className="block text-sm font-poppins-medium text-black">
                Representante legal
                  </span>
                  <input
                    type="text"
                    name="representanteLegal"
                    placeholder="Pineda Sifuentes José"
                    className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Empresa;
