import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FilterIcon2 } from "../../assets/svgs/ActiveSvgs";

const HoverButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative inline-block">
      <motion.button
        className={`${props.colorChange} w-11 h-11 flex justify-center items-center border text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
        whileHover={{ scale: 1.05 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.text}
      </motion.button>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-full -left-1/2 transform -translate-x-0 z-10 p-4 mt-2 text-white bg-black bg-opacity-75 rounded-lg shadow-lg w-max"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {props.dialog}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverButton;
