import React, { useState } from "react";
import { InputBasic } from "../../../../../../components/Inputs/InputBasic";
import Modal from "../../../../../../components/Modal/Modal";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { ApiConfiguracionCursos } from "../../../../../../helpers/ApiConfiguracion";
import {ContentTableCursos, ColumnsCursos } from "../../tables/TableCursos";

const Cursos = ({setCursoActual, setNombreCurso}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nuevoCurso, setNuevoCurso] = useState({ nombreCurso: "" });
  const {columnsCursos} = ColumnsCursos({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso
  });

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
      <ContentTableCursos handleOpenModal={handleOpenModal} ApiConfiguracionCursos={ApiConfiguracionCursos} />
      <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <TableBasic
          columns={columnsCursos}
          data={ApiConfiguracionCursos}
          highlightOnHover
          striped
          onRowClicked={(row) => console.log(row)}
          pointerOnHover
        />
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h1 className="font-medium">Agregar nuevo curso</h1>
        <div className="p-8 pt-6 pb-0">
          <form
            className="flex flex-col items-center xl:items-end gap-2"
            onSubmit={crearCurso}
          >
            <InputBasic
              pHolder={"Algebra"}
              data={nuevoCurso.nombreCurso}
              labelName={"Nombre del Curso"}
              onChange={handleChange}
              name={"nombreCurso"}
              required={true}
            />
            <button
              className={`bg-green-500 hover:bg-green-700 cursor-pointer text-white py-2 px-2 rounded xl:relative xl:left-10 xl:top-2`}
            >
              Agregar
            </button>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Cursos;
