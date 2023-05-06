import { useEffect } from "react";
import { useState } from "react";
import { Toast } from "../../../../../components/Alertas/SweetAlerts";
import { InputBasic } from "../../../../../components/Inputs/InputBasic";
import { InputBasicNumber } from "../../../../../components/Inputs/InputNumber";
import Modal from "../../../../../components/Modal/Modal";
import { cambiarCiclo, crearCiclo } from "../../../../../helpers/ApiConfiguracion/ApiCiclos";


export const ModalCiclo = ({isOpen, handleCloseModal, dataSeleccionada, token, setRecargarTabla, recargarTabla, setIsOpen, dataLearning}) => {
    const [formData, setFormData] = useState({ 
      name: "",
      costo: "",
      start: "",
      learningPath: "",
    });
  
    useEffect(() => {
      setFormData({
        name: dataSeleccionada?.name || "",
        costo: dataSeleccionada?.costo|| "",
        start: dataSeleccionada?.start || "",
        learningPath: dataSeleccionada?.learningPath?.id || "",
      })
    }, [dataSeleccionada])

    const handleChange = (e) => {
      const value =
        e.target.name == "costo" || e.target.name == "learningPath"  ? Number(e.target.value) : e.target.value;
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    };
  
    const enviarDatos = (e) => {
      e.preventDefault();
      if(Object.values(dataSeleccionada).length > 0){
        cambiarCiclo(token, formData, dataSeleccionada.id).then((res) => {
          if(res.statusCode == 200) {
            Toast.fire({
              icon: 'success',
              title: 'Ciclo actualizado exitósamente!'
            })
            setRecargarTabla(!recargarTabla)
            setIsOpen(false)
          } else if (res.statusCode == 400) {
            Toast.fire({
              icon: 'error',
              title: res.message.length > 0 && res.message[0]
            })
          }
        })
      } else {
        crearCiclo(token, formData).then((res) => {
          console.log(res)
          if(res.statusCode == 200) {
            Toast.fire({
              icon: 'success',
              title: 'Ciclo registrado exitósamente!'
            })
            setRecargarTabla(!recargarTabla)
            setIsOpen(false)
          } else if (res.statusCode == 400) {
            Toast.fire({
              icon: 'error',
              title: res.message.length > 0 && res.message[0]
            })
          }
        })
      }
    };
  
    return (
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
  
      <form onSubmit={enviarDatos} className="lg:w-[55rem]">
        <div className="text-start flex flex-col gap-4">
          <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
            Información del ciclo
          </div>
          <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-y-3 gap-x-8">
            {/* Costo del Ciclo */}
            <div className="w-full">
              <InputBasic
                pHolder={"Ciclo Prueba - I"}
                data={formData?.name}
                labelName={"Nombre del ciclo"}
                onChange={handleChange}
                name="name"
              />
            </div>

            <div className="w-full">
              <InputBasicNumber
                pHolder={"200"}
                data={formData?.costo}
                labelName={"Costo del ciclo"}
                onChange={handleChange}
                name="costo"
              />
            </div>

            {/* Fecha de Inicio */}
            <div className="w-full">
              <InputBasic
                data={formData?.start}
                labelName={"Fecha de inicio"}
                onChange={handleChange}
                name="start"
                type="date"
              />
            </div>
  
            {/* Learning Path */}
            <div className="w-full col-span-3">
              <label className="flex flex-col gap-y-1">
                <span className="block text-sm font-medium text-gray-400">
                  Learning Path
                </span>
                <select
                  className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  defaultValue={formData?.learningPath}
                  onChange={handleChange}
                  name="learningPath"
                  id=""
                >
                  <option value="">Seleccione una ruta de aprendizaje</option>
                  {dataLearning?.length > 0 &&
                  dataLearning?.map((learning) => (
                    <option key={learning.id} value={learning.id}>
                      {learning.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </form>
        </div>
        <div className="flex justify-end pt-4">
          <button
            className="bg-[#ef4444] hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            {Object.values(dataSeleccionada).length > 0 ? "Actualizar" : "Crear"}
          </button>
        </div>
      </form>
      </Modal>
  
    )
  }