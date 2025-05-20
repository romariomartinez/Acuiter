import React from "react";
import { Link } from "react-router-dom";
import fondoNosotros from "../assets/equipo1.jpg"

const About = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${fondoNosotros})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#A1C935]/60 to-[#029CBF]/60 flex items-center">
        <div className="max-w-xl mx-10 p-10 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            xxxxxxx<br />
            xxxxxx <br />
            xxxxxxxxx <br />
            xxxxxxxxx
          </h2>
          <Link
            to="/projects"
            className="inline-block mt-4 px-6 py-3 bg-[#029CBF] text-white font-semibold rounded-md shadow-md hover:bg-[#02759c] transition duration-300"
          >
            VER PROYECTOS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
