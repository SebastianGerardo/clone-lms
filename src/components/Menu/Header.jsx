import React, { useContext } from "react";
import { UserContext } from "../../context/ContextLms";
import PerfilHamburguesa from "./PerfilHamburguesa";
import {NavLink} from 'react-router-dom'
import { SettingIcon } from "../../assets/svgs/ActiveSvgs";

const Header = () => {
  const {setShowMenu, showMenu, usuarioLogin} = useContext(UserContext)
  
  return (
    <header className="flex py-4 px-8 flex-col min-[790px]:flex-row items-center justify-between gap-4">
      <section className="w-full min-[790px]:w-max lg:hidden min-[1110px]:flex flex flex-shrink-0 sm:flex-shrink  items-center justify-between">
        <div className="h-11 w-11 cursor-pointer lg:hidden text-2xl p-2.5 rounded-full text-white "
        onClick={() => setShowMenu(!showMenu)}
        >
            <svg className={`${showMenu && 'hidden'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M3 12H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M3 17H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        </div>

        {/* WELCOME USER */}
        {/*  */}
        <div className="flex flex-col mx-auto pr-14 md:p-0 items-center justify-center text-center md:justify-start min-[790px]:hidden min-[925px]:flex">
          <h1 className="text-2xl md:text-3xl font-bold text-black">
            <span className="text-blue-600 text-xl font-bold"><span className="text-black">Hola</span> {usuarioLogin?.user?.name}</span>
          </h1>
            <p className="text-gray-400 text-xs">¿Cómo estás hoy?</p>
        </div>

      </section>

      {/* SEARCH */}
      <form className="w-full min-[790px]:w-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#A4B2CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="#A4B2CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="text-gray-400 placeholder:text-[#A4B2CD] block w-full text-lg py-4 pl-12 pr-4 rounded-md min-[790px]:w-96  bg-[#F9F9F9] focus:outline-none focus:ring-2 focus:ring-[#EDF0FF] focus:border-transparent"
            placeholder="Buscar"
            autoComplete="off"
          />
        </div>
      </form>

      {/* ABOUT USER */}
      <div className="flex items-center gap-4">

        {/* ICONO NOTIFICATIONS */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.43994V9.76994" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
          <path d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
          <path d="M15.33 18.8201C15.33 20.6501 13.83 22.1501 12 22.1501C11.09 22.1501 10.25 21.7701 9.65004 21.1701C9.05004 20.5701 8.67004 19.7301 8.67004 18.8201" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
        </svg>


        {/* ICONO SETTINGS */}
        <NavLink to="/dashboard/administracion/configuracion" state={{ logged: true }} >
          {({ isActive }) => (
            <SettingIcon colorChange={"#2563EB"} isActive={isActive} />
          )}
        </NavLink>

        {/* PERFIL HAMBURGUESA */}
        <PerfilHamburguesa />

      </div>

    </header>
  );
};

export default Header;