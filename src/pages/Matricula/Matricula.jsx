import React, { useCallback, useRef, useState } from "react";
import Modal from "../../components/Modal/Modal";
import ModalMatricula from "./pages/ModalMatricula/ModalMatricula";
import { ApiCiclos } from "../../helpers/ApiMatricula";
import ciclo_uni from "../../assets/img/ciclo-uni.png";
import ciclo_unasam from "../../assets/img/ciclo-unasam.png";
import ciclo_pucp from "../../assets/img/ciclo-pucp.png";
import ciclo_catolica from "../../assets/img/ciclo-catolica.png";
import { useMemo } from "react";
import { TableMatriculaPersonalized } from "./pages/TableMatricula/TableMatricula";
import { CentralBarMatricula } from "./components/CentralBarMatricula";
import { Ripples } from "@uiball/loaders";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cicloImg = {
  "Ciclo Pre Uni": ciclo_uni,
  "Ciclo Católica": ciclo_catolica,
  "Ciclo Medicina": ciclo_pucp,
  "Ciclo Unasam": ciclo_unasam,
}

export default function Matricula() {
  const [isOpen, setIsOpen] = useState(false);
  const [dataCiclos, setDataCiclos] = useState(ApiCiclos);
  const [selectCicloId, setSelectCicloId] = useState(null);
  const [mostrarPor, setMostrarPor] = useState(true);
  const [loader, setLoader] = useState(true);
  const [dataCiclosFiltrados, setDataCiclosFiltrados] = useState("");

  const dataFiltrada = dataCiclos.filter((ciclo) => {
    return (
      ciclo.nombre &&
      ciclo.nombre.toLowerCase().includes(dataCiclosFiltrados.toLowerCase())
    );
  });

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
    <div className="bg-white py-4 px-10 lg:px-20 ">
      <CentralBarMatricula
        setDataCiclosFiltrados={setDataCiclosFiltrados}
        dataCiclosFiltrados={dataCiclosFiltrados}
        dataCiclos={dataCiclos}
        mostrarPor={mostrarPor}
        setMostrarPor={setMostrarPor}
      />
      <div className="w-full mb-5 flex flex-col gap-3">
        {mostrarPor ? (
          loader ? (
            <div className="flex justify-center items-center h-[20rem]">
              <Ripples color="#ef4444" />
            </div>
          ) : (
            <AnimatePresence>
              <motion.section
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-4 md:gap-x-14 mt-4 md:gap-y-0 "
              >
                {dataFiltrada.length > 0 &&
                  dataFiltrada.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => handleOpenModal(item.id)}
                      className="cursor-pointer mx-auto flex flex-col gap-y-4 justify-center items-center rounded-xl w-[10rem] h-[10rem] bg-red-200/70"
                    >
                      <div className="w-20 object-cover">
                        <img src={cicloImg[item.nombre]} alt="escudo" className="w-full h-full" />
                      </div>
                      <h1 className="text-center font-poppins text-[#ef4444]">
                        {item.nombre}
                      </h1>
                    </div>
                  ))}
              </motion.section>
            </AnimatePresence>
          )
        ) : loader ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <TableMatriculaPersonalized
                cicloImg={cicloImg}
                handleOpenModal={handleOpenModal}
                data={dataFiltrada}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex justify-center items-center h-[20rem]">
            <Ripples color="#ef4444" />
          </div>
        )}
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ModalMatricula
            handleCloseModal={handleCloseModal}
            mostrarPor={mostrarPor}
            dataCiclo={cicloSeleccionado}
          />
        </Modal>
      </div>
    </div>
  );
}
