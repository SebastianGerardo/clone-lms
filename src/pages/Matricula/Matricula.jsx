import React, { useState } from "react";
import ButtonManager from "../../components/Buttons/ButtonManager";
import Select from "../../components/Inputs/Select";
import Modal from "../../components/Modal/Modal";
import ModalMatricula from "./components/ModalMatricula/ModalMatricula";
import { ApiCiclos } from "../../helpers/ApiCiclos";
import escudo from "../../assets/icons/escudo.svg";
import { SearchIcon } from "../../assets/svgs/NormalSvgs";
import { FilterIcon, FilterIcon2 } from "../../assets/svgs/ActiveSvgs";
import { useMemo } from "react";

export default function Matricula() {
  const [isOpen, setIsOpen] = useState(false);
  const [dataApi, setDataApi] = useState(ApiCiclos);
  const [selectCicloId, setSelectCicloId] = useState(null);

  const handleOpenModal = (id) => {
    setIsOpen(true);
    setSelectCicloId(id);
  };

  const cicloSeleccionado = useMemo(() => {
    return dataApi.find((ciclo) => ciclo.id === selectCicloId);
  }, [selectCicloId]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-white py-4 px-20 ">
      {/* CONTROL CENTER, ESTO SE HARÁ UN COMPONENTE */}
      <CentralBarMatricula />

      <div className="w-full mb-5 flex flex-col gap-3">
        <section className="grid grid-cols-1 lg:grid-cols-4">
          {dataApi.length > 0 &&
            dataApi.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleOpenModal(item.id)}
                className="cursor-pointer mx-auto flex flex-col gap-y-4 justify-center items-center rounded-xl w-[10rem] h-[10rem] bg-blue-200/70"
              >
                <img src={escudo} alt="escudo" />
                <h1 className="text-center font-poppins text-blue-600">
                  {item.nombre}
                </h1>
              </div>
            ))}
          <Modal
            dataCiclo={cicloSeleccionado}
            isOpen={isOpen}
            onClose={handleCloseModal}
          >
            {/* AQUI VA EL CONTENIDO DEL MODAL */}
            <ModalMatricula />
          </Modal>
        </section>
      </div>
    </div>
  );
}

const CentralBarMatricula = () => {
  const options = [
    { value: "option1", label: "Mostrar por Ciclos" },
    { value: "option2", label: "Mostrar por Tabla" },
  ];

  const handleChange = (selectedOption) => {
    console.log(`opcion: ${selectedOption.label}`);
  };

  return (
    <div className="flex flex-col gap-y-2 mb-4 ">
      <h1 className="font-bold text-2xl text-center min-[1235px]:text-start">
        Matricula
      </h1>
      <section className="flex flex-col min-[1235px]:flex-row min-[1235px]:justify-around items-center gap-y-4">
        {/* TOTAL DE VIDEOS */}
        <div className="w-max p-3 px-6 rounded-md flex gap-1 text-sm bg-[#0052CA] text-white">
          <p>Total de ciclos</p>
          <span className="text-white/80">{"(1)"}</span>
        </div>
        {/* BOTONES */}
        <ButtonManager />
        {/* INPUT BUSCAR */}
        <form className="w-full min-[790px]:w-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon color="#A4B2CD" />
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
            <FilterIcon color={"#fff"} />
          </button>
          <button className="flex justify-center items-center rounded-md text-white bg-white border w-11 h-11">
            <FilterIcon2 />
          </button>
          <Select
            options={options}
            onChange={handleChange}
            classes={"min-w-[12rem]"}
          />
        </div>
      </section>
    </div>
  );
};
