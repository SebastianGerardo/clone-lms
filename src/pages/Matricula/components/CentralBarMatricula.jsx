import React from "react";
import { FilterIcon, FilterIcon2 } from "../../../assets/svgs/ActiveSvgs";
import { SearchIcon } from "../../../assets/svgs/NormalSvgs";
import ButtonManager from "../../../components/Buttons/ButtonManager";

export const CentralBarMatricula = ({ dataCiclos, mostrarPor, setMostrarPor, setDataCiclosFiltrados, dataCiclosFiltrados }) => {
    const handleSearch = (e) => {
      const { value } = e.target;
      setDataCiclosFiltrados(value);
    }
    return (
      <div className="flex flex-col gap-y-2 mb-4 ">
        <h1 className="font-bold text-2xl text-center min-[1235px]:text-start">
          Matricula
        </h1>
        <section className="flex flex-col min-[885px]:flex-row min-[800px]:justify-between  min-[1235px]:flex-row min-[1235px]:justify-around items-center gap-y-4">
          {/* TOTAL DE VIDEOS */}
          <div className="w-max p-3 px-6 rounded-md flex gap-1 text-sm bg-[#0052CA] text-white">
            <p>Total de ciclos</p>
            <span className="text-white/80">{`(${dataCiclos.length})`}</span>
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
                onChange={handleSearch}
                value={dataCiclosFiltrados}
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
            <button
              onClick={() => setMostrarPor(true)}
              className={`flex justify-center items-center rounded-md text-white transition-all duration-150 ${
                mostrarPor ? "bg-[#0052CA]" : "bg-white"
              }  border w-11 h-11`}
            >
              <FilterIcon2
                color={"#292D32"}
                colorChange={"#fff"}
                isActive={mostrarPor}
              />
            </button>
            <button
              onClick={() => setMostrarPor(false)}
              className={`flex justify-center items-center rounded-md text-white transition-all duration-150 ${
                mostrarPor ? "bg-white" : "bg-[#0052CA]"
              } border w-11 h-11`}
            >
              <FilterIcon
                color={"#fff"}
                colorChange={"#292D32"}
                isActive={mostrarPor}
              />
            </button>
          </div>
        </section>
      </div>
    );
  };
  