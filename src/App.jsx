import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";

const services = [
  {
    name: "Corte de Cabello",
    price: "$20",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Afeitado",
    price: "$15",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Peinado",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Coloración",
    price: "$40",
    image:
      "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
];

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      <main className="flex-grow">
        <section id="inicio" className="relative h-screen">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="Barbería"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 neon-text ">
                Bienvenido a la Barberia de Thomas
              </h2>
              <p className="text-xl md:text-2xl text-cyan-400">
                El mejor lugar para tu estilo y cuidado personal
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black bg-opacity-50 backdrop-blur-md p-6 rounded-lg neon-border">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan-400">
                  Cortes de Cabello
                </h3>
                <p className="text-white">
                  Ofrecemos una amplia variedad de estilos para todos los
                  gustos.
                </p>
              </div>
              <div className="bg-black bg-opacity-50 backdrop-blur-md p-6 rounded-lg neon-border">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan-400">
                  Afeitado Profesional
                </h3>
                <p className="text-white">
                  Disfruta de un afeitado clásico con toallas calientes y
                  productos premium.
                </p>
              </div>
              <div className="bg-black bg-opacity-50 backdrop-blur-md p-6 rounded-lg neon-border">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan-400">
                  Tratamientos Capilares
                </h3>
                <p className="text-white">
                  Cuidamos de tu cabello con los mejores tratamientos y
                  productos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-16 md:py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-400">
              Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-400">
              Agenda tu turno!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black bg-opacity-50 backdrop-blur-md p-6 rounded-lg neon-border">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-cyan-400">
                  Información de Contacto
                </h3>
                <p className="mb-2 text-white">
                  Dirección:{" "}
                  <span className="text-cyan-400">
                    Calle Principal 123, Ciudad
                  </span>
                </p>
                <p className="mb-2 text-white">
                  Teléfono:{" "}
                  <span className="text-cyan-400">(123) 456-7890</span>
                </p>
                <p className="mb-2 text-white">
                  Email:{" "}
                  <span className="text-cyan-400">info@barberstyle.com</span>
                </p>
                <h4 className="text-lg md:text-xl font-bold mt-6 mb-2 text-cyan-400">
                  Horario de Atención
                </h4>
                <p className="mb-1 text-white">
                  Lunes a Viernes:{" "}
                  <span className="text-cyan-400">9:00 AM - 8:00 PM</span>
                </p>
                <p className="mb-1 text-white">
                  Sábados:{" "}
                  <span className="text-cyan-400">10:00 AM - 6:00 PM</span>
                </p>
                <p className="mb-6 text-white">
                  Domingos: <span className="text-cyan-400">Cerrado</span>
                </p>

                <p className="text-white">
                  ¡Reserva tu turno hoy y disfruta de un servicio de calidad!
                </p>

                <p className="text-white">
                  No te quedes sin tu turno, reserva hoy mismo!
                </p>
              </div>
{/* algo */}
{/* algo */}
              <div className="bg-black bg-opacity-50 backdrop-blur-md p-6 rounded-lg neon-border ">
                <form className="space-y-4 ">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-cyan-400 mb-1"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-cyan-400 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-cyan-400 mb-1"
                    >
                      Fecha del Turno
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-cyan-400 mb-1"
                    >
                      Hora del Turno
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-cyan-400 mb-1"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-cyan-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-cyan-600 text-white font-bold py-2 px-4 rounded hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors duration-300 neon-border"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
            <div className="neon-border my-[80px]">
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden neon-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878894506!2d-58.38375908477038!3d-34.60373888045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1sen!2sar!4v1637342175981!5m2!1sen!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
