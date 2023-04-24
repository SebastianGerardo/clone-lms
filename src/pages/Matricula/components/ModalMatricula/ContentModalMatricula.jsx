import React, { useState } from "react";
import StepProgressBar from "../../../../components/ProgressStatus/StepProgressBar";
import InformacionCiclo from "./sections/InformacionCiclo";
import RegistrarAlumno from "./sections/RegistrarAlumno";
import RegistrarPadre from "./sections/RegistrarPadre";
import EmitirComprobante from "./sections/EmitirComprobante";
import { Toast } from "../../../../components/Alertas/SweetAlerts";

const ContentModalMatricula = ({dataCiclo, mostrarPor, handleCloseModal}) => {
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
    apellidoPaternoApoderado: "",
    apellidoMaternoApoderado: "",
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
    cuotas: "1",
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
  };

  const [dataLocal, setDataLocal] = useState(() => {
    const saveDataLocal = localStorage.getItem('dataLocal')
    if (saveDataLocal) {
      return JSON.parse(saveDataLocal)
    } else {
      return []
    }
  })

  const handleMatricular = () => {
    setDataLocal([...dataLocal, formData])
    localStorage.setItem('dataLocal', JSON.stringify([...dataLocal, formData]))
    handleCloseModal()
    Toast.fire({
      icon: 'success',
      title: 'Alumno matriculado exitosamente!'
    })
  }

  const sectionStep = {
    0: <InformacionCiclo dataCiclo={dataCiclo} />,
    1: <RegistrarPadre handleChange={handleChange} formData={formData} dataCiclo={dataCiclo} />,
    2: <RegistrarAlumno handleChange={handleChange} formData={formData} dataCiclo={dataCiclo} />,
    3: <EmitirComprobante handleChange={handleChange} formData={formData} dataCiclo={dataCiclo} />,
  };

  const isLastStep = currentStep === Object.keys(sectionStep).length - 1; //comprueba si currentStep es igual a la longitud del objeto sectionStep

  return (
    <div className="lg:w-[55rem]">
      <div>
        <StepProgressBar steps={4} currentStep={currentStep} />
      </div>
      <div>
        {sectionStep[currentStep]}
        {currentStep === 0 ? (
          <div className="flex justify-end pt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleNextStep}
              disabled={currentStep === 4 - 1}
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
                currentStep === 3
                  ? "bg-green-500  hover:bg-green-700 cursor-pointer"
                  : "bg-blue-500"
              } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              onClick={currentStep !== 3 ? handleNextStep : handleMatricular}
            >
              {isLastStep ? "Pagar" : "Siguiente"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentModalMatricula;