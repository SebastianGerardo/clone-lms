import React, { useState } from "react";
import { InputBasic } from "../../../../../components/Inputs/InputBasic";
import { InputBasicNumber } from "../../../../../components/Inputs/InputNumber";
import useInputNumber from "../../../../../hooks/useInputNumber";

const RegistrarEmpresa2 = ({ handleChange, formData }) => {
  const { handleKeyDown } = useInputNumber();
  return (
    <div className="text-start flex flex-col gap-4">
      <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
        Información de Contacto de la Empresa
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">
        {/* Departamento */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Departamento
            </span>
            <select className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500">
              <option value="">Selecciona un departamento</option>
              <option value="amazonas">Amazonas</option>
              <option value="ancash">Ancash</option>
              <option value="apurimac">Apurímac</option>
              <option value="arequipa">Arequipa</option>
              <option value="ayacucho">Ayacucho</option>
              <option value="cajamarca">Cajamarca</option>
              <option value="callao">Callao</option>
              <option value="cusco">Cusco</option>
              <option value="huancavelica">Huancavelica</option>
              <option value="huanuco">Huánuco</option>
              <option value="ica">Ica</option>
              <option value="junin">Junín</option>
              <option value="la-libertad">La Libertad</option>
              <option value="lambayeque">Lambayeque</option>
              <option value="lima">Lima</option>
              <option value="loreto">Loreto</option>
              <option value="madre-de-dios">Madre de Dios</option>
              <option value="moquegua">Moquegua</option>
              <option value="pasco">Pasco</option>
              <option value="piura">Piura</option>
              <option value="puno">Puno</option>
              <option value="san-martin">San Martín</option>
              <option value="tacna">Tacna</option>
              <option value="tumbes">Tumbes</option>
              <option value="ucayali">Ucayali</option>
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
            <select className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500">  {/* Distritos de Trujillo */}
  <optgroup label="La Libertad">
      <option value="Trujillo">Trujillo</option>
      <option value="Huanchaco">Huanchaco</option>
      <option value="Laredo">Laredo</option>
      <option value="Moche">Moche</option>
      <option value="Poroto">Poroto</option>
      <option value="Salaverry">Salaverry</option>
      <option value="Simbal">Simbal</option>
      <option value="Victor Larco Herrera">Victor Larco Herrera</option>
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
     <InputBasicNumber pHolder={"Jr. Huaylas Nro 220"} data={formData?.telefonoApoderado} labelName={"Dirección legal"} onChange={handleChange} name={"direccionLegal"} />
     </div>
   {/* NUMERO DE TELEFONO */}
   <InputBasicNumber pHolder={"043-422110"} data={formData?.telefonoApoderado} labelName={"Teléfono"} onChange={handleChange} name={"telefono"} />
   {/* email */}
   <InputBasicNumber pHolder={"consultas@ae.edu.pe"} data={formData?.telefonoApoderado} labelName={"email"} onChange={handleChange} name={"email"} />
   {/* Página web */}
   <InputBasicNumber pHolder={"www.academiaencinas.edu.pe"} data={formData?.telefonoApoderado} labelName={"Página web"} onChange={handleChange} name={"paginaWeb"} />
   {/* Representante legal */}
   <InputBasicNumber pHolder={"Pineda Sifuentes José"} data={formData?.telefonoApoderado} labelName={"representanteLegal"} onChange={handleChange} name={"telefono"} />

      </form>
    </div>
  );
};

export default RegistrarEmpresa2;
