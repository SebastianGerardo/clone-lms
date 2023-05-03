import React from "react";
import { InputBasic } from "../../../../../components/Inputs/InputBasic";
import { InputBasicNumber } from "../../../../../components/Inputs/InputNumber";

const ModalCiclo = ({handleChange, enviarDatos, formData, dataLearning}) => {
  return (
    <form onSubmit={enviarDatos} className="lg:w-[55rem]">
      <div className="text-start flex flex-col gap-4">
        <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
          Información del ciclo
        </div>
        <form className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-y-3 gap-x-8">
          {/* Costo del Ciclo */}
          <div className="w-full">
            <InputBasicNumber
              pHolder={"200"}
              data={formData?.costo}
              labelName={"Costo del ciclo"}
              onChange={handleChange}
              name="costo"
            />
          </div>

          {/* Fecha de Inicio */}
          <div className="w-full">
            <InputBasic
              data={formData?.start}
              labelName={"Fecha de inicio"}
              onChange={handleChange}
              name="start"
              type="date"
            />
          </div>

          {/* Learning Path */}
          <div className="w-full col-span-2">
            <label className="flex flex-col gap-y-1">
              <span className="block text-sm font-medium text-gray-400">
                Learning Path
              </span>
              <select
                className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                defaultValue={formData?.learningPath}
                onChange={handleChange}
                name="learningPath"
                id=""
              >
                <option value="">Seleccione una ruta de aprendizaje</option>
                {dataLearning?.length > 0 &&
                dataLearning?.map((learning) => (
                  <option key={learning.id} value={learning.id}>
                    {learning.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </form>
      </div>
      <div className="flex justify-end pt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Crear
        </button>
      </div>
    </form>
  );
};

export default ModalCiclo;
