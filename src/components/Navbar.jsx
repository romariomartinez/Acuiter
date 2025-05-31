import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="ACUITER"
            className="w-28 h-auto object-contain hover:scale-105 transition-transform duration-200"
          />
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-[#065384]"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>

        {/* Menú en escritorio */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-[#000] font-semibold hover:text-[#25C0DA]">
            INICIO
          </Link>
          <Link to="/about" className="text-[#000] font-semibold hover:text-[#25C0DA]">
            NOSOTROS
          </Link>
          <Link to="/projects" className="text-[#000] font-semibold hover:text-[#25C0DA]">
            PROYECTOS
          </Link>
          <Link to="/services" className="text-[#000] font-semibold hover:text-[#25C0DA]">
            SERVICIOS
          </Link>
          <Link
            to="/contact"
            className="bg-[#065384] text-white px-5 py-2 rounded-lg font-bold hover:bg-[#25C0DA] transition"
          >
            CONTACTO
          </Link>
        </nav>
      </div>

      {/* Menú overlay en móvil */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center text-center space-y-6 px-6">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-[#065384]"
          >
            <X size={32} />
          </button>

          <Link to="/" onClick={handleClose} className="text-xl font-bold text-black">
            INICIO
          </Link>
          <Link to="/about" onClick={handleClose} className="text-xl font-bold text-black">
            NOSOTROS
          </Link>
          <Link to="/projects" onClick={handleClose} className="text-xl font-bold text-black">
            PROYECTOS
          </Link>
          <Link to="/services" onClick={handleClose} className="text-xl font-bold text-black">
            SERVICIOS
          </Link>
          <Link
            to="/contact"
            onClick={handleClose}
            className="bg-[#065384] text-white font-bold px-6 py-3 rounded-md"
          >
            CONTACTO
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
