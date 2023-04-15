import { motion } from "framer-motion";
import { useState } from "react";

const CircularProgress = ({ circunference = 45, progressCircle = 0, percentage, textContent, colorText, colorRelleno, colorFondo, sizeCircle, fontSize, fontWeight, strokeWidth }) => {
  const [progress, setProgress] = useState(0);
  const circleCircumference = 2 * Math.PI * circunference;
  const strokeDashoffset = circleCircumference - (circleCircumference * progressCircle) / 100;
  const strokeWidthCircle = strokeWidth / sizeCircle * 100; // Ajustar el ancho de trazo al tamaño del círculo
  const radius = 45 - strokeWidthCircle / 2; // Ajustar el radio para mantener el borde dentro del viewBox

  const circleVariants = {
    initial: { strokeDashoffset: circleCircumference },
    animate: { strokeDashoffset },
  };

  const handleClick = () => {
    if (progress < 100) {
      setProgress(progress + percentage);
    }
  };

  return (
    <>
      <motion.svg
        width={sizeCircle}
        height={sizeCircle}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="progress-circle"
      >
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke={colorFondo}
          strokeWidth={strokeWidthCircle}
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          transform="rotate(-90, 50, 50)"
          fill="transparent"
          stroke={colorRelleno}
          strokeWidth={strokeWidthCircle}
          strokeDasharray={circleCircumference}
          strokeDashoffset={strokeDashoffset}
          variants={circleVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={fontSize}
          fontWeight={fontWeight}
          fill={colorText}
        >
          {textContent}
        </motion.text>
      </motion.svg>
    </>
  );
};

export default CircularProgress;
