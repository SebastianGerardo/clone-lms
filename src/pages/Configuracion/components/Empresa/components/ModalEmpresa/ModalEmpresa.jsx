import React, { useState } from "react";
import RegistrarEmpresa from "./sections/RegistrarEmpresa";
import RegistrarEmpresa2 from "./sections/RegistrarEmpresa2";
import StepProgressBar from "../../../../../../components/ProgressStatus/StepProgressBar";
import { Toast } from "../../../../../../components/Alertas/SweetAlerts";
import { cambiarEmpresa, crearEmpresa, TraeDepartamentos, TraeProvincia, TraeUbicaciones } from "../../../../../../helpers/ApiConfiguracion";
import { useEffect } from "react";

const ModalEmpresa = ({infoEmpresa, setRecargarTabla,recargarTabla , handleCloseModal}) => {
  
  const {formData, setFormData, handleMatricular, dataUbicacion, handleSelect, dataProvincia,dataDepartamento, formUbicacion} = enviarData({infoEmpresa, handleCloseModal, setRecargarTabla, recargarTabla})

  const {handleNextStep, handlePrevStep, isLastStep, sectionStep, currentStep} = sectionsModal({formData, setFormData, dataUbicacion, handleSelect,dataProvincia,dataDepartamento, formUbicacion})
  
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
              className="bg-[#ef4444] hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleNextStep}
              disabled={currentStep === 3 - 1}
            >
              Siguiente
            </button>
          </div>
        ) : (
          <div className="flex justify-between pt-4">
            <button
              className="bg-[#ef4444] hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={handlePrevStep}
            >
              Anterior
            </button>
            <button
              className={`${
                currentStep === 2
                  ? "bg-green-500  hover:bg-green-700 cursor-pointer"
                  : "bg-[#ef4444]"
              } hover:bg-red-600 text-white font-bold py-2 px-4 rounded`}
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

export const useUbicaciones = ({infoEmpresa, token, setFormData, formData}) => {
  const [dataDepartamento, setDataDepartamento] = useState([])
  const [dataProvincia, setDataProvincia] = useState([])
  const [dataUbicacion, setDataUbicacion] = useState([])
  
  const [formUbicacion, setFormUbicacion] = useState({
    departamento: "",
    provincia: "",
    distrito: "",
  })

  useEffect(() => {
    TraeUbicaciones(token).then((res) => {
      setDataUbicacion(res.data)
    })
  }, [])

  useEffect(() => {
    setFormUbicacion({
      departamento: infoEmpresa?.ubigean?.substring(0, 2) || "",
      provincia: infoEmpresa?.ubigean?.substring(2, 4) || "",
      distrito: infoEmpresa?.ubigean?.substring(4, 6) || "",
    })
  }, [])

  
  useEffect(() => {
    if(formUbicacion.departamento != "") {
      TraeDepartamentos(token, formUbicacion?.departamento).then((res) => {
        setDataDepartamento(res.data);
      });
    } 
    if (formUbicacion.provincia != "") {
      TraeProvincia(token, formUbicacion?.departamento, formUbicacion?.provincia).then((res) => {
        setDataProvincia(res.data);
      });
    }
  }, [formUbicacion])

  const handleSelect = async (e) => {
    const { name, value } = e.target;
  
    switch (name) {
      case "departamento":
        setFormUbicacion({
          ...formUbicacion,
          departamento: value,
        });
        setFormData({
          ...formData,
          ubigean: `${value}${formUbicacion.provincia}${formUbicacion.distrito}` ,
        });
        console.log("departamento")
        break;
      case "provincia":
        console.log("provincia")
        setFormUbicacion({
          ...formUbicacion,
          provincia: value,
        });
        setFormData({
          ...formData,
          ubigean: `${formUbicacion.departamento}${value}${formUbicacion.distrito}` ,
        });
        break;
      case "distrito":
        console.log("distrito")
        setFormUbicacion({
          ...formUbicacion,
          distrito: value,
        });
        setFormData({
          ...formData,
          ubigean: `${formUbicacion.departamento}${formUbicacion.provincia}${value}` ,
        });
        break;
      default:
        break;
    }
  };

  return {
    formUbicacion,
    dataUbicacion,
    dataDepartamento,
    dataProvincia,
    handleSelect
  }
}

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
    address: infoEmpresa?.address || "",
  });
  
  const {formUbicacion, dataUbicacion, dataDepartamento, dataProvincia, handleSelect} = useUbicaciones({infoEmpresa, token, setFormData, formData})
  
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
    handleMatricular,
    dataUbicacion,
    handleSelect,
    dataDepartamento,
    dataProvincia,
    formUbicacion
  }
}

const sectionsModal = ({formData, setFormData, dataUbicacion, handleSelect, dataProvincia,dataDepartamento, formUbicacion}) => {
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
    1: <RegistrarEmpresa2 formUbicacion={formUbicacion} dataProvincia={dataProvincia} dataDepartamento={dataDepartamento} handleSelect={handleSelect} dataUbicacion={dataUbicacion} handleChange={handleChange} formData={formData} />,
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