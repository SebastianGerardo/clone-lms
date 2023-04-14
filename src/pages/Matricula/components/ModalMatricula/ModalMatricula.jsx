import React, { useState } from "react";
import StepProgressBar from "../../../../components/ProgressStatus/StepProgressBar";
import InformacionCiclo from "./sections/InformacionCiclo";
import RegistrarAlumno from "./sections/RegistrarAlumno";
import RegistrarPadre from "./sections/RegistrarPadre";
import EmitirComprobante from "./sections/EmitirComprobante";

const ModalMatricula = () => {
  const [formData, setFormData] = useState({
    nombreAlumno: "",
    apellidoAlumno: "",
    nivelAlumno: "",
    tipoDocumentoAlumno: "",
    dniAlumno: "",
    telefonoAlumno: "",
    gradoAlumno: "",
    correoAlumno: "",
    colegioAlumno: "",
    nombreApoderado: "",
    apellidoApoderado: "",
    direccionApoderado: "",
    tipoDocumentoApoderado: "",
    dniApoderado: "",
    telefonoApoderado: "",
    parentezco: "",
    correoApoderado: "",
    tipoDePago: "",
    ciclo: "",
    aula: "",
    modalidadDePago: "",
    montoPago: "",
    fechaMatricula: "",
    horaMatricula: "",
    local: "",
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
  }

  const sectionStep = {
    0: <InformacionCiclo />,
    1: <RegistrarPadre handleChange={handleChange} formData={formData}/>,
    2: <RegistrarAlumno handleChange={handleChange} formData={formData}/>,
    3: <EmitirComprobante handleChange={handleChange} formData={formData}/>,
  };
  return (
    <div className="w-[45rem]">
      <div>
        <StepProgressBar steps={4} currentStep={currentStep} />
      </div>
      <div>
        {sectionStep[currentStep]}
        <div className="flex justify-between pt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePrevStep}
            disabled={currentStep === 0}
          >
            Anterior
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNextStep}
            disabled={currentStep === 4 - 1}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalMatricula;