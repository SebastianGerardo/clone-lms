import { useEffect, useState } from "react";
import { Toast } from "../../../../../components/Alertas/SweetAlerts";
import { InputBasic } from "../../../../../components/Inputs/InputBasic";
import Modal from "../../../../../components/Modal/Modal";

export const ModalCursos = ({
    token,
    dataApi,
    isOpen,
    handleCloseModal,
    handleRecargar,
    temaSeleccionado,
    capituloSeleccionado
  }) => {
  
    const [formData, setFormData] = useState({
      name: "",
      chapter: "",
    });
  
    useEffect(() => {
        setFormData({
          name: temaSeleccionado.name || "",
          chapter: capituloSeleccionado.id || "",
      })
      }, [temaSeleccionado])
  
    const handleChange = (e) => {
      const value =
        e.target.name === "chapter" ? Number(e.target.value) : e.target.value;
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    };
  
    const enviarData = (e) => {
      e.preventDefault();
      if(Object.values(temaSeleccionado).length > 0) {
        console.log("editar tema");
        cambiarTema(token, formData, temaSeleccionado.id).then((res) => {
          console.log(res);
          if (res.statusCode == 200) {
            Toast.fire({
              icon: "success",
              title: "Tema editado exitósamente!",
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
        CrearTema(token, formData).then((res) => {
          console.log(res);
          if (res.statusCode == 200) {
            Toast.fire({
              icon: "success",
              title: "Tema creado exitósamente!",
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
                  Capitulos
                </span>
                <select
                  className="p-3 h-[3rem] block w-full rounded-lg sm:text-sm bg-formButton text-black border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-gray-300/50 disabled:text-gray-500"
                  defaultValue={formData?.chapter}
                  onChange={handleChange}
                  name="chapter"
                >
                  <option value="">Seleccione un capítulo</option>
                  {dataApi?.length > 0 &&
                    dataApi?.map((capitulos) => (
                      <option key={capitulos?.id} value={capitulos?.id}>
                        {capitulos?.name}
                      </option>
                    ))}
                </select>
              </label>
              <InputBasic
                pHolder={"Teoría de exponentes"}
                data={formData?.name}
                labelName={`Nombre del Tema`}
                onChange={handleChange}
                name={"name"}
              />
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
  