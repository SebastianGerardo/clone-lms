import { motion } from "framer-motion";
import { useState } from "react";

const CircularProgress = ({ percentage }) => {
  const [progress, setProgress] = useState(66); //Aqui se mide el progreso
  const circleCircumference = 2 * Math.PI * 45;
  const strokeDashoffset = circleCircumference - (circleCircumference * progress) / 100;

  const circleVariants = {
    initial: { strokeDashoffset: circleCircumference },
    animate: { strokeDashoffset }
  };

  const handleClick = () => {
      if (progress < 100) {
        //   setProgress(progress + 10);
          setProgress(progress + percentage);
    }
  };

  return (
    <>
    <motion.svg
      width={230}
      height={230}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="progress-circle"
    >
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        stroke="#ccc"
        strokeWidth="10"
      />
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        transform="rotate(-90, 50, 50)"
        fill="transparent"
        stroke="#3751FE"
        strokeWidth="10"
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
        fontSize="15"
        fontWeight="bold"
        fill="#0052CA"
      >
        {`Ciclo 1`}
      </motion.text>
    </motion.svg>
      {/* <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        Increase Progress
      </motion.button> */}
    </>
  );
};

export default CircularProgress;
