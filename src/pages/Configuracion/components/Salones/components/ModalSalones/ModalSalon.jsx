import React, { useState } from "react";
import RegistrarSalon from "./sections/RegistrarSalon";
import { Toast } from "../../../../../../components/Alertas/SweetAlerts";
import { cambiarSalon, crearSalon } from "../../../../../../helpers/ApiConfiguracion";

const ModalSalon = ({ handleCloseModal, recargarTabla, setRecargarTabla, dataLocales, infoSalon }) => {
  
  const {handleMatricular, formData, setFormData} = enviarData({infoSalon, handleCloseModal, recargarTabla, setRecargarTabla})

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
      <RegistrarSalon
        dataLocales={dataLocales}
        handleChange={handleChange}
        formData={formData}
      />
      <div className="flex justify-end pt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleMatricular}
        >
          Registrar
        </button>
      </div>
    </div>
  );
};

export default ModalSalon;

const enviarData = ({infoSalon, handleCloseModal, recargarTabla, setRecargarTabla}) => {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    pavilion: infoSalon?.pavilion || "",
    piso: infoSalon?.piso || "",
    code: infoSalon?.code|| "",
    totalStudents: infoSalon?.totalStudents || "",
    local: infoSalon?.local?.id || "",
  });

  const handleMatricular = () => {
    if (Object.values(infoSalon).length > 0) {
      cambiarSalon(token, formData, infoSalon.id).then((res) => {
        console.log(res)
        if(res.statusCode == 200) {
          Toast.fire({
            icon: 'success',
            title: 'Aula Registrada exitósamente!'
          })
          handleCloseModal()
          setRecargarTabla(!recargarTabla)
        } else if (res.statusCode == 400) {
          Toast.fire({
            icon: 'error',
            title: res.message.length > 0 && res.message[0]
          })
        }
      })
    } else {
      crearSalon(token, formData).then((res) => {
        console.log(res)
        if(res.statusCode == 200) {
          Toast.fire({
            icon: 'success',
            title: 'Aula Registrada exitósamente!'
          })
          handleCloseModal()
          setRecargarTabla(!recargarTabla)
        } else if (res.statusCode == 400) {
          Toast.fire({
            icon: 'error',
            title: res.message.length > 0 && res.message[0]
          })
        }
      })
    }
  };
  return {
    handleMatricular,
    formData,
    setFormData
  }
} 