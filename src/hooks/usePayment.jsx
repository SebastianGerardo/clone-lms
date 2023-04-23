import { useState, useEffect } from 'react';

export function usePayment(total, isInstallment = false, commission = 0, installmentMonths = 1, interestRate = 0) {
  const [payment, setPayment] = useState({
    total,
    isInstallment,
    commission,
    installmentMonths,
    interestRate,
    installmentAmount: 0,
  });

  useEffect(() => {
    let installmentAmount = 0;

    if (payment.isInstallment) {
      const totalWithCommission = payment.total + payment.commission;
      const interestMultiplier = (1 + payment.interestRate / 100) ** payment.installmentMonths;
      installmentAmount = (totalWithCommission * interestMultiplier) / payment.installmentMonths;
    }

    setPayment(prevState => ({
      ...prevState,
      installmentAmount,
    }));
  }, [payment.isInstallment, payment.total, payment.commission, payment.installmentMonths, payment.interestRate]);

  function handleTotalChange(newTotal) {
    setPayment(prevState => ({
      ...prevState,
      total: newTotal,
    }));
  }

  function handleInstallmentChange(newIsInstallment) {
    setPayment(prevState => ({
      ...prevState,
      isInstallment: newIsInstallment,
    }));
  }

  function handleCommissionChange(newCommission) {
    setPayment(prevState => ({
      ...prevState,
      commission: newCommission,
    }));
  }

  function handleInstallmentMonthsChange(newInstallmentMonths) {
    setPayment(prevState => ({
      ...prevState,
      installmentMonths: newInstallmentMonths,
    }));
  }

  function handleInterestRateChange(newInterestRate) {
    setPayment(prevState => ({
      ...prevState,
      interestRate: newInterestRate,
    }));
  }

  return {
    payment, //Pago total (puede ser en plazos, con comisión, etc.)
    handleTotalChange, //Cambio de total 
    handleInstallmentChange, //Si es en plazos o no
    handleCommissionChange, //Cambio de comisión
    handleInstallmentMonthsChange, //Cambio de meses de plazo
    handleInterestRateChange, //Cambio de tasa de interés
  };
}
