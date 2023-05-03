import React, { useContext, useState } from "react";
import { useEffect } from "react";
import {ContentTableSalones} from "../tables/TableSalones";
import { Ripples } from "@uiball/loaders";
import { AnimatePresence, motion } from "framer-motion";
import { UserContext } from "../../../../../context/ContextLms";
import Salones from "./Salones/Salones";
import { TraeDataSalones } from "../../../../../helpers/ApiConfiguracion/ApiSalones";

const CiclosPage = ({ setCursoActual, setNombreCurso, cursoSeleccionado }) => {
  const {token} = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false);
  const [cambiarTabla, setCambiarTabla] = useState(true); //Si es true, trae capitulos, si es false trae temas
  const [isLoaded, setIsLoaded] = useState(false);
  const [recargarTabla, setRecargarTabla] = useState(false);
  const [dataSalones, setDataSalones] = useState([]);
  const [capituloSeleccionado, setCapituloSeleccionado] = useState({});
  const [temaSeleccionado, setTemaSeleccionado] = useState({});
  const [temasFiltrados, setTemasFiltrados] = useState([]); //Filtrar temas por capitulo

  const handleRecargar = () => {
    setRecargarTabla(!recargarTabla);
  }

  useEffect(() => {
    console.log("recargando tabla")
    TraeDataSalones(token).then((res) => {
      console.log("recargando tabla")
      setDataSalones(res?.data)
      console.log(res)
    })
  }, [recargarTabla])

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

  const handleCloseModal = () => {
    setCapituloSeleccionado({})
    setTemaSeleccionado({})
    setIsOpen(false);
  };

  const propsTema = {
    setTemaSeleccionado:setTemaSeleccionado,
    temaSeleccionado:temaSeleccionado,
    recargarTabla:recargarTabla,
    temasFiltrados:temasFiltrados,
  }

  const propsComunes = {
    handleOpenModal: handleOpenModal,
    handleCloseModal: handleCloseModal,
    cursoSeleccionado:cursoSeleccionado,
    dataSalones:dataSalones, 
    token:token,
    isOpen:isOpen,
    handleRecargar:handleRecargar,
    capituloSeleccionado:capituloSeleccionado,
  }

  const propsCapitulos = {
    setCapituloSeleccionado:setCapituloSeleccionado
  }

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <section className="p-8 pt-0">
          <ContentTableSalones
            setCursoActual={setCursoActual}
            setNombreCurso={setNombreCurso}
            handleOpenModal={handleOpenModal}
            cyclesClassrooms={cursoSeleccionado?.cyclesClassrooms}
            setIsLoaded={setIsLoaded}
            setCambiarTabla={setCambiarTabla}
            cambiarTabla={cambiarTabla}
          />
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
                <Salones {...propsCapitulos} {...propsComunes}  />
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
              {/* <Temas {...propsTema} {...propsComunes} /> */}
            </motion.span>
          </AnimatePresence>
        )}
        </section>
      </div>
  );
};

export default CiclosPage;
