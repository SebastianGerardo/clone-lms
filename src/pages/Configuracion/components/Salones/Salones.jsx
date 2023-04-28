import React, { useState } from "react";
import Modal from "../../../../components/Modal/Modal";
import TableBasic from "../../../../components/Tables/TableBasic";
import { ApiConfiguracionCursos, TraeDataSalones, crearSalon } from "../../../../helpers/ApiConfiguracion";
import {ContentTableSalones, ColumnsSalones } from "./components/TableSalones";
import { useEffect } from "react";
import ModalSalon from "./components/ModalSalones/ModalSalon";

const Salones = ({setCursoActual, setNombreCurso}) => {
  const token = localStorage.getItem('token')
  const [isOpen, setIsOpen] = useState(false);
  const [dataSalones, setDataSalones] = useState([]);
  const [nuevoCurso, setNuevoCurso] = useState({ nombreCurso: "" });
  const [recargarTabla, setRecargarTabla] = useState(false);
  const {columnsSalones} = ColumnsSalones({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso,
    dataSalones: dataSalones,
  });

  useEffect(() => {
    TraeDataSalones(token).then((res) => {
      setDataSalones(res.data);
      console.log(res)
    });
  }, [recargarTabla])

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="p-8 pt-0">
      <ContentTableSalones dataSalones={dataSalones} handleOpenModal={handleOpenModal} ApiConfiguracionCursos={ApiConfiguracionCursos} />
      <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <TableBasic
          columns={columnsSalones}
          data={dataSalones}
          highlightOnHover
          striped
          onRowClicked={(row) => console.log(row)}
          pointerOnHover
        />
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalSalon handleCloseModal={handleCloseModal} setRecargarTabla={setRecargarTabla} recargarTabla={recargarTabla} />
      </Modal>
    </section>
  );
};

export default Salones;
