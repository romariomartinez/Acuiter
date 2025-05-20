import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/home.jpg";
import Services from "./Services";
import { Link as ScrollLink } from "react-scroll";
import SatisfactionSection from "../components/SatisfactionSection";
import AboutExperience from "../components/AboutExperience";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      {/* Sección Hero */}
      <section
  className="relative bg-cover bg-center min-h-[90vh] flex items-center px-6"
  style={{ backgroundImage: `url(${hero})` }}
>
  {/* Fondo general translúcido para oscurecer un poco la imagen */}
  <div className="absolute inset-0 bg-white bg-opacity-30"></div>

  {/* Contenedor izquierdo más grande con degradado azul Acuiter */}
  <motion.div
  className="relative z-10 text-left text-black max-w-2xl w-full bg-gradient-to-r from-[#87C4CBFF]/50 to-[#F2F5F6]/60 p-10 rounded-2xl shadow-xl"
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 3 }}
>
  <p className="text-sm uppercase tracking-widest text-black mb-2 text-center">
    Exploramos el agua del futuro 💧
  </p>
  <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center text-[#065384] drop-shadow-md">
    Hidrogeol S.A.S
  </h1>
  <p className="text-lg text-[#000607FF] mb-6 text-center">
    Empresa especializada en la exploración de aguas subterráneas
  </p>

    <div className="text-center mt-6">
  <ScrollLink
    to="servicios"
    smooth={true}
    duration={600}
    offset={-80}
    className="inline-block bg-white text-[#065384] font-bold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition cursor-pointer"
  >
    Nuestros Servicios
  </ScrollLink>
</div>

  </motion.div>
</section>

      {/* Sección de Satisfacción */}
      <SatisfactionSection />
      <AboutExperience />
      {/* ✅ Sección de Servicios */}
      <Services />
      <Contact />
    </>
  );
};

export default Home;
