import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import WhatsappButton from "./components/WhatsappButton";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Login from "./admin/Login";
import CreateProject from "./admin/CreateProject";
import Dashboard from "./admin/Dashboard";
import ProjectDetail from "./components/ProjectDetail";


// servicios
import ServicioPozos from "./pages/servicios/ServicioPozos";
import ServicioGeologicos from "./pages/servicios/ServicioGeologicos";
import ServicioMantenimiento from "./pages/servicios/ServicioMantenimiento";
import ServicioBombeo from "./pages/servicios/ServicioBombeo";
import ServicioLicencias from "./pages/servicios/ServicioLicencias";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const handleSplashComplete = () => {
    setIsLoading(false);
  };

  const isHome = location.pathname === "/";

  if (isHome && isLoading) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="bg-white text-black font-sans min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/projects/:id" element={<ProjectDetail />} />

        {/* Rutas de servicios */}
        <Route path="/servicios/perforacion-pozos" element={<ServicioPozos />} />
        <Route path="/servicios/estudios-geologicos" element={<ServicioGeologicos />} />
        <Route path="/servicios/mantenimiento-pozos" element={<ServicioMantenimiento />} />
        <Route path="/servicios/sistemas-bombeo" element={<ServicioBombeo />} />
        <Route path="/servicios/licencias-permisos" element={<ServicioLicencias />} />
      </Routes>
      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
