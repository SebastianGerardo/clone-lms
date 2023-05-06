import { useEffect, useState } from "react";
import { InputBasic } from "../../../../../components/Inputs/InputBasic";
import Modal from "../../../../../components/Modal/Modal";
import { Toast } from "../../../../../components/Alertas/SweetAlerts";
import { cambiarSemana, crearSemana } from "../../../../../helpers/ApiConfiguracion/ApiSemanas";

export const ModalSemanas = ({ isOpen, cursoSeleccionado, token, handleCloseModal, capituloSeleccionado, handleRecargar, dataCursos, dataApi }) => {
  
    const [formData, setFormData] = useState({
      name: "",
      course: "",
      learningPath: cursoSeleccionado
    });
  
    useEffect(() => {
        setFormData({
          name: capituloSeleccionado?.name || "",
          course: capituloSeleccionado?.course || "",
          description: capituloSeleccionado?.description || "",
          learningPath: cursoSeleccionado || ""
      })
    }, [capituloSeleccionado])
  
    const handleChange = (e) => {
      const value = e.target.name !== "name" ? Number(e.target.value) : e.target.value;
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    };
  
    const enviarData = (e) => {
      e.preventDefault();
      if(Object.values(capituloSeleccionado).length > 0) {
          cambiarSemana(token, formData,  capituloSeleccionado.id).then((res) => {
            if(res.statusCode == 200) {
              Toast.fire({
                icon: 'success',
                title: 'Semana actualizada exitósamente!'
              })
              handleRecargar()
              handleCloseModal()
            } else {
              Toast.fire({
                icon: 'error',
                title: res.message.length > 0 && res.message[0]
              })
            }
          })
        } else {
          crearSemana(token, formData).then((res) => {
            if (res.statusCode == 200) {
              Toast.fire({
                icon: 'success',
                title: 'Semana creada exitósamente!'
              })
              handleRecargar()
              handleCloseModal()
            } else {
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
        <h1 className="font-medium">Agregar nuevo capítulo</h1>
        <div className="p-8 pt-6 pb-0">
          <form
            className="flex flex-col items-center xl:items-end gap-2" 
            onSubmit={enviarData}
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <InputBasic
                pHolder={"Teoría de exponentes"}
                data={formData?.name}
                labelName={`Semana`}
                onChange={handleChange}
                name={"name"}
                required={true}
              />
              <div className="w-full">
                <label className="flex flex-col gap-y-1">
                  <span className="block text-sm font-medium text-gray-400">
                    Curso
                  </span>
                  <select defaultValue={formData?.course} name="course" onChange={handleChange} className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500">
                    <option value="">TODOS</option>
                    {dataCursos?.length > 0 && dataCursos?.map((item) => (
                      <option key={item?.id} value={item?.id}>{item?.name}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <button
              className={`bg-[#ef4444] hover:bg-red-600 cursor-pointer text-white py-2 px-2 rounded xl:relative xl:left-10 xl:top-2`}
            >
              Agregar
            </button>
          </form>
        </div>
      </Modal>
    );
  };
  