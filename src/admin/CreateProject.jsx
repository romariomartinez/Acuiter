import React, { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    location: "",
    depth: "",
    terrain: "",
    status: "Operativo",
    description: "",
    latitude: "",
    longitude: "",
    caudal: "",
    beneficiarios: "",
    co2: ""
  });

  const [images, setImages] = useState([]); // Nuevas imágenes
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    const imageUrls = [];
    setUploading(true);

    for (let file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Acuiter");

      const res = await fetch("https://api.cloudinary.com/v1_1/dg8uf4z0f/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      imageUrls.push(data.secure_url);
    }

    setImages(imageUrls);
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.latitude || !form.longitude) {
      alert("Debes ingresar latitud y longitud válidas");
      return;
    }

    const data = {
      ...form,
      coordinates: [parseFloat(form.longitude), parseFloat(form.latitude)],
      images,
    };

    delete data.latitude;
    delete data.longitude;

    try {
      await addDoc(collection(db, "proyectos"), data);
      alert("Proyecto registrado correctamente");
      navigate("/dashboard");
    } catch (err) {
      console.error("Error al subir:", err);
      alert("Error al subir proyecto");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#065384] mb-6 text-center">Registrar Nuevo Proyecto</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="text" name="title" placeholder="Título del pozo" className="w-full border px-4 py-2 rounded" onChange={handleChange} required />
          <input type="text" name="location" placeholder="Ubicación" className="w-full border px-4 py-2 rounded" onChange={handleChange} required />
          <input type="text" name="depth" placeholder="Profundidad (ej: 75 metros)" className="w-full border px-4 py-2 rounded" onChange={handleChange} required />
          <input type="text" name="terrain" placeholder="Tipo de terreno" className="w-full border px-4 py-2 rounded" onChange={handleChange} required />
          <input type="text" name="status" placeholder="Estado (ej: Operativo)" className="w-full border px-4 py-2 rounded" onChange={handleChange} required />
          <input type="text" name="latitude" placeholder="Latitud (ej: 10.49654)" className="w-full border px-4 py-2 rounded" onChange={handleChange} required />
          <input type="text" name="longitude" placeholder="Longitud (ej: -73.16554)" className="w-full border px-4 py-2 rounded" onChange={handleChange} required />
          <textarea name="description" placeholder="Descripción del proyecto" rows="4" className="w-full border px-4 py-2 rounded" onChange={handleChange} required></textarea>

          {/* Indicadores Técnicos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="caudal" className="text-sm font-semibold text-gray-700 mb-1 block">💧 Caudal:</label>
              <input
                id="caudal"
                type="text"
                name="caudal"
                placeholder="Ej: 6 Lts/s"
                className="w-full border px-4 py-2 rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="beneficiarios" className="text-sm font-semibold text-gray-700 mb-1 block">👥 Beneficiarios:</label>
              <input
                id="beneficiarios"
                type="number"
                name="beneficiarios"
                placeholder="Ej: 20"
                className="w-full border px-4 py-2 rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="co2" className="text-sm font-semibold text-gray-700 mb-1 block">🌱 CO₂ evitado:</label>
              <input
                id="co2"
                type="text"
                name="co2"
                placeholder="Ej: 8 toneladas"
                className="w-full border px-4 py-2 rounded"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <input
            type="file"
            accept="image/*"
            multiple
            className="w-full border px-4 py-2 rounded"
            onChange={handleImageUpload}
          />

          {uploading && <p className="text-sm text-blue-600">Subiendo imágenes...</p>}

          <button type="submit" className="w-full bg-[#029CBF] text-white font-bold py-3 rounded hover:bg-[#027ea3] transition">
            Guardar Proyecto
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateProject;