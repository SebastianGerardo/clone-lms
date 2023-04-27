import React, { useState } from "react";
import { InputBasic } from "../../../../../components/Inputs/InputBasic";
import { InputBasicNumber } from "../../../../../components/Inputs/InputNumber";
import useInputNumber from "../../../../../hooks/useInputNumber";

const RegistrarPadre = ({ handleChange, formData }) => {
  const { handleKeyDown } = useInputNumber();
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
              defaultValue={formData?.tipoDocumentoApoderado}
            >
              <option value="">---</option>
              <option value="DNI">DNI</option>
              <option value="Carnet de Extranjeria">
                Carnet de Extranjeria
              </option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
            <input
              value={formData?.dniApoderado}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              type="text"
              name="dniApoderado"
              autoComplete="off"
              pattern="[0-9]{8}"
              placeholder="12345678"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </div>
        </div>

        {/* NOMBRE */}
        <InputBasic pHolder={"Diego"} data={formData?.nombreApoderado} labelName={"Nombre"} onChange={handleChange} name={"nombreApoderado"} />

        {/* APELLIDO-PATERNO */}
        <InputBasic pHolder={"Ramirez"} data={formData?.apellidoPaternoApoderado} labelName={"Apellido Paterno"} onChange={handleChange} name={"apellidoPaternoApoderado"} />

        {/* APELLIDO-MATERNO */}
        <InputBasic pHolder={"Sanchez"} data={formData?.apellidoMaternoApoderado} labelName={"Apellido Materno"} onChange={handleChange} name={"apellidoMaternoApoderado"} />

        {/* NIVEL */}
        <InputBasic pHolder={"Calle Leonardo da Vinci, 7"} data={formData?.direccionApoderado} labelName={"Dirección"} onChange={handleChange} name={"direccionApoderado"} />

        {/* NUMERO DE CONTACTO */}
        <InputBasicNumber pHolder={"222444999"} data={formData?.telefonoApoderado} labelName={"Numero de contacto"} onChange={handleChange} name={"telefonoApoderado"} />

        {/* PARENTEZCO */}
        <div className="w-full  col-start-1 col-end-2">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Parentezco
            </span>
            <select
              value={formData?.parentezco}
              onChange={handleChange}
              name="parentezco"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            >
              <option value="Padre">Padre</option>
              <option value="Madre">Madre</option>
              <option value="Madre">Tutor</option>
            </select>
          </label>
        </div>

        {/* EMAIL */}
        <div className="col-span-2">
          <div className="w-full col-start-0 col-end-3">
            <InputBasic pHolder={"example@gmail.com"} data={formData?.correoApoderado} labelName={"Email"} onChange={handleChange} name={"correoApoderado"} type={"email"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrarPadre;
