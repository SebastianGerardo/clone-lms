import React from "react";
import {SearchIcon } from "../../../../../assets/svgs/NormalSvgs";
import { NameTable } from "../../../../../components/Tables/TableComponents";
import editIcon from "../../../../../assets/icons/editIcon.png";
import deleteIcon from "../../../../../assets/icons/deleteIcon.png";
import verMas from "../../../../../assets/icons/verMas.png";
import Swal from "sweetalert2";
import { Toast } from "../../../../../components/Alertas/SweetAlerts";
import { eliminarSemana } from "../../../../../helpers/ApiConfiguracion/ApiSemanas";

export const ColumnsSemanas = (props) => {
  const columnsSemanas = [
      {
        name: <NameTable name="Orden" />,
        cell: (row, index) => (
          <p className="mt-[0.10rem] font-semibold">{index + 1}</p>
        ),
        width: "8rem",
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Semana" />,
        cell: (row) => row.name,
        width: "15rem",
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Curso" />,
        cell: (row) => <p className="text-gray-400 italic text-xs">{row?.coursesWeeks?.name || "Aún no ha agregado cursos a esta semana"}</p>,
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Acciones" />,
        cell: (row) => (
          <div className="flex gap-2">
              {/* <div
              onClick={() => {props.handleOpenModal(), props.setCapituloSeleccionado(row)}}
              className="cursor-pointer mx-auto"
              >
                  <div className="w-6 h-6 object-cover">
                      <img src={editIcon} alt="" className="w-full h-full object-cover" />
                  </div>
              </div> */}
              <div
              onClick={()=>{props.setCambiarTabla(false), props.setNombreContenido(row.name), props.setDataSeleccionada(row.id)}}
              className="cursor-pointer mx-auto"
              >
                  <div className="w-6 h-6 object-cover">
                      <img src={verMas} alt="" className="w-full h-full object-cover" />
                  </div>
              </div>
              <div
              onClick={() => deleteAlert(row.id, props.token, props.handleRecargar)}
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
    columnsSemanas
  }
}
export const ContentTableSemanas = ({handleOpenModal, dataSemanas,setCursoActual, setNombreCurso, setCambiarTabla, cambiarTabla, setNombreContenido}) => {

  const handleRetroceder = () => {
    if (cambiarTabla) {
      setCursoActual("Cursos")
      setNombreCurso(null)
    } else {
      setCambiarTabla(true)
      setNombreContenido(null)
    }
  }

  return (
    <div className="flex flex-col gap-y-2 mb-4 p-0">
      <section className="flex flex-col min-[1235px]:flex-row min-[1235px]:justify-around items-center gap-y-4">
        {/* TOTAL DE VIDEOS */}
        <div className="w-max p-3 px-6 rounded-md flex gap-1 text-sm bg-[#ef4444] text-white">
          <p>Total de {cambiarTabla ? "semanas" : "cursos"}</p>
          <span className="text-white/80">
            {"("}{dataSemanas?.length}{")"}
          </span>
        </div>
        
        {/* INPUT BUSCAR */}
        <form className="w-full min-[790px]:w-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon color="#A4B2CD" />
            </div>
            <input
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
          {!cambiarTabla && (
            <button onClick={handleOpenModal} className="flex items-center gap-2 px-4 py-3 rounded-md text-sm text-white bg-[#ef4444]">
              <span className="truncate">+ Agregar curso </span>
            </button>
          )}
          <button onClick={handleRetroceder} className="flex items-center gap-2 px-4 py-3 rounded-md text-sm text-white bg-[#ef4444]">
            <span className="truncate">Volver</span>
          </button>
        </div>
      </section>
    </div>
  );
};


const deleteAlert = (id, token, handleRecargar ) => {
  Swal.fire({
    title: `¿Estas seguro de eliminar esta semana?`,
    text: "No podrás revertir esta acción!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Sí, eliminar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarSemana(token, id).then((res) => {
        if (res.statusCode === 200) {
          Swal.fire(
            'Eliminada!',
            `La semana ha sido eliminada.`,
            'success'
          )
          handleRecargar()
        } else {
          Toast.fire({
            icon: "error",
            title: "Ocurrió un error al eliminar la semana",
          });
        }
      })
    }
  })
}

