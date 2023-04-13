import React, { useState } from "react";
import { EditIcon, SaveIcon } from "../../assets/svgs/ActiveSvgs";

export const ButtonEdit = ({active, activarInput}) => {

  const [colorBoton, setColorBoton] = useState(false);

  return (
    <>
      {active ? (
        // BOTÓN EDITAR
        <div className="box-border ml-auto bg-gray-50 border border-blue-500 rounded-lg">
          <button
            onClick={activarInput}
            onMouseEnter={() => setColorBoton(true)}
            onMouseLeave={() => setColorBoton(false)}
            className={`flex gap-2 px-4 py-2 font-medium-poppins rounded-lg transition duration-75 ${
              colorBoton ? "text-white bg-blue-500" : "text-blue-500 bg-white"
            }`}
          >
            {/* ICONO EDITAR */}
            <EditIcon
              isActive={colorBoton}
              color={"#3B82F6"}
              colorChange={"#FFF"}
            />
            <span>Edit</span>
          </button>
        </div>
      ) : (
        // BOTÓN GUARDAR
        <div className="box-border ml-auto bg-gray-50 border border-green-500 rounded-lg">
          <button
            onClick={activarInput}
            onMouseEnter={() => setColorBoton(true)}
            onMouseLeave={() => setColorBoton(false)}
            className={`flex gap-2 px-4 py-2 rounded-lg transition duration-75 ${
              colorBoton ? "text-white bg-green-500" : "text-green-500 bg-white"
            }`}
          >
            {/* ICONO GUARDAR */}

            <SaveIcon
              isActive={colorBoton}
              color={"#22C55E"}
              colorChange={"#FFF"}
            />

            <span>Guardar</span>
          </button>
        </div>
      )}
    </>
  );
};
