import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#00010185] text-white px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Información principal en columnas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Contacto general */}
          <div>
            <h3 className="text-base font-bold text-cyan-400 mb-2">Contáctanos</h3>
            <p className="mb-1">info@acuiter.com</p>
            
            
          </div>

          {/* Valledupar */}
          <div>
            <h3 className="text-base font-bold text-cyan-400 mb-2">Valledupar</h3>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-sm" /> +57 xxx xxx xxxx
            </p>
            <p className="flex items-center gap-2 mt-1">
              <FaMapMarkerAlt className="text-sm" /> xxx xxx xxxxx
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
