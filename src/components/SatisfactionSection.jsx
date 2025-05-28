import React from "react";
import { FaAward, FaDollarSign, FaThumbsUp } from "react-icons/fa";

const SatisfactionSection = () => {
  return (
    <section
      className="py-14 px-4 sm:px-6 md:px-10 text-center bg-gradient-to-b from-[#FFFFFFFF] to-[#065384]"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] mb-10">
        Tu <span className="text-[#25c0da]">satisfacción</span> es nuestra prioridad
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            icon: <FaAward className="mx-auto" />,
            title: "Alta Calidad y\nSatisfacción Garantizada",
            text:
              "En Acuiter garantizamos calidad en cada proyecto, cumpliendo con altos estándares técnicos y supervisión especializada.",
          },
          {
            icon: <FaDollarSign className="mx-auto" />,
            title: "El Mejor Precio\ndel Mercado",
            text:
              "Brindamos soluciones hídricas rentables, sin comprometer la eficiencia ni la sostenibilidad en cada obra.",
          },
          {
            icon: <FaThumbsUp className="mx-auto" />,
            title: "Resultados Confiables\ny Puntualidad",
            text:
              "Nos comprometemos con la entrega oportuna y el funcionamiento seguro de cada pozo ejecutado.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-[#FFFFFF] rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-5xl text-[#25c0da] mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-[#1F2937] leading-snug whitespace-pre-line">
              {item.title}
            </h3>
            <p className="text-sm text-[#4B5563] mt-3">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SatisfactionSection;
