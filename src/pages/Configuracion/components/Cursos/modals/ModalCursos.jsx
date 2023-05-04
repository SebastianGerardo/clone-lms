import { CrearCurso, cambiarCurso } from "../../../../../helpers/ApiConfiguracion";
import { Toast } from "../../../../../components/Alertas/SweetAlerts";
import { InputBasic } from "../../../../../components/Inputs/InputBasic";
import { useState } from "react";
import Modal from "../../../../../components/Modal/Modal";

export const ModalCursos = ({dataCurso, token, setRecargarTabla, recargarTabla, setIsOpen, isOpen, handleCloseModal}) => {
    const [nuevoCurso, setNuevoCurso] = useState({ 
      name: dataCurso.name || ""
    });
  
    const handleChange = (e) => {
      setNuevoCurso({
        ...nuevoCurso,
        [e.target.name]: e.target.value,
      });
    };
  
    const CrearNuevoCurso = (e) => {
      e.preventDefault();
      if(Object.values(dataCurso).length > 0){
        cambiarCurso(token, nuevoCurso, dataCurso.id).then((res) => {
          if(res.statusCode == 200) {
            Toast.fire({
              icon: 'success',
              title: 'Curso registrado exitósamente!'
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
        CrearCurso(token, nuevoCurso).then((res) => {
          if(res.statusCode == 200) {
            Toast.fire({
              icon: 'success',
              title: 'Curso registrado exitósamente!'
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
        <h1 className="font-medium">Agregar nuevo curso</h1>
          <div className="p-8 pt-6 pb-0">
            <form
              className="flex flex-col items-center xl:items-end gap-2"
              onSubmit={CrearNuevoCurso}
            >
              <InputBasic
                pHolder={"Algebra"}
                data={nuevoCurso.name}
                labelName={"Nombre del Curso"}
                onChange={handleChange}
                name={"name"}
              />
              <button
                className={`bg-green-500 hover:bg-green-700 cursor-pointer text-white py-2 px-2 rounded xl:relative xl:left-10 xl:top-2`}
              >
                Agregar
              </button>
            </form>
          </div>
      </Modal>
    )
  }