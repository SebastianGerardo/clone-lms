import React, { useState } from "react";
import { useEffect } from "react";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { TraeDataCapitulo } from "../../../../../../helpers/ApiConfiguracion";
import { ModalTemas } from "../../modals/ModalTemas";
import { ColumnsTemas } from "../../tables/TableTemas";

const Temas = (props) => {

  const { columnsTemas } = ColumnsTemas({
    handleOpenModal: props.handleOpenModal,
    setTemaSeleccionado: props.setTemaSeleccionado,
    token: props.token,
    handleRecargar: props.handleRecargar,
  });

  useEffect(() => {
    TraeDataCapitulo(props.token, props.contenidoSeleccionado?.id).then((res) => {
      props.setDataTemas(res?.data?.issues);
    });
  }, [props.recargarTabla])

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
    contenidoSeleccionado: props.contenidoSeleccionado,
  }

  return (
    <>
      <TableBasic
        columns={columnsTemas}
        data={props.dataTemas}
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

