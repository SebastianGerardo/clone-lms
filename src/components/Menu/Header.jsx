import React, { useContext } from "react";
import userImg from "../../assets/img/user-img.svg";
import { UserContext } from "../../context/ContextLms";

const Header = () => {
  const {setShowMenu, showMenu} = useContext(UserContext)
  
  return (
    <header className="flex py-4 px-8 flex-col min-[790px]:flex-row items-center justify-between gap-4">
      <section className="w-full min-[790px]:w-max lg:hidden min-[1110px]:flex flex flex-shrink-0 sm:flex-shrink  items-center justify-between">
        <div className="h-11 w-11 cursor-pointer lg:hidden text-2xl p-2.5 rounded-full text-white "
        onClick={() => setShowMenu(!showMenu)}
        >
            <svg className={showMenu && 'hidden'} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M3 12H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M3 17H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </div>

        {/* WELCOME USER */}
        {/*  */}
        <div className="flex flex-col mx-auto pr-14 md:p-0 items-center justify-center text-center md:justify-start min-[790px]:hidden min-[925px]:flex">
          <h1 className="text-2xl md:text-3xl font-bold text-black">
            <span className="text-blue-600 text-xl font-bold"><span className="text-black">Hola</span> Alex</span>
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z" fill="#292D32"/>
          <path d="M15.21 22.1898C15 22.1898 14.79 22.1598 14.58 22.1098C13.96 21.9398 13.44 21.5498 13.11 20.9998L12.99 20.7998C12.4 19.7798 11.59 19.7798 11 20.7998L10.89 20.9898C10.56 21.5498 10.04 21.9498 9.42 22.1098C8.79 22.2798 8.14 22.1898 7.59 21.8598L5.87 20.8698C5.26 20.5198 4.82 19.9498 4.63 19.2598C4.45 18.5698 4.54 17.8598 4.89 17.2498C5.18 16.7398 5.26 16.2798 5.09 15.9898C4.92 15.6998 4.49 15.5298 3.9 15.5298C2.44 15.5298 1.25 14.3398 1.25 12.8798V11.1198C1.25 9.6598 2.44 8.4698 3.9 8.4698C4.49 8.4698 4.92 8.2998 5.09 8.0098C5.26 7.7198 5.19 7.2598 4.89 6.7498C4.54 6.1398 4.45 5.4198 4.63 4.7398C4.81 4.0498 5.25 3.4798 5.87 3.1298L7.6 2.1398C8.73 1.4698 10.22 1.8598 10.9 3.0098L11.02 3.2098C11.61 4.2298 12.42 4.2298 13.01 3.2098L13.12 3.0198C13.8 1.8598 15.29 1.4698 16.43 2.1498L18.15 3.1398C18.76 3.4898 19.2 4.0598 19.39 4.7498C19.57 5.4398 19.48 6.1498 19.13 6.7598C18.84 7.2698 18.76 7.7298 18.93 8.0198C19.1 8.3098 19.53 8.4798 20.12 8.4798C21.58 8.4798 22.77 9.6698 22.77 11.1298V12.8898C22.77 14.3498 21.58 15.5398 20.12 15.5398C19.53 15.5398 19.1 15.7098 18.93 15.9998C18.76 16.2898 18.83 16.7498 19.13 17.2598C19.48 17.8698 19.58 18.5898 19.39 19.2698C19.21 19.9598 18.77 20.5298 18.15 20.8798L16.42 21.8698C16.04 22.0798 15.63 22.1898 15.21 22.1898ZM12 18.4898C12.89 18.4898 13.72 19.0498 14.29 20.0398L14.4 20.2298C14.52 20.4398 14.72 20.5898 14.96 20.6498C15.2 20.7098 15.44 20.6798 15.64 20.5598L17.37 19.5598C17.63 19.4098 17.83 19.1598 17.91 18.8598C17.99 18.5598 17.95 18.2498 17.8 17.9898C17.23 17.0098 17.16 15.9998 17.6 15.2298C18.04 14.4598 18.95 14.0198 20.09 14.0198C20.73 14.0198 21.24 13.5098 21.24 12.8698V11.1098C21.24 10.4798 20.73 9.9598 20.09 9.9598C18.95 9.9598 18.04 9.5198 17.6 8.7498C17.16 7.9798 17.23 6.9698 17.8 5.9898C17.95 5.7298 17.99 5.4198 17.91 5.1198C17.83 4.8198 17.64 4.5798 17.38 4.4198L15.65 3.4298C15.22 3.1698 14.65 3.3198 14.39 3.7598L14.28 3.9498C13.71 4.9398 12.88 5.4998 11.99 5.4998C11.1 5.4998 10.27 4.9398 9.7 3.9498L9.59 3.7498C9.34 3.3298 8.78 3.1798 8.35 3.4298L6.62 4.4298C6.36 4.5798 6.16 4.8298 6.08 5.1298C6 5.4298 6.04 5.7398 6.19 5.9998C6.76 6.9798 6.83 7.9898 6.39 8.7598C5.95 9.5298 5.04 9.9698 3.9 9.9698C3.26 9.9698 2.75 10.4798 2.75 11.1198V12.8798C2.75 13.5098 3.26 14.0298 3.9 14.0298C5.04 14.0298 5.95 14.4698 6.39 15.2398C6.83 16.0098 6.76 17.0198 6.19 17.9998C6.04 18.2598 6 18.5698 6.08 18.8698C6.16 19.1698 6.35 19.4098 6.61 19.5698L8.34 20.5598C8.55 20.6898 8.8 20.7198 9.03 20.6598C9.27 20.5998 9.47 20.4398 9.6 20.2298L9.71 20.0398C10.28 19.0598 11.11 18.4898 12 18.4898Z" fill="#292D32"/>
        </svg>

        {/* PERFIL HAMBURGUESA */}
        <button className="flex gap-2 items-center rounded-xl px-4 py-2">
          <div className="max-w-[3rem] min-w-[3rem] max-h-[3rem] min-h-[3rem] rounded-2xl">
            <img src={userImg} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-start">
            <span>José M.</span>
            <span className="text-sm text-gray-500">
              Administrador 
            </span>
          </div>
          {/* ICONO FLECHA */}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>

    </header>
  );
};

export default Header;
