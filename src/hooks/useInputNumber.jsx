import React from "react";

const useInputNumber = () => {
  const handleKeyDown = (event) => {
    // Verifica si la tecla presionada es un número o una de las teclas especiales (backspace, delete, arrow keys)
    if (
      !/[\d\s]/.test(event.key) &&
      event.key !== "Backspace" &&
      event.key !== "Delete" &&
      !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)
    ) {
      // Si la tecla presionada no es un número ni una tecla especial, cancela el evento
      event.preventDefault();
    }
  };
  return {handleKeyDown};
};

export default useInputNumber;
