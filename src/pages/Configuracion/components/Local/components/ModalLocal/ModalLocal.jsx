import React, { useEffect, useState } from "react";
import { Toast } from "../../../../../../components/Alertas/SweetAlerts";
import StepProgressBar from "../../../../../../components/ProgressStatus/StepProgressBar";
import {CambiaDataLocal, crearLocal, TraeDepartamentos, TraeProvincia, TraeUbicaciones} from "../../../../../../helpers/ApiConfiguracion";
import RegistrarLocal from "./sections/RegistrarLocal";
import RegistrarLocal2 from "./sections/RegistrarLocal2";

const ModalLocal = ({ handleCloseModal, recargarTabla, setRecargarTabla, dataEmpresas, dataLocal}) => {
  const {handleChange, handleCrear, formData, formUbicacion, dataUbicacion, dataDepartamento, dataProvincia, handleSelect} = enviarData({
    handleCloseModal: handleCloseModal,
    recargarTabla: recargarTabla,
    setRecargarTabla: setRecargarTabla,
    dataLocal: dataLocal,
  })

  const {currentStep, handleNextStep, handlePrevStep, sectionStep, isLastStep} = sectionsModal({
    handleChange: handleChange, 
    formData: formData,
    dataEmpresas: dataEmpresas,
    dataUbicacion: dataUbicacion,
    dataDepartamento: dataDepartamento,
    dataProvincia: dataProvincia,
    handleSelect: handleSelect,
    formUbicacion: formUbicacion,
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

const useUbicaciones = ({dataLocal, token, setFormData, formData}) => {
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
    console.log("dataLocal))")
    setFormUbicacion({
      departamento: dataLocal?.ubigean?.substring(0, 2) || "",
      provincia: dataLocal?.ubigean?.substring(2, 4) || "",
      distrito: dataLocal?.ubigean?.substring(4, 6) || "",
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
  
  const {formUbicacion, dataUbicacion, dataDepartamento, dataProvincia, handleSelect} = useUbicaciones({dataLocal, token, setFormData, formData})

  console.log("dataLocal", dataLocal)
  console.log("dataLocal", formData.ubigean)
  console.log("dataLocal", formUbicacion)

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
    formData,
    formUbicacion, 
    dataUbicacion, 
    dataDepartamento, 
    dataProvincia, 
    handleSelect
  }
}

const sectionsModal = ({handleChange, formData, dataEmpresas, formUbicacion, dataUbicacion, dataDepartamento, dataProvincia, handleSelect}) => {
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
        formUbicacion={formUbicacion}
        dataUbicacion={dataUbicacion}
        dataDepartamento={dataDepartamento}
        dataProvincia={dataProvincia}
        handleSelect={handleSelect}
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