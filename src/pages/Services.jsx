// ✅ Sistema SPA con rutas internas (sin recarga de página)
// 📁 src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaWater,
  FaSearchLocation,
  FaTools,
  FaPumpSoap,
  FaFileAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaWater className="text-4xl text-[#25C0DA]" />,
    title: "Perforación de pozos profundos",
    description: "Ejecutamos perforaciones de pozos profundos y semiprofundos con tecnología especializada, adaptándonos a las características geológicas del terreno.",
    path: "/servicios/perforacion-pozos",
  },
  {
    icon: <FaSearchLocation className="text-4xl text-[#25C0DA]" />,
    title: "Estudios hidrogeológicos",
    description: "Realizamos estudios hidrogeológicos detallados para identificar, evaluar y garantizar el aprovechamiento sostenible de fuentes subterráneas.",
    path: "/servicios/estudios-geologicos",
  },
  {
    icon: <FaTools className="text-4xl text-[#25C0DA]" />,
    title: "Mantenimiento de pozos",
    description: "Ofrecemos limpieza, rehabilitación e inspección técnica de pozos para optimizar su rendimiento y prolongar su vida útil.",
    path: "/servicios/mantenimiento-pozos",
  },
  {
    icon: <FaPumpSoap className="text-4xl text-[#25C0DA]" />,
    title: "Pruebas de bombeos",
    description: "Ejecutamos pruebas de bombeo con equipos eléctricos o solares para determinar el caudal, rendimiento y comportamiento del acuífero.",
    path: "/servicios/sistemas-bombeo",
  },
  {
    icon: <FaFileAlt className="text-4xl text-[#25C0DA]" />,
    title: "Trámites y permisos de concesión de aguas subterráneas",
    description: "Brindamos acompañamiento técnico y jurídico para la obtención de permisos, licencias y concesiones de uso de aguas subterráneas ante entidades ambientales.",
    path: "/servicios/licencias-permisos",
  },
];
const Services = () => {
  return (
    <section
      id="servicios"
      className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-r from-[#065384] to-[#25C0DA]"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
          ¿Qué servicios ofrecemos?
        </h2>
        <p className="text-white/90 mb-12 max-w-2xl mx-auto text-sm md:text-base">
          En Acuiter brindamos soluciones hídricas integrales...
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.path}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#065384] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {service.description}
              </p>
              <div className="w-full text-right">
                <p className="text-sm font-semibold text-[#065384] hover:underline">
                  Leer más →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
