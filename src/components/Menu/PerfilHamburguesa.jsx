import React, { useState, useEffect, useRef } from 'react';
import userImg from "../../assets/img/user-img.svg";
import { motion, AnimatePresence } from 'framer-motion';
import { Logout } from './MenuLogic';
import { ArrowDownIcon, LogoutIcon } from '../../assets/svgs/NormalSvgs';

const PerfilHamburguesa = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [dropdownRef]);
      
  return (
    <div className="relative" ref={dropdownRef}>
      <button className="flex gap-2 items-center rounded-xl px-4 py-2"  onClick={() => setIsOpen(!isOpen)}>
        <div className="max-w-[3rem] min-w-[3rem] max-h-[3rem] min-h-[3rem] rounded-2xl">
          <img src={userImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col text-start">
          <span>José M.</span>
          <span className="text-sm text-gray-500">
            Administrador 
          </span>
        </div>
        <ArrowDownIcon width={12} height={12}/>
      </button>

      <AnimatePresence>
      {isOpen && (
        <motion.div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="py-1">
            <Logout>
                <button onClick={() => setIsOpen(false)} className="flex gap-2 text-red-500 w-full text-start px-4 py-2 text-sm hover:bg-gray-100 transition-all duration-100 ">
                    <LogoutIcon color={"#EF4444"} />
                    <span className='pt-[0.15rem] text-center'>Cerrar sesión</span>
                </button>  
            </Logout>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    </div>
  );
}

export default PerfilHamburguesa