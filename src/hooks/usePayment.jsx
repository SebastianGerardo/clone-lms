import { useState, useEffect } from "react";

function useCuotas(monto, cuotas) {
  const [cuota, setCuota] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const numPagos = cuotas;
    const cuotaCalculada = monto / numPagos;
    const totalCalculado = cuotaCalculada * numPagos;

    setCuota(cuotaCalculada.toFixed(2));
    setTotal(totalCalculado.toFixed(2));
  }, [monto, cuotas]);

  return { cuota, total };
}

export default useCuotas;
