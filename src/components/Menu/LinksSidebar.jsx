import React from "react";
import { Logout, NavLinks } from "./MenuLogic";
import { LogoutIcon } from "../../assets/svgs/NormalSvgs";
import {
  BookIcon,
  BookIcon2,
  HomeIcon,
  NoteIcon,
  ProfileIcon,
  SettingIcon,
} from "../../assets/svgs/ActiveSvgs";

const LinksSidebar = () => {
  const LinksAdministracion = [
    {
      name: "Administración",
      icon: <HomeIcon />,
      to: "/dashboard/administracion",
    },
    {
      name: "Estadísticas",
      icon: <BookIcon />,
      to: "/dashboard/estadisticas",
    },
    {
      name: "Cursos",
      icon: <NoteIcon />,
      to: "/dashboard/cursos",
    },
  ];

  const LinksMiCuenta = [
    {
      name: "Perfil",
      icon: <ProfileIcon />,
      to: "/dashboard/perfil",
    },
    {
      name: "Matrícula",
      icon: <BookIcon2 />,
      to: "/dashboard/matricula",
    },
  ];

  const LinksSistema = [
    {
      name: "Configuración",
      icon: <SettingIcon />,
      to: "/dashboard/configuracion",
    },
  ];

  return (
    <section className="flex flex-col justify-between h-full text-sm">

      {/* ADMIN */}
      <div className="flex flex-col gap-y-1">
        <ul className="flex flex-col gap-y-2">
          <NavLinks links={LinksAdministracion} />
        </ul>

      {/* MI CUENTA */}
        <div className="flex flex-col gap-y-1">
          <span className="text-[#7882BF] text-sm">Mi cuenta</span>
          <ul>
            <NavLinks links={LinksMiCuenta} />
          </ul>
        </div>

      </div>

      {/* SISTEMA */}
      <div className="flex flex-col gap-4">
        <span className="text-[#7882BF] text-sm">Sistema</span>
        <ul className="flex flex-col justify-center items-center gap-y-4">

          {/* CONFIGURACIÓN */}
          <NavLinks links={LinksSistema} />

          {/* CERRAR SESIÓN */}
          <li>
            <Logout>
              <button className="flex gap-2 text-red-500 menu_button_max_height_622">
                <LogoutIcon color={"#EF4444"}/>
                <span className="pt-[0.15rem] text-center">Cerrar sesión</span>
              </button>
            </Logout>
          </li>

        </ul>
      </div>
    </section>
  );
};

export default LinksSidebar;
