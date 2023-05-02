import React, { useState } from "react";
import Modal from "../../../../components/Modal/Modal";
import TableBasic from "../../../../components/Tables/TableBasic";
import { TraeDataSalones, crearSalon, TraeDataLocales } from "../../../../helpers/ApiConfiguracion";
import {ContentTableSalones, ColumnsSalones } from "./components/TableSalones";
import { useEffect } from "react";
import ModalSalon from "./components/ModalSalones/ModalSalon";

const Salones = ({setCursoActual, setNombreCurso}) => {
  const token = localStorage.getItem('token')
  const [isOpen, setIsOpen] = useState(false);
  const [dataSalones, setDataSalones] = useState([]);
  const [dataLocales, setDataLocales] = useState([]);
  const [infoSalon, setInfoSalon] = useState({})
  const [recargarTabla, setRecargarTabla] = useState(false);

  useEffect(() => {
    TraeDataSalones(token).then((res) => {
      setDataSalones(res.data);
    });
  }, [recargarTabla])

  useEffect(() => {
    TraeDataLocales(token).then((res) => {
      setDataLocales(res.data);
    });
  }, [recargarTabla])

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setInfoSalon({})
    setIsOpen(false);
  };

  const {columnsSalones} = ColumnsSalones({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso,
    dataSalones: dataSalones,
    setInfoSalon: setInfoSalon,
    handleOpenModal: handleOpenModal,
    setRecargarTabla: setRecargarTabla,
    recargarTabla: recargarTabla,
  });

  return (
    <section className="p-8 pt-0">
      <ContentTableSalones dataSalones={dataSalones} handleOpenModal={handleOpenModal} />
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
        <ModalSalon infoSalon={infoSalon} dataLocales={dataLocales} handleCloseModal={handleCloseModal} setRecargarTabla={setRecargarTabla} recargarTabla={recargarTabla} />
      </Modal>
    </section>
  );
};

export default Salones;
