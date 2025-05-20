import React from "react";
import { FaWater, FaTools, FaSearchLocation, FaPumpSoap, FaFileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaWater className="text-3xl text-green-600" />,
    title: "Perforación de Pozos",
    description: "Diseño y ejecución de pozos profundos y semiprofundos adaptados al tipo de terreno.",
  },
  {
    icon: <FaSearchLocation className="text-3xl text-green-600" />,
    title: "Estudios Geológicos",
    description: "Análisis geotécnico e hidrogeológico para asegurar viabilidad técnica y ambiental.",
  },
  {
    icon: <FaTools className="text-3xl text-green-600" />,
    title: "Mantenimiento de Pozos",
    description: "Rehabilitación, limpieza e inspección de pozos para extender su vida útil.",
  },
  {
    icon: <FaPumpSoap className="text-3xl text-green-600" />,
    title: "Sistemas de Bombeo",
    description: "Instalación de sistemas de extracción eficientes, eléctricos o solares.",
  },
  {
    icon: <FaFileAlt className="text-3xl text-green-600" />,
    title: "Licencias y Permisos",
    description: "Asesoría técnica y legal para gestionar licencias ambientales con las autoridades.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20" style={{ backgroundColor: "#5BCCE6FF" }}>

  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Qué servicios ofrecemos?</h2>
    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      En Acuiter brindamos soluciones hídricas integrales para comunidades, empresas y entidades gubernamentales.
    </p>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
{services.map((service) => (
        <div
key={service.title}
          className="bg-white rounded-xl shadow p-6 hover:shadow-md transition"
        >
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold text-green-700 mb-2">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Services;

