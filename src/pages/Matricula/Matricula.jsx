import React, { useState } from "react";
import { ButtonEdit } from "../../components/Buttons/Buttons";
import Modal from "../../components/Modal/Modal";
import StepProgressBar from "../../components/ProgressStatus/StepProgressBar";
import FormMatricula from "./components/FormMatricula";
import ModalMatricula from "./components/ModalMatricula/ModalMatricula";

const Matricula = () => {
  const [active, setActive] = useState(true);

  const activarInput = () => {
    setActive(!active);
  };

  // MODAL
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-white py-4 px-20 ">
      {/* BOTÓN DE EDITAR */}
      {/* <div className="flex items-center  justify-between mb-3">
        <ButtonEdit
          active={active}
          activarInput={activarInput}
        />
      </div> */}

      <div className="w-full mb-5 flex flex-col gap-3">
        {/* TITULO FORMULARIO */}
        {/* <div className="w-full flex mb-6 relative top-2">
              <div className="flex-1">
                <h2 className="text-black leading-27 tracking-normal text-left text-xl font-semibold mb-3">
                  Matricula
                </h2>
              </div>
            </div> */}
        {/* <FormMatricula active={active} /> */}
        <div
          onClick={handleOpenModal}
          className="cursor-pointer w-[10rem] h-[10rem] rounded-xl bg-red-200"
        ></div>
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          {/* AQUI VA EL CONTENIDO DEL MODAL */}
          <ModalMatricula />
        </Modal>
      </div>
    </div>
  );
};

export default Matricula;
