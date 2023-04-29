import React, { useState } from "react";
import Modal from "../../../../components/Modal/Modal";
import TableBasic from "../../../../components/Tables/TableBasic";
import { ApiConfiguracionCursos, TraeDataEmpresa, TraeDataLocales } from "../../../../helpers/ApiConfiguracion";
import {ContentTableLocal, ColumnsLocal } from "./components/TableLocal";
import { useEffect } from "react";
import ModalLocal from "./components/ModalLocal/ModalLocal";

const Local = ({setCursoActual, setNombreCurso}) => {
  const token = localStorage.getItem('token')
  const [isOpen, setIsOpen] = useState(false);
  const [dataLocales, setDataLocales] = useState([]);
  const [recargarTabla, setRecargarTabla] = useState(false);
  const [dataLocal, setDataLocal] = useState({})
  
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  
  const handleCloseModal = () => {
    setDataLocal({})
    setIsOpen(false);
  };

  const {columnsLocal} = ColumnsLocal({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso,
    setDataLocal: setDataLocal,
    handleOpenModal: handleOpenModal
  });

  const [dataEmpresas, setDataEmpresas] = useState([])


  useEffect(() => {
    TraeDataLocales(token).then((res) => {
      setDataLocales(res.data);
    });
  }, [recargarTabla])

  useEffect(() => {
    TraeDataEmpresa(token).then((res) => {
      setDataEmpresas(res.data)
    });
  }, [recargarTabla])

 
  return (
    <section className="p-8 pt-0">
      <ContentTableLocal dataLocales={dataLocales} handleOpenModal={handleOpenModal} ApiConfiguracionCursos={ApiConfiguracionCursos} />
      <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <TableBasic
          columns={columnsLocal}
          data={dataLocales}
          highlightOnHover
          striped
          onRowClicked={(row) => console.log(row)}
          pointerOnHover
        />
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalLocal dataLocal={dataLocal} dataEmpresas={dataEmpresas} handleCloseModal={handleCloseModal} setRecargarTabla={setRecargarTabla} recargarTabla={recargarTabla} />
      </Modal>
    </section>
  );
};

export default Local;
