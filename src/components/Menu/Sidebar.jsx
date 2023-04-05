import React, { useContext, useState } from "react";
import { UserContext } from "../../context/ContextLms";
// Icons
import LinksSidebar from "./LinksSidebar";

const Sidebar = () => {
  const {showMenu} = useContext(UserContext)

  return (
    <>
      <div
        className={`bg-[#EDF0FF] h-screen fixed lg:static z-50 flex flex-col justify-between transition-all duration-100 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
          <nav className="flex flex-col p-6 justify-between gap-8 h-full">
            <div className="bg-[#EDF0FF] h-screen flex flex-col items-center gap-y-8">
              <h1 className="p-1 text-4xl text-center text-blue-700 font-bold">Logotipo</h1>
              <LinksSidebar />
            </div>
          </nav>
      </div>
    </>
  );
};

export default Sidebar;
