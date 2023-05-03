import React, { useState } from "react";
import Modal from "../../../../components/Modal/Modal";
import TableBasic from "../../../../components/Tables/TableBasic";
import {ContentTableCiclo, ColumnsCiclo } from "./components/TableCiclo";
import { useEffect } from "react";
import ModalCiclo from "./components/ModalCiclo/ModalCiclo";
import { TraeDataCiclos } from "../../../../helpers/ApiConfiguracion/ApiCiclos";

const Ciclos = ({setCursoActual, setNombreCurso}) => {
  const token = localStorage.getItem('token')
  const [isOpen, setIsOpen] = useState(false);
  const [dataCiclos, setDataCiclos] = useState([]);
  const [recargarTabla, setRecargarTabla] = useState(false);
  const [dataSeleccionada, setDataSeleccionada] = useState({})
  const [dataEmpresas, setDataEmpresas] = useState([])
  
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  
  const handleCloseModal = () => {
    setDataSeleccionada({})
    setIsOpen(false);
  };

  const {columnsCiclo} = ColumnsCiclo({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso,
    setDataSeleccionada: setDataSeleccionada,
    handleOpenModal: handleOpenModal,
    recargarTabla: recargarTabla,
    setRecargarTabla: setRecargarTabla
  });

  useEffect(() => {
    TraeDataCiclos(token).then((res) => {
      setDataCiclos(res.data);
    });
  }, [recargarTabla])

  const propsModal = {
    dataSeleccionada:dataSeleccionada,
    dataEmpresas:dataEmpresas, 
    handleCloseModal:handleCloseModal, 
    setRecargarTabla:setRecargarTabla, 
    recargarTabla:recargarTabla
  }
 
  return (
    <section className="p-8 pt-0">
      <ContentTableCiclo dataCiclos={dataCiclos} handleOpenModal={handleOpenModal} />
      <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <TableBasic
          columns={columnsCiclo}
          data={dataCiclos}
          highlightOnHover
          striped
          onRowClicked={(row) => console.log(row)}
          pointerOnHover
        />
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalCiclo {...propsModal} />
      </Modal>
    </section>
  );
};

export default Ciclos;
