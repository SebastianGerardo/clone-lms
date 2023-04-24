import React from "react";
import { MoreIcon } from "../../../../assets/svgs/NormalSvgs";
import TableBasic from "../../../../components/Tables/TableBasic";
import { NameTable } from "../../../../components/Tables/TableComponents";
import escudo from "../../../../assets/icons/escudo.svg";

export const TableMatriculaPersonalized = ({
  handleOpenModal,
  data,
  cicloImg,
}) => {
  const columnsDataMatricula = [
    {
      name: <NameTable name="Ciclos" />,
      cell: (row) => (
        <section className="flex items-center justify-start gap-1 min-w-[140px]">
          <div className="w-8 h-8 object-cover">
            <img
              src={cicloImg[row.nombre]}
              alt="escudo"
              className="w-full h-full"
            />
          </div>
          <p className="text-gray-500 font-bold w-full truncate text-center">
            {row.nombre}
          </p>
        </section>
      ),
      sortable: true,
      center: true,
    },
    {
      name: <NameTable name="Precio de la matrícula" />,
      cell: (row) => (
        <p className="text-gray-500 font-bold w-[3.5rem] truncate text-center">
          S/.{row.precio}
        </p>
      ),
      sortable: true,
      center: true,
    },
    {
      name: <NameTable name="Cantidad de aulas" />,
      cell: (row) => (
        <p className="text-gray-500 font-bold w-[3.5rem] truncate text-center">
          {row.aulas.length} Aulas
        </p>
      ),
      sortable: true,
      center: true,
    },
    {
      name: <NameTable name="Capacidad Disponible" />,
      cell: (row) => (
        <p className="text-gray-500 font-bold w-[3.5rem] truncate text-center">
          {row.aulas.reduce((total, aula) => {
            return total + aula.disponible;
          }, 0)}
        </p>
      ),
      sortable: true,
      center: true,
    },
    {
      name: <NameTable name="Acciones" />,
      cell: (row) => (
        <button
          key={row.id}
          onClick={() => handleOpenModal(row.id)}
          className="cursor-pointer mx-auto"
        >
          <MoreIcon color="#9CA3AF" />
        </button>
      ),
      sortable: true,
      center: true,
    },
  ];

  return <TableBasic columns={columnsDataMatricula} data={data} />;
};
