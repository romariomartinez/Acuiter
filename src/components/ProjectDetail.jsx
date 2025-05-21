import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const ref = doc(db, "proyectos", id);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setProject(snap.data());
      }
      setLoading(false);
    };

    fetchProject();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Cargando proyecto...</p>;
  if (!project) return <p className="text-center mt-10 text-red-600">Proyecto no encontrado</p>;

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto font-sans">
      <Link
        to="/projects"
        className="text-[#2E2C2CFF] hover:underline mb-6 inline-block text-sm"
      >
        ← Volver a Proyectos
      </Link>

      <h2 className="text-3xl font-extrabold text-[#065384] mb-1">
        {project.title}
      </h2>
      <p className="text-gray-600 mb-4">📍 {project.location}</p>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {project.images && project.images.length > 0 ? (
          project.images.map((url) => (
            <img
              key={url}
              src={url}
              alt="Imagen del proyecto"
              className="w-full h-80 object-cover rounded-xl"
            />
          ))
        ) : (
          <img
            src="/logo.png"
            alt="Sin imágenes"
            className="w-full h-80 object-cover rounded-xl md:col-span-2"
          />
        )}
      </div>

      {/* Descripción */}
      <h3 className="text-4xl font-bold text-[#0090d0] mb-2 text-center">
        Descripción del Proyecto
      </h3>
      <p className="text-gray-700 leading-relaxed mb-10">
        {project.description}
      </p>

      {/* Indicadores */}
      <h3 className="text-2xl font-bold text-[#0090d0] mb-6 text-center">
        Indicadores Técnicos
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-green-600">{project.depth}</p>
          <p className="text-sm text-gray-600">Profundidad</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-600">{project.caudal}</p>
          <p className="text-sm text-gray-600">Caudal promedio</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-600">
            {project.beneficiarios}
          </p>
          <p className="text-sm text-gray-600">Beneficiarios</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-600">{project.co2}</p>
          <p className="text-sm text-gray-600">CO₂ evitado</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
