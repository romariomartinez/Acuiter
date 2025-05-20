import React from "react";
import { FaAward, FaDollarSign, FaThumbsUp } from "react-icons/fa";

const SatisfactionSection = () => {
  return (
    <section
      className="py-20 px-4 md:px-6 text-center"
      style={{ backgroundColor: "#F3F4F5FF" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Tu <span className="text-sky-500">satisfacción</span> es nuestra prioridad
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <FaAward className="text-5xl text-sky-500 mb-5 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800 leading-snug">
            Alta Calidad y <br /> Satisfacción Garantizada
          </h3>
          <p className="text-sm text-gray-600 mt-3">
            Cada pozo perforado sigue estándares técnicos y está certificado.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <FaDollarSign className="text-5xl text-sky-500 mb-5 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800 leading-snug">
            El Mejor Precio <br /> del Mercado
          </h3>
          <p className="text-sm text-gray-600 mt-3">
            Soluciones accesibles sin sacrificar calidad en equipos ni estudios.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <FaThumbsUp className="text-5xl text-sky-500 mb-5 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800 leading-snug">
            Resultados Confiables <br /> y Puntualidad
          </h3>
          <p className="text-sm text-gray-600 mt-3">
            Cumplimos los tiempos de entrega y garantizamos el funcionamiento hidráulico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SatisfactionSection;
