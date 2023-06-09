import React from "react";
import water from "../../../../../assets/icons/water.svg";
import computer from "../../../../../assets/icons/computer.svg";
import cuadricula from "../../../../../assets/icons/cuadricula.svg";
import { useNavigate } from "react-router-dom";
import { NameTable } from "../../../../../components/Tables/TableComponents";
import ProgressBar from "../../../../../components/ProgressStatus/ProgressBar";

export const columnsTableCursos = [
  {
    name: <NameTable name="Curso" />,
    cell: (row) => {
      return (
        <div className="flex items-center gap-2">
          <div
            className={`flex flex-col justify-center items-center w-10 h-10 rounded-lg min-w-4 min-h-4 ${
              CurseIcon[row.colorIcono]
            }`}
          >
            <img src={CurseIcon[row.icono]} alt="" />
          </div>
          <p className="mt-[0.10rem] font-semibold">{row.curso}</p>
        </div>
      );
    },
    sortable: true,
    width: "10rem",
    center: true,
  },
  {
    name: <NameTable name="Ciclo" />,
    cell: (row) => (
      <div className="w-[90%]">
        <ProgressBar progress={row.ciclo} />
      </div>
    ),
    sortable: true,
    center: true,
  },
  {
    name: <NameTable name="Nivel" />,
    cell: (row) => (
      <select
        className="w-[4.2rem] bg-transparent focus:outline-none"
        name=""
        id=""
      >
        {row.nivel.map((item, index) => {
          return (
            <option className="text-gray-500" key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    ),
    sortable: true,
    center: true,
  },
  {
    name: <NameTable name="Duración" />,
    cell: (row) => (
      <p className="text-gray-500 font-bold w-[3.5rem] truncate text-center">
        {row.duracion}
      </p>
    ),
    sortable: true,
    center: true,
  },
  {
    name: <NameTable name="Colegio" />,
    cell: (row) => <p className="text-gray-500 font-medium">{row.colegio}</p>,
    sortable: true,
    center: true,
  },
  {
    name: <NameTable name="Universidad" />,
    cell: (row) => (
      <p className="text-gray-500 font-medium">{row.universidad}</p>
    ),
    sortable: true,
    center: true,
  },
  {
    name: "",
    cell: (row) => <NagivateTo />,
    center: true,
    width: "3rem",
  },
];

const NagivateTo = () => {
  const navigate = useNavigate();

  const cursoInfo = () => {
    navigate(`curso-info/1`, { state: { logged: true } });
  };

  return (
    <div onClick={cursoInfo} className="flex items-center gap-3 cursor-pointer">
      °°°
    </div>
  );
};

const CurseIcon = {
  water: water,
  computer: computer,
  cuadricula: cuadricula,
  colorWater: "bg-[#EEEFFF]",
  colorComputer: "bg-[#FFE6E1]",
  colorCuadricula: "bg-[#FFF8E5]",
};
