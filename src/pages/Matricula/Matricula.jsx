import React, { useCallback, useRef, useState } from "react";
import Modal from "../../components/Modal/Modal";
import ContentModalMatricula from "./components/ModalMatricula/ContentModalMatricula";
import { ApiCiclos } from "../../helpers/ApiMatricula";
import escudo from "../../assets/icons/escudo.svg";
import { useMemo } from "react";
import { TableMatriculaPersonalized } from "./components/TableMatricula";
import { CentralBarMatricula } from "./components/CentralBarMatricula";
import { Ripples } from "@uiball/loaders";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Matricula() {
  const [isOpen, setIsOpen] = useState(false);
  const [dataCiclos, setDataCiclos] = useState(ApiCiclos);
  const [selectCicloId, setSelectCicloId] = useState(null);
  const [mostrarPor, setMostrarPor] = useState(true);
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    const interval = setInterval(() => {
      setLoader(!loader);
    }, 250);
    return () => clearInterval(interval);
  }, [mostrarPor]);

  const cicloSeleccionado = useMemo(() => {
    return dataCiclos.find((ciclo) => ciclo.id === selectCicloId);
  }, [selectCicloId]);

  const handleOpenModal = (id) => {
    setIsOpen(true);
    setSelectCicloId(id);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-white py-4 px-20 ">
      <CentralBarMatricula
        dataCiclos={dataCiclos}
        mostrarPor={mostrarPor}
        setMostrarPor={setMostrarPor}
      />
      <div className="w-full mb-5 flex flex-col gap-3">
        {mostrarPor ? (
          loader ? (
            <div className="flex justify-center items-center h-[20rem]">
              <Ripples color="#2563EB" />
            </div>
          ) : (
            <AnimatePresence>
              <motion.section
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }} 
              className="grid grid-cols-1 gap-y-4 lg:grid-cols-4 mt-4 lg:gap-y-0"
              >
                {dataCiclos.length > 0 &&
                  dataCiclos.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => handleOpenModal(item.id)}
                      className="cursor-pointer mx-auto flex flex-col gap-y-4 justify-center items-center rounded-xl w-[10rem] h-[10rem] bg-blue-200/70"
                    >
                      <img src={escudo} alt="escudo" />
                      <h1 className="text-center font-poppins text-blue-600">
                        {item.nombre}
                      </h1>
                    </div>
                  ))}
              </motion.section>
            </AnimatePresence>
          )
        ) : (
          loader ? (
            <AnimatePresence>
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }} 
              >
                <TableMatriculaPersonalized handleOpenModal={handleOpenModal} />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="flex justify-center items-center h-[20rem]">
              <Ripples color="#2563EB" />
            </div>
          )
        )}
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ContentModalMatricula
            mostrarPor={mostrarPor}
            dataCiclo={cicloSeleccionado}
          />
        </Modal>
      </div>
    </div>
  );
}
