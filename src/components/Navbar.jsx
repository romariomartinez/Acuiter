import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"; // asegúrate de tener esta imagen

const Navbar = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="ACUITER Logo"
            className="w-28 h-auto object-contain"
          />
        </Link>

        {/* Menú + Botón */}
        <div className="flex items-center gap-20">
          {/* Menú */}
          <nav className="flex gap-8 text-lg font-semibold font-sans tracking-wide">
           <Link to="/" className="text-[#000000] hover:text-[#25C0DA]">INICIO</Link>
<Link to="/about" className="text-[#000000] hover:text-[#25C0DA]">NOSOTROS</Link>
<Link to="/projects" className="text-[#000000] hover:text-[#25C0DA]">PROYECTOS</Link>
<Link to="/services" className="text-[#000000] hover:text-[#25C0DA]">SERVICIOS</Link>

          </nav>

          {/* Botón CONTACTO */}
          <Link
            to="/contact"
            className="bg-[#065384] text-white font-bold px-5 py-2 rounded-lg hover:bg-[#25C0DA] transition"
          >
            CONTACTO
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
