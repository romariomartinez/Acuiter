import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000); // 3 segundos
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex justify-center items-center h-screen bg-[#FFFFFFFF]">
      <motion.video
        src="/videos/Acuiter.mov"
        autoPlay
        muted
        loop
        playsInline
        className="w-[500px] h-[500px] object-contain rounded-xl shadow-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 10.5, bounce: 0.5 }}
      />
    </div>
  );
};

SplashScreen.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default SplashScreen;
