import React from "react";
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
    title: "Perforación de Pozos",
    description: "Diseño y ejecución de pozos profundos y semiprofundos adaptados al tipo de terreno.",
    path: "/servicios/perforacion-pozos",
  },
  {
    icon: <FaSearchLocation className="text-4xl text-[#25C0DA]" />,
    title: "Estudios Geológicos",
    description: "Análisis geotécnico e hidrogeológico para asegurar viabilidad técnica y ambiental.",
    path: "/servicios/estudios-geologicos",
  },
  {
    icon: <FaTools className="text-4xl text-[#25C0DA]" />,
    title: "Mantenimiento de Pozos",
    description: "Rehabilitación, limpieza e inspección de pozos para extender su vida útil.",
    path: "/servicios/mantenimiento-pozos",
  },
  {
    icon: <FaPumpSoap className="text-4xl text-[#25C0DA]" />,
    title: "Sistemas de Bombeo",
    description: "Instalación de sistemas de extracción eficientes, eléctricos o solares.",
    path: "/servicios/sistemas-bombeo",
  },
  {
    icon: <FaFileAlt className="text-4xl text-[#25C0DA]" />,
    title: "Licencias y Permisos",
    description: "Asesoría técnica y legal para gestionar licencias ambientales con las autoridades.",
    path: "/servicios/licencias-permisos",
  },
];

const Services = () => {
  return (
    <section
      id="servicios"
      className="py-20 px-4 sm:px-6 md:px-10"
      style={{ backgroundColor: "#065384" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ¿Qué servicios ofrecemos?
        </h2>
        <p className="text-white/90 mb-12 max-w-2xl mx-auto text-sm md:text-base">
          En Acuiter brindamos soluciones hídricas integrales para comunidades, empresas y entidades gubernamentales. Nuestro enfoque está en la perforación responsable, sostenible y eficiente de pozos profundos.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.path}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#065384] mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{service.description}</p>
              <p className="text-sm font-semibold text-[#7BBF00] hover:underline">
    Leer más →
  </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
