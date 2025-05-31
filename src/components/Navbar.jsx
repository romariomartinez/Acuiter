import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú móvil después de hacer clic
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="ACUITER Logo"
            className="w-28 h-auto object-contain hover:scale-105 transition-transform duration-200 cursor-pointer"
          />
        </Link>

        {/* Botón hamburguesa (solo en móvil) */}
        <button
          className="md:hidden text-[#065384] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú de navegación */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 z-40 md:static md:flex md:items-center md:gap-8 md:w-auto md:shadow-none md:bg-transparent md:px-0 md:py-0`}
        >
          {[
            { to: "/", label: "INICIO" },
            { to: "/about", label: "NOSOTROS" },
            { to: "/projects", label: "PROYECTOS" },
            { to: "/services", label: "SERVICIOS" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={handleLinkClick}
              className="block md:inline-block text-[#000000] hover:text-[#25C0DA] text-lg font-semibold mb-2 md:mb-0"
            >
              {label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="block md:inline-block bg-[#065384] text-white font-bold px-5 py-2 rounded-lg hover:bg-[#25C0DA] transition"
          >
            CONTACTO
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
