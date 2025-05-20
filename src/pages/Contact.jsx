import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white py-20 px-6 text-gray-800" id="contacto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Información de contacto */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Detalles de <span className="text-sky-500">Contacto</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Si aún tiene alguna pregunta, contáctenos.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Teléfonos:</h3>
              <p>+57 (350) 5974837</p>
              
            </div>

            <div>
              <h3 className="font-semibold">Correo electrónico:</h3>
              <p>xxxxxxxxxxxx@gmail.com</p>
             
            </div>

            <div>
              <h3 className="font-semibold">Dirección:</h3>
              <p>Valledupar / Cesar</p>
              
            </div>
            {/* Redes Sociales */}
          <div className="mt-8 flex gap-4 justify-start items-start self-start text-sky-600 text-xl">


            <a href="https://www.facebook.com/Hidrogeol/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-sky-800 transition" />
            </a>
            <a href="https://www.instagram.com/equipoacuiter/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
            
            <a href="https://wa.me/573505974837" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-500 transition" />
            </a>
          </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="flex flex-col justify-between">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Tu Nombre"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="email"
              placeholder="Tu Correo Electrónico"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <textarea
              rows="5"
              placeholder="Mensaje"
              className="w-full border border-gray-300 rounded px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button
              type="submit"
              className="bg-sky-400 hover:bg-sky-500 text-white font-bold px-6 py-3 rounded transition"
            >
              Enviar Mensaje
            </button>
          </form>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;
