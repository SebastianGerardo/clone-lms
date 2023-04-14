import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Select = ({ options, onChange, classes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const selectRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="relative inline-block text-left" ref={selectRef}>
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className={`inline-flex justify-center ${classes} rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={toggleOpen}
          >
            {selectedOption ? selectedOption.label : "Select an option"}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.707a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {options.map((option) => (
                <button
                  key={option.value}
                  className={`block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                    option === selectedOption ? "bg-gray-100 text-gray-900" : ""
                  }`}
                  role="menuitem"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Select;
