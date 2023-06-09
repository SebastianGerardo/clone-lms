import React, { useContext, useState } from "react";
import { useEffect } from "react";
import {ContentTableSemanas} from "../tables/TableSemanas";
import { Ripples } from "@uiball/loaders";
import { AnimatePresence, motion } from "framer-motion";
import { UserContext } from "../../../../../context/ContextLms";
import Semanas from "./Semanas/Semanas";
import { TraeDataSemanas, TraeSemana } from "../../../../../helpers/ApiConfiguracion/ApiSemanas";
import { TraeDataLearning, TraeLearning } from "../../../../../helpers/ApiConfiguracion/ApiLearningPath";
import { TraeDataCursos } from "../../../../../helpers/ApiConfiguracion/ApiCursos";
import Cursos from "./Cursos/Cursos";

const SemanasPage = ({ setCursoActual, setNombreCurso, cursoSeleccionado, setNombreContenido, dataContenido }) => {
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
  const [dataSeleccionada, setDataSeleccionada] = useState({}); //Data seleccionada de la tabla
  const [dataLearning, setDataLearning] = useState([]); //Data de la tabla de capitulos

  const handleRecargar = () => {
    setRecargarTabla(!recargarTabla);
  }

  useEffect(() => {
    TraeDataLearning(token).then((res) => {
      setDataApi(res?.data)
    })
  }, [recargarTabla])

  useEffect(() => {
    TraeLearning(token, dataContenido?.id).then((res) => {
      setDataLearning(res?.data)
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

  const propsCursos = {
    setTemaSeleccionado:setTemaSeleccionado,
    temaSeleccionado:temaSeleccionado,
    recargarTabla:recargarTabla,
    dataSeleccionada:dataSeleccionada,
  }
  
  const propsComunes = {
    handleOpenModal: handleOpenModal,
    handleCloseModal: handleCloseModal,
    cursoSeleccionado:cursoSeleccionado,
    dataApi:dataApi, 
    token:token,
    isOpen:isOpen,
    handleRecargar:handleRecargar,
    dataCursos:dataCursos,
    capituloSeleccionado:capituloSeleccionado,
  }
  
  const propsSemanas = {
    dataLearning:dataLearning,
    setCapituloSeleccionado:setCapituloSeleccionado,
    dataApi:dataApi,
    setNombreContenido:setNombreContenido,
    setCambiarTabla:setCambiarTabla,
    setDataSeleccionada:setDataSeleccionada,
  }

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <section className="p-8 pt-0">
          <ContentTableSemanas
            setCursoActual={setCursoActual}
            setNombreCurso={setNombreCurso}
            handleOpenModal={handleOpenModal}
            setIsLoaded={setIsLoaded}
            setCambiarTabla={setCambiarTabla}
            cambiarTabla={cambiarTabla}
            setNombreContenido={setNombreContenido}
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
                <Semanas {...propsSemanas} {...propsComunes}  />
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
                <Cursos {...propsCursos} {...propsComunes}  />
            </motion.span>
          </AnimatePresence>
        )} 
        </section>
      </div>
  );
};

export default SemanasPage;
