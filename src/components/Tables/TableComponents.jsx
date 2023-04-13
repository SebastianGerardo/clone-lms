import React from "react";
import ButtonManager from "../Buttons/ButtonManager";

export const NameTable = ({ name }) => {
  return (
    <h3 className="pl-3 text-center text-gray-500 font-semibold">{name}</h3>
  );
};

export const NombreTabla = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};
