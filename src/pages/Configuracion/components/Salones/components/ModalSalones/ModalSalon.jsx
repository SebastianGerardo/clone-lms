import React, { useState } from "react";
import RegistrarSalon from "./sections/RegistrarSalon";
import { Toast } from "../../../../../../components/Alertas/SweetAlerts";
import { crearSalon } from "../../../../../../helpers/ApiConfiguracion";

const ModalSalon = ({ dataCiclo, handleCloseModal, recargarTabla, setRecargarTabla }) => {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    pavilion: "",
    piso: "",
    code: "",
    totalStudents: "",
    local: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMatricular = () => {
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
  };

  return (
    <div className="lg:w-[55rem]">
      <RegistrarSalon
        handleChange={handleChange}
        formData={formData}
        dataCiclo={dataCiclo}
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
