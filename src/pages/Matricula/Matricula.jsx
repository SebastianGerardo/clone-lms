import React, { useState } from "react";
import ButtonManager from "../../components/Buttons/ButtonManager";
import Select from "../../components/Inputs/Select";
import Modal from "../../components/Modal/Modal";
import ModalMatricula from "./components/ModalMatricula/ModalMatricula";
import { ApiCiclos } from "../../helpers/ApiCiclos";

const Matricula = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataApi, setDataApi] = useState(ApiCiclos);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const options = [
    { value: "option1", label: "Mostrar por Ciclos" },
    { value: "option2", label: "Mostrar por Tabla" },
  ];

  const handleChange = (selectedOption) => {
    console.log(`opcion: ${selectedOption.label}`);
  };

  return (
    <div className="bg-white py-4 px-20 ">
      {/* CONTROL CENTER, ESTO SE HARÁ UN COMPONENTE */}
      <div className="flex flex-col gap-y-2 mb-4 ">
        <h1 className="font-bold text-2xl text-center min-[1235px]:text-start">
          Matricula
        </h1>
        <section className="flex flex-col min-[1235px]:flex-row min-[1235px]:justify-around items-center gap-y-4">
          {/* TOTAL DE VIDEOS */}
          <div className="w-max p-3 px-6 rounded-md flex gap-1 text-sm bg-[#0052CA] text-white">
            <p>Total de ciclos</p>
            <span className="text-white/80">
              {"("}1{")"}
            </span>
          </div>
          {/* BOTONES */}
          <ButtonManager />
          {/* INPUT BUSCAR */}
          <form className="w-full min-[790px]:w-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
                    stroke="#A4B2CD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
                    stroke="#A4B2CD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="text-gray-400 placeholder:text-[#A4B2CD] block w-full text-lg h-[44px] pl-12 pr-4 rounded-md min-[790px]:w-96  bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#EDF0FF] focus:border-transparent"
                placeholder="Buscar"
                autoComplete="off"
              />
            </div>
          </form>
          {/* BOTONES PARA FILTRAR */}
          <div className="flex gap-4">
            <button className="flex justify-center items-center rounded-md text-white bg-[#0052CA] w-11 h-11">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z"
                  fill="#fff"
                />
                <path
                  d="M12.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H12.9C14.4 10.5 15 9.86 15 8.27V4.23C15 2.64 14.4 2 12.9 2Z"
                  fill="#fff"
                />
              </svg>
            </button>
            <button className="flex justify-center items-center rounded-md text-white bg-white border w-11 h-11">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                  fill="#292D32"
                />
                <path
                  d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z"
                  fill="#292D32"
                />
                <path
                  d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                  fill="#292D32"
                />
                <path
                  d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                  fill="#292D32"
                />
              </svg>
            </button>
            <Select
              options={options}
              onChange={handleChange}
              classes={"min-w-[12rem]"}
            />
            {/* <button className='flex items-center gap-2 px-4 py-2 rounded-md text-sm text-white bg-[#0052CA]'>
                <span>+ Nuevo</span>
              </button> */}
          </div>
        </section>
      </div>

      <div className="w-full mb-5 flex flex-col gap-3">
        <section className="grid grid-cols-1 lg:grid-cols-4">
          {dataApi.length > 0 &&
            dataApi.map((item, index) => (
              <div
                key={item.id}
                onClick={handleOpenModal}
                className="cursor-pointer w-[10rem] h-[10rem] rounded-xl bg-blue-600 mx-auto my-2"
              >
                <h1 className="text-center py-20 font-poppins text-white">
                  {item.nombre}
                </h1>
              </div>
            ))}
          <Modal isOpen={isOpen} onClose={handleCloseModal}>
            {/* AQUI VA EL CONTENIDO DEL MODAL */}
            <ModalMatricula />
          </Modal>
        </section>
      </div>
    </div>
  );
};

export default Matricula;
