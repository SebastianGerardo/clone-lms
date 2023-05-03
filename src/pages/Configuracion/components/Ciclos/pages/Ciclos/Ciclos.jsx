import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Toast } from "../../../../../../components/Alertas/SweetAlerts";
import Modal from "../../../../../../components/Modal/Modal";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { UserContext } from "../../../../../../context/ContextLms";
import { TraeDataCiclos, cambiarCiclo, crearCiclo } from "../../../../../../helpers/ApiConfiguracion/ApiCiclos";
import { TraeDataLearning } from "../../../../../../helpers/ApiConfiguracion/ApiLearningPath";
import ModalCiclo from "../../modalContent/ModalCiclo";
import {ContentTableCiclos, ColumnsCiclos } from "../../tables/TableCiclos";

const Ciclos = ({setCursoActual, setNombreCurso, setCursoSeleccionado}) => {
  const {token} = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false);
  const [dataCiclos, setDataCiclos] = useState([]);
  const [dataLearning, setDataLearning] = useState([]);
  const [dataSeleccionada, setDataSeleccionada] = useState({});
  const [recargarTabla, setRecargarTabla] = useState(false);

  useEffect(() => {
    TraeDataCiclos(token).then((res) => {
      setDataCiclos(res.data);
    });
  }, [recargarTabla])
  
  useEffect(() => {
    TraeDataLearning(token).then((res) => {
      setDataLearning(res.data);
    });
  }, [recargarTabla])

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setDataSeleccionada({});
    setIsOpen(false);
  };

  const {columnsCiclos} = ColumnsCiclos({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso,
    handleOpenModal: handleOpenModal,
    setDataSeleccionada: setDataSeleccionada,
    recargarTabla: recargarTabla,
    setRecargarTabla: setRecargarTabla,
    token: token,
    setCursoSeleccionado: setCursoSeleccionado
  });

  return (
    <section className="p-8 pt-0">
      <ContentTableCiclos handleOpenModal={handleOpenModal} dataCiclos={dataCiclos} />
      <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <TableBasic
          columns={columnsCiclos}
          data={dataCiclos}
          highlightOnHover
          striped
          onRowClicked={(row) => console.log(row)}
          pointerOnHover
        />
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <SeccionModal dataLearning={dataLearning} token={token} dataSeleccionada={dataSeleccionada} setRecargarTabla={setRecargarTabla} recargarTabla={recargarTabla} setIsOpen={setIsOpen} />
      </Modal>
    </section>
  );
};

export default Ciclos;

const SeccionModal = ({dataSeleccionada, token, setRecargarTabla, recargarTabla, setIsOpen, dataLearning}) => {
  const [formData, setFormData] = useState({ 
    costo: dataSeleccionada?.costo|| "",
    start: dataSeleccionada?.start || "",
    learningPath: dataSeleccionada?.learningPath || "",
  });

  const handleChange = (e) => {
    const value =
      e.target.name != "start" ? Number(e.target.value) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log(formData)
    if(Object.values(dataSeleccionada).length > 0){
      cambiarCiclo(token, formData, dataSeleccionada.id).then((res) => {
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
      crearCiclo(token, formData).then((res) => {
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
    <ModalCiclo dataLearning={dataLearning} handleChange={handleChange} enviarDatos={enviarDatos} formData={formData} />
  )
}