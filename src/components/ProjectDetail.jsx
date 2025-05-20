import React from "react";
import { useParams, Link } from "react-router-dom";


import pozo1a from "../assets/equipo1.jpg";
import pozo1b from "../assets/equipo2.jpg";
import pozo1c from "../assets/home.jpg";
import pozo1d from "../assets/hero.jpg";
import pozo1e from "../assets/fondo.jpg";
// Reuse pozo1a for all image references since they are the same file

const projectData = {
 "001": {
  id: "001",
  title: "Pozo Profundo Fonseca",
  location: "Fonseca, La Guajira",
  depth: "60 metros",
  terrain: "Arenoso",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de Fonseca como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 60 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, pozo1b, pozo1c,pozo1d,pozo1e ],
  metrics: {
    caudal: "5.5 L/s",
  images: [pozo1a,],
    profundidad: "60 m",
    co2: "1200 kg",
  },
},

"002": {
  id: "002",
  title: "Pozo Profundo Villanueva",
  location: "Villanueva, La Guajira",
  depth: "75 metros",
  terrain: "Arcilloso",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de Villanueva como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 75 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, ],
  metrics: {
    caudal: "6 L/s",
    beneficiarios: "520 personas",
    profundidad: "75 m",
    co2: "1215 kg",
  },
},

"003": {
  id: "003",
  title: "Pozo Profundo Distracción",
  location: "Distracción, La Guajira",
  depth: "90 metros",
  terrain: "Mixto",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de Distracción como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 90 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, ],
  metrics: {
    caudal: "6.5 L/s",
    beneficiarios: "540 personas",
    profundidad: "90 m",
    co2: "1230 kg",
  },
},

"004": {
  id: "004",
  title: "Pozo Profundo San Juan del Cesar",
  location: "San Juan del Cesar, La Guajira",
  depth: "80 metros",
  terrain: "Pedregoso",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de San Juan del Cesar como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 80 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, ],
  metrics: {
    caudal: "5.2 L/s",
    beneficiarios: "510 personas",
    profundidad: "80 m",
    co2: "1245 kg",
  },
},

"005": {
  id: "005",
  title: "Pozo Profundo Barrancas",
  location: "Barrancas, La Guajira",
  depth: "70 metros",
  terrain: "Arenoso",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de Barrancas como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 70 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, ],
  metrics: {
    caudal: "4.9 L/s",
    beneficiarios: "480 personas",
    profundidad: "70 m",
    co2: "1260 kg",
  },
},

"006": {
  id: "006",
  title: "Pozo Profundo Uribia",
  location: "Uribia, La Guajira",
  depth: "80 metros",
  terrain: "Arenoso",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de Uribia como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 80 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, ],
  metrics: {
    caudal: "5.8 L/s",
    beneficiarios: "530 personas",
    profundidad: "80 m",
    co2: "1275 kg",
  },
},

"007": {
  id: "007",
  title: "Pozo Profundo Valledupar",
  location: "Valledupar, Cesar",
  depth: "85 metros",
  terrain: "Mixto",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de Valledupar como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 85 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, ],
  metrics: {
    caudal: "6.2 L/s",
    beneficiarios: "550 personas",
    profundidad: "85 m",
    co2: "1290 kg",
  },
},

"008": {
  id: "008",
  title: "Pozo Profundo Guacoche",
  location: "Guacoche, Cesar",
  depth: "70 metros",
  terrain: "Arcilloso",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de Guacoche como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 70 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, ],
  metrics: {
    caudal: "4.5 L/s",
    beneficiarios: "460 personas",
    profundidad: "70 m",
    co2: "1305 kg",
  },
},

"009": {
  id: "009",
  title: "Pozo Profundo La Paz",
  location: "La Paz, Cesar",
  depth: "90 metros",
  terrain: "Pedregoso",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de La Paz como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 90 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, ],
  metrics: {
    caudal: "6.1 L/s",
    beneficiarios: "570 personas",
    profundidad: "90 m",
    co2: "1320 kg",
  },
},

"010": {
  id: "010",
  title: "Pozo Profundo San Diego",
  location: "San Diego, Cesar",
  depth: "80 metros",
  terrain: "Mixto",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de San Diego como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 80 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, ],
  metrics: {
    caudal: "5.7 L/s",
    beneficiarios: "525 personas",
    profundidad: "80 m",
    co2: "1335 kg",
  },
},

"011": {
  id: "011",
  title: "Pozo Profundo Agustín Codazzi",
  location: "Agustín Codazzi, Cesar",
  depth: "85 metros",
  terrain: "Arenoso",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de Agustín Codazzi como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 85 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, ],
  metrics: {
    caudal: "6 L/s",
    beneficiarios: "540 personas",
    profundidad: "85 m",
    co2: "1350 kg",
  },
},

"012": {
  id: "012",
  title: "Pozo Profundo Becerril",
  location: "Becerril, Cesar",
  depth: "90 metros",
  terrain: "Arcilloso",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de Becerril como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 90 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, ],
  metrics: {
    caudal: "5.3 L/s",
    beneficiarios: "495 personas",
    profundidad: "90 m",
    co2: "1365 kg",
  },
},

"013": {
  id: "013",
  title: "Pozo Profundo Chiriguaná",
  location: "Chiriguaná, Cesar",
  depth: "95 metros",
  terrain: "Pedregoso",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de Chiriguaná como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 95 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, ],
  metrics: {
    caudal: "5.6 L/s",
    beneficiarios: "510 personas",
    profundidad: "95 m",
    co2: "1380 kg",
  },
},

"014": {
  id: "014",
  title: "Pozo Profundo Chimichagua",
  location: "Chimichagua, Cesar",
  depth: "88 metros",
  terrain: "Mixto",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de Chimichagua como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 88 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a,],
  metrics: {
    caudal: "6.3 L/s",
    beneficiarios: "565 personas",
    profundidad: "88 m",
    co2: "1395 kg",
  },
},

"015": {
  id: "015",
  title: "Pozo Profundo Los Calabazos",
  location: "Los Calabazos, Cesar",
  depth: "60 metros",
  terrain: "Arenoso",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de Los Calabazos como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 60 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, ],
  metrics: {
    caudal: "5.1 L/s",
    beneficiarios: "475 personas",
    profundidad: "60 m",
    co2: "1410 kg",
  },
},

"016": {
  id: "016",
  title: "Pozo Profundo Astrea",
  location: "Astrea, Cesar",
  depth: "82 metros",
  terrain: "Arcilloso",
  status: "Operativo",
  description:
    "Este pozo fue perforado en el año 2024 en el municipio de Astrea como parte del programa de expansión de abastecimiento hídrico en comunidades rurales. Gracias al estudio hidrogeológico previo y a la tecnología de perforación rotativa, se alcanzó una profundidad de 82 metros, garantizando un caudal estable para consumo humano y agrícola.",
  images: [pozo1a, ],
  metrics: {
    caudal: "5.9 L/s",
    beneficiarios: "505 personas",
    profundidad: "82 m",
    co2: "1425 kg",
  },
},
  // Puedes agregar más proyectos aquí
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <div className="p-6 text-red-600">Proyecto no encontrado</div>;

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto font-sans">
      <Link to="/projects" className="text-[#2E2C2CFF] hover:underline mb-6 inline-block text-sm">
        ← Volver a Proyectos
      </Link>

      <h2 className="text-3xl font-extrabold text-[#065384] mb-1">
        {project.title}
      </h2>
      <p className="text-gray-600 mb-4">📍 {project.location}</p>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <img src={project.images[0]} alt="principal" className="w-full h-80 object-cover rounded-xl md:col-span-2" />
        {project.images.slice(1).map((img) => (
          <img key={img} src={img} alt={`img-${img}`} className="w-full h-48 object-cover rounded-xl" />
        ))}
      </div>

      {/* Descripción */}
      <h3 className="text-4xl font-bold text-[#0090d0] mb-2 text-center">Descripción del Proyecto</h3>
      <p className="text-gray-700 leading-relaxed mb-10">{project.description}</p>

      {/* Indicadores */}
      <h3 className="text-2xl font-bold text-[#0090d0] mb-6">Indicadores Técnicos</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-green-600">{project.metrics.profundidad}</p>
          <p className="text-sm text-gray-600">Profundidad</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-600">{project.metrics.caudal}</p>
          <p className="text-sm text-gray-600">Caudal promedio</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-600">{project.metrics.beneficiarios}</p>
          <p className="text-sm text-gray-600">Beneficiarios</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-600">{project.metrics.co2}</p>
          <p className="text-sm text-gray-600">CO₂ evitado</p>
        </div>
      </div>

    
      
    </section>
  );
};

export default ProjectDetail;
