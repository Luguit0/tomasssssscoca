import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-md text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2 neon-text">BarberStyle</h3>
            <p className="text-cyan-400">Tu destino para el mejor cuidado y estilo personal.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 neon-text">Enlaces Rápidos</h3>
            <ul className="space-y-1">
              <li><a href="#inicio" className="hover:text-cyan-400 transition-colors duration-300">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors duration-300">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-cyan-400 transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 neon-text">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Facebook</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Instagram</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-cyan-400">
          <p>&copy; 2023 BarberStyle. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;