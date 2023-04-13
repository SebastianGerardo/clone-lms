import React from "react";
import StepProgressBar from "../../../../components/ProgressStatus/StepProgressBar";
import InformacionCiclo from "./sections/InformacionCiclo";
import RegistrarAlumno from "./sections/RegistrarAlumno";

const ModalMatricula = ({currentStep, handleNextStep, handlePrevStep}) => {
  const sectionStep = {
    0: <InformacionCiclo />,
    1: <RegistrarAlumno />,
  }
  return (
    <div className="w-[45rem]">
      <div>
        <StepProgressBar steps={5} currentStep={currentStep} />
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
            disabled={currentStep === 5 - 1}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalMatricula;
