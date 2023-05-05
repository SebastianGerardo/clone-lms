import { useEffect, useState } from "react";
import { Toast } from "../../../../../components/Alertas/SweetAlerts";
import { InputBasic } from "../../../../../components/Inputs/InputBasic";
import Modal from "../../../../../components/Modal/Modal";
import { cambiarCursoSemana, crearCursoSemana } from "../../../../../helpers/ApiConfiguracion/ApiLearningPath";

export const ModalCursos = ({
    token,
    dataApi,
    isOpen,
    handleCloseModal,
    handleRecargar,
    temaSeleccionado,
    capituloSeleccionado,
    dataCursos,
    dataSeleccionada
  }) => {
  
    const [formData, setFormData] = useState({
      course: "",
      week: dataSeleccionada,
    });

    console.log("dataSeleccionada", temaSeleccionado);

    useEffect(() => {
        setFormData({
          course: dataSeleccionada.course || "",
          week: dataSeleccionada || "",
      })
      }, [temaSeleccionado])
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: Number(e.target.value),
      });
    };
  
    const enviarData = (e) => {
      e.preventDefault();
      console.log("formData", formData);
      if(Object.values(temaSeleccionado).length > 0) {
        console.log("actualizar")
        cambiarCursoSemana(token, formData, temaSeleccionado.id).then((res) => {
          if (res.statusCode == 200) {
            Toast.fire({
              icon: "success",
              title: "Curso actualizado exitósamente!",
            })
            handleRecargar();
            handleCloseModal();
          } else {
            Toast.fire({
              icon: "error",
              title: res.message.length > 0 && res.message[0],
            })
          }});
      } else {
        console.log("crear")
        crearCursoSemana(token, formData).then((res) => {
          if (res.statusCode == 200) {
            Toast.fire({
              icon: "success",
              title: "Curso agregado exitósamente!",
            })
            handleRecargar();
            handleCloseModal();
          } else {
            Toast.fire({
              icon: "error",
              title: res.message.length > 0 && res.message[0],
            })
          }
        });
      }
    };
  
    return (
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h1 className="font-medium">
          Agregar nuevo curso
        </h1>
        <div className="p-8 pt-6 pb-0">
          <form
            className="flex flex-col items-center xl:items-end gap-2"
            onSubmit={enviarData}
          >
            <div className="flex flex-col gap-2">
              <label className="flex flex-col gap-y-1">
                <span className="block text-sm font-medium text-gray-400">
                  Cursos
                </span>
                <select
                  className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  defaultValue={formData?.course}
                  onChange={handleChange}
                  name="course"
                >
                  <option value="">Seleccione un curso</option>
                  {dataCursos && dataCursos?.length > 0 &&
                    dataCursos?.map((capitulos) => (
                      <option key={capitulos?.id} value={capitulos?.id}>
                        {capitulos?.name}
                      </option>
                    ))}
                </select>
              </label>
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
  