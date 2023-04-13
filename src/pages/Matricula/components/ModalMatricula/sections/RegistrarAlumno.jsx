import React, { useState } from "react";

const RegistrarAlumno = () => {
  const [colorBoton, setColorBoton] = useState(false);
  const [active, setActive] = useState(true);
  const [registro, setRegistro] = useState({});

  const handleChange = (e) => {
    setRegistro({
      ...registro,
      [e.target.name]: e.target.value,
    });
  };

  const activarInput = () => {
    setActive(!active);
  };
  return (
    <div className="text-start flex flex-col gap-4">
      <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
        Alumno
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">
        {/* NOMBRE */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Nombre
            </span>
            <input
              onChange={handleChange}
              type="text"
              name="nombre"
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
              onChange={handleChange}
              type="text"
              name="apellido"
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
              onChange={handleChange}
              type="text"
              name="nivel"
              placeholder="Secundaria"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* TIPO DE DOCUMENTO */}
        <div className="w-full flex flex-col gap-y-1">
          <span className="block text-sm font-medium text-gray-400">
            Tipo de Documento
          </span>
          <div className="flex items-center gap-3">
            <select
              className="w-20 max-h-[3rem] bg-formButton border border-slate-300 rounded-lg p-3 focus:outline-none disabled:bg-gray-300/50 disabled:text-gray-500"
              defaultValue="Elige"
              name="tipoDocumento"
              onChange={handleChange}
            >
              <option value="">DNI</option>
              <option value="">Carnet de Extranjeria</option>
              <option value="">Pasaporte</option>
            </select>
            <input
              onChange={handleChange}
              type="text"
              name="dni"
              autoComplete="off"
              placeholder="12345678"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </div>
        </div>

        {/* NUMERO DE CONTACTO */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Numero de contacto
            </span>
            <input
              onChange={handleChange}
              type="text"
              name="numeroContacto"
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
              onChange={handleChange}
              type="text"
              name="grado"
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
              onChange={handleChange}
              type="text"
              name="correo"
              placeholder="example@gmail.com"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* COLEGIO */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Colegio
            </span>
            <input
              onChange={handleChange}
              type="text"
              name="colegio"
              placeholder="I.E.P SAN JOSÉ"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default RegistrarAlumno;
