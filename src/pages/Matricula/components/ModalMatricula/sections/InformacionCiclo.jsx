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

  return (
    <div className="text-center ">
      <h1 className="text-xl font-medium">Información del Ciclo</h1>
      {/* <table className="mx-auto my-10">
        <thead>
          <tr className="grid grid-cols-[40px_93.79px_89.29px] gap-6">
            <th className="font-semibold">Aula</th>
            <th className="font-semibold">Capacidad</th>
            <th className="font-semibold">Disponible</th>
          </tr>
        </thead>
        <tbody>
          <tr className="grid grid-cols-[40px_93.79px_89.29px] gap-6">
            <td>1</td>
            <td>20</td>
            <td>10</td>
          </tr>
        </tbody>
      </table> */}
      <div className="flex flex-col justify-center items-center">
        <Select
          options={options}
          onChange={handleChange}
          classes={"min-w-[12rem]"}
        />
        <CircularProgress
          circunference={37}
          sizeCircle={145}
          strokeWidth={25}
          progressCircle={cantAlumnosRestantes}
          colorFondo={"#ECEFF7"}
          colorRelleno={"#A0CFCF"}
          textContent={`${parseInt(cantAlumnosRestantes)} %`}
          fontWeight={"bold"}
          fontSize={"1rem"}
        />
      </div>
      <div>
        <div>
          <h2>Costo: S/.{dataCiclo.precio}</h2>
        </div>
        <div>
          <h2>
            Promoción: Descuento del 15% si se realiza el pago antes del 20 de
            Abril.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default InformacionCiclo;