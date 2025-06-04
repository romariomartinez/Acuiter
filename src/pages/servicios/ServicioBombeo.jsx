import React from "react";
import { FaPumpSoap } from "react-icons/fa";

const ServicioBombeo = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <FaPumpSoap className="text-4xl text-[#029CBF]" />
          <h1 className="text-3xl font-bold text-[#065384]">Sistemas de Bombeo</h1>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Instalamos sistemas de bombeo adaptados a cada necesidad, ya sean eléctricos convencionales o energías renovables como la solar. Nuestro objetivo es garantizar un suministro constante y eficiente del agua extraída.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Nos encargamos del diseño, selección e instalación de bombas sumergibles, controladores de presión, paneles solares y automatización del sistema para maximizar el rendimiento y reducir costos operativos.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Nuestro equipo técnico realiza pruebas hidráulicas y eléctricas para asegurar que cada sistema funcione con la máxima eficiencia y durabilidad.
        </p>
      </div>
    </section>
  );
};

export default ServicioBombeo;
