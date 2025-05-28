import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fade, setFade] = useState(true);

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

  const openImage = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    if (project?.images?.length) {
      setFade(false);
      setTimeout(() => {
        setSelectedIndex((selectedIndex + 1) % project.images.length);
        setFade(true);
      }, 150);
    }
  };

  const prevImage = () => {
    if (project?.images?.length) {
      setFade(false);
      setTimeout(() => {
        setSelectedIndex((selectedIndex - 1 + project.images.length) % project.images.length);
        setFade(true);
      }, 150);
    }
  };

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

      {/* Galería estilo masonry responsive */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mb-10">
        {project.images && project.images.length > 0 ? (
          project.images.map((url, i) => (
            <img
              key={url}
              src={url}
              alt="Imagen del proyecto"
              className="w-full rounded-xl cursor-pointer hover:opacity-90 transition break-inside-avoid"
              onClick={() => openImage(i)}
            />
          ))
        ) : (
          <img
            src="/logo.png"
            alt="Sin imágenes"
            className="w-full rounded-xl"
          />
        )}
      </div>

      {/* Modal personalizado */}
      {showModal && project.images && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative max-w-4xl w-full px-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-40 rounded-full px-2"
            >
              ✕
            </button>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-40 rounded-full px-3"
            >
              ‹
            </button>
            <div
              className={`transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={project.images[selectedIndex]}
                alt="Vista ampliada"
                className="w-full max-h-[90vh] object-contain rounded-xl"
              />
              <p className="text-white text-sm text-center mt-2">
                {selectedIndex + 1} / {project.images.length}
              </p>
            </div>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-40 rounded-full px-3"
            >
              ›
            </button>
          </div>
        </div>
      )}

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
          <p className="text-3xl font-bold text-green-600">{project.beneficiarios}</p>
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