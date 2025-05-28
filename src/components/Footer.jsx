import React from "react";
import { MdEmail, MdAccessTime } from "react-icons/md";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#FDFFFFFF] to-[#6E7070] text-white px-4 sm:px-6 py-10 text-sm">

      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Contacto general */}
<div className="text-left flex flex-col gap-3">
  <h3 className="text-[16px] font-bold" style={{ color: "#065384" }}>
    Contáctanos
  </h3>

  <div className="flex items-center gap-2 text-[#000000]">
    <MdEmail className="text-[18px]" />
    <span className="text-sm">hidrogeolsas@gmail.com</span>
  </div>
  <p className="flex items-center gap-2" style={{ color: "#000000FF" }}>
        <FaPhoneAlt className="text-[12px]" /> +57 (305) 597 4837
      </p>

  <div className="flex items-center gap-2 text-[#000000]">
    <MdAccessTime className="text-[18px]" />
    <span className="text-sm">Lunes a Sábado - 8:00 AM a 5:00 PM</span>
  </div>
</div>

          {/* Valledupar */}
          <div>
      <h3 className="text-[16px] font-bold mb-3" style={{ color: "#065384" }}>
        Dirreción
      </h3>
      <p className="flex items-center gap-2 mt-1" style={{ color: "#060606FF" }}>
        <FaMapMarkerAlt className="text-[12px]" /> Valledupar, Cesar – Colombia
      </p>
    </div>
         

          {/* Redes Sociales */}
          <div>
            <h3 className="text-base font-bold text-[#065384] mb-3">Redes Sociales</h3>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://wa.me/573505974837"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#128C7E] transition duration-300 transform hover:scale-110 hover:drop-shadow-md text-xl"

              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/equipoacuiter/"
                target="_blank"
                rel="noopener noreferrer"
               className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white px-4 py-2 rounded-full"

              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/Hidrogeol/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-[#1877F280] transition duration-300 transform hover:scale-105 text-xl"

              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Marca o misión */}
          <div>
            <h3 className="text-base font-bold text-[#065384] mb-3">Acuiter</h3>
            <p className="text-black leading-relaxed">
              Comprometidos con el desarrollo sostenible y el manejo eficiente del recurso hídrico en Colombia.
            </p>
          </div>
        </div>

        {/* Línea inferior */}
        <div
  style={{
    borderTop: "1px solid #000000FF",
    paddingTop: "1.5rem",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#000000FF",
  }}
>
  © {new Date().getFullYear()} Acuiter Hidrogeología S.A.S. - Todos los derechos reservados.
</div>
      </div>
    </footer>
  );
};

export default Footer;
