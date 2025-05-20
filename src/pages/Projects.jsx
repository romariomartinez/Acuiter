import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

import logo2 from "../assets/Logo1.jpg"
import fondo from "../assets/fondop.jpg"

mapboxgl.accessToken = "pk.eyJ1Ijoicm9tYXJpb21hcnRpaW5leiIsImEiOiJjbWFwemgzM3AwMmlhMm1vZGFqaTNtYXU2In0.YwA4VTYEx9gNEM5aqsjQoA";


const projects = [
  {
    id: "001",
    title: "Pozo Fonseca ",
    city: "Fonseca, La Guajira",
    depth: "60 metros",
    terrain: "Arenoso",
    status: "Operativo",
    coordinates: [-72.79778, 10.82966],
    image: logo2,
  },
  {
    id: "002",
    title: "Pozo Villanueva ",
    city: "Villanueva, La Guajira",
    depth: "75 metros",
    terrain: "Arcilloso",
    status: "Operativo",
    coordinates: [-72.98000, 10.60528],
    image: logo2,
  },
  {
    id: "003",
    title: "Pozo Distracción ",
    city: "Distracción, La Guajira",
    depth: "90 metros",
    terrain: "Mixto",
    status: "Operativo",
    coordinates: [-72.88666, 10.89784],
    image: logo2,
  },
  {
    id: "004",
    title: "Pozo San Juan del Cesar",
    city: "San Juan del Cesar, La Guajira",
    depth: "80 metros",
    terrain: "Pedregoso",
    status: "Operativo",
    coordinates: [-73.00833, 10.77361],
    image: logo2,
  },
  {
    id: "005",
    title: "Pozo Barrancas ",
    city: "Barrancas, La Guajira",
    depth: "70 metros",
    terrain: "Arenoso",
    status: "Operativo",
    coordinates: [-72.69115, 10.97180],
    image: logo2,
  },
  {
    id: "006",
    title: "Pozo La Victoria",
    city: "Uribia, La Guajira",
    depth: "80 metros",
    terrain: "Arenoso",
    status: "Operativo",
    coordinates: [-72.2658, 11.7139],
    image: logo2,
  },
  {
    id: "007",
    title: "Pozo  Valledupar",
    city: "Valledupar, Cesar",
    depth: "85 metros",
    terrain: "Mixto",
    status: "Operativo",
    coordinates: [-73.25322, 10.46314],
    image: logo2,
  },
  {
    id: "008",
    title: "Pozo Guacoche",
    city: "Guacoche, Valledupar, Cesar",
    depth: "70 metros",
    terrain: "Arcilloso",
    status: "Operativo",
    coordinates: [-73.16554, 10.49654],
    image: logo2,
  },
  {
    id: "009",
    title: "Pozo La Paz",
    city: "La Paz, Cesar",
    depth: "90 metros",
    terrain: "Pedregoso",
    status: "Operativo",
    coordinates: [-73.17332, 10.38439],
    image: logo2,
  },
  {
    id: "010",
    title: "Pozo San Diego",
    city: "San Diego, Cesar",
    depth: "80 metros",
    terrain: "Mixto",
    status: "Operativo",
    coordinates: [-73.18100, 10.33600],
    image: logo2,
  },
  {
    id: "011",
    title: "Pozo Codazzi ",
    city: "Agustín Codazzi, Cesar",
    depth: "85 metros",
    terrain: "Arenoso",
    status: "Operativo",
    coordinates: [-73.23558, 10.03672],
    image: logo2,
  },
  {
    id: "012",
    title: "Pozo Becerril",
    city: "Becerril, Cesar",
    depth: "90 metros",
    terrain: "Arcilloso",
    status: "Operativo",
    coordinates: [-73.27880, 9.70368],
    image: logo2,
  },
  {
    id: "013",
    title: "Pozo Chiriguaná ",
    city: "Chiriguaná, Cesar",
    depth: "95 metros",
    terrain: "Pedregoso",
    status: "Operativo",
    coordinates: [-73.61700, 9.36700],
    image: logo2,
  },
  {
    id: "014",
    title: "Pozo Chimichagua",
    city: "Chimichagua, Cesar",
    depth: "88 metros",
    terrain: "Mixto",
    status: "Operativo",
    coordinates: [-73.81288, 9.25714],
    image: logo2,
  },
  {
    id: "015",
    title: "Pozo Los Calabazos",
    city: "Vereda Los Calabazos, Cesar",
    depth: "60 metros",
    terrain: "Arenoso",
    status: "Operativo",
    coordinates: [-73.28333, 10.25000],
    image: logo2,
  },
  {
    id: "016",
    title: "Pozo Astrea",
    city: "Astrea, Cesar",
    depth: "82 metros",
    terrain: "Arcilloso",
    status: "Operativo",
    coordinates: [-73.96667, 9.50000],
    image: logo2,
  }
];

const Projects = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      zoom: 7,
    });

    const bounds = new mapboxgl.LngLatBounds();

    projects.forEach((project) => {
      const el = document.createElement("div");
      el.style.backgroundImage = `url(${project.image})`;
      el.style.backgroundColor = "white";
      el.style.backgroundPosition = "center";
      el.style.backgroundSize = "cover";
      el.style.width = "40px";
      el.style.height = "40px";
      el.style.borderRadius = "50%";
      el.style.border = "2px solid white";
      el.style.boxShadow = "0 0 6px rgba(0,0,0,0.4)";

      let statusColor;
      if (project.status === "Operativo") {
        statusColor = "#4caf50";
      } else if (project.status === "Mantenimiento") {
        statusColor = "#ff9800";
      } else {
        statusColor = "#2196f3";
      }

      const popupContent = `
        <div style="font-family: sans-serif; width: 200px;">
          <img src="${project.image}" alt="${project.title}" style="width:100%; height: 120px; object-fit: cover; border-radius: 10px 10px 0 0;" />
          <div style="padding: 10px;">
            <h3 style="margin: 0 0 4px 0; font-weight: bold; color: #007bff; font-size: 16px;">${project.id} - ${project.title}</h3>
            <p style="margin: 0; font-size: 13px;">📍 ${project.city}</p>
            <p style="margin: 2px 0; font-size: 13px;">💧 Profundidad: ${project.depth}</p>
            <p style="margin: 2px 0 10px 0; font-size: 13px;">🧱 Terreno: ${project.terrain}</p>
            <span style="background: ${
              statusColor
            }; color: white; padding: 3px 8px; font-size: 12px; border-radius: 20px;">
              ${project.status}
            </span>
          </div>
        </div>
      `;

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupContent);

      new mapboxgl.Marker({ element: el, anchor: "center" })
        .setLngLat(project.coordinates)
        .setPopup(popup)
        .addTo(map);

      bounds.extend(project.coordinates);
    });

    map.fitBounds(bounds, { padding: 50, maxZoom: 13, duration: 1000 });
  }, []);

  return (
    <section
  className="px-6 py-16 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${fondo})` }}
>

  <h2 className="text-4xl font-bold text-center text-[#065384] mb-10">
    Nuestros Proyectos 
  </h2>

  <div className="max-w-7xl mx-auto bg-[#FFFFFF] rounded-2xl shadow-lg p-6 border" style={{ borderColor: "#E5E7EB" }}>
    <div className="flex flex-col md:flex-row gap-6">

      {/* Lista lateral */}
      <div className="flex-1 max-h-[500px] overflow-y-auto space-y-4 pr-2">
        {projects.map((p) => {
          let statusColor = "";
          if (p.status === "Operativo") {
            statusColor = "#16A34A"; // verde
          } else if (p.status === "Mantenimiento") {
            statusColor = "#F59E0B"; // amarillo
          } else {
            statusColor = "#3B82F6"; // azul
          }
          return (
            <div key={p.id} className="flex bg-[#FFFFFF] rounded-lg shadow border p-3 items-center gap-4" style={{ borderColor: "#E5E7EB" }}>
              <img src={p.image} alt={p.title} className="w-20 h-20 object-contain" />
              <div>
                <h3 className="text-md font-semibold" style={{ color: "#065384" }}>
                  {p.id} - {p.title}
                </h3>
                <p className="text-sm text-[#000000FF]">📍 {p.city}</p>
                <p className="text-sm text-[#000000FF]">💧 Profundidad: {p.depth}</p>
                <p className="text-sm text-[#000000FF]">🧱 Terreno: {p.terrain}</p>
                <span
                  className="inline-block mt-1 px-2 py-1 text-xs rounded-full text-white"
                  style={{ backgroundColor: statusColor }}
                >
                  {p.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mapa */}
      <div className="flex-1 h-[500px] rounded-lg overflow-hidden shadow border" style={{ borderColor: "#E5E7EB" }}>
        <div ref={mapContainer} className="w-full h-full" />
      </div>

    </div>
  </div>
</section>

  );
};

export default Projects;
