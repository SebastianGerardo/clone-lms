import React from "react";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { ModalSemanas } from "../../modals/ModalSemanas";
import {ColumnsSemanas} from "../../tables/TableSemanas";

const Semanas = (props) => {

  const { columnsSemanas } = ColumnsSemanas({
    handleOpenModal: props.handleOpenModal,
    setCapituloSeleccionado: props.setCapituloSeleccionado,
    handleRecargar: props.handleRecargar,
    token: props.token,
    setNombreContenido: props.setNombreContenido,
    setCambiarTabla: props.setCambiarTabla,
    setDataSeleccionada: props.setDataSeleccionada,
  });

  const propsModal = {
    handleRecargar:props.handleRecargar,
    capituloSeleccionado:props.capituloSeleccionado, 
    handleCloseModal:props.handleCloseModal, 
    token:props.token,
    isOpen:props.isOpen, 
    cursoSeleccionado:props.cursoSeleccionado,
    dataCursos:props.dataCursos,
    dataApi:props.dataApi
  }

  return (
    <>
      <TableBasic
        columns={columnsSemanas}
        data={props?.dataLearning?.weeks}
        highlightOnHover
        striped
        onRowClicked={(row) => console.log(row)}
        pointerOnHover
      />
      <ModalSemanas {...propsModal} />
    </>
  );
};

export default Semanas;
