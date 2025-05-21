import React from "react";
import { FaAward, FaDollarSign, FaThumbsUp } from "react-icons/fa";

const SatisfactionSection = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 md:px-10 text-center bg-[#F3F4F5]"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Tu <span className="text-sky-500">satisfacción</span> es nuestra prioridad
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card */}
        {[{
          icon: <FaAward />,
          title: "Alta Calidad y\nSatisfacción Garantizada",
          text: "Cada pozo perforado sigue estándares técnicos y está certificado."
        }, {
          icon: <FaDollarSign />,
          title: "El Mejor Precio\ndel Mercado",
          text: "Soluciones accesibles sin sacrificar calidad en equipos ni estudios."
        }, {
          icon: <FaThumbsUp />,
          title: "Resultados Confiables\ny Puntualidad",
          text: "Cumplimos los tiempos de entrega y garantizamos el funcionamiento hidráulico."
        }].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-5xl text-sky-500 mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 leading-snug whitespace-pre-line">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-3">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SatisfactionSection;

