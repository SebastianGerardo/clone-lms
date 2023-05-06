import React from "react";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { ModalSalones } from "../../modals/ModalSalones";
import {ColumnsSalones} from "../../tables/TableSalones";

const Salones = (props) => {

  const { columnsSalones } = ColumnsSalones({
    handleOpenModal: props.handleOpenModal,
    setCapituloSeleccionado: props.setCapituloSeleccionado,
    handleRecargar: props.handleRecargar,
    token: props.token,
  });

  const propsModal = {
    handleRecargar:props.handleRecargar,
    capituloSeleccionado:props.capituloSeleccionado, 
    handleCloseModal:props.handleCloseModal, 
    token:props.token,
    isOpen:props.isOpen, 
    cursoSeleccionado:props.cursoSeleccionado,
    dataSalones:props.dataSalones
  }

  return (
    <>
      <TableBasic
        columns={columnsSalones}
        data={props?.dataApi?.cyclesClassrooms}
        highlightOnHover
        striped
        onRowClicked={(row) => console.log(row)}
        pointerOnHover
      />
      <ModalSalones {...propsModal} />
    </>
  );
};

export default Salones;


