import React from "react";
import { FaWater } from "react-icons/fa";

const ServicioPozos = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <FaWater className="text-4xl text-[#029CBF]" />
          <h1 className="text-3xl font-bold text-[#065384]">Perforación de Pozos</h1>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">
          Nuestra empresa cuenta con amplia experiencia en la perforación de pozos profundos y semiprofundos. Adaptamos cada proyecto al tipo de terreno y necesidades específicas de nuestros clientes, asegurando la sostenibilidad y calidad del suministro de agua.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Utilizamos maquinaria moderna y personal altamente capacitado para garantizar una ejecución eficiente y segura. Realizamos estudios previos del terreno para definir la profundidad y el tipo de perforación más adecuado, cumpliendo con todas las normativas técnicas y ambientales vigentes.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Ya sea para uso agrícola, industrial o comunitario, nuestros pozos están diseñados para ofrecer un caudal constante y confiable a largo plazo.
        </p>
      </div>
    </section>
  );
};

export default ServicioPozos;
