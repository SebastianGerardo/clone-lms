import React, { useState } from "react";
import Datos from "./components/Datos";
import Foto from "./components/Foto";
import DatosAcademicos from "./components/DatosAcademicos";
import ConfiguracionPerfil from "./components/ConfiguracionPerfil";

import { BookIcon3, NoteIcon2, SettingIcon, SettingIcon2, UserIcon } from "../../assets/svgs/ActiveSvgs";

const Perfil = () => {
  const [activeTab, setActiveTab] = useState("Datos");
  const renderTab = () => {
    switch (activeTab) {
      case "Datos":
        return <Datos />;
      case "Foto":
        return <Foto />;

      case "DatosAcademicos":
        return <DatosAcademicos />;

      case "Configuracion":
        return <ConfiguracionPerfil />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white h-full py-6 px-4 sm:px-20">
      {/* BOTÓN DE EDITAR */}
      <div className="flex items-center justify-between mb-3">
        {/* BOTÓN DE ALUMNO */}
        <div className="w-full h-33 font-semibold text-xl  leading-33 text-black">
          Perfil{" "}
        </div>
      </div>

      <div className="w-full">
        <div className="w-full">
          {/* INFORMACION */}
          <div className="flex justify-between items-center"></div>

          <div className="w-full mb-6 flex flex-col gap-y-8 sm:gap-3">
            {/*  NAV */}
            <nav className="flex sm:border-b justify-center sm:justify-start mt-3 flex-wrap w-full sm:w-max mx-auto lg:mx-0 text-[#999999]">
              <button
                className={`group w-max cursor-pointer px-6 mx-0 text-left py-3 border-b-2 sm:text-basic transition-all duration-100 hover:text-blue-600 hover:border-blue-600 ${
                  activeTab == "Datos"
                    ? "border-blue-600 text-blue-600"
                    : "border-[#D9D9D9]"
                }`}
                onClick={() => setActiveTab("Datos")}
              >
                <UserIcon isActive={activeTab == "Datos"} colorChange={"#2563EB"} />
                Datos del alumno
              </button>

              <button
                className={`group w-max cursor-pointer px-6 mx-0 text-left py-3 border-b-2 sm:text-basic transition-all duration-100 hover:text-blue-600 hover:border-blue-600 ${
                  activeTab == "Foto"
                    ? "border-blue-600 text-blue-600"
                    : "border-[#D9D9D9]"
                }`}
                onClick={() => setActiveTab("Foto")}
              >
                <BookIcon3 isActive={activeTab == "Foto"} colorChange={"#2563EB"} />
                Foto
              </button>
              <button
                className={`group w-max cursor-pointer px-6 mx-0 text-left py-3 border-b-2 sm:text-basic transition-all duration-100 hover:text-blue-600 hover:border-blue-600 ${
                  activeTab == "DatosAcademicos"
                    ? "border-blue-600 text-blue-600"
                    : "border-[#D9D9D9]"
                }`}
                onClick={() => setActiveTab("DatosAcademicos")}
              >
                <NoteIcon2 isActive={activeTab == "DatosAcademicos"} colorChange={"#2563EB"} />
                Datos académicos
              </button>
              <button
                className={`flex gap-2 group w-max cursor-pointer px-6 mx-0 text-left py-3 border-b-2 sm:text-basic transition-all duration-100 hover:text-blue-600 hover:border-blue-600 ${
                  activeTab == "Configuracion"
                    ? "border-blue-600 text-blue-600"
                    : "border-[#D9D9D9]"
                }`}
                onClick={() => setActiveTab("Configuracion")}
              >
                <SettingIcon2 isActive={activeTab == "Configuracion"} colorChange={"#2563EB"} />
                Configuracion
              </button>

              
            </nav>

            <main>{renderTab()}</main>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Perfil;
