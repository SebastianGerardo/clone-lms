import React, { useLayoutEffect, useState } from "react";
import { Ripples } from "@uiball/loaders";
import { AnimatePresence, motion } from "framer-motion";
import { validarUbicacion } from "./ValidarUbicacion";


export default function Configuracion() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { navigationSections, renderTab, nombreCurso, activeTab, nombreContenido } = validarUbicacion();
  useLayoutEffect(() => {
    setIsLoaded(false);
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [activeTab]);
  
  return (
    <section className="2xl:flex 2xl:flex-col 2xl:items-center">
      <div className="bg-white w-full h-full py-6 px-0 sm:px-20 mx-0 2xl:max-w-[1400px]">
        <div className="w-full">
          <div className="w-full mb-6 flex flex-col gap-y-8 sm:gap-3">
            {/*  NAV */}
            <nav className="w-full mx-auto overflow-auto flex 2xl:justify-center mt-3 text-[#999999] ocultar-barra">
              {navigationSections.map((item, index) => (
                <Navigation
                  key={index}
                  nameActive={item.name}
                  icon={item.icon}
                  {...item.props}
                />
              ))}
            </nav>

            <main>
              <div className="flex items-center justify-between mb-3">
                <div className="capitalize text-center sm:text-start sm:pl-8 w-full h-33 font-semibold text-xl leading-33 text-black">
                  Configuración {`> ${renderTab[activeTab]?.title}`}{" "}
                  {nombreCurso && <span>{`> ${nombreCurso}`}</span>} {nombreContenido && <span>{`> ${nombreContenido}`}</span>}
                </div>
              </div>
              {isLoaded ? (
                <AnimatePresence>
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderTab[activeTab]?.content}
                </motion.span>
              </AnimatePresence>
              ) : (
                <div className="flex justify-center items-center h-[20rem]">
                  <Ripples color="#2563EB" />
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

const Navigation = ({
  activeTab,
  nameActive,
  setActiveTab,
  setNombreCurso,
  icon,
  setCursoActual,
  setNombreContenido
}) => {
  return (
    <button
      className={`flex gap-2 group w-max cursor-pointer px-6 mx-0 text-left py-3 border-b-2 sm:text-basic transition-all duration-100 hover:text-blue-600 hover:border-blue-600 ${
        activeTab == nameActive
          ? "border-blue-600 text-blue-600"
          : "border-[#D9D9D9]"
      }`}
      onClick={() => {
        setActiveTab(nameActive), setNombreCurso(null), setCursoActual("Cursos"), setNombreContenido(null);
      }}
    >
      {icon}
      <p className="truncate">{nameActive}</p>
    </button>
  );
};

