import React, { useState } from "react";
import { usePayment } from "../../../../../hooks/usePayment";

const EmitirComprobante = ({ handleChange, formData }) => {
  const [formValues, setFormValues] = useState({
    fechaMatricula: getFechaActual(),
    montoPago: "",
    tipoDePago: "",
    modalidadDePago: "",
    ciclo: "",
    local: "",
  });

  function handleChange(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  function getFechaActual() {
    const fecha = new Date();
    const mes =
      fecha.getMonth() + 1 < 10
        ? `0${fecha.getMonth() + 1}`
        : fecha.getMonth() + 1;
    const dia = fecha.getDate() < 10 ? `0${fecha.getDate()}` : fecha.getDate();
    return `${fecha.getFullYear()}-${mes}-${dia}`;
  }

  // const { payment } = usePayment(
  //   250, // total
  //   true, // si es plazo es true
  //   100, // commission
  //   2, // Cuantos meses
  //   1 //tasa de interes
  // );

  // console.log("installmentAmount", payment.installmentAmount);
  // console.log("totalWithCommission", payment.totalWithCommission);
  // console.log(usePayment(150, true,  0,  2,  0 ));
  // console.log("payment", payment);

  return (
    <div className="text-start flex flex-col gap-4">
      <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
        Generar Pago
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">
        

        {/* MODALIDAD DE PAGO */}
        <div className="w-full flex flex-col gap-y-1">
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

        {/* MONTO */}
        <div className="w-full">
          <label className="flex flex-col gap-y-1">
            <span className="block text-sm font-medium text-gray-400">
              Monto Pagado
            </span>
            <input
              onChange={handleChange}
              value={formData.montoPago}
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

        

        {/* CICLO */}
        <div className="w-full flex flex-col gap-y-1">
          <span className="block text-sm font-medium text-gray-400">Ciclo</span>
          <div className="flex items-center gap-3">
            <select
              className="w-full max-h-[3rem] bg-formButton border border-slate-300 rounded-lg p-3 focus:outline-none disabled:bg-gray-300/50 disabled:text-gray-500 text-[0.925rem]"
              name="ciclo"
              onChange={handleChange}
            >
              <option value="">---</option>
              <option
                selected={formData.ciclo == "Ciclo 2023_I"}
                value="Ciclo 2023_I"
              >
                Ciclo 2023-I
              </option>
              <option
                selected={formData.ciclo == "Ciclo 2023_II"}
                value="Ciclo 2023_II"
              >
                Ciclo 2023-II
              </option>
            </select>
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
        {/* AULA-SECCIÓN */}
        <div className="w-full flex flex-col gap-y-1">
          <span className="block text-sm font-medium text-gray-400">
            Aula Sección
          </span>
          <div className="flex items-center gap-3">
            <select
              className="w-full max-h-[3rem] bg-formButton border border-slate-300 rounded-lg p-3 focus:outline-none disabled:bg-gray-300/50 disabled:text-gray-500 text-[0.925rem]"
              name="aula"
              onChange={handleChange}
            >
              <option value="">---</option>
              <option selected={formData.aula == "A"} value="A">
                Sección A
              </option>
              <option selected={formData.aula == "B"} value="B">
                Sección B
              </option>
              <option selected={formData.aula == "C"} value="C">
                Sección C
              </option>
              <option selected={formData.aula == "D"} value="D">
                Sección D
              </option>
              <option selected={formData.aula == "E"} value="E">
                Sección E
              </option>
              <option selected={formData.aula == "F"} value="F">
                Sección F
              </option>
              <option selected={formData.aula == "G"} value="G">
                Sección G
              </option>
              <option selected={formData.aula == "H"} value="H">
                Sección H
              </option>
            </select>
          </div>
        </div>

        {/* FECHA */}
        <div className="flex flex-col gap-y-2">
          <label className="block text-sm font-medium text-gray-400">
            Fecha de Matrícula
          </label>
          <input
            type="date"
            onChange={handleChange}
            value={formValues.fechaMatricula}
            name="fechaMatricula"
            className="w-full p-3 h-[3rem] block rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
          />
        </div>

        {/* USUARIO-ATENCIÓN */}
        <div className="col-span-2">
          {/* USUARIO-ATENCIÓN */}
          <div className="flex flex-col gap-y-2">
            <label className="block text-sm font-medium text-gray-400">
              Usuario que atendió
            </label>
            <input
              value={`${formData.nombreApoderado} ${formData.apellidoApoderado}`}
              type="text"
              disabled
              className="w-full p-3 h-[3rem] block rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmitirComprobante;