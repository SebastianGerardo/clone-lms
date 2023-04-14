import React from "react";

const InformacionCiclo = () => {
  return (
    <div className="text-center">
      <h1 className="text-xl font-medium">Información del Ciclo</h1>
      <table className="mx-auto my-10">
        <thead>
          <tr className="grid grid-cols-[40px_93.79px_89.29px] gap-6">
            <th className="font-semibold">Aula</th>
            <th className="font-semibold">Capacidad</th>
            <th className="font-semibold">Disponible</th>
          </tr>
        </thead>
        <tbody>
          <tr className="grid grid-cols-[40px_93.79px_89.29px] gap-6">
            <td>1</td>
            <td>20</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
      <div>
        <div>
            <h2>Costo: S/.200</h2>
        </div>
        <div>
            <h2>Promoción: Descuento del 15% si se realiza el pago antes del 20 de Abril.</h2>
        </div>
      </div>
    </div>
  );
};

export default InformacionCiclo;