import React, { useState } from "react";
import Modal from "../../../../components/Modal/Modal";
import TableBasic from "../../../../components/Tables/TableBasic";
import { ApiConfiguracionCursos, TraeDataEmpresa } from "../../../../helpers/ApiConfiguracion";
import {ContentTableEmpresa, ColumnsEmpresa } from "./components/TableEmpresa";
import ModalEmpresa from "./components/ModalEmpresa/ModalEmpresa";
import { useEffect } from "react";

const Empresa = ({setCursoActual, setNombreCurso}) => {
  const token = localStorage.getItem('token')
  const [isOpen, setIsOpen] = useState(false);
  const [dataEmpresa, setDataEmpresa] = useState([]);
  const [nuevoCurso, setNuevoCurso] = useState({ nombreCurso: "" });
  const [recargarTabla, setRecargarTabla] = useState(false);
  const {columnsEmpresa} = ColumnsEmpresa({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso,
  });

  useEffect(() => {
    TraeDataEmpresa(token).then((res) => {
      setDataEmpresa(res.data);
      console.log(res)
    });
  }, [recargarTabla])

  const handleChange = (e) => {
    setNuevoCurso({
      ...nuevoCurso,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const crearCurso = (e) => {
    e.preventDefault();
  };

  return (
    <section className="p-8 pt-0">
      <ContentTableEmpresa dataEmpresa={dataEmpresa} handleOpenModal={handleOpenModal} ApiConfiguracionCursos={ApiConfiguracionCursos} />
      <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <TableBasic
          columns={columnsEmpresa}
          data={dataEmpresa}
          highlightOnHover
          striped
          onRowClicked={(row) => console.log(row)}
          pointerOnHover
        />
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalEmpresa handleCloseModal={handleCloseModal} setRecargarTabla={setRecargarTabla} recargarTabla={recargarTabla} />
      </Modal>
    </section>
  );
};

export default Empresa;
