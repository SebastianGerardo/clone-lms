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
  const [nuevoCurso, setNuevoCurso] = useState({ nombreCurso: "" });
  const [recargarTabla, setRecargarTabla] = useState(false);
  const {columnsLocal} = ColumnsLocal({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso,
  });

  useEffect(() => {
    TraeDataLocales(token).then((res) => {
      setDataLocales(res.data);
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
        <ModalLocal handleCloseModal={handleCloseModal} setRecargarTabla={setRecargarTabla} recargarTabla={recargarTabla} />
      </Modal>
    </section>
  );
};

export default Local;
