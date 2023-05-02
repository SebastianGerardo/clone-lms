import React, { useState } from "react";
import RegistrarCiclo from "./sections/RegistrarCiclo";
import { Toast } from "../../../../../../components/Alertas/SweetAlerts";
import { crearCiclo } from "../../../../../../helpers/ApiConfiguracion/ApiCiclos";

const ModalCiclo = ({ handleCloseModal, recargarTabla, setRecargarTabla, dataCiclos, dataSeleccionada }) => {
  
  const {handleMatricular, formData, setFormData} = enviarData({dataSeleccionada, handleCloseModal, recargarTabla, setRecargarTabla})

  const handleChange = (e) => {
    const value =
    e.target.name === "local" ? Number(e.target.value) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <div className="lg:w-[55rem]">
      <RegistrarCiclo
        dataCiclos={dataCiclos}
        handleChange={handleChange}
        formData={formData}
      />
      <div className="flex justify-end pt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleMatricular}
        >
          Crear
        </button>
      </div>
    </div>
  );
};

export default ModalCiclo;

const enviarData = ({dataSeleccionada, handleCloseModal, recargarTabla, setRecargarTabla}) => {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    costo: dataSeleccionada?.costo|| "",
    start: dataSeleccionada?.start || "",
    learningPath: dataSeleccionada?.learningPath || "",
  });

  const handleMatricular = () => {
    // if (Object.values(dataSeleccionada).length > 0) {
    //   cambiarSalon(token, formData, dataSeleccionada.id).then((res) => {
    //     console.log(res)
    //     if(res.statusCode == 200) {
    //       Toast.fire({
    //         icon: 'success',
    //         title: 'Aula Registrada exitósamente!'
    //       })
    //       handleCloseModal()
    //       setRecargarTabla(!recargarTabla)
    //     } else if (res.statusCode == 400) {
    //       Toast.fire({
    //         icon: 'error',
    //         title: res.message.length > 0 && res.message[0]
    //       })
    //     }
    //   })
    // } else {
      // crearCiclo(token, formData).then((res) => {
      //   console.log(res)
      //   if(res.statusCode == 200) {
      //     Toast.fire({
      //       icon: 'success',
      //       title: 'Aula Registrada exitósamente!'
      //     })
      //     handleCloseModal()
      //     setRecargarTabla(!recargarTabla)
      //   } else if (res.statusCode == 400) {
      //     Toast.fire({
      //       icon: 'error',
      //       title: res.message.length > 0 && res.message[0]
      //     })
      //   }
      // })
    // }
    console.log(formData)
  };
  return {
    handleMatricular,
    formData,
    setFormData
  }
} 