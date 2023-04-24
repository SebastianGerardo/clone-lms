import React, { useMemo, useState } from "react";
import Select from "../../../../../components/Inputs/Select";
import CircularProgress from "../../../../../components/ProgressStatus/CircularProgress";

const InformacionCiclo = ({ dataCiclo }) => {
  const dataFiltrada = dataCiclo.aulas.map(({ id, nombre }) => ({
    value: id,
    label: nombre,
  }));

  const options = dataFiltrada;
  const [aulaSeleccionada, setAulaSeleccionada] = useState(
    dataFiltrada[0].value
  );

  const DataAulaSeleccionada = useMemo(() => {
    return dataCiclo.aulas.find((aula) => aula.id === aulaSeleccionada);
  }, [aulaSeleccionada]);

  const cantAlumnoMatriculado = DataAulaSeleccionada.disponible;
  const cantTotalAula = DataAulaSeleccionada.capacidad;

  const cantAlumnosRestantes = (cantAlumnoMatriculado / cantTotalAula) * 100;

  const handleChange = (selectedOption) => {
    setAulaSeleccionada(selectedOption.value);
  };

  console.log(DataAulaSeleccionada);
  const alumnosRegistrados =
    DataAulaSeleccionada.capacidad - DataAulaSeleccionada.disponible;

  return (
    <div className="text-center ">
      <h1 className="text-xl font-medium">Información del Ciclo</h1>
      <div className="flex flex-col justify-center items-center">
        <Select
          options={options}
          onChange={handleChange}
          classes={"min-w-[12rem]"}
        />
        <section className="flex items-center justify-around">
          <div className="flex">
            <div>
              <CircularProgress
                circunference={37}
                sizeCircle={145}
                strokeWidth={25}
                progressCircle={
                  cantAlumnosRestantes == 0 ? 100 : cantAlumnosRestantes
                }
                colorFondo={"#ECEFF7"}
                colorRelleno={"#A0CFCF"}
                textContent={`${parseInt(
                  cantAlumnosRestantes == 0 ? 100 : cantAlumnosRestantes
                )} %`}
                fontWeight={"bold"}
                fontSize={"1rem"}
              />
            </div>
            <div className="flex w-full flex-wrap items-center justify-center lg:justify-between">
              <div className="flex flex-col gap-[1px] mt-[1px] lg:flex-col lg:w-full">
                <div className="py-1 px-3 text-black flex items-center gap-2 lg:flex lg:gap-1 rounded-md">
                  <div className="w-5 h-5 bg-blue-400 rounded-md"></div>
                  <p className="text-base text-center">
                    <span className="hidden lg:inline">Alumnos</span>{" "}
                    Disponibles:
                  </p>
                  <p className="text-base text-center font-semibold">
                    {DataAulaSeleccionada.disponible}
                  </p>
                </div>
                <div className="py-1 px-3 text-black flex items-center gap-2 lg:gap-2 rounded-md">
                  <div className="w-5 h-5 bg-red-400 rounded-md"></div>
                  <p className="text-base text-center">
                    <span className="hidden lg:inline">Alumnos</span>{" "}
                    Registrados:
                  </p>
                  <p className="text-base text-center font-semibold">
                    {alumnosRegistrados != 0
                      ? alumnosRegistrados
                      : DataAulaSeleccionada.capacidad}
                  </p>
                </div>
                <div className="py-1 px-3 text-black flex items-center gap-2 lg:gap-2 rounded-md">
                  <div className="w-5 h-5 bg-yellow-400 rounded-md"></div>
                  <p className="text-base text-center">
                    <span
                      onClick={() => console.log(null == false)}
                      className="hidden lg:inline"
                    ></span>
                    Cant. de Alumnos:
                  </p>
                  <p className="text-base text-center font-semibold">
                    {DataAulaSeleccionada.capacidad}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[35%]">
            <div>
              <h2>Costo: S/.{dataCiclo.precio}</h2>
            </div>
            <div>
              <h2>
                Promoción: Descuento del 15% si se realiza el pago antes del 20
                de Abril.
              </h2>
            </div>
            <div className="mt-1 flex w-full flex-wrap items-center justify-center lg:justify-between">
              <div className="flex flex-col gap-[1px] mt-[1px] lg:flex-row lg:justify-around lg:w-full">
                <div className="text-black flex items-center gap-2 lg:flex lg:gap-1 rounded-md">
                  <div className="w-5 h-5 bg-green-400 rounded-md"></div>
                  <p className="text-base text-center">Aulas Vacías:</p>
                  <p className="text-base text-center font-semibold">
                    {dataCiclo.aulasDisponibles}
                  </p>
                </div>
                <div className="text-black flex items-center gap-2 lg:gap-2 rounded-md">
                  <div className="w-5 h-5 bg-red-400 rounded-md"></div>
                  <p className="text-base text-center">Aulas Llenas:</p>
                  <p className="text-base text-center font-semibold">
                    {dataCiclo.aulas.length - dataCiclo.aulasDisponibles}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InformacionCiclo;
