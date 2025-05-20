import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import logo from "../assets/Logo.png"; // usa tu logo real

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000); // 3 segundos
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex justify-center items-center h-screen bg-[#FFFFFFFF]">
      <motion.img
        src={logo}
        alt="Acuiter Logo"
        className="w-[500px] h-[500px] object-contain"


        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 3.5, bounce: 0.5 }}
      />
    </div>
  );
};

SplashScreen.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default SplashScreen;

