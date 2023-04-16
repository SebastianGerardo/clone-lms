import React, { useState } from "react";
import { BookIcon3, NoteIcon2, UserIcon } from "../../../../assets/svgs/ActiveSvgs";
import Ciclos from "./componentes/Ciclos";
import Cursos from "./componentes/Cursos";
import LearningPath from "./componentes/LearningPath";

const ConfiguracionAdministracion = () => {
  const [activeTab, setActiveTab] = useState("Ciclo");
  const [colorBoton, setColorBoton] = useState(false)

  const renderTab = () => {
    switch (activeTab) {
      case "Ciclo":
        return <Ciclos />;
      case "Cursos":
        return <Cursos />;

      case "LearningPath":
        return <LearningPath />;
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
          Configuración{" "}
        </div>
      </div>

      <div className="w-full">
        <div className="w-full">
          {/* INFORMACION */}
          <div className="flex justify-between items-center">
            <p className="text-left text-gray-400 tracking-normal ml-0 text-sm leading-6 opacity-50">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>

          <div className="w-full mb-6 flex flex-col gap-y-8 sm:gap-3">
            {/*  NAV */}
            <nav className="flex sm:border-b justify-center sm:justify-start mt-3 flex-wrap w-full sm:w-max mx-auto lg:mx-0 text-[#999999]">
              <button
                className={`group w-max cursor-pointer px-6 mx-0 text-left py-3 border-b-2 sm:text-basic transition-all duration-100 hover:text-blue-600 hover:border-blue-600 ${activeTab == "Ciclo" ? "border-blue-600 text-blue-600" : "border-[#D9D9D9]"}`}
                onClick={() => setActiveTab("Ciclo")}
              >
                  <UserIcon colorChange={"#2563EB"} isActive={activeTab == "Ciclo"} />
                  Ciclo
              </button>

              <button
                
                className={`group w-max cursor-pointer px-6 mx-0 text-left py-3 border-b-2 sm:text-basic transition-all duration-100 hover:text-blue-600 hover:border-blue-600 ${activeTab == "Cursos" ? "border-blue-600 text-blue-600" : "border-[#D9D9D9]"}`}
                onClick={() => setActiveTab("Cursos")}
              >
                <BookIcon3 colorChange={"#2563EB"} isActive={activeTab == "Cursos"} />
                Cursos
              </button>
              <button
                className={`group w-max cursor-pointer px-6 mx-0 text-left py-3 border-b-2 sm:text-basic transition-all duration-100 hover:text-blue-600 hover:border-blue-600 ${activeTab == "LearningPath" ? "border-blue-600 text-blue-600" : "border-[#D9D9D9]"}`}
                onClick={() => setActiveTab("LearningPath")}
              >
                <NoteIcon2 colorChange={"#2563EB"} isActive={activeTab == "LearningPath"} />
                LearningPath
              </button>
            </nav>

            <main>{renderTab()}</main>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfiguracionAdministracion;