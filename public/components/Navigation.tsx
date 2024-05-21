import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NavigationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      {/* Menu button */}
        <div className="flex flex-row">
            <button onClick={toggleMenu} className="m-6 flex flex-col justify-around w-8 h-8 bg-black rounded">
                <span className="bar block w-full h-1 bg-white transition-transform rounded"></span>
                <span className="bar block w-full h-1 bg-white transition-opacity rounded"></span>
                <span className="bar block w-full h-1 bg-white transition-transform rounded"></span>
            </button>
            <div className="m-6 hidden justify-stretch items-center md:block ">
                <p className="text-center inline-block align-middle">
                    Navigation Menu
                </p>
            </div>
        </div>

      {/* Menu items */}
      <motion.ul
        initial={{ height: 0, opacity: 0, width: 0 }}
        animate={{ height: isOpen ? '100dvh' : 0, opacity: isOpen ? 1 : 0, width: isOpen ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
        className="w-64 bg-white text-black text-center opacity-0"
      >
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href="#">Home</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href="#">About</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href="#">Services</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href="#">Contact</a>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default NavigationMenu;