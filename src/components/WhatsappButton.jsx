import React from "react";
import Wp from "../assets/WhatsApp.webp";
const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/573505974837" // reemplaza TU_NUMERO con tu número real
      className="fixed bottom-10 right-8 z-80"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src= {Wp}// Usa el ícono desde public/assets
        alt="WhatsApp"
        className="w-14 h-14 drop-shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </a>
  );
};

export default WhatsappButton;
