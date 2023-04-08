import React, { useState } from "react";
import Ciclos from "./components/Ciclos";
import Cursos from "./components/Cursos";
import LearningPath from "./components/LearningPath";

const Configuracion = () => {
  const [activeTab, setActiveTab] = useState("Ciclo");
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
                className={`w-max cursor-pointer px-6 mx-0 text-left py-3 border-b-2 sm:text-basic transition-all duration-100 hover:text-blue-600 hover:border-blue-600 ${activeTab == "Ciclo" ? "border-blue-600 text-blue-600" : "border-[#D9D9D9]"}`}
                onClick={() => setActiveTab("Ciclo")}
              >
                <svg
                  class="inline-block mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                    stroke={`${activeTab == "Ciclo" ? "#2563EB" : "#999999"}`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                    stroke={`${activeTab == "Ciclo" ? "#2563EB" : "#999999"}`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Ciclo
              </button>

              <button
                className={`w-max cursor-pointer px-6 mx-0 text-left py-3 border-b-2 sm:text-basic transition-all duration-100 hover:text-blue-600 hover:border-blue-600 ${activeTab == "Cursos" ? "border-blue-600 text-blue-600" : "border-[#D9D9D9]"}`}
                onClick={() => setActiveTab("Cursos")}
              >
                <svg
                  className="inline-block mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 4.66994V16.74C22 17.7 21.22 18.5999 20.26 18.7199L19.93 18.76C17.75 19.05 14.39 20.1599 12.47 21.2199C12.21 21.3699 11.78 21.3699 11.51 21.2199L11.47 21.2C9.54997 20.15 6.20003 19.05 4.03003 18.76L3.73999 18.7199C2.77999 18.5999 2 17.7 2 16.74V4.65993C2 3.46993 2.96997 2.56994 4.15997 2.66994C6.25997 2.83994 9.43997 3.89997 11.22 5.00997L11.47 5.15993C11.76 5.33994 12.24 5.33994 12.53 5.15993L12.7 5.04995C13.33 4.65995 14.13 4.26994 15 3.91994V7.99996L17 6.66994L19 7.99996V2.77999C19.27 2.72999 19.53 2.69995 19.77 2.67995H19.83C21.02 2.57995 22 3.46994 22 4.66994Z"
                    stroke={`${activeTab == "Cursos" ? "#2563EB" : "#999999"}`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 5.48999V20.49"
                    stroke={`${activeTab == "Cursos" ? "#2563EB" : "#999999"}`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19 2.78003V8L17 6.66998L15 8V3.91998C16.31 3.39998 17.77 2.98003 19 2.78003Z"
                    stroke={`${activeTab == "Cursos" ? "#2563EB" : "#999999"}`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Cursos
              </button>
              <button
                className={`w-max cursor-pointer px-6 mx-0 text-left py-3 border-b-2 sm:text-basic transition-all duration-100 hover:text-blue-600 hover:border-blue-600 ${activeTab == "LearningPath" ? "border-blue-600 text-blue-600" : "border-[#D9D9D9]"}`}
                onClick={() => setActiveTab("LearningPath")}
              >
                <svg
                  className="inline-block mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6601 10.44L20.6801 14.62C19.8401 18.23 18.1801 19.69 15.0601 19.39C14.5601 19.35 14.0201 19.26 13.4401 19.12L11.7601 18.72C7.59006 17.73 6.30006 15.67 7.28006 11.49L8.26006 7.30001C8.46006 6.45001 8.70006 5.71001 9.00006 5.10001C10.1701 2.68001 12.1601 2.03001 15.5001 2.82001L17.1701 3.21001C21.3601 4.19001 22.6401 6.26001 21.6601 10.44Z"
                    stroke={`${activeTab == "LearningPath" ? "#2563EB" : "#999999"}`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.06 19.39C14.44 19.81 13.66 20.16 12.71 20.47L11.13 20.99C7.15998 22.27 5.06997 21.2 3.77997 17.23L2.49997 13.28C1.21997 9.30998 2.27997 7.20998 6.24997 5.92998L7.82997 5.40998C8.23997 5.27998 8.62997 5.16998 8.99997 5.09998C8.69997 5.70998 8.45997 6.44998 8.25997 7.29998L7.27997 11.49C6.29997 15.67 7.58998 17.73 11.76 18.72L13.44 19.12C14.02 19.26 14.56 19.35 15.06 19.39Z"
                    stroke={`${activeTab == "LearningPath" ? "#2563EB" : "#999999"}`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.64 8.53003L17.49 9.76003"
                    stroke={`${activeTab == "LearningPath" ? "#2563EB" : "#999999"}`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.66 12.4L14.56 13.14"
                    stroke={`${activeTab == "LearningPath" ? "#2563EB" : "#999999"}`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
export default Configuracion;