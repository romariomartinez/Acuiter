import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#383A3AFF] text-white px-4 sm:px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Contacto general */}
          <div>
            <h3 className="text-base font-bold text-cyan-400 mb-3">Contáctanos</h3>
            <p className="mb-1">📧 hidrogeolsas@gmail.com</p>
            <p>🕒 Lunes a Sábado - 8:00 AM a 5:00 PM</p>
          </div>

          {/* Valledupar */}
          <div>
            <h3 className="text-base font-bold text-cyan-400 mb-3">Valledupar</h3>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-xs" /> +57 (305) 597 4837
            </p>
            <p className="flex items-center gap-2 mt-1">
              <FaMapMarkerAlt className="text-xs" /> Valledupar, Cesar – Colombia
            </p>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-base font-bold text-cyan-400 mb-3">Redes Sociales</h3>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://wa.me/573505974837"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#25D366] transition text-xl"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/equipoacuiter/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/Hidrogeol/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#1877F2] transition text-xl"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Marca o misión */}
          <div>
            <h3 className="text-base font-bold text-cyan-400 mb-3">Acuiter</h3>
            <p className="text-gray-300 leading-relaxed">
              Comprometidos con el desarrollo sostenible y el manejo eficiente del recurso hídrico en Colombia.
            </p>
          </div>
        </div>

        {/* Línea inferior */}
        <div
  style={{
    borderTop: "1px solid #FFFFFFFF",
    paddingTop: "1.5rem",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#FBFBFCFF",
  }}
>
  © {new Date().getFullYear()} Acuiter Hidrogeología S.A.S. - Todos los derechos reservados.
</div>
      </div>
    </footer>
  );
};

export default Footer;
