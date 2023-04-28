import React, { useState } from "react";
import useCuotas from "../../../../../hooks/usePayment";

const Tabla = ({ handleChange, formData, dataCiclo }) => {
  const { cuota, total } = useCuotas(
    dataCiclo.precio, // MontoTotal
    formData.cuotas // Tiempo
  );

  return (
    <div className="text-start flex flex-col gap-4">
      <div className="w-full h-33 font-semibold text-22 leading-33 text-black">
        Tabla
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-y-3 gap-x-8">
       
      </form>
    </div>
  );
};

export default Tabla;
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/chLAhqD41mM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}