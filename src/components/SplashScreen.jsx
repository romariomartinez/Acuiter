import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 5000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center overflow-hidden">
      <motion.video
  src="/videos/VIDEOSPLAS.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="max-w-full max-h-screen object-contain p-4"
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ type: "spring", duration: 1.5, bounce: 0.5 }}
/>
    </div>
  );
};

SplashScreen.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default SplashScreen;
