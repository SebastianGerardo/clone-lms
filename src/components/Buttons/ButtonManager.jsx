import React from "react";

const ButtonManager = () => {
  return (
    <div className="flex gap-2 rounded-lg p-2 text-xs text-gray-400">
      <button className="text-[#ef4444]">Editar</button>
      <button>Nuevo</button>
      <button>Borrar</button>
    </div>
  );
};

export default ButtonManager;
