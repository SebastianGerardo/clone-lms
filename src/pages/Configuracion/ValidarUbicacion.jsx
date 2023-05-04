import { useState } from "react";
import Empresa from "./components/Empresa/Empresa";
import Local from "./components/Local/Local";
import Salones from "./components/Salones/Salones";
import CapitulosYTemas from "./components/Cursos/pages/CapitulosYTemas";
import LearningPath from "./components/LearningPath/pages/LearningPath/LearningPath";
import SemanasPage from "./components/LearningPath/pages/SemanasPage";
import Ciclos from "./components/Ciclos/pages/Ciclos/Ciclos";
import CiclosPage from "./components/Ciclos/pages/CiclosPage";
import Cursos from "./components/Cursos/pages/Cursos/Cursos";
import { BookIcon3, NoteIcon2, SettingIcon2, UserIcon} from "../../assets/svgs/ActiveSvgs";

export const validarUbicacion = () => {
    const [activeTab, setActiveTab] = useState("Empresa");
    const [cursoActual, setCursoActual] = useState("");
    const [nombreCurso, setNombreCurso] = useState(null);
    const [cursoSeleccionado, setCursoSeleccionado] = useState("");
    const [nombreContenido, setNombreContenido] = useState(null);

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
            setNombreContenido={setNombreContenido}
          />
        ),
      },
    };
  
    const rutaComponent = {
      Cursos: {
        title: "Learning Path",
        content: (
          <LearningPath
            setCursoActual={setCursoActual}
            setNombreCurso={setNombreCurso}
            setCursoSeleccionado={setCursoSeleccionado}
          />
        ),
      },
      Capitulos: {
        title: "Areas",
        content: (
          <SemanasPage
            setCursoActual={setCursoActual}
            setNombreCurso={setNombreCurso}
            cursoSeleccionado={cursoSeleccionado}
            setNombreContenido={setNombreContenido}
          />
        ),
      },
    };
  
    const cicloComponent = {
      Cursos: {
        title: "Ciclos",
        content: (
          <Ciclos
            setCursoActual={setCursoActual}
            setNombreCurso={setNombreCurso}
            setCursoSeleccionado={setCursoSeleccionado}
          />
        ),
      },
      Capitulos: {
        title: "Salones",
        content: (
          <CiclosPage
            setCursoActual={setCursoActual}
            setNombreCurso={setNombreCurso}
            cursoSeleccionado={cursoSeleccionado}
          />
        ),
      },
    }
  
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
      "Ciclos": {
        title: "Ciclos",
        content: cicloComponent[cursoActual]?.content,
      },
      "Learning Path": {
        title: "Learning Path",
        content: rutaComponent[cursoActual]?.content,
      },
    };
  
    const propsNavigation = {
      setNombreCurso: setNombreCurso,
      activeTab: activeTab,
      setActiveTab: setActiveTab,
      setCursoActual: setCursoActual,
      nombreContenido: nombreContenido,
      setNombreContenido: setNombreContenido,
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
        name: "Ciclos",
        icon: (
          <SettingIcon2
            isActive={activeTab == "Ciclos"}
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
      nombreContenido,
    };
  
    return props;
  };
  