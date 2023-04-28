import React, { useState } from "react";
import { useEffect } from "react";
import { InputBasic } from "../../../../../../components/Inputs/InputBasic";
import Modal from "../../../../../../components/Modal/Modal";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { ApiConfiguracionCursos } from "../../../../../../helpers/ApiConfiguracion";
import {ContentTableCapitulos,ColumnsCapitulos} from "../../tables/TableCapitulos";
import { Ripples } from "@uiball/loaders";
import { AnimatePresence, motion } from "framer-motion";

const Capitulos = ({ setCursoActual, setNombreCurso }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cambiarTabla, setCambiarTabla] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [cambiarTabla]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const { columnsCapitulos } = ColumnsCapitulos({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso,
    handleOpenModal: handleOpenModal,
    cambiarTabla: cambiarTabla,
  });

  return (
    <section className="p-8 pt-0">
      <ContentTableCapitulos
        cambiarTabla={cambiarTabla}
        setCambiarTabla={setCambiarTabla}
        setCursoActual={setCursoActual}
        setNombreCurso={setNombreCurso}
        handleOpenModal={handleOpenModal}
        ApiConfiguracionCursos={ApiConfiguracionCursos}
        setIsLoaded={setIsLoaded}
      />
      <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        {!isLoaded ? (
          <div className="flex justify-center items-center h-[20rem]">
            <Ripples color="#2563EB" />
          </div>
        ) : cambiarTabla ? (
          <AnimatePresence>
            <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            >
              <TableBasic
                columns={columnsCapitulos}
                data={ApiConfiguracionCursos}
                highlightOnHover
                striped
                onRowClicked={(row) => console.log(row)}
                pointerOnHover
              />
            </motion.span>
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            >
              <TableBasic
                columns={columnsCapitulos}
                data={ApiConfiguracionCursos}
                highlightOnHover
                striped
                onRowClicked={(row) => console.log(row)}
                pointerOnHover
              />
            </motion.span>
          </AnimatePresence>
        )}
      </div>
      <ModalCurso isOpen={isOpen} setIsOpen={setIsOpen} cambiarTabla={cambiarTabla}/>
    </section>
  );
};

export default Capitulos;

const ModalCurso = ({ isOpen, setIsOpen, cambiarTabla }) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const crearCurso = (e) => {
    e.preventDefault();
    console.log(nuevoCurso);
  };

  const [nuevoCurso, setNuevoCurso] = useState({});

  const handleChange = (e) => {
    setNuevoCurso({
      ...nuevoCurso,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <h1 className="font-medium">Agregar nuevo {cambiarTabla ? "capítulo" : "tema"}</h1>
      <div className="p-8 pt-6 pb-0">
        <form
          className="flex flex-col items-center xl:items-end gap-2"
          onSubmit={crearCurso}
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="w-20">
              <InputBasic
                pHolder={"123..."}
                data={cambiarTabla? nuevoCurso.ordenCapitulo : nuevoCurso.ordenTema}
                labelName={"Orden"}
                onChange={handleChange}
                name={cambiarTabla ? "ordenCapitulo" : "ordenTema"}
                required={true}
              />
            </div>
            <InputBasic
              pHolder={"Teoría de exponentes"}
              data={cambiarTabla ? nuevoCurso.nombreCapitulo : nuevoCurso.nombreTema}
              labelName={`Nombre del ${cambiarTabla ? "Capítulo" : "Tema"}`}
              onChange={handleChange}
              name={cambiarTabla ? "nombreCapitulo" : "nombreTema"}
              required={true}
            />
          </div>
          <button
            className={`bg-green-500 hover:bg-green-700 cursor-pointer text-white py-2 px-2 rounded xl:relative xl:left-10 xl:top-2`}
          >
            Agregar
          </button>
        </form>
      </div>
    </Modal>
  );
};
