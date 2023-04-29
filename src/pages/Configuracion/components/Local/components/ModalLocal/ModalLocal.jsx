import React, { useState } from "react";
import { Toast } from "../../../../../../components/Alertas/SweetAlerts";
import StepProgressBar from "../../../../../../components/ProgressStatus/StepProgressBar";
import {CambiaDataLocal, crearLocal} from "../../../../../../helpers/ApiConfiguracion";
import RegistrarLocal from "./sections/RegistrarLocal";
import RegistrarLocal2 from "./sections/RegistrarLocal2";

const ModalLocal = ({ handleCloseModal, recargarTabla, setRecargarTabla, dataEmpresas, dataLocal}) => {
  const {handleChange, handleCrear, formData} = enviarData({
    handleCloseModal: handleCloseModal,
    recargarTabla: recargarTabla,
    setRecargarTabla: setRecargarTabla,
    dataLocal: dataLocal,
  })

  const {currentStep, handleNextStep, handlePrevStep, sectionStep, isLastStep} = sectionsModal({
    handleChange: handleChange, 
    formData: formData,
    dataEmpresas: dataEmpresas,
  })

  return (
    <div className="lg:w-[55rem]">
      <div>
        <StepProgressBar steps={2} currentStep={currentStep} />
      </div>
      <div>
        {sectionStep[currentStep]}
        {currentStep === 0 ? (
          <div className="flex justify-end pt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleNextStep}
              disabled={currentStep === 3 - 1}
            >
              Siguiente
            </button>
          </div>
        ) : (
          <div className="flex justify-between pt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handlePrevStep}
            >
              Anterior
            </button>
            <button
              className={`${
                currentStep === 2
                  ? "bg-green-500  hover:bg-green-700 cursor-pointer"
                  : "bg-blue-500"
              } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              onClick={currentStep !== 1 ? handleNextStep : handleCrear}
            >
              {isLastStep ? Object.values(dataLocal).length > 0 ? "Actualizar" : "Crear" : "Siguiente"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalLocal;

const enviarData = ({setRecargarTabla, recargarTabla,handleCloseModal, dataLocal }) => {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    name: dataLocal?.name || "",
    ugelCode: dataLocal?.ugelCode || "",
    country: dataLocal?.country || "",
    ubigean: dataLocal?.ubigean || "",
    address: dataLocal?.address || "",
    mobile: dataLocal?.mobile || "",
    email: dataLocal?.email || "",
    website: dataLocal?.website || "",
    totalOffices: dataLocal?.totalOffices || "",
    company: dataLocal?.company?.id || "",
  });
  
  const handleChange = (e) => {
    const value =
      e.target.name === "company" ? Number(e.target.value) : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleCrear = () => {
    if (Object.values(dataLocal).length > 0) {
      CambiaDataLocal(token, formData, dataLocal.id).then((res) => {
        if (res.statusCode == 200) {
          Toast.fire({
            icon: "success",
            title: "Local Actualizado exitósamente!",
          });
          handleCloseModal();
          setRecargarTabla(!recargarTabla);
        } else if (res.statusCode == 400) {
          Toast.fire({
            icon: "error",
            title: res.message.length > 0 && res.message[0],
          });
        }
      });
    } else {
      crearLocal(token, formData).then((res) => {
        if (res.statusCode == 200) {
          Toast.fire({
            icon: "success",
            title: "Local Registrado exitósamente!",
          });
          handleCloseModal();
          setRecargarTabla(!recargarTabla);
        } else if (res.statusCode == 400) {
          Toast.fire({
            icon: "error",
            title: res.message.length > 0 && res.message[0],
          });
        }
      });
    }
  };
  return {
    handleChange,
    handleCrear,
    formData
  }
}

const sectionsModal = ({handleChange, formData, dataEmpresas}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const sectionStep = {
    0: (
      <RegistrarLocal
        handleChange={handleChange}
        formData={formData}
        dataEmpresas={dataEmpresas}
      />
    ),
    1: (
      <RegistrarLocal2
        handleChange={handleChange}
        formData={formData}
      />
    ),
  };

  const isLastStep = currentStep === Object.keys(sectionStep).length - 1;

  return {
    currentStep,
    handleNextStep,
    handlePrevStep,
    sectionStep,
    isLastStep
  }
}