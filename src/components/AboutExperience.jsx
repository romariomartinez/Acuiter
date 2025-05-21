import React from "react";
import CountUp from "react-countup";
import equipoImg from "../assets/equipo1.jpg";
import equipoImg1 from "../assets/equipo2.jpg";

const AboutExperience = () => {
  return (
    <section className="bg-[#D1E4E7A2] py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* 📷 Imágenes */}
        <div className="w-full md:w-1/2 flex flex-col sm:flex-row justify-center items-center gap-4">
          <img
            src={equipoImg}
            alt="Equipo"
            className="w-full sm:w-64 rounded-xl shadow-lg object-cover max-w-xs"
          />
          <img
            src={equipoImg1}
            alt="Equipo"
            className="w-full sm:w-64 rounded-xl shadow-lg object-cover max-w-xs"
          />
        </div>

        {/* 📄 Texto + métricas */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            <span className="text-[#25C0DA]">5 Años</span> de experiencia
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Somos una empresa familiar comprometida con el cuidado del medio ambiente, dedicada a proveer soluciones innovadoras para la extracción y manejo de agua subterránea, tratamiento de agua y consultoría en gestión del recurso hídrico.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-8 text-center mb-8">
            <div>
              <p className="text-2xl font-bold text-[#25C0DA]">
                <CountUp end={5} duration={2} />+
              </p>
              <p className="text-sm font-semibold text-gray-800">Años de Experiencia</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#25C0DA]">
                <CountUp end={300} duration={3} />+
              </p>
              <p className="text-sm font-semibold text-gray-800">Clientes Satisfechos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#25C0DA]">
                <CountUp end={300} duration={3} />+
              </p>
              <p className="text-sm font-semibold text-gray-800">Proyectos Exitosos</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <button className="bg-[#029CBF] text-white px-6 py-3 rounded shadow hover:bg-[#027ea3] transition">
              Contáctenos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExperience;
