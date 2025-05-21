import React, { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});

  const [imageUploadProjectId, setImageUploadProjectId] = useState(null);
  const [newImages, setNewImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsub();
  }, [navigate]);

  const fetchProjects = async () => {
    const querySnapshot = await getDocs(collection(db, "proyectos"));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este proyecto?")) {
      await deleteDoc(doc(db, "proyectos", id));
      fetchProjects();
    }
  };

  const handleEdit = (project) => {
    setEditing(project.id);
    setForm(project);
  };

  const handleUpdate = async () => {
    try {
      const docRef = doc(db, "proyectos", editing);
      const updatedData = { ...form };
      delete updatedData.id;
      await updateDoc(docRef, updatedData);
      setEditing(null);
      fetchProjects();
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("Error al actualizar: " + (error.message || error));
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    const uploadedUrls = [];
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
      uploadedUrls.push(data.secure_url);
    }

    setNewImages(uploadedUrls);
    setUploading(false);
  };

  const handleSaveImages = async () => {
    try {
      const docRef = doc(db, "proyectos", imageUploadProjectId);
      const currentData = (await getDoc(docRef)).data();
      const existingImages = currentData.images || [];
      const updatedImages = [...existingImages, ...newImages];

      await updateDoc(docRef, { images: updatedImages });
      alert("Imágenes actualizadas correctamente");
      setImageUploadProjectId(null);
      setNewImages([]);
      fetchProjects();
    } catch (error) {
      console.error("Error al actualizar imágenes:", error);
      alert("Error al actualizar imágenes");
    }
  };

  const handleDeleteImage = async (imageUrl) => {
    try {
      const docRef = doc(db, "proyectos", imageUploadProjectId);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) return;

      const currentImages = docSnap.data().images || [];
      const updatedImages = currentImages.filter((url) => url !== imageUrl);

      await updateDoc(docRef, { images: updatedImages });
      alert("Imagen eliminada correctamente");
      fetchProjects();
    } catch (err) {
      console.error("Error eliminando imagen:", err);
      alert("Error al eliminar la imagen");
    }
  };

  const campos = [
  { name: "title", label: "📝 Título del pozo" },
  { name: "location", label: "📍 Ubicación" },
  { name: "depth", label: "💧 Profundidad (ej: 60 metros)" },
  { name: "terrain", label: "🧱 Tipo de terreno" },
  { name: "status", label: "⚙️ Estado (ej: Operativo)" },
  { name: "caudal", label: "💧 Caudal (ej: 6 Lts/s)" },
  { name: "beneficiarios", label: "👥 Beneficiarios" },
  { name: "co2", label: "🌱 CO₂ evitado (ej: 8 toneladas)" },
  { name: "description", label: "📄 Descripción del proyecto" },
];


  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold text-[#065384] mb-4">
          Bienvenido al Panel de Administración
        </h1>

        {user && (
          <p className="mb-6 text-gray-700">
            Sesión iniciada como: <strong>{user.email}</strong>
          </p>
        )}

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/create-project")}
            className="bg-[#029CBF] hover:bg-[#027ea3] text-white px-6 py-3 rounded shadow transition"
          >
            + Nuevo Proyecto
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded shadow transition"
          >
            Cerrar Sesión
          </button>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Tus Proyectos
          </h2>

          {projects.length === 0 ? (
            <p className="text-gray-500">Aún no hay proyectos registrados.</p>
          ) : (
            <ul className="space-y-4">
              {projects.map((project) =>
                editing === project.id ? (
                  <li
                    key={project.id}
                    className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm space-y-2"
                  >
                    {campos.map(({ name, label }) => (
                      <div key={name}>
                        <label className="text-sm font-semibold text-gray-700 mb-1 block">{label}</label>
                        {name === "description" ? (
                          <textarea
                            name={name}
                            value={form[name] || ""}
                            onChange={handleChange}
                            placeholder={label}
                            rows={3}
                            className="w-full border px-2 py-1 rounded"
                          />
                        ) : (
                          <input
                            type="text"
                            name={name}
                            value={form[name] || ""}
                            onChange={handleChange}
                            placeholder={label}
                            className="w-full border px-2 py-1 rounded"
                          />
                        )}
                      </div>
                    ))}

                    <div className="flex gap-2 mt-2">
                      <button
  onClick={handleUpdate}
  className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition"
>
  💾 Guardar Cambios
</button>

                      <button
  onClick={() => setEditing(null)}
  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-400 transition"
>
  ❌ Cancelar
</button>

                    </div>
                  </li>
                ) : (
                  <li
                    key={project.id}
                    className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-[#029CBF]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600">📍 {project.location}</p>
                    <p className="text-sm text-gray-600">💧 {project.depth}</p>
                    <p className="text-sm text-gray-600">🧱 {project.terrain}</p>
                    <p className="text-sm text-gray-600">⚙️ {project.status}</p>
                    <p className="text-sm text-gray-600">💧 {project.caudal}</p>
                    <p className="text-sm text-gray-600">👥 {project.beneficiarios}</p>
                    <p className="text-sm text-gray-600">🌱 {project.co2}</p>
                    <p className="text-sm text-gray-600 mt-2 italic">📝 {project.description}</p>

                    <div className="flex gap-2 mt-2">
                      <button
    onClick={() => handleEdit(project)}
    className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
  >
    ✏️ Editar
  </button>

  <button
    onClick={() => handleDelete(project.id)}
    className="bg-red-600 text-white px-4 py-2 rounded-md shadow hover:bg-red-700 transition"
  >
    🗑️ Eliminar
  </button>

  <button
    onClick={() => setImageUploadProjectId(project.id)}
    className="bg-[#11B5C8FF] text-white px-4 py-2 rounded-md shadow hover:bg-[#7BBF00] transition"
  >
    🖼️ Editar Imágenes
  </button>
                    </div>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>

      {imageUploadProjectId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-y-auto">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-2xl">
            <h2 className="text-xl font-bold text-[#065384] mb-4">Editar Imágenes del Proyecto</h2>

            <h3 className="text-md font-semibold text-gray-800 mb-2">Imágenes actuales</h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {projects.find((p) => p.id === imageUploadProjectId)?.images?.map((url, i) => (
                <div key={url} className="relative">
                  <img src={url} alt={`actual-${i}`} className="w-24 h-24 object-cover rounded" />
                  <button
                    onClick={() => handleDeleteImage(url)}
                    className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1 rounded"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <h3 className="text-md font-semibold text-gray-800 mb-2">Subir nuevas imágenes</h3>
            <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
            {uploading && <p className="text-blue-600 mt-2">Subiendo imágenes...</p>}

            {newImages.length > 0 && (
              <div className="flex flex-wrap mt-4 gap-3">
                {newImages.map((url, i) => (
                  <img key={url} src={url} alt={`nueva-${i}`} className="w-24 h-24 object-cover rounded" />
                ))}
              </div>
            )}

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => {
                  setImageUploadProjectId(null);
                  setNewImages([]);
                }}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleSaveImages}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Guardar Nuevas Imágenes
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;