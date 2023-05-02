import React, { useState } from "react";
import { InputBasic } from "../../../../../../../components/Inputs/InputBasic";
import { InputBasicNumber } from "../../../../../../../components/Inputs/InputNumber";
import useInputNumber from "../../../../../../../hooks/useInputNumber";

const RegistrarEmpresa2 = ({ handleChange, formData, dataUbicacion, handleSelect, dataProvincia,dataDepartamento, formUbicacion }) => {
  const { handleKeyDown } = useInputNumber();
  return (
    <div className="text-start flex flex-col gap-4">
      <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
        Información de Contacto de la Empresa
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">
        {/* AQUI VA LO DE ABAJO */}

        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Departamento
            </span>
            <select defaultValue={formUbicacion?.departamento} name="departamento" onChange={(e) => handleSelect(e)} className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500">
              <option value="">TODOS</option>
              {dataUbicacion?.length > 0 && dataUbicacion?.map((item) => (
                <option key={item?.departament} value={item?.departament}>{item?.name}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Provincia
            </span>

            <select defaultValue={formUbicacion?.provincia} name="provincia" onChange={(e) => handleSelect(e)} className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500">
              <option value="">TODOS</option>
              
              {dataDepartamento?.length > 0 && dataDepartamento?.map((item) => (
                <option key={item?.province} value={item?.province}>{item?.name}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Distrito
            </span>
            <select defaultValue={formUbicacion?.distrito} name="distrito" onChange={(e) => handleSelect(e)} className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500">
              <option value="">TODOS</option>
              {dataProvincia?.length > 0 && dataProvincia?.map((item) => (
                <option key={item?.district} value={item?.district}>{item?.name}</option>
              ))}
            </select>
          </label>
        </div> 

          {/*Direccion Legal */}
        {/* <div className="col-span-2">
          <InputBasicNumber
            pHolder={"Jr. Huaylas Nro 220"}
            data={formData?.telefonoApoderado}
            labelName={"Dirección legal"}
            onChange={handleChange}
            name={"direccionLegal"}
          />
        </div> */}
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
          labelName={"Correo"}
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
        {/* Representante legal */}
        <InputBasic
          pHolder={"Pineda Sifuentes José"}
          data={formData?.agent}
          labelName={"Representante Legal"}
          onChange={handleChange}
          name={"agent"}
        />
      </form>
    </div>
  );
};

export default RegistrarEmpresa2;

