import React, { useEffect, useLayoutEffect, useState } from "react";
import Locales from "./components/Locales";
import DatosAcademicos from "./components/DatosAcademicos";
import ConfiguracionPerfil from "./components/ConfiguracionPerfil";
import Cursos from "./components/Cursos/pages/Cursos/Cursos";
import {
  BookIcon3,
  NoteIcon2,
  SettingIcon2,
  UserIcon,
} from "../../assets/svgs/ActiveSvgs";
import { Ripples } from "@uiball/loaders";
import { AnimatePresence, motion } from "framer-motion";
import Empresa from "./components/Empresa/Empresa";
import Local from "./components/Local/Local";
import Salones from "./components/Salones/Salones";
import CapitulosYTemas from "./components/Cursos/pages/CapitulosYTemas";

export default function Configuracion() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { navigationSections, renderTab, nombreCurso, activeTab } = validarUbicacion();
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
                <div className="text-center sm:text-start sm:pl-8 w-full h-33 font-semibold text-xl leading-33 text-black">
                  Configuración {`> ${renderTab[activeTab]?.title}`}{" "}
                  {nombreCurso && <span>{`> ${nombreCurso}`}</span>}
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
  setCursoActual
}) => {
  return (
    <button
      className={`flex gap-2 group w-max cursor-pointer px-6 mx-0 text-left py-3 border-b-2 sm:text-basic transition-all duration-100 hover:text-blue-600 hover:border-blue-600 ${
        activeTab == nameActive
          ? "border-blue-600 text-blue-600"
          : "border-[#D9D9D9]"
      }`}
      onClick={() => {
        setActiveTab(nameActive), setNombreCurso(null), setCursoActual("Cursos");
      }}
    >
      {icon}
      <p className="truncate">{nameActive}</p>
    </button>
  );
};

const validarUbicacion = () => {
  const [activeTab, setActiveTab] = useState("Empresa");
  const [cursoActual, setCursoActual] = useState("Cursos");
  const [nombreCurso, setNombreCurso] = useState(null);
  const [cursoSeleccionado, setCursoSeleccionado] = useState("");

  const cursoComponent = {
    Cursos: {
      title: "Cursos",
      content: (
        <Cursos
          setCursoActual={setCursoActual}
          setNombreCurso={setNombreCurso}
          setCursoSeleccionado={setCursoSeleccionado}
        />
      ),
    },
    Capitulos: {
      title: "Capitulos",
      content: (
        <CapitulosYTemas
          setCursoActual={setCursoActual}
          setNombreCurso={setNombreCurso}
          cursoSeleccionado={cursoSeleccionado}
        />
      ),
    },
  };
  
  const renderTab = {
    Empresa: {
      title: "Empresa",
      content: <Empresa />,
    },
    Locales: {
      title: "Locales",
      content: <Local />,
    },
    Salones: {
      title: "Salones",
      content: <Salones />,
    },
    Cursos: {
      title: "Cursos",
      content: cursoComponent[cursoActual]?.content,
    },
    "Cursos en Semanas": {
      title: "Cursos en Semanas",
      content: <ConfiguracionPerfil />,
    },
    "Learning Path": {
      title: "Learning Path",
      content: <ConfiguracionPerfil />,
    },
  };

  const propsNavigation = {
    setNombreCurso: setNombreCurso,
    activeTab: activeTab,
    setActiveTab: setActiveTab,
    setCursoActual: setCursoActual,
  };

  const navigationSections = [
    {
      name: "Empresa",
      icon: (
        <UserIcon isActive={activeTab == "Empresa"} colorChange={"#2563EB"} />
      ),
      props: { ...propsNavigation },
    },
    {
      name: "Locales",
      icon: (
        <BookIcon3 isActive={activeTab == "Locales"} colorChange={"#2563EB"} />
      ),
      props: { ...propsNavigation },
    },
    {
      name: "Salones",
      icon: (
        <NoteIcon2
          isActive={activeTab == "Salones"}
          colorChange={"#2563EB"}
        />
      ),
      props: { ...propsNavigation },
    },
    {
      name: "Cursos",
      icon: (
        <SettingIcon2
          isActive={activeTab == "Cursos"}
          colorChange={"#2563EB"}
        />
      ),
      props: { ...propsNavigation },
    },
    {
      name: "Cursos en Semanas",
      icon: (
        <SettingIcon2
          isActive={activeTab == "Cursos en Semanas"}
          colorChange={"#2563EB"}
        />
      ),
      props: { ...propsNavigation },
    },
    {
      name: "Learning Path",
      icon: (
        <BookIcon3 isActive={activeTab == "Learning Path"} colorChange={"#2563EB"} />
      ),
      props: { ...propsNavigation },
    },
  ];

  const props = {
    navigationSections,
    renderTab,
    nombreCurso,
    activeTab,
  };

  return props;
};
