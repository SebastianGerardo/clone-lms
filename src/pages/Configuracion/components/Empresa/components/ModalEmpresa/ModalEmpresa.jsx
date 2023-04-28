import React, { useState } from "react";
import RegistrarEmpresa from "./sections/RegistrarEmpresa";
import RegistrarEmpresa2 from "./sections/RegistrarEmpresa2";
import StepProgressBar from "../../../../../../components/ProgressStatus/StepProgressBar";
import { Toast } from "../../../../../../components/Alertas/SweetAlerts";
import { crearEmpresa } from "../../../../../../helpers/ApiConfiguracion";

const ModalEmpresa = ({dataCiclo, setRecargarTabla,recargarTabla , handleCloseModal}) => {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    tradeName: "",
    shortName: "", 
    socialReason: "",
    ruc: "",
    country: "",
    ubigean: "",
    mobile: "",
    email: "",
    website: "",
    agent: "",
  });

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

  const handleMatricular = () => {
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

  const sectionStep = {
    0: <RegistrarEmpresa handleChange={handleChange} formData={formData} dataCiclo={dataCiclo} />,
    1: <RegistrarEmpresa2 handleChange={handleChange} formData={formData} dataCiclo={dataCiclo} />,
  };

  const isLastStep = currentStep === Object.keys(sectionStep).length - 1; //comprueba si currentStep es igual a la longitud del objeto sectionStep

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
              {isLastStep ? "Pagar" : "Siguiente"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalEmpresa;