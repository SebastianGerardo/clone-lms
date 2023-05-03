import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Toast } from "../../../../../../components/Alertas/SweetAlerts";
import { InputBasic } from "../../../../../../components/Inputs/InputBasic";
import Modal from "../../../../../../components/Modal/Modal";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { UserContext } from "../../../../../../context/ContextLms";
import { CrearCurso, cambiarCurso, TraeDataCursos } from "../../../../../../helpers/ApiConfiguracion";
import {ContentTableCursos, ColumnsCursos } from "../../tables/TableCursos";

const Cursos = ({setCursoActual, setNombreCurso, setCursoSeleccionado}) => {
  const {token} = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false);
  const [dataCursos, setDataCursos] = useState([]);
  const [dataCurso, setDataCurso] = useState({});
  const [recargarTabla, setRecargarTabla] = useState(false);

  useEffect(() => {
    TraeDataCursos(token).then((res) => {
      setDataCursos(res.data)
    })
  }, [recargarTabla])

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setDataCurso({});
    setIsOpen(false);
  };

  const {columnsCursos} = ColumnsCursos({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso,
    handleOpenModal: handleOpenModal,
    setDataCurso: setDataCurso,
    recargarTabla: recargarTabla,
    setRecargarTabla: setRecargarTabla,
    token: token,
    setCursoSeleccionado: setCursoSeleccionado
  });

  return (
    <section className="p-8 pt-0">
      <ContentTableCursos handleOpenModal={handleOpenModal} dataCursos={dataCursos} />
      <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <TableBasic
          columns={columnsCursos}
          data={dataCursos}
          highlightOnHover
          striped
          onRowClicked={(row) => console.log(row)}
          pointerOnHover
        />
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <SeccionModal token={token} dataCurso={dataCurso} setRecargarTabla={setRecargarTabla} recargarTabla={recargarTabla} setIsOpen={setIsOpen} />
      </Modal>
    </section>
  );
};

export default Cursos;

const SeccionModal = ({dataCurso, token, setRecargarTabla, recargarTabla, setIsOpen}) => {
  const [nuevoCurso, setNuevoCurso] = useState({ 
    name: dataCurso.name || ""
  });

  const handleChange = (e) => {
    setNuevoCurso({
      ...nuevoCurso,
      [e.target.name]: e.target.value,
    });
  };

  const CrearNuevoCurso = (e) => {
    e.preventDefault();
    if(Object.values(dataCurso).length > 0){
      cambiarCurso(token, nuevoCurso, dataCurso.id).then((res) => {
        if(res.statusCode == 200) {
          Toast.fire({
            icon: 'success',
            title: 'Curso registrado exitósamente!'
          })
          setRecargarTabla(!recargarTabla)
          setIsOpen(false)
        } else if (res.statusCode == 400) {
          Toast.fire({
            icon: 'error',
            title: res.message.length > 0 && res.message[0]
          })
        }
      })
    } else {
      CrearCurso(token, nuevoCurso).then((res) => {
        if(res.statusCode == 200) {
          Toast.fire({
            icon: 'success',
            title: 'Curso registrado exitósamente!'
          })
          setRecargarTabla(!recargarTabla)
          setIsOpen(false)
        } else if (res.statusCode == 400) {
          Toast.fire({
            icon: 'error',
            title: res.message.length > 0 && res.message[0]
          })
        }
      })
    }
  };

  return (
    <>
      <h1 className="font-medium">Agregar nuevo curso</h1>
        <div className="p-8 pt-6 pb-0">
          <form
            className="flex flex-col items-center xl:items-end gap-2"
            onSubmit={CrearNuevoCurso}
          >
            <InputBasic
              pHolder={"Algebra"}
              data={nuevoCurso.name}
              labelName={"Nombre del Curso"}
              onChange={handleChange}
              name={"name"}
            />
            <button
              className={`bg-green-500 hover:bg-green-700 cursor-pointer text-white py-2 px-2 rounded xl:relative xl:left-10 xl:top-2`}
            >
              Agregar
            </button>
          </form>
        </div>
    </>
  )
}