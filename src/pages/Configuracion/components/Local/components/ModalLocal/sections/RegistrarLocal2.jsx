import React, { useState } from "react";
import { InputBasic } from "../../../../../../../components/Inputs/InputBasic";
import { InputBasicNumber } from "../../../../../../../components/Inputs/InputNumber";
import useInputNumber from "../../../../../../../hooks/useInputNumber";

const RegistrarLocal2 = ({ handleChange, formData, formUbicacion, dataUbicacion, dataDepartamento, dataProvincia, handleSelect }) => {
  const { handleKeyDown } = useInputNumber();
  return (
    <div className="text-start flex flex-col gap-4">
      <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
        Información de Contacto del Local
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">
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
          <InputBasic
            pHolder={"15"}
            data={formData?.totalOffices}
            labelName={"Total de salones"}
            onChange={handleChange}
            name={"totalOffices"}
          />
          
          {/* <label className="flex flex-col gap-y-1 col-span-1">
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
          </label>  */}
        </div>
      </form>
    </div>
  );
};

export default RegistrarLocal2;
