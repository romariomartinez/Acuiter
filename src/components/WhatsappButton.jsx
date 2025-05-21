import React from "react";
import Wp from "../assets/WhatsApp.webp";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/573505974837"
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={Wp}
        alt="WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </a>
  );
};

export default WhatsappButton;
