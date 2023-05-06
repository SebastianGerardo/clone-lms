import { useEffect, useState } from "react";
import { InputBasic } from "../../../../../components/Inputs/InputBasic";
import Modal from "../../../../../components/Modal/Modal";
import { cambiarCapitulo, CrearCapitulo } from "../../../../../helpers/ApiConfiguracion";
import { Toast } from "../../../../../components/Alertas/SweetAlerts";
import { InputBasicNumber } from "../../../../../components/Inputs/InputNumber";

export const ModalCapitulos = ({ isOpen, cursoSeleccionado, token, handleCloseModal, capituloSeleccionado, handleRecargar, dataApi }) => {
  
    const [nuevoCapitulo, setNuevoCapitulo] = useState({
      order: "",
      name: "",
      course: cursoSeleccionado
    });
  
    useEffect(() => {
        setNuevoCapitulo({
          order: capituloSeleccionado?.order || "",
          name: capituloSeleccionado?.name || "",
          course: cursoSeleccionado
      })
    }, [capituloSeleccionado])
  
    const handleChange = (e) => {
      const value = e.target.name === "order" ? Number(e.target.value) : e.target.value;
      setNuevoCapitulo({
        ...nuevoCapitulo,
        [e.target.name]: value,
      });
    };
  
    const crearCurso = (e) => {
      e.preventDefault();
      if(Object.values(capituloSeleccionado).length > 0) {
          cambiarCapitulo(token, nuevoCapitulo,  capituloSeleccionado.id).then((res) => {
            if(res.statusCode == 200) {
              Toast.fire({
                icon: 'success',
                title: 'Capítulo actualizado exitósamente!'
              })
              handleRecargar()
              handleCloseModal()
            } else {
              Toast.fire({
                icon: 'error',
                title: 'Ocurrió un error al actualizar el capítulo'
              })
            }
          })
        } else {
          CrearCapitulo(token, nuevoCapitulo).then((res) => {
            if (res.statusCode == 200) {
              Toast.fire({
                icon: 'success',
                title: 'Capítulo creado exitósamente!'
              })
              handleRecargar()
              handleCloseModal()
            } else {
              Toast.fire({
                icon: 'error',
                title: 'Ocurrió un error al crear el capítulo'
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
            onSubmit={crearCurso}
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="w-20">
                <InputBasicNumber
                  pHolder={"123..."}
                  data={nuevoCapitulo?.order}
                  labelName={"Orden"}
                  onChange={handleChange}
                  name={"order"}
                  required={true}
                />
              </div>
              <InputBasic
                pHolder={"Teoría de exponentes"}
                data={nuevoCapitulo?.name}
                labelName={`Nombre del Capítulo`}
                onChange={handleChange}
                name={"name"}
                required={true}
              />
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
  