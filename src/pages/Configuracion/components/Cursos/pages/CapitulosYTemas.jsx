import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { TraeDataCapitulo, TraeDataCurso } from "../../../../../helpers/ApiConfiguracion";
import {ContentTableCapitulos} from "../tables/TableCapitulos";
import { Ripples } from "@uiball/loaders";
import { AnimatePresence, motion } from "framer-motion";
import { UserContext } from "../../../../../context/ContextLms";
import Temas from "./Temas/Temas";
import Capitulos from "./Capitulos/Capitulos";

const CapitulosYTemas = ({ setCursoActual, setNombreCurso, cursoSeleccionado, setNombreContenido }) => {
  const {token} = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false);
  const [cambiarTabla, setCambiarTabla] = useState(true); //Si es true, trae capitulos, si es false trae temas
  const [isLoaded, setIsLoaded] = useState(false);
  const [recargarTabla, setRecargarTabla] = useState(false);
  const [dataApi, setDataApi] = useState([]);
  const [capituloSeleccionado, setCapituloSeleccionado] = useState({});
  const [contenidoSeleccionado, setContenidoSeleccionado] = useState({}); 
  const [temaSeleccionado, setTemaSeleccionado] = useState({});
  const [temasFiltrados, setTemasFiltrados] = useState([]); //Filtrar temas por capitulo
  const [dataTemas, setDataTemas] = useState([]);

  const handleRecargar = () => {
    setRecargarTabla(!recargarTabla);
  }

  useEffect(() => {
    console.log(contenidoSeleccionado?.id)
    TraeDataCurso(token, cursoSeleccionado).then((res) => {
      setDataApi(res?.data?.chapters)
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
    contenidoSeleccionado:contenidoSeleccionado,
    dataTemas:dataTemas,
    setDataTemas:setDataTemas,
  }

  const propsCapitulos = {
    setNombreContenido:setNombreContenido,
    setCapituloSeleccionado:setCapituloSeleccionado,
    setCambiarTabla:setCambiarTabla,
    setContenidoSeleccionado:setContenidoSeleccionado,
  }

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <section className="p-8 pt-0">
          <ContentTableCapitulos
            setNombreContenido={setNombreContenido}
            setContenidoSeleccionado={setContenidoSeleccionado}
            setCursoActual={setCursoActual}
            setNombreCurso={setNombreCurso}
            handleOpenModal={handleOpenModal}
            dataApi={dataApi}
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
                <Capitulos {...propsCapitulos} {...propsComunes}  />
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
              <Temas {...propsTema} {...propsComunes} />
            </motion.span>
          </AnimatePresence>
        )}
        </section>
      </div>
  );
};

export default CapitulosYTemas;
