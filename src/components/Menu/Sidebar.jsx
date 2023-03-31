import React, { useState } from "react";
// Icons
import LinksSidebar from "./LinksSidebar";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`bg-[#EDF0FF] h-screen fixed lg:static z-50 flex flex-col justify-between ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
          {/* Nav */}
          <nav className="flex flex-col p-6 justify-between gap-8 h-full">
            <div className="bg-[#EDF0FF] h-screen flex flex-col items-center gap-y-8">
              <h1 className="p-1 text-4xl text-center text-blue-700 font-bold">Logotipo</h1>
              <LinksSidebar />
            </div>
          </nav>
      </div>

      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? "burguer" : "close burguer"}
      </button>
    </>
  );
};

export default Sidebar;
