import { CrearCurso, cambiarCurso } from "../../../../../helpers/ApiConfiguracion";
import { Toast } from "../../../../../components/Alertas/SweetAlerts";
import { InputBasic } from "../../../../../components/Inputs/InputBasic";
import { useState } from "react";
import Modal from "../../../../../components/Modal/Modal";
import { useEffect } from "react";

export const ModalCursos = ({dataCurso, token, setRecargarTabla, recargarTabla, setIsOpen, isOpen, handleCloseModal}) => {
    const [nuevoCurso, setNuevoCurso] = useState({ 
      name: ""
    });

    const validarCursoEscogido = Object.values(dataCurso).length > 0

    useEffect(() => {
      setNuevoCurso({
        name: dataCurso?.name || ""
      })
    }, [dataCurso])

    const handleChange = (e) => {
      setNuevoCurso({
        ...nuevoCurso,
        [e.target.name]: e.target.value,
      });
    };
  
    const enviarData = (e) => {
      e.preventDefault();
      if(validarCursoEscogido){
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
        <h1 className="font-medium">{validarCursoEscogido ? "Editar" : "Agregar nuevo"} curso</h1>
          <div className="p-8 pt-6 pb-0">
            <form
              className="flex flex-col items-center xl:items-end gap-2"
              onSubmit={enviarData}
            >
              <InputBasic
                pHolder={"Algebra"}
                data={nuevoCurso.name}
                labelName={"Nombre del Curso"}
                onChange={handleChange}
                name={"name"}
              />
              <button
                className={`bg-[#ef4444] hover:bg-red-600 transition-all duration-150 cursor-pointer text-white py-2 px-2 rounded xl:relative xl:left-10 xl:top-2`}
              >
                {validarCursoEscogido ? "Editar" : "Agregar"}
              </button>
            </form>
          </div>
      </Modal>
    )
  }