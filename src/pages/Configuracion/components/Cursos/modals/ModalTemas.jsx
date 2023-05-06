import { useEffect, useState } from "react";
import { Toast } from "../../../../../components/Alertas/SweetAlerts";
import { InputBasic } from "../../../../../components/Inputs/InputBasic";
import Modal from "../../../../../components/Modal/Modal";
import { cambiarTema, CrearTema } from "../../../../../helpers/ApiConfiguracion";

export const ModalTemas = (props) => {
  
    const [nuevoTema, setNuevoTema] = useState({
      name: "",
      chapter: props.contenidoSeleccionado?.id,
    });

    useEffect(() => {
        setNuevoTema({
          name: props.temaSeleccionado.name || "",
          chapter: props.contenidoSeleccionado?.id || "",
      })
      }, [props.temaSeleccionado])
  
    const handleChange = (e) => {
      const value =
        e.target.name === "chapter" ? Number(e.target.value) : e.target.value;
      setNuevoTema({
        ...nuevoTema,
        [e.target.name]: value,
      });
    };
  
    const enviarData = (e) => {
      e.preventDefault();
      if(Object.values(props.temaSeleccionado).length > 0) {
        console.log("editar tema");
        cambiarTema(props.token, nuevoTema, props.temaSeleccionado.id).then((res) => {
          console.log(res);
          if (res.statusCode == 200) {
            Toast.fire({
              icon: "success",
              title: "Tema editado exitósamente!",
            })
            props.handleRecargar();
            props.handleCloseModal();
          } else {
            Toast.fire({
              icon: "error",
              title: res.message.length > 0 && res.message[0],
            })
          }});
      } else {
        CrearTema(props.token, nuevoTema).then((res) => {
          console.log(res);
          if (res.statusCode == 200) {
            Toast.fire({
              icon: "success",
              title: "Tema creado exitósamente!",
            })
            props.handleRecargar();
            props.handleCloseModal();
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
      <Modal isOpen={props.isOpen} onClose={props.handleCloseModal}>
        <h1 className="font-medium">
          Agregar nuevo tema
        </h1>
        <div className="p-8 pt-6 pb-0">
          <form
            className="flex flex-col items-center xl:items-end gap-2"
            onSubmit={enviarData}
          >
            <div className="flex flex-col gap-2">
              
              <InputBasic
                pHolder={"Teoría de exponentes"}
                data={nuevoTema?.name}
                labelName={`Nombre del Tema`}
                onChange={handleChange}
                name={"name"}
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
  