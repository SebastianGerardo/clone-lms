import React, { useContext, useState } from "react";
import { useEffect } from "react";
import {ContentTableSemanas} from "../tables/TableSemanas";
import { Ripples } from "@uiball/loaders";
import { AnimatePresence, motion } from "framer-motion";
import { UserContext } from "../../../../../context/ContextLms";
import Semanas from "./Semanas/Semanas";
import { TraeDataSemanas } from "../../../../../helpers/ApiConfiguracion/ApiSemanas";
import { TraeDataLearning } from "../../../../../helpers/ApiConfiguracion/ApiLearningPath";
import { TraeDataCursos } from "../../../../../helpers/ApiConfiguracion/ApiCursos";

const SemanasPage = ({ setCursoActual, setNombreCurso, cursoSeleccionado }) => {
  const {token} = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false);
  const [cambiarTabla, setCambiarTabla] = useState(true); //Si es true, trae capitulos, si es false trae temas
  const [isLoaded, setIsLoaded] = useState(false);
  const [recargarTabla, setRecargarTabla] = useState(false);
  const [dataApi, setDataApi] = useState([]);
  const [dataSemanas, setDataSemanas] = useState([]);
  const [dataCursos, setDataCursos] = useState([]);
  const [capituloSeleccionado, setCapituloSeleccionado] = useState({});
  const [temaSeleccionado, setTemaSeleccionado] = useState({});
  const [temasFiltrados, setTemasFiltrados] = useState([]); //Filtrar temas por capitulo

  const handleRecargar = () => {
    setRecargarTabla(!recargarTabla);
  }

  useEffect(() => {
    TraeDataLearning(token).then((res) => {
      setDataApi(res?.data)
    })
  }, [recargarTabla])

  useEffect(() => {
    TraeDataSemanas(token).then((res) => {
      setDataSemanas(res?.data)
    })
  }, [recargarTabla])
  
  useEffect(() => {
    TraeDataCursos(token).then((res) => {
      setDataCursos(res?.data)
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
    dataApi:dataApi, 
    token:token,
    isOpen:isOpen,
    handleRecargar:handleRecargar,
    capituloSeleccionado:capituloSeleccionado,
  }

  const propsCapitulos = {
    dataSemanas:dataSemanas,
    dataCursos:dataCursos,
    setCapituloSeleccionado:setCapituloSeleccionado,
    dataApi:dataApi,
  }

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <section className="p-8 pt-0">
          <ContentTableSemanas
            setCursoActual={setCursoActual}
            setNombreCurso={setNombreCurso}
            handleOpenModal={handleOpenModal}
            dataSemanas={dataSemanas}
            setIsLoaded={setIsLoaded}
            setCambiarTabla={setCambiarTabla}
            cambiarTabla={cambiarTabla}
          />
        {!isLoaded ? (
          <div className="flex justify-center items-center h-[20rem]">
            <Ripples color="#2563EB" />
          </div>
        ) : (
          <AnimatePresence>
            <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            >
                <Semanas {...propsCapitulos} {...propsComunes}  />
            </motion.span>
          </AnimatePresence>
        )} 
        </section>
      </div>
  );
};

export default SemanasPage;
