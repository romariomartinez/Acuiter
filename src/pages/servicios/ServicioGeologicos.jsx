import React from "react";
import { FaSearchLocation } from "react-icons/fa";

const ServicioGeologicos = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <FaSearchLocation className="text-4xl text-[#029CBF]" />
          <h1 className="text-3xl font-bold text-[#065384]">Estudios Geológicos</h1>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Realizamos estudios geotécnicos e hidrogeológicos esenciales para evaluar la viabilidad de perforación de pozos de agua. Estos análisis permiten conocer las características del suelo, la presencia de acuíferos y la capacidad de recarga.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Nuestros geólogos emplean equipos modernos para identificar capas permeables y determinar la profundidad adecuada para una captación eficiente. Esto garantiza que la perforación se realice con base en información precisa y técnica.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Contar con un estudio previo minimiza riesgos, optimiza recursos y asegura el éxito del proyecto hídrico desde su planificación.
        </p>
      </div>
    </section>
  );
};

export default ServicioGeologicos;
