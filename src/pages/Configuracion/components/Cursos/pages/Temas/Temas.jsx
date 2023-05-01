import React, { useState } from "react";
import { useEffect } from "react";
import { InputBasic } from "../../../../../../components/Inputs/InputBasic";
import Modal from "../../../../../../components/Modal/Modal";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import {
  ApiConfiguracionCursos,
  TraeDataTemas,
} from "../../../../../../helpers/ApiConfiguracion";
import { ContentTableTemas, ColumnsTemas } from "../../tables/TableTemas";

const Temas = ({
  setCursoActual,
  setNombreCurso,
  setCambiarTabla,
  cambiarTabla,
  dataApi,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { columnsTemas } = ColumnsTemas({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso,
  });


  useEffect(() => {
    TraeDataTemas(token).then((res) => {
      console.log(res);
    });
  }, [cambiarTabla]);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <TableBasic
      columns={columnsTemas}
      data={ApiConfiguracionCursos}
      highlightOnHover
      striped
      onRowClicked={(row) => console.log(row)}
      pointerOnHover
    />
  );
};

export default Temas;

const ModalTemas = ({
  isOpen,
  cursoSeleccionado,
  token,
  dataApi,
  handleCloseModal,
  capituloSeleccionado,
  handleRecargar,
  cambiarTabla,
}) => {

  // useEffect(() => {
  //   if(Object.values(capituloSeleccionado).length > 0) {
  //     setNuevoCapitulo({
  //       order: capituloSeleccionado?.order,
  //       name: capituloSeleccionado?.name,
  //       course: cursoSeleccionado
  //     })
  //   }
  // }, [capituloSeleccionado])

  const [nuevoTema, setNuevoTema] = useState({
    name: "",
    chapter: "",
  });

  const handleChange = (e) => {
    const value =
      e.target.name === "chapter" ? Number(e.target.value) : e.target.value;
    setNuevoTema({
      ...nuevoTema,
      [e.target.name]: value,
    });
  };

  const enviarData = (e) => {
    e.preventDefault();
    CrearTema(token, nuevoTema).then((res) => {
      console.log(res);
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <h1 className="font-medium">
        Agregar nuevo tema
      </h1>
      <div className="p-8 pt-6 pb-0">
        <form
          className="flex flex-col items-center xl:items-end gap-2"
          onSubmit={enviarData}
        >
          <div className="flex flex-col sm:flex-row gap-2">
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
            <InputBasic
              pHolder={"Teoría de exponentes"}
              data={cambiarTabla ? nuevoCapitulo?.name : nuevoTema?.name}
              labelName={`Nombre del Tema`}
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
