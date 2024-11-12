import React, { useState } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-md text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold neon-text">Tomas Cosula</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#inicio" className="hover:text-cyan-400 transition-colors duration-300">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-cyan-400 transition-colors duration-300">Servicios</a></li>
            <li><a href="#contacto" className="hover:text-cyan-400 transition-colors duration-300">Contacto</a></li>
          </ul>
        </nav>
        <button 
          className="md:hidden text-cyan-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menú"
        >
          <Menu />
        </button>
      </div>
      {isMenuOpen && (
        <nav className="bg-black bg-opacity-90 text-white p-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li><a href="#inicio" className="block py-2 hover:text-cyan-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
            <li><a href="#servicios" className="block py-2 hover:text-cyan-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Servicios</a></li>
            <li><a href="#contacto" className="block py-2 hover:text-cyan-400 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;