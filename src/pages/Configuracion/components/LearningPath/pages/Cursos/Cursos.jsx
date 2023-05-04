import React from "react";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { ModalCursos } from "../../modals/ModalCursos";
import { ColumnsCursos } from "../../tables/TableCursos";

const Cursos = (props) => {
  
  const { columnsTemas } = ColumnsCursos({
    handleOpenModal: props.handleOpenModal,
    setTemaSeleccionado: props.setTemaSeleccionado,
    token: props.token,
    handleRecargar: props.handleRecargar,
  });

  const propsModal = {
    handleRecargar: props.handleRecargar,
    capituloSeleccionado: props.capituloSeleccionado,
    handleCloseModal: props.handleCloseModal,
    token: props.token,
    isOpen: props.isOpen,
    cursoSeleccionado: props.cursoSeleccionado,
    dataApi: props.dataApi,
    temaSeleccionado: props.temaSeleccionado,
    temasFiltrados: props.temasFiltrados,
  }

  return (
    <>
      <TableBasic
        columns={columnsTemas}
        data={[]}
        highlightOnHover
        striped
        onRowClicked={(row) => console.log(row)}
        pointerOnHover
      />
      <ModalCursos {...propsModal} />
    </>
  );
};

export default Cursos;
