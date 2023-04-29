import React from "react";
import {SearchIcon } from "../../../../../assets/svgs/NormalSvgs";
import { NameTable } from "../../../../../components/Tables/TableComponents";
import editIcon from "../../../../../assets/icons/editIcon.png";
import deleteIcon from "../../../../../assets/icons/deleteIcon.png";
import Swal from "sweetalert2";

export const ColumnsSalones = ({setCursoActual, setNombreCurso, handleOpenModal, setInfoSalon}) => {
  const columnsSalones = [
      {
        name: <NameTable name="Local" />,
        cell: (row) => (
          <p className="mt-[0.10rem] font-semibold">{row.local.name}</p>
        ),
        width: "12rem",
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Codigo" />,
        cell: (row) => row.code,
        width: "15rem",
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Pabellón" />,
        cell: (row) => {
          return <p className="mt-[0.10rem] font-semibold">{row.pavilion}</p>;
        },
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Piso" />,
        cell: (row) => {
          return <p className="mt-[0.10rem] font-semibold">{row.piso}</p>;
        },
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Máx. Alumnos" />,
        cell: (row) => {
          return <p className="mt-[0.10rem] font-semibold">{row.totalStudents}</p>;
        },
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Acciones" />,
        cell: (row) => (
          <div className="flex gap-2">
              <div
              onClick={()=>{handleOpenModal(), setInfoSalon(row)}}
              className="cursor-pointer mx-auto"
              >
                  <div className="w-6 h-6 object-cover">
                      <img src={editIcon} alt="" className="w-full h-full object-cover" />
                  </div>
              </div>
              <div
              onClick={deleteAlert}
              className="cursor-pointer mx-auto"
              >
                  <div className="w-[25px] h-[25px] object-cover">
                      <img src={deleteIcon} alt="" className="w-full h-full object-cover" />
                  </div>
              </div>
  
          </div>
        ),
        width: "12rem",
        sortable: true,
        center: true,
      },
  ];
  return {
    columnsSalones
  }
}

export const ContentTableSalones = ({handleOpenModal, dataSalones}) => {
  return (
    <div className="flex flex-col gap-y-2 mb-4 p-0">
      <section className="flex flex-col min-[1235px]:flex-row min-[1235px]:justify-around items-center gap-y-4">
        {/* TOTAL DE VIDEOS */}
        <div className="w-max p-3 px-6 rounded-md flex gap-1 text-sm bg-[#0052CA] text-white">
          <p>Total de salones</p>
          <span className="text-white/80">
            {"("}{dataSalones.length}{")"}
          </span>
        </div>
        {/* INPUT BUSCAR */}
        <form className="w-full min-[790px]:w-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon color="#A4B2CD" />
            </div>
            <input
              //   onChange={handleSearch}
              type="text"
              name="search"
              id="search"
              className="text-gray-400 placeholder:text-[#A4B2CD] block w-full text-lg h-[44px] pl-12 pr-4 rounded-md min-[790px]:w-96  bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#EDF0FF] focus:border-transparent"
              placeholder="Buscar"
              autoComplete="off"
            />
          </div>
        </form>
        {/* BOTONES PARA FILTRAR */}
        <div className="flex gap-4">
          <button onClick={handleOpenModal} className="flex items-center gap-2 px-4 py-3 rounded-md text-sm text-white bg-[#0052CA]">
            <span className="truncate">+ Nuevo salón</span>
          </button>
        </div>
      </section>
    </div>
  );
};

const deleteAlert = () => {
  Swal.fire({
    title: '¿Estas seguro de eliminar esta empresa?',
    text: "No podras revertir esta accion!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Si, eliminar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminado!',
        'La empresa ha sido eliminada.',
        'success'
      )
    }
  })
}

