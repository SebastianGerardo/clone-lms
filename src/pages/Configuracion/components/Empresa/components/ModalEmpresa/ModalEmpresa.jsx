import React, { useState } from "react";
import RegistrarEmpresa from "./sections/RegistrarEmpresa";
import RegistrarEmpresa2 from "./sections/RegistrarEmpresa2";
import StepProgressBar from "../../../../../../components/ProgressStatus/StepProgressBar";
import { Toast } from "../../../../../../components/Alertas/SweetAlerts";
import { cambiarEmpresa, crearEmpresa } from "../../../../../../helpers/ApiConfiguracion";

const ModalEmpresa = ({infoEmpresa, setRecargarTabla,recargarTabla , handleCloseModal}) => {
  

  const {formData, setFormData, handleMatricular} = enviarData({infoEmpresa, handleCloseModal, setRecargarTabla, recargarTabla})

  const {handleNextStep, handlePrevStep, isLastStep, sectionStep, currentStep} = sectionsModal({formData, setFormData})
  
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
              onClick={currentStep !== 1 ? handleNextStep : handleMatricular}
            >
              {isLastStep ? Object.values(infoEmpresa).length > 0 ? "Actualizar" : "Crear" : "Siguiente"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalEmpresa;

const enviarData = ({infoEmpresa, handleCloseModal, setRecargarTabla, recargarTabla}) => {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    tradeName: infoEmpresa?.tradeName || "",
    shortName: infoEmpresa?.shortName || "", 
    socialReason: infoEmpresa?.socialReason || "",
    ruc: infoEmpresa?.ruc || "",
    country: infoEmpresa?.country || "",
    ubigean: infoEmpresa?.ubigean || "",
    mobile: infoEmpresa?.mobile || "",
    email: infoEmpresa?.email || "",
    website: infoEmpresa?.website || "",
    agent: infoEmpresa?.agent || "",
  });

  const handleMatricular = () => {
    if (Object.values(infoEmpresa).length > 0) {
      cambiarEmpresa(token, formData, infoEmpresa.id).then((res) => {
        console.log(res)
        if(res.statusCode == 200) {
          Toast.fire({
            icon: 'success',
            title: 'Empresa Actualizada exitosamente!'
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
      crearEmpresa(token, formData).then((res) => {
        console.log(res)
        if(res.statusCode == 200) {
          Toast.fire({
            icon: 'success',
            title: 'Empresa Registrada exitosamente!'
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
  }
  return {
    formData,
    setFormData,
    handleMatricular
  }
}

const sectionsModal = ({formData, setFormData}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sectionStep = {
    0: <RegistrarEmpresa handleChange={handleChange} formData={formData} />,
    1: <RegistrarEmpresa2 handleChange={handleChange} formData={formData} />,
  };

  const isLastStep = currentStep === Object.keys(sectionStep).length - 1; 

  return {
    handleNextStep,
    handlePrevStep,
    isLastStep,
    sectionStep,
    currentStep
  }
}