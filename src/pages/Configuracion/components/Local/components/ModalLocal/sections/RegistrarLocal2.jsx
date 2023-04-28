import React, { useState } from "react";
import { InputBasic } from "../../../../../../../components/Inputs/InputBasic";
import { InputBasicNumber } from "../../../../../../../components/Inputs/InputNumber";
import useInputNumber from "../../../../../../../hooks/useInputNumber";

const RegistrarLocal2 = ({ handleChange, formData }) => {
  const { handleKeyDown } = useInputNumber();
  return (
    <div className="text-start flex flex-col gap-4">
      <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
        Información de Contacto del Local
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">

        {/* Departamento */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-poppins-medium text-black">
              Departamento
            </span>
            <select
              name="departamento"
              className="p-3 mt-[0.3125rem] h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500 "
            >
              <option value="Amazonas">Selecciona un Departamento</option>

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
            <span className="block text-sm font-medium text-gray-400">
              Provincia
            </span>

            <select className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500">
              {" "}
              <optgroup label="La Libertad">
                <option value="trujillo">Trujillo</option>
                <option value="ascope">Ascope</option>
                <option value="chepen">Chepén</option>
                <option value="pacasmayo">Pacasmayo</option>
                <option value="julcan">Julcán</option>
              </optgroup>
              <optgroup label="Lima">
                <option value="lima">Lima</option>
                <option value="barranca">Barranca</option>
                <option value="cajatambo">Cajatambo</option>
                <option value="canta">Canta</option>
                <option value="cañete">Cañete</option>
                <option value="huaral">Huaral</option>
                <option value="huaura">Huaura</option>
                <option value="oyon">Oyón</option>
                <option value="yauyos">Yauyos</option>
              </optgroup>
            </select>
          </label>
        </div>

        {/* Distrito */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Distrito
            </span>
            <select className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500">
              {" "}
              {/* Distritos de Trujillo */}
              <optgroup label="La Libertad">
                <option value="Trujillo">Trujillo</option>
                <option value="Huanchaco">Huanchaco</option>
                <option value="Laredo">Laredo</option>
                <option value="Moche">Moche</option>
                <option value="Poroto">Poroto</option>
                <option value="Salaverry">Salaverry</option>
                <option value="Simbal">Simbal</option>
                <option value="Victor Larco Herrera">
                  Victor Larco Herrera
                </option>
              </optgroup>
              {/* Distritos de Lima */}
              <optgroup label="Lima">
                <option value="Lima">Lima</option>
                <option value="Ancón">Ancón</option>
                <option value="Ate">Ate</option>
                <option value="Barranco">Barranco</option>
                <option value="Breña">Breña</option>
                <option value="Carabayllo">Carabayllo</option>
                <option value="Chaclacayo">Chaclacayo</option>
              </optgroup>
            </select>
          </label>
        </div>

        <div className="col-span-2">
          {/*Direccion Legal */}
          <InputBasic
            pHolder={"Jr. Huaylas Nro 220"}
            data={formData?.address}
            labelName={"Dirección legal"}
            onChange={handleChange}
            name={"address"}
          />
        </div>
        {/* NUMERO DE TELEFONO */}
        <InputBasicNumber
          pHolder={"043-422110"}
          data={formData?.mobile}
          labelName={"Teléfono"}
          onChange={handleChange}
          name={"mobile"}
        />
        {/* email */}
        <InputBasic
          pHolder={"consultas@ae.edu.pe"}
          data={formData?.email}
          labelName={"email"}
          onChange={handleChange}
          name={"email"}
        />
        {/* Página web */}
        <InputBasic
          pHolder={"www.academiaencinas.edu.pe"}
          data={formData?.website}
          labelName={"Página web"}
          onChange={handleChange}
          name={"website"}
        />
        {/* Total de salones // Total de oficinas */}
        <div className="w-full grid grid-cols-2">
          <label className="flex flex-col gap-y-1 col-span-1">
            <span className="block text-sm font-poppins-medium text-black">
              Total de salones
            </span>
            <input
              onChange={handleChange}
              type="number"
              value={formData?.totalLocals}
              name="totalLocals"
              placeholder="15"
              className="p-3 mt-[0.3125rem] h-[3rem] block w-[6.5rem] rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
          <label className="flex flex-col gap-y-1 col-span-1">
            <span className="block text-sm font-poppins-medium text-black">
              Total de oficinas
            </span>
            <input
              type="number"
              name="company"
              onChange={handleChange}
              value={formData?.company}
              placeholder="8"
              className="p-3 mt-[0.3125rem] h-[3rem] block w-[6.5rem]  rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default RegistrarLocal2;
