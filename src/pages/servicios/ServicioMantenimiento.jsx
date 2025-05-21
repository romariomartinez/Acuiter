import React from "react";
import { FaTools } from "react-icons/fa";

const ServicioMantenimiento = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <FaTools className="text-4xl text-[#029CBF]" />
          <h1 className="text-3xl font-bold text-[#065384]">Mantenimiento de Pozos</h1>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Ofrecemos servicios completos de mantenimiento de pozos profundos y semiprofundos para asegurar su correcto funcionamiento y prolongar su vida útil.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Realizamos inspecciones con cámaras sumergibles, limpieza mecánica y química de las paredes del pozo, y recuperación de caudal cuando hay obstrucciones o sedimentación.
        </p>

        <p className="text-gray-700 leading-relaxed">
          También llevamos a cabo rehabilitaciones estructurales, cambio de tuberías y revisión del sistema de bombeo para garantizar la eficiencia hidráulica.
        </p>
      </div>
    </section>
  );
};

export default ServicioMantenimiento;
