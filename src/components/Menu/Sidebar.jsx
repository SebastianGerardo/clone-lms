import React, { useContext, useState } from "react";
import { UserContext } from "../../context/ContextLms";
import LinksSidebar from "./LinksSidebar";
import '../../index.css'

const Sidebar = () => {
  const {showMenu, setShowMenu} = useContext(UserContext)

  return (
    <>
      <div onClick={() => setShowMenu(!showMenu)} className={`${showMenu ? 'block opacity-100' : 'hidden opacity-0'} block lg:hidden absolute left-0 w-screen h-screen bg-[#00000080] z-10`}></div>
      <div
        className={`bg-[#EDF0FF] h-screen fixed lg:static z-50 flex flex-col menu_max_height_622 justify-between transition-all duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
          <nav className="flex flex-col p-6 justify-between gap-8 h-full min-h-[622px]">
            <div onClick={() => setShowMenu(!showMenu)} className="bg-[#EDF0FF] h-screen min-h-[622px] flex flex-col items-center gap-y-8 lg:hidden">
              <h1 className="p-1 text-4xl text-center text-blue-700 font-bold">Logotipo</h1>
              <LinksSidebar />
            </div>
            <div className="bg-[#EDF0FF] h-screen flex-col items-center gap-y-8 hidden lg:flex">
              <h1 className="p-1 text-4xl text-center text-blue-700 font-bold">Logotipo</h1>
              <LinksSidebar />
            </div>
          </nav>
      </div>
    </>
  );
};

export default Sidebar;
