import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import defaultImage from "../assets/Logo1.jpg";
import { Link, useNavigate } from "react-router-dom";

mapboxgl.accessToken = "pk.eyJ1Ijoicm9tYXJpb21hcnRpaW5leiIsImEiOiJjbWFwemgzM3AwMmlhMm1vZGFqaTNtYXU2In0.YwA4VTYEx9gNEM5aqsjQoA";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const mapContainer = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "proyectos"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(data);
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects.length === 0) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      zoom: 7,
      center: [-73.0, 10.5],
    });

    const bounds = new mapboxgl.LngLatBounds();
    let hasValidCoordinates = false;

    projects.forEach((project) => {
      const coords = project.coordinates;

      if (
        !coords ||
        !Array.isArray(coords) ||
        coords.length !== 2 ||
        typeof coords[0] !== "number" ||
        typeof coords[1] !== "number"
      ) {
        console.warn("Coordenadas inválidas para el proyecto:", project.title, coords);
        return;
      }

      hasValidCoordinates = true;

      const el = document.createElement("div");
      const imageUrl = project.image || defaultImage;
      el.style.backgroundImage = `url(${imageUrl})`;
      el.style.backgroundColor = "white";
      el.style.backgroundSize = "cover";
      el.style.borderRadius = "50%";
      el.style.border = "2px solid white";
      el.style.width = "40px";
      el.style.height = "40px";
      el.style.boxShadow = "0 0 6px rgba(0,0,0,0.4)";

      el.addEventListener("click", () => {
        navigate(`/projects/${project.id}`);
      });

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div style="font-family:sans-serif; width:220px;">
          <img src="${imageUrl}" alt="${project.title}" style="width:100%; height:100px; object-fit:cover; border-radius:8px;" />
          <div style="padding: 8px;">
            <h3 style="margin: 0 0 4px 0; font-size: 16px; color: #065384;">${project.title}</h3>
            <p style="margin: 2px 0; font-size: 13px;">📍 <strong>${project.location || "No definida"}</strong></p>
            <p style="margin: 2px 0; font-size: 13px;">💧 ${project.depth || "Sin dato"}</p>
            <p style="margin: 2px 0; font-size: 13px;">🧱 ${project.terrain || "Sin dato"}</p>
            <span style="background: #16A34A; color: white; font-size: 12px; padding: 2px 8px; border-radius: 20px;">
              ${project.status || "Activo"}
            </span>
          </div>
        </div>
      `);

      new mapboxgl.Marker({ element: el })
        .setLngLat(coords)
        .setPopup(popup)
        .addTo(map);

      bounds.extend(coords);
    });

    if (hasValidCoordinates) {
      map.fitBounds(bounds, { padding: 50, maxZoom: 13, duration: 1000 });
    } else {
      console.warn("No hay coordenadas válidas para ajustar el mapa.");
    }
  }, [projects, navigate]);

  return (
    <section
      className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-t from-[#87868691]  to-[#ffffffe6]"
      //style={{ backgroundImage: `url(${fondo})` }}
    >
      <h2 className="text-4xl font-bold text-center text-[#065384] mb-10 mt-8">
        Nuestros Proyectos
      </h2>

      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-5 border border-gray-300">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 max-h-[500px] overflow-y-auto space-y-4 pr-2">
            {projects.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                className="flex bg-white rounded-xl shadow-md border p-5 items-center gap-6 hover:bg-gray-50 transition"
              >
                <img
                  src={p.images?.[0] || defaultImage}
                  alt={p.title}
                  className="w-32 h-32 object-cover rounded-lg border border-gray-200"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultImage;
                  }}
                />

                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-[#065384] mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-700">📍 {p.location}</p>
                  <p className="text-sm text-gray-700">💧 {p.depth}</p>
                  <p className="text-sm text-gray-700">🧱 {p.terrain}</p>
                  <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full text-white bg-green-600 w-fit">
                    {p.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex-1 h-[500px] rounded-lg overflow-hidden shadow border border-gray-200">
            <div ref={mapContainer} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
