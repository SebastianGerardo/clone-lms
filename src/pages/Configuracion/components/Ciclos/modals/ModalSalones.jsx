import { useEffect, useState } from "react";
import { InputBasic } from "../../../../../components/Inputs/InputBasic";
import Modal from "../../../../../components/Modal/Modal";
import { Toast } from "../../../../../components/Alertas/SweetAlerts";
import { cambiarCicloSalon, crearCicloSalon } from "../../../../../helpers/ApiConfiguracion/ApiCiclosxSalon";

export const ModalSalones = ({ isOpen, cursoSeleccionado, token, handleCloseModal, capituloSeleccionado, handleRecargar, dataSalones }) => {

    const [formData, setFormData] = useState({
      cycle: cursoSeleccionado,
      classroom: capituloSeleccionado?.classroom?.id || "",
    });

    const salonSeleccionado = dataSalones.find((salon) => salon.id == formData.classroom)

    useEffect(() => {
      setFormData({
        cycle: cursoSeleccionado?.id || "",
        classroom: capituloSeleccionado?.classroom?.id || "",
      })
    }, [capituloSeleccionado])

    console.log(formData)

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: Number(e.target.value),
      });
    };
  
    const crearCurso = (e) => {
      e.preventDefault();
      if(Object.values(capituloSeleccionado).length > 0) {
          cambiarCicloSalon(token, formData,  capituloSeleccionado.id).then((res) => {
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
                title: res.message.length > 0 && res.message[0]
              })
            }
          })
        } else {
          crearCicloSalon(token, formData).then((res) => {
            if (res.statusCode == 200) {
              Toast.fire({
                icon: 'success',
                title: 'Salón asignado exitósamente!'
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
        <h1 className="font-medium">{Object.values(capituloSeleccionado).length > 0 ? "Editar" : "Agregar nuevo"} salón</h1>
        <div className="p-8 pt-6 pb-0">
          <form
            className="flex flex-col items-center xl:items-end gap-2"
            onSubmit={crearCurso}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <InputBasic
                pHolder={"Seleccione un salón"}
                data={cursoSeleccionado?.learningPath?.name}
                labelName={"Ciclo"}
                disabled={true}
              />
              <InputBasic
                pHolder={"Seleccione un salón"}
                data={salonSeleccionado?.local?.name}
                labelName={"Local"}
                disabled={true}
              />
              <div className="col-span-2">
                <label className="w-full flex flex-col gap-y-1">
                  <span className="block text-sm font-medium text-gray-400">
                    Salones
                  </span>
                  <select
                    className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                    defaultValue={capituloSeleccionado?.classroom?.id}
                    onChange={handleChange}
                    name="classroom"
                  >
                    <option value="">Seleccione un salón</option>
                    {dataSalones?.length > 0 &&
                    dataSalones?.map((salon) => (
                      <option key={salon.id} value={salon.id}>
                        Aula {salon.pavilion}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <button
              className={`bg-green-500 hover:bg-green-700 cursor-pointer text-white py-2 px-2 rounded xl:relative xl:left-10 xl:top-2`}
            >
              Agregar
            </button>
          </form>
        </div>
      </Modal>
    );
  };