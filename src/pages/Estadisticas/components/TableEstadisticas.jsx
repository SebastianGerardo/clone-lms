import React from "react";
import DataTable from "react-data-table-component";
import { ApiAlumno } from "../../../helpers/ApiEstadisticas";
import mujer from "../../../assets/img/profesor-img.svg";
import hombre from "../../../assets/img/user-img.svg";
import { NameTable } from "../../../components/Tables/TableComponents";

const AlumnoIcon = {
  Mujer: mujer,
  Hombre: hombre,
};

export const columnsDataEstadisticas = [
  {
    name: <NameTable name="Datos" />,
    cell: (row) => {
      return (
        <div className="flex items-center gap-2">
          <div className="flex flex-col justify-center items-center w-10 h-10 rounded-lg min-w-4 min-h-4">
            <img src={AlumnoIcon[row.sexo]} alt="" />
          </div>
          <p className="mt-[0.10rem] font-semibold">{row.nombres}</p>
        </div>
      );
    },
    sortable: true,
    width: "15rem",
    center: true,
  },
  {
    name: <NameTable name="Ciclos" />,
    cell: (row) => (
      <p className="text-gray-500 font-bold w-[3.5rem] truncate text-center">
        {row.ciclo}
      </p>
    ),
    sortable: true,
    center: true,
  },
  {
    name: <NameTable name="Tiempo de videos vistos" />,
    cell: (row) => (
      <p className="text-gray-500 font-bold w-[3.5rem] truncate text-center">
        {row.tiempoVideos}
      </p>
    ),
    sortable: true,
    center: true,
  },
  {
    name: <NameTable name="Tiempo en el sistema" />,
    cell: (row) => (
      <p className="text-gray-500 font-medium">{row.tiempoSistema}</p>
    ),
    sortable: true,
    center: true,
  },
  {
    name: <NameTable name="Monto Invertido" />,
    cell: (row) => (
      <p className="text-gray-500 font-medium">{row.montoInvertido}</p>
    ),
    sortable: true,
    center: true,
  },
  {
    name: <NameTable name="Promedio" />,
    cell: (row) => <p className="text-gray-500 font-medium">{row.promedio}</p>,
    sortable: true,
    center: true,
  },
  {
    name: <NameTable name="Promedio Gratificacion" />,
    cell: (row) => (
      <p className="text-gray-500 font-medium">{row.promedioGratificacion}</p>
    ),
    sortable: true,
    center: true,
  },
];
