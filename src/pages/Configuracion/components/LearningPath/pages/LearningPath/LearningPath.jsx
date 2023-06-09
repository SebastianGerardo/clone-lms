import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Toast } from "../../../../../../components/Alertas/SweetAlerts";
import { InputBasic } from "../../../../../../components/Inputs/InputBasic";
import { InputBasicNumber } from "../../../../../../components/Inputs/InputNumber";
import Modal from "../../../../../../components/Modal/Modal";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { UserContext } from "../../../../../../context/ContextLms";
import { cambiarLearning, crearLearning, TraeDataLearning } from "../../../../../../helpers/ApiConfiguracion/ApiLearningPath";
import {ContentTableRutas, ColumnsRutas } from "../../tables/TableLearningPath";

const LearningPath = ({setCursoActual, setNombreCurso, setCursoSeleccionado, setDataContenido}) => {
  const {token} = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false);
  const [dataLearning, setDataLearning] = useState([]);
  const [dataSeleccionada, setDataSeleccionada] = useState({});
  const [recargarTabla, setRecargarTabla] = useState(false);

  useEffect(() => {
    TraeDataLearning(token).then((res) => {
      console.log(res.data)
      setDataLearning(res.data)
    })
  }, [recargarTabla])

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setDataSeleccionada({});
    setIsOpen(false);
  };

  const {columnsRutas} = ColumnsRutas({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso,
    handleOpenModal: handleOpenModal,
    setDataSeleccionada: setDataSeleccionada,
    recargarTabla: recargarTabla,
    setRecargarTabla: setRecargarTabla,
    token: token,
    setCursoSeleccionado: setCursoSeleccionado,
    setDataContenido: setDataContenido,
  });

  return (
    <section className="p-8 pt-0">
      <ContentTableRutas handleOpenModal={handleOpenModal} dataLearning={dataLearning} />
      <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <TableBasic
          columns={columnsRutas}
          data={dataLearning}
          highlightOnHover
          striped
          onRowClicked={(row) => console.log(row)}
          pointerOnHover
        />
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <SeccionModal token={token} setDataContenido={setDataContenido} dataSeleccionada={dataSeleccionada} setRecargarTabla={setRecargarTabla} recargarTabla={recargarTabla} setIsOpen={setIsOpen} />
      </Modal>
    </section>
  );
};

export default LearningPath;

const SeccionModal = ({dataSeleccionada, token, setRecargarTabla, recargarTabla, setIsOpen, setDataContenido, }) => {
  const [nuevoLearning, setNuevoLearning] = useState({ 
    name: dataSeleccionada.name || "",
    duration: dataSeleccionada.duration || "",
    image: dataSeleccionada.image || "",
    description: dataSeleccionada.description || "",
  });

  const handleChange = (e) => {
    const value =
      e.target.name === "duration" ? Number(e.target.value) : e.target.value;
    setNuevoLearning({
      ...nuevoLearning,
      [e.target.name]: value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    if(Object.values(dataSeleccionada).length > 0){
      cambiarLearning(token, nuevoLearning, dataSeleccionada.id).then((res) => {
        if(res.statusCode == 200) {
          Toast.fire({
            icon: 'success',
            title: 'Ruta actualizada exitósamente!'
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
      crearLearning(token, nuevoLearning).then((res) => {
        console.log(res)
        if(res.statusCode == 200) {
          Toast.fire({
            icon: 'success',
            title: 'Ruta registrada exitósamente!'
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
      <h1 className="font-medium">Información de la ruta</h1>
        <div className="p-8 pt-6 pb-0">
          <form
            className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-[40rem]"
            onSubmit={enviarDatos}
          >
            <InputBasic
              pHolder={"Ruta 1"}
              data={nuevoLearning.name}
              labelName={"Nombre"}
              onChange={handleChange}
              name={"name"}
            />
            <InputBasicNumber
              pHolder={"Algebra"}
              data={nuevoLearning.duration}
              labelName={"Duracion"}
              onChange={handleChange}
              name={"duration"}
            />
            <InputBasic
              pHolder={"www.google.com"}
              data={nuevoLearning.image}
              labelName={"Imagen"}
              onChange={handleChange}
              name={"image"}
            />
            <InputBasic
                pHolder={"Descripción del ciclo"}
                data={nuevoLearning?.description}
                labelName={`Descripción`}
                onChange={handleChange}
                name={"description"}
              />
              <div className="col-span-2 flex justify-center">
                <button
                  className={` w-max bg-[#ef4444] hover:bg-red-600 cursor-pointer text-white py-2 px-2 rounded `}
                >
                  Agregar
                </button>
              </div>
          </form>
        </div>
    </>
  )
}