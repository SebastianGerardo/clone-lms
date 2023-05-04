import React from "react";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { ModalCapitulos } from "../../modals/ModalCapitulos";
import {ColumnsCapitulos} from "../../tables/TableCapitulos";

const Capitulos = (props) => {

  const { columnsCapitulos } = ColumnsCapitulos({
    handleOpenModal: props.handleOpenModal,
    handleRecargar: props.handleRecargar,
    token: props.token,
    setNombreContenido: props.setNombreContenido,
    setCambiarTabla: props.setCambiarTabla,
    setCapituloSeleccionado: props.setCapituloSeleccionado,
    setContenidoSeleccionado: props.setContenidoSeleccionado,
  });

  const propsModal = {
    handleRecargar:props.handleRecargar,
    capituloSeleccionado:props.capituloSeleccionado, 
    handleCloseModal:props.handleCloseModal, 
    token:props.token,
    isOpen:props.isOpen, 
    cursoSeleccionado:props.cursoSeleccionado,
    dataApi:props.dataApi,
    contenidoSeleccionado:props.contenidoSeleccionado,
  }

  return (
    <>
      <TableBasic
        columns={columnsCapitulos}
        data={props.dataApi}
        highlightOnHover
        striped
        onRowClicked={(row) => console.log(row)}
        pointerOnHover
      />
      <ModalCapitulos {...propsModal} />
    </>
  );
};

export default Capitulos;

