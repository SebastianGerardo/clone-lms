import React, { useEffect, useState } from "react";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { TraeSemana } from "../../../../../../helpers/ApiConfiguracion/ApiSemanas";
import { ModalCursos } from "../../modals/ModalCursos";
import { ColumnsCursos } from "../../tables/TableCursos";

const Cursos = (props) => {
  
  const [dataSemana, setDataSemana] = useState([])

  const { columnsCursos } = ColumnsCursos({
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
    dataCursos: props.dataCursos,
    dataSeleccionada: props.dataSeleccionada,
  }

  useEffect(() => {
    TraeSemana(props.token, props.dataSeleccionada).then((res) => {
      console.log(res)
      setDataSemana(res?.data)
    })
  }, [props.recargarTabla])

  return (
    <>
      <TableBasic
        columns={columnsCursos}
        data={dataSemana?.coursesWeeks}
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
