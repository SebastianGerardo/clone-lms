import React from "react";
import {SearchIcon } from "../../../../../assets/svgs/NormalSvgs";
import { NameTable } from "../../../../../components/Tables/TableComponents";
import editIcon from "../../../../../assets/icons/editIcon.png";
import deleteIcon from "../../../../../assets/icons/deleteIcon.png";
import verMas from "../../../../../assets/icons/verMas.png";
import Swal from "sweetalert2";
import { eliminarCiclo } from "../../../../../helpers/ApiConfiguracion/ApiCiclos";

export const ColumnsCiclos = ({setCursoActual, setNombreCurso, recargarTabla, setRecargarTabla, token, handleOpenModal, setDataSeleccionada, setCursoSeleccionado}) => {
  const columnsCiclos = [
      {
        name: <NameTable name="Orden" />,
        cell: (row, index) => (
          <p className="mt-[0.10rem] font-semibold">{index + 1}</p>
        ),
        width: "5rem",
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Learning Path" />,
        cell: (row) => row.learningPath?.name,
        width: "15rem",
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Costo" />,
        cell: (row) => <p className="mt-[0.10rem] font-semibold">S/.{row.costo}</p>,
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Fecha de Inicio" />,
        cell: (row) => row.start,
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Duracion" />,
        cell: (row) => {
          return <p className="mt-[0.10rem] font-semibold">{row.learningPath?.duration} Semanas</p>;
        },
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Acciones" />,
        cell: (row) => (
          <div className="flex gap-2">
              <div
              onClick={()=>{handleOpenModal(), setDataSeleccionada(row)}}
              className="cursor-pointer mx-auto"
              >
                  <div className="w-6 h-6 object-cover">
                      <img src={editIcon} alt="" className="w-full h-full object-cover" />
                  </div>
              </div>
              <div
              onClick={()=>{setCursoActual("Capitulos"), setNombreCurso(row.learningPath?.name), setCursoSeleccionado(row)}}
              className="cursor-pointer mx-auto"
              >
                  <div className="w-6 h-6 object-cover">
                      <img src={verMas} alt="" className="w-full h-full object-cover" />
                  </div>
              </div>
              <div
              onClick={() => deleteAlert(row.id, recargarTabla, setRecargarTabla, token)}
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
    columnsCiclos
  }
}

export const ContentTableCiclos = ({handleOpenModal, dataCiclos}) => {
  return (
    <div className="flex flex-col gap-y-2 mb-4 p-0">
      <section className="flex flex-col min-[1235px]:flex-row min-[1235px]:justify-around items-center gap-y-4">
        {/* TOTAL DE VIDEOS */}
        <div className="w-max p-3 px-6 rounded-md flex gap-1 text-sm bg-[#ef4444] text-white">
          <p>Total de ciclos</p>
          <span className="text-white/80">
            {"("}{dataCiclos?.length}{")"}
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
          <button onClick={handleOpenModal} className="flex items-center gap-2 px-4 py-3 rounded-md text-sm text-white bg-[#ef4444]">
            <span className="truncate">+ Nuevo Ciclo</span>
          </button>
        </div>
      </section>
    </div>
  );
};

const deleteAlert = (id, recargarTabla, setRecargarTabla, token) => {
  Swal.fire({
    title: '¿Estás seguro de eliminar este ciclo?',
    text: "No podrás revertir esta acción!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Si, eliminar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarCiclo(token, id).then((res) => {
        if (res.statusCode == 200) {
          Swal.fire(
            'Eliminado!',
            'El ciclo ha sido eliminado.',
            'success'
          )
          setRecargarTabla(!recargarTabla)
        } else {
          Swal.fire(
            'Error!',
            'No se pudo eliminar el ciclo.',
            'error'
          )
        }
      })
    }
  })
}

