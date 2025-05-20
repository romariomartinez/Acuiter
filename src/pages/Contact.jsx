import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-6 text-gray-800" id="contacto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Información de contacto */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Detalles de <span className="text-sky-500">Contacto</span>
          </h2>
          <p className="text-gray-600 mb-8">
            ¿Tienes preguntas sobre nuestros servicios de perforación de pozos? ¡Contáctanos y con gusto te asesoramos!
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-sm text-gray-700 uppercase">Teléfonos:</h3>
              <p className="text-lg font-medium">+57 (350) 5974837</p>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-700 uppercase">Correo Electrónico:</h3>
              <p className="text-lg font-medium">contacto@acuiter.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-gray-700 uppercase">Dirección:</h3>
              <p className="text-lg font-medium">Valledupar, Cesar - Colombia</p>
            </div>

            {/* Redes Sociales */}
            <div className="mt-10 flex gap-6 text-2xl text-sky-600">
              <a
                href="https://www.facebook.com/Hidrogeol/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-800 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/equipoacuiter/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/573505974837"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="w-full">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Tu Nombre"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
            <input
              type="email"
              placeholder="Tu Correo Electrónico"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
            <textarea
              rows="5"
              placeholder="Mensaje"
              className="w-full border border-gray-300 rounded px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 py-3 rounded transition"
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
