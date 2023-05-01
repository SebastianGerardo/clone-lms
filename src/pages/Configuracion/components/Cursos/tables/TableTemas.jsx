import React from "react";
import { NameTable } from "../../../../../components/Tables/TableComponents";
import editIcon from "../../../../../assets/icons/editIcon.png";
import deleteIcon from "../../../../../assets/icons/deleteIcon.png";
import Swal from "sweetalert2";

export const ColumnsTemas = ({setCursoActual, setNombreCurso}) => {
  const columnsTemas = [
      {
        name: <NameTable name="Codigo" />,
        cell: (row) => (
          <p className="mt-[0.10rem] font-semibold">{row.id}</p>
        ),
        width: "5rem",
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Curso" />,
        cell: (row) => row.nombre,
        width: "15rem",
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Cantidad de capitulos" />,
        cell: (row) => {
          return <p className="mt-[0.10rem] font-semibold">{row.cantidadCapitulos}</p>;
        },
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Acciones" />,
        cell: (row) => (
          <div className="flex gap-2">
              <div
              onClick={()=>{setCursoActual("Capitulos"), setNombreCurso(row.nombre)}}
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
    columnsTemas
  }
}

const deleteAlert = () => {
  Swal.fire({
    title: '¿Estas seguro de eliminar este curso?',
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
        'El curso ha sido eliminado.',
        'success'
      )
    }
  })
}

