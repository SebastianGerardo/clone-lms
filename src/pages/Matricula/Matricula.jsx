import React, { useState } from 'react'

const Matricula2 = () => {
    const [colorBoton, setColorBoton] = useState(false);
  const [active, setActive] = useState(true);

  const activarInput = () => {
    setActive(!active);
  };
  return (
    <div className="bg-white py-4 px-20 ">
      {/* BOTÓN DE EDITAR */}
      <div className="flex items-center  justify-between mb-3">
        {active ? (
          // BOTÓN EDITAR
          <div className="box-border ml-auto bg-gray-50 border border-blue-500 rounded-lg">
            <button
              onClick={activarInput}
              onMouseEnter={() => setColorBoton(!colorBoton)}
              onMouseLeave={() => setColorBoton(!colorBoton)}
              className={`flex gap-2 px-4 py-2 font-medium-poppins rounded-lg transition duration-75 ${
                colorBoton ? "text-white bg-blue-500" : "text-blue-500 bg-white"
              }`}
            >
              {/* ICONO EDITAR */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                  stroke={colorBoton ? "#fff" : "#3B82F6"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z"
                  stroke={colorBoton ? "#fff" : "#3B82F6"}
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.91 4.1499C15.58 6.5399 17.45 8.4099 19.85 9.0899"
                  stroke={colorBoton ? "#fff" : "#3B82F6"}
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Edit</span>
            </button>
          </div>
        ) : (
          // BOTÓN GUARDAR
          <div className="box-border ml-auto bg-gray-50 border border-green-500 rounded-lg">
            <button
              onClick={activarInput}
              onMouseEnter={() => setColorBoton(!colorBoton)}
              onMouseLeave={() => setColorBoton(!colorBoton)}
              className={`flex gap-2 px-4 py-2 rounded-lg transition duration-75 ${
                colorBoton
                  ? "text-white bg-green-500"
                  : "text-green-500 bg-white"
              }`}
            >
              {/* ICONO GUARDAR */}

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18"
                  stroke={colorBoton ? "#fff" : "#22C55E"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M8 7H16"
                  stroke={colorBoton ? "#fff" : "#22C55E"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M9 11H15"
                  stroke={colorBoton ? "#fff" : "#22C55E"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.2091 14.7698L14.6691 18.3098C14.5291 18.4498 14.3991 18.7098 14.3691 18.8998L14.1791 20.2498C14.1091 20.7398 14.4491 21.0798 14.9391 21.0098L16.2891 20.8198C16.4791 20.7898 16.7491 20.6598 16.8791 20.5198L20.4191 16.9798C21.0291 16.3698 21.3191 15.6598 20.4191 14.7598C19.5291 13.8698 18.8191 14.1598 18.2091 14.7698Z"
                  stroke={colorBoton ? "#fff" : "#22C55E"}
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.6992 15.2798C17.9992 16.3598 18.8392 17.1998 19.9192 17.4998"
                  stroke={colorBoton ? "#fff" : "#22C55E"}
                  strokeWidth="1.5"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>Guardar</span>
            </button>
          </div>
        )}
      </div>

      <div className="w-full">
        <div className="w-full">
          <div className="w-full  mb-5 flex flex-col gap-3">
            {/* TITULO FORMULARIO */}
            <div className="w-full flex mb-6 relative top-2">
              <div className="flex-1">
                <h2 className="text-black leading-27 tracking-normal text-left text-xl font-semibold mb-3">
                  Matricula
                </h2>
              </div>
            </div>
            {/* FORMULARIO */}
            <form className="flex flex-col gap-y-3 md:gap-y-8 gap-x-8">
              <section className='w-full lg:w-[80%] xl:w-[50%] sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-y-3 gap-x-8'>
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
                  <h1 className="block text-base font-semibold text-black">
                    Online
                  </h1>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Matricula2
