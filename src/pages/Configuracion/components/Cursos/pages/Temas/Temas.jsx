import React from "react";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { ModalTemas } from "../../modals/ModalTemas";
import { ColumnsTemas } from "../../tables/TableTemas";

const Temas = (props) => {
  
  const { columnsTemas } = ColumnsTemas({
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
        data={props.temasFiltrados}
        highlightOnHover
        striped
        onRowClicked={(row) => console.log(row)}
        pointerOnHover
      />
      <ModalTemas {...propsModal} />
    </>
  );
};

export default Temas;

