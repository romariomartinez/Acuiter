import React from "react";
import { motion } from "framer-motion";
import imagen from "../assets/IMG_0437.jpg";
import imagen1 from "../assets/equipo1.jpg";
import imagen2 from "../assets/equipo2.jpg";
import imagen3 from "../assets/IMG_5010.jpg";
import imagen4 from "../assets/IMG_5057.jpg";
import fondo from "../assets/fondo2.jpg";





const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Nosotros = () => {
  const secciones = [
    {
      titulo: "¿Quiénes somos?",
      texto:
        "Somos una empresa de consultoría hidrogeológica y ambiental  comprometida con la investigación y la implementación de técnicas para la exploración de los recursos hídricos subterráneos en concordancia con la preservación del medio ambiente, que busca a través de sus servicios aportar al desarrollo sostenible de las comunidades, ayudando a fortalecer proyectos integrales en diversos sectores productivos de la economía colombiana.",
      imagen: imagen,
      posicionTexto: "derecha",
    },
    {
      titulo: "Nuestra Misión",
      texto:
        "Contribuir con el avance de los procesos productivos del campo a través de la implementación de técnicas para la exploración de aguas subterráneas que permiten desarrollar un conocimiento acerca de la obtención de los recursos hídricos subterráneos",
        imagen: imagen1,
      posicionTexto: "izquierda",
    },
    {
      titulo: "Nuestra Visión",
      texto:
        "Ser una empresa líder, reconocida y respetada a nivel nacional por la excelencia en los servicios prestados, su investigación  y por el aporte al bienestar social y económico en el país.",
     imagen: imagen2,
      posicionTexto: "derecha",
    },
    {
      titulo: "Nuestros Valores",
      texto:
        "Compromiso, integridad, sostenibilidad, innovación, trabajo en equipo, responsabilidad y excelencia en el servicio son los pilares que rigen nuestro trabajo y nuestras relaciones con los clientes.",
      imagen: imagen4,
      posicionTexto: "izquierda",
    },
    {
      titulo: "Nuestra Tecnología",
      texto:
        "Implementamos tecnologías avanzadas en perforación y mantenimiento de pozos, asegurando eficiencia y sostenibilidad en cada proyecto. Nuestro enfoque innovador nos permite adaptarnos a las necesidades específicas de cada cliente y entorno.",
      imagen: imagen3,
      posicionTexto: "derecha",
    },
  ];

 return (
  <section
    className="relative py-10 px-4 md:px-5 bg-Tleft-top bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${fondo})`}} 
  >
    <div
      className="p-6 md:p-10 rounded-xl shadow-lg max-w-7xl mx-auto text-center mb-16"
      style={{ backgroundColor: '#F9F9FA5C' }} // bg-white/80
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{ color: '#065384' }} // text-gray-900 default heading color
      >
        Creamos soluciones sostenibles
      </motion.h2>
      <motion.p
        className="text-lg mb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        style={{ color: '#010101FF' }} // text-gray-600
      >
        Para el aprovechamiento responsable del agua subterránea
      </motion.p>
    </div>

    {secciones.map((section, idx) => (
      <div
        key={idx}
        className={`rounded-xl shadow-md max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20 p-6 ${
          section.posicionTexto === "izquierda" ? "md:flex-row-reverse" : ""
        }`}
        style={{ backgroundColor: '#F2F3F67C' }} // bg-white/90
      >
        {section.posicionTexto === "izquierda" ? (
          <>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3
                className="text-4xl font-semibold mb-9"
                style={{ color: '#065384' }} // dark heading
              >
                {section.titulo}
              </h3>
              <p
                className="text-lg"
                style={{ color: '#000000FF' }} // text-gray-700
              >
                {section.texto}
              </p>
            </motion.div>
            <motion.img
              src={section.imagen}
              alt={section.titulo}
              className="w-full max-w-[500px] max-h-[400px] h-auto object-cover rounded-xl shadow-lg mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            />
          </>
        ) : (
          <>
            <motion.img
              src={section.imagen}
              alt={section.titulo}
              className="w-full max-w-[400px] max-h-[500px] h-auto object-cover rounded-xl shadow-lg mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3
                className="text-4xl font-semibold mb-4"
                style={{ color: '#065384' }} // dark heading
              >
                {section.titulo}
              </h3>
              <p
                className="text-lg"
                style={{ color: '#000000FF' }} // text-gray-700
              >
                {section.texto}
              </p>
            </motion.div>
          </>
        )}
      </div>
    ))}
  </section>
);
}

export default Nosotros;