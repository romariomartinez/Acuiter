import React from "react";
import { FaAward, FaDollarSign, FaThumbsUp } from "react-icons/fa";

const SatisfactionSection = () => {
  return (
    <section className="py-20 text-center px-6" style={{ backgroundColor: '#F3F4F5FF' }}>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Tu <span className="text-sky-500">satisfacción</span> es nuestra prioridad
      </h2>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-8">
          <FaAward className="text-5xl text-sky-500 mb-5 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800">
            Alta Calidad y <br />
            Satisfacción en Nuestros Servicios
          </h3>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-8">
          <FaDollarSign className="text-5xl text-sky-500 mb-5 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800">
            El Mejor Precio del <br />
            Mercado
          </h3>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-8">
          <FaThumbsUp className="text-5xl text-sky-500 mb-5 mx-auto" />
          <h3 className="text-lg font-semibold text-gray-800">
            Excelentes Resultados <br />
            y Puntualidad
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SatisfactionSection;
