import React from "react";
import { FaFileAlt } from "react-icons/fa";

const ServicioLicencias = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <FaFileAlt className="text-4xl text-[#029CBF]" />
          <h1 className="text-3xl font-bold text-[#065384]">Licencias y Permisos</h1>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Brindamos asesoría integral para la gestión de licencias ambientales, permisos de perforación, y concesiones de aguas subterráneas ante las autoridades competentes.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Nos encargamos del acompañamiento en la elaboración de estudios técnicos, radicación de documentos y seguimiento a cada proceso hasta obtener la autorización necesaria.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Nuestro equipo legal y técnico garantiza el cumplimiento de la normativa vigente, evitando sanciones y asegurando la legalidad de cada proyecto.
        </p>
      </div>
    </section>
  );
};

export default ServicioLicencias;
