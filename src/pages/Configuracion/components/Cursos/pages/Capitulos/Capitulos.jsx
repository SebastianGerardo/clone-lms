import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { InputBasic } from "../../../../../../components/Inputs/InputBasic";
import Modal from "../../../../../../components/Modal/Modal";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { ApiConfiguracionCursos, cambiarCapitulo, CrearCapitulo, CrearTema, TraeDataCurso } from "../../../../../../helpers/ApiConfiguracion";
import {ContentTableCapitulos,ColumnsCapitulos} from "../../tables/TableCapitulos";
import { Ripples } from "@uiball/loaders";
import { AnimatePresence, motion } from "framer-motion";
import { UserContext } from "../../../../../../context/ContextLms";
import Temas from "../Temas/Temas";
import { Toast } from "../../../../../../components/Alertas/SweetAlerts";

const Capitulos = ({ setCursoActual, setNombreCurso, cursoSeleccionado }) => {
  const {token} = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false);
  const [cambiarTabla, setCambiarTabla] = useState(true); //Si es true, trae capitulos, si es false trae temas
  const [isLoaded, setIsLoaded] = useState(false);
  const [recargarTabla, setRecargarTabla] = useState(false);
  const [dataApi, setDataApi] = useState([]);
  const [capituloSeleccionado, setCapituloSeleccionado] = useState({});

  const handleRecargar = () => {
    setRecargarTabla(!recargarTabla);
  }

  useEffect(() => {
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
    setIsOpen(false);
  };

  const { columnsCapitulos } = ColumnsCapitulos({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso,
    handleOpenModal: handleOpenModal,
    cambiarTabla: cambiarTabla,
    setCapituloSeleccionado: setCapituloSeleccionado,
    handleRecargar:handleRecargar
  });

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <section className="p-8 pt-0">
          <ContentTableCapitulos
            setCursoActual={setCursoActual}
            setNombreCurso={setNombreCurso}
            handleOpenModal={handleOpenModal}
            dataApi={dataApi}
            setIsLoaded={setIsLoaded}
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
              <TableBasic
                columns={columnsCapitulos}
                data={dataApi}
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
              <Temas dataApi={dataApi} cambiarTabla={cambiarTabla} setCambiarTabla={setCambiarTabla} />
            </motion.span>
          </AnimatePresence>
        )}
        <ModalCurso handleRecargar={handleRecargar} capituloSeleccionado={capituloSeleccionado} handleCloseModal={handleCloseModal} dataApi={dataApi} token={token} isOpen={isOpen} cursoSeleccionado={cursoSeleccionado} setIsOpen={setIsOpen} cambiarTabla={cambiarTabla}/>
        </section>
      </div>
  );
};

export default Capitulos;

const ModalCurso = ({ isOpen, cursoSeleccionado, token, dataApi, handleCloseModal, capituloSeleccionado, handleRecargar, cambiarTabla }) => {
  
  const [nuevoCapitulo, setNuevoCapitulo] = useState({
    order: "",
    name: "",
    course: cursoSeleccionado
  });

  useEffect(() => {
    if(Object.values(capituloSeleccionado).length > 0) {
      setNuevoCapitulo({
        order: capituloSeleccionado?.order,
        name: capituloSeleccionado?.name,
        course: cursoSeleccionado
      })
    }
  }, [capituloSeleccionado])

  const [nuevoTema, setNuevoTema] = useState({
    name: "",
    chapter: ""
  });
  
  const handleChange = (e) => {
    const value =
      e.target.name === "order" ? Number(e.target.value) : e.target.value;
    const value2 =
      e.target.name === "chapter" ? Number(e.target.value) : e.target.value;
    if (cambiarTabla) {
      setNuevoCapitulo({
        ...nuevoCapitulo,
        [e.target.name]: value,
      });
    } else {
      setNuevoTema({
        ...nuevoTema,
        [e.target.name]: value2,
      });
    }
  };

  const crearCurso = (e) => {
    e.preventDefault();
    if(Object.values(capituloSeleccionado).length > 0) {
      console.log(capituloSeleccionado)
      if (cambiarTabla) {
        cambiarCapitulo(token, nuevoCapitulo,  capituloSeleccionado.id).then((res) => {
          if(res.statusCode == 200) {
            Toast.fire({
              icon: 'success',
              title: 'Capítulo actualizado exitósamente!'
            })
            handleRecargar()
            handleCloseModal()
          } else {
            Toast.fire({
              icon: 'error',
              title: 'Error al actualizar el capítulo'
            })
          }
        })
      }
    } else {
      if (cambiarTabla) {
        CrearCapitulo(token, nuevoCapitulo).then((res) => {
          Toast.fire({
            icon: 'success',
            title: 'Capítulo creado exitósamente!'
          })
          handleRecargar()
          handleCloseModal()
        })
        console.log(nuevoCapitulo)
      } else {
        console.log(nuevoTema)
        CrearTema(token, nuevoTema).then((res) => {
          console.log(res)
        })
      }
    }
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
            {cambiarTabla ? (
              <div className="w-20">
                <InputBasic
                  pHolder={"123..."}
                  data={nuevoCapitulo?.order}
                  labelName={"Orden"}
                  onChange={handleChange}
                  name={"order"}
                  required={true}
                />
              </div>
            ) : (
              <label className="flex flex-col gap-y-1">
                <span className="block text-sm font-medium text-gray-400">
                  Capitulos
                </span>
                <select
                className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                defaultValue={nuevoTema?.chapter}
                onChange={handleChange}
                name="chapter"
              >
                <option value="">Seleccione un capítulo</option>
                {dataApi.length > 0 &&
                  dataApi.map((capitulos) => (
                    <option key={capitulos?.id} value={capitulos?.id}>
                      {capitulos?.name}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <InputBasic
              pHolder={"Teoría de exponentes"}
              data={cambiarTabla ? nuevoCapitulo?.name : nuevoTema?.name}
              labelName={`Nombre del ${cambiarTabla ? "Capítulo" : "Tema"}`}
              onChange={handleChange}
              name={"name"}
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
