import React from "react";
import {SearchIcon } from "../../../../../assets/svgs/NormalSvgs";
import { NameTable } from "../../../../../components/Tables/TableComponents";
import editIcon from "../../../../../assets/icons/editIcon.png";
import deleteIcon from "../../../../../assets/icons/deleteIcon.png";
import verMas from "../../../../../assets/icons/verMas.png";
import Swal from "sweetalert2";
import { eliminarCapitulo } from "../../../../../helpers/ApiConfiguracion";
import { Toast } from "../../../../../components/Alertas/SweetAlerts";

export const ColumnsCapitulos = ({handleRecargar,  handleOpenModal, setCapituloSeleccionado, token, setNombreContenido, setCambiarTabla, setContenidoSeleccionado}) => {
  const columnsCapitulos = [
      {
        name: <NameTable name="Orden" />,
        cell: (row, index) => (
          <p className="mt-[0.10rem] font-semibold">{row.order}</p>
        ),
        width: "5rem",
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Capitulo" />,
        cell: (row) => row.name,
        width: "15rem",
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Cantidad de capitulos" />,
        cell: (row) => {
          return (
          <div className="mt-[0.10rem] font-semibold flex gap-1">
              {row?.issues?.map((element) => (
              <div className="py-1 px-2 bg-green-400 text-green-700" key={element.id}>
                <p>{element.name}</p>
              </div>))}
          </div>)
        },
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Acciones" />,
        cell: (row) => (
          <div className="flex gap-2">
              <div
              onClick={() => {handleOpenModal(), setCapituloSeleccionado(row)}}
              className="cursor-pointer mx-auto"
              >
                  <div className="w-6 h-6 object-cover">
                      <img src={editIcon} alt="" className="w-full h-full object-cover" />
                  </div>
              </div>
              <div
              onClick={()=>{setNombreContenido(row.name), setCambiarTabla(false), setContenidoSeleccionado(row)}}
              className="cursor-pointer mx-auto"
              >
                  <div className="w-6 h-6 object-cover">
                      <img src={verMas} alt="" className="w-full h-full object-cover" />
                  </div>
              </div>
              <div
              onClick={() => deleteAlert(row.id, token, handleRecargar)}
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
    columnsCapitulos
  }
}
export const ContentTableCapitulos = ({handleOpenModal, dataApi,setCursoActual, setNombreCurso, setCambiarTabla, cambiarTabla, setContenidoSeleccionado, setNombreContenido}) => {
  return (
    <div className="flex flex-col gap-y-2 mb-4 p-0">
      <section className="flex flex-col min-[1235px]:flex-row min-[1235px]:justify-around items-center gap-y-4">
        {/* TOTAL DE VIDEOS */}
        <div className="w-max p-3 px-6 rounded-md flex gap-1 text-sm bg-[#ef4444] text-white">
          <p>Total de {cambiarTabla ? "capítulos" : "temas"}</p>
          <span className="text-white/80">
            {"("}{dataApi?.length}{")"}
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
            <span className="truncate">+ Nuevo {cambiarTabla ? "capítulo" : "tema"}</span>
          </button>
          {cambiarTabla ? (
            <button onClick={() => {setCursoActual("Cursos"), setNombreCurso(null)}} className="flex items-center gap-2 px-4 py-3 rounded-md text-sm text-white bg-[#ef4444]">
              <span className="truncate">Retroceder</span>
            </button>
          ) : (
            <button onClick={() => {setCambiarTabla(true), setContenidoSeleccionado({}), setNombreContenido(null)}} className="flex items-center gap-2 px-4 py-3 rounded-md text-sm text-white bg-[#ef4444]">
              <span className="truncate">Retroceder</span>
            </button>
          )}
        </div>
      </section>
    </div>
  );
};


const deleteAlert = (id, token, handleRecargar ) => {
  Swal.fire({
    title: `¿Estas seguro de eliminar este capítulo?`,
    text: "No podras revertir esta accion!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Si, eliminar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarCapitulo(token, id).then((res) => {
        if (res.statusCode === 200) {
          Swal.fire(
            'Eliminado!',
            `El capítulo ha sido eliminado.`,
            'success'
          )
          handleRecargar()
        } else {
          Toast.fire({
            icon: "error",
            title: "Ocurrió un error al eliminar el capítulo",
          });
        }
      })
    }
  })
}

