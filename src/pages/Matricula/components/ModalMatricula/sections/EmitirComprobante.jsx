import React, { useState } from "react";
import useCuotas from "../../../../../hooks/usePayment";

const EmitirComprobante = ({ handleChange, formData, dataCiclo }) => {
  const { cuota, total } = useCuotas(
    dataCiclo.precio, // MontoTotal
    formData.cuotas // Tiempo
  );
  console.log("formValues", dataCiclo.aulas);

  return (
    <div className="text-start flex flex-col gap-4">
      <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
        Generar Pago
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">
        {/* USUARIO-ATENCIÓN-APODERADO */}
        <div className="flex flex-col gap-y-2">
          {/* USUARIO-ATENCIÓN-APODERADO */}
          <label className="block text-sm font-medium text-gray-400">
            Nombre Apoderado
          </label>
          <input
            value={`${formData.nombreApoderado} ${formData.apellidoApoderado}`}
            type="text"
            disabled
            className="w-full p-3 h-[3rem] block rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
          />
        </div>

        {/* USUARIO-ATENCIÓN-ALUMNO */}
        <div className="flex flex-col gap-y-2">
          {/* USUARIO-ATENCIÓN-ALUMNO */}
          <label className="block text-sm font-medium text-gray-400">
            Nombre Alumno
          </label>
          <input
            value={`${formData.nombreAlumno} ${formData.apellidoAlumno}`}
            type="text"
            disabled
            className="w-full p-3 h-[3rem] block rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
          />
        </div>

        {/* CICLO */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Ciclo
            </span>
            <input
              value={dataCiclo.nombre}
              type="text"
              name="montoPago"
              disabled
              placeholder="Monto pagado"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>

        {/* FORMA DE PAGO */}
        <div className="w-full flex flex-col gap-y-1">
          <span className="block text-sm font-medium text-gray-400">
            Forma de Pago
          </span>
          <div className="flex items-center gap-3">
            <select
              className="w-full max-h-[3rem] bg-formButton border border-slate-300 rounded-lg p-3 focus:outline-none disabled:bg-gray-300/50 disabled:text-gray-500 text-[0.925rem]"
              name="tipoDePago"
              onChange={handleChange}
            >
              <option value="">---</option>
              <option
                selected={formData.tipoDePago == "efectivo"}
                value="efectivo"
              >
                Efectivo
              </option>
              <option
                selected={formData.tipoDePago == "tarjeta de credito"}
                value="tarjeta de credito"
              >
                Tarjeta de crédito
              </option>
              <option
                selected={formData.tipoDePago == "transferencia bancaria"}
                value="transferencia bancaria"
              >
                Transferencia bancaria
              </option>
            </select>
          </div>
        </div>

        {/* MODALIDAD DE PAGO */}
        <div className=" flex flex-col gap-y-1">
          <span className="block text-sm font-medium text-gray-400">
            Modalidad de pago
          </span>
          <div className="flex items-center gap-3">
            <select
              className="w-full max-h-[3rem] bg-formButton border border-slate-300 rounded-lg p-3 focus:outline-none disabled:bg-gray-300/50 disabled:text-gray-500 text-[0.925rem]"
              name="modalidadDePago"
              onChange={handleChange}
            >
              <option value="">---</option>
              <option
                selected={formData.modalidadDePago == "contado"}
                value="contado"
              >
                Contado
              </option>
              <option
                selected={formData.modalidadDePago == "plazos"}
                value="plazos"
              >
                Plazos
              </option>
            </select>
          </div>
        </div>

        {/* CUOTAS */}
        <div className="w-full flex flex-col gap-y-1">
          <div className="flex items-center gap-3">
            {formData.modalidadDePago == "plazos" && (
              <div>
                <span className="block text-sm font-medium text-gray-400">
                  Cuotas
                </span>
                <select
                  className="max-h-[3rem] bg-formButton border border-slate-300 rounded-lg p-3 focus:outline-none disabled:bg-gray-300/50 disabled:text-gray-500 text-[0.925rem]"
                  name="cuotas"
                  onChange={handleChange}
                >
                  <option selected={formData.cuotas == "1"} value="1">
                    1
                  </option>
                  <option selected={formData.cuotas == "2"} value="2">
                    2
                  </option>
                  <option selected={formData.cuotas == "3"} value="3">
                    3
                  </option>
                  <option selected={formData.cuotas == "4"} value="4">
                    4
                  </option>
                </select>
              </div>
            )}
            <div className="w-full">
              <span className="block text-sm font-medium text-gray-400">
                Monto de la cuota
              </span>
              <input
                disabled
                value={cuota}
                type="text"
                autoComplete="off"
                placeholder="12345678"
                className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* LOCAL */}
        <div className="w-full flex flex-col gap-y-1">
          <span className="block text-sm font-medium text-gray-400">Local</span>
          <div className="flex items-center gap-3">
            <select
              className="w-full max-h-[3rem] bg-formButton border border-slate-300 rounded-lg p-3 focus:outline-none disabled:bg-gray-300/50 disabled:text-gray-500 text-[0.925rem]"
              name="local"
              onChange={handleChange}
            >
              <option value="">---</option>
              <option selected={formData.local == "Local_1"} value="Local_1">
                Local-1
              </option>
              <option selected={formData.local == "Local_2"} value="Local_2">
                Local-2
              </option>
            </select>
          </div>
        </div>

        {/* AULA */}
        <div className="w-full flex flex-col gap-y-1">
          <span className="block text-sm font-medium text-gray-400">Aula</span>
          <div className="flex items-center gap-3">
            <select
              className="w-full max-h-[3rem] bg-formButton border border-slate-300 rounded-lg p-3 focus:outline-none disabled:bg-gray-300/50 disabled:text-gray-500 text-[0.925rem]"
              name="aula"
              onChange={handleChange}
            >
              <option value="">---</option>
              {dataCiclo?.aulas.length > 0 &&
                dataCiclo?.aulas.map((aula) => (
                  <option
                    key={aula.id}
                    selected={formData.aula == aula.nombre}
                    value={aula.nombre}
                  >
                    {aula.nombre}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* MONTO */}
          {formData.modalidadDePago == "plazos" && (
            <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-medium text-gray-400">
                    Monto a pagar
                  </span>
                  <input
                    value={total}
                    type="text"
                    name="montoPago"
                    disabled
                    placeholder="Monto pagado"
                    className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  />
                </label>
            </div>
          )}
      </form>
    </div>
  );
};

export default EmitirComprobante;
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/chLAhqD41mM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}