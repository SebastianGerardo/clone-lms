import React from "react";
import { NameTable } from "../../../../../components/Tables/TableComponents";
import editIcon from "../../../../../assets/icons/editIcon.png";
import deleteIcon from "../../../../../assets/icons/deleteIcon.png";
import Swal from "sweetalert2";
import { Toast } from "../../../../../components/Alertas/SweetAlerts";
import { eliminarTema } from "../../../../../helpers/ApiConfiguracion";

export const ColumnsTemas = ({handleOpenModal, setTemaSeleccionado, token, handleRecargar}) => {
  const columnsTemas = [
      {
        name: <NameTable name="Order" />,
        cell: (row, index) => (
          <p className="mt-[0.10rem] font-semibold">{index + 1}</p>
        ),
        width: "5rem",
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Nombre del tema" />,
        cell: (row) => row?.name,
        sortable: true,
        center: true,
      },
      {
        name: <NameTable name="Acciones" />,
        cell: (row) => (
          <div className="flex gap-2">
              <div
              onClick={()=>{handleOpenModal(), setTemaSeleccionado(row)}}
              className="cursor-pointer mx-auto"
              >
                  <div className="w-6 h-6 object-cover">
                      <img src={editIcon} alt="" className="w-full h-full object-cover" />
                  </div>
              </div>
              <div
              onClick={() => deleteAlert(token, row.id, handleRecargar)}
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

const deleteAlert = (token, id,handleRecargar) => {
  Swal.fire({
    title: '¿Estas seguro de eliminar este tema?',
    text: "No podras revertir esta acción!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Sí, eliminar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarTema(token, id).then((res) => {
        if (res.statusCode == 200) {
          Swal.fire(
            'Eliminado!',
            'El tema ha sido eliminado.',
            'success'
          )
          handleRecargar();
        } else {
          Toast.fire({
            icon: "error",
            title: "Ocurrió un error al eliminar el tema",
          })
        }
      });
    }
  })
}

