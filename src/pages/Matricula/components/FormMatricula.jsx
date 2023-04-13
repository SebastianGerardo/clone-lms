import React from "react";

const FormMatricula = ({active}) => {
  return (
    <>
      {/* FORMULARIO */}
      <form className="flex flex-col gap-y-3 md:gap-y-8 gap-x-8">
        <section className="w-full lg:w-[80%] xl:w-[50%] sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-y-3 gap-x-8">
          {/* CONVENIO */}
          <div className="w-full relative">
            <label className="flex flex-col gap-y-1">
              <h1 className="block text-base font-semibold text-black">
                Convenio
              </h1>
              <input
                disabled={active}
                type="text"
                name="convenio"
                placeholder="Cargar alumnos"
                className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
              />
            </label>
          </div>

          {/* EMITIR FACTURA */}
          <div className="w-full">
            <select
              disabled={active}
              className="max-h-[3rem] w-full mt-7 rounded-lg p-3 bg-formButton border border-slate-300 focus:outline-none disabled:bg-gray-300/50 disabled:text-gray-500"
              defaultValue="emitirFactura"
              name="emitirFactura"
            >
              <option value="cActivo">Emitir factura</option>
            </select>
          </div>

          {/* PUNTO DE VENTA */}
          <div className="w-full flex mt-3 flex-col gap-y-1">
            <h1 className="block text-base font-semibold text-black">
              Punto de venta
            </h1>

            <select
              disabled={active}
              className="max-h-[3rem] w-full rounded-lg p-3 bg-formButton border border-slate-300 focus:outline-none disabled:bg-gray-300/50 disabled:text-gray-500"
              defaultValue="SeleccionarCiclo"
              name="seleccionarCICLO"
            >
              <option value="cActivo">Seleccionar ciclo</option>
              <option value="cActivo">1 Ciclo</option>
              <option value="cActivo">2 Ciclo</option>
              <option value="cActivo">3 Ciclo</option>
              <option value="cActivo">4 Ciclo</option>
            </select>
          </div>

          {/* MONTO A PAGAR */}
          <div className="w-full">
            <select
              disabled={active}
              className="max-h-[3rem] mt-10 w-full rounded-lg p-3 bg-formButton border border-slate-300 focus:outline-none disabled:bg-gray-300/50 disabled:text-gray-500"
              defaultValue="emitirFactura"
              name="montoPagar"
            >
              <option value="cActivo">Seleccionar monto a pagar</option>
              <option value="cActivo">s/.200</option>
              <option value="cActivo">s/.300</option>
              <option value="cActivo">s/.400</option>
              <option value="cActivo">s/.500</option>
            </select>
          </div>
        </section>

        {/* PAGAR-EMITIRCOMPROBANTE */}
        <div className="flex flex-wrap items-center justify-center md:justify-normal gap-3">
          <button
            type="submit"
            className="w-full max-w-max md:flex-1 border border-slate-300 bg-blue-700 text-white px-6 py-3 rounded-md text-xs"
          >
            Pagar
          </button>
          <button
            type="submit"
            className="w-full max-w-max md:flex-1 bg-formButton text-gray-400 border border-slate-300 px-6 py-2 rounded-md hover:bg-blue-700 hover:text-white transition-colors text-xs"
          >
            Emitir comprobante
          </button>
        </div>

        {/* ONLINE-CLIENTES */}
        <div className="w-full sm:w-[18rem]">
          <label className="flex flex-col gap-y-1">
            <h1 className="block text-base font-semibold text-black">Online</h1>
            <input
              disabled={active}
              type="text"
              name="clientes"
              placeholder="Clientes"
              className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default FormMatricula;
