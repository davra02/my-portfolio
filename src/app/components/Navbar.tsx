import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">Portfolio de David Reyes Alés</h1>
      <ul className="flex space-x-4 text-lg">
        <li>
          <a href="#about" className="hover:text-orange-300">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="#timeline" className="hover:text-orange-300">
            Mi carrera
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-orange-300">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-orange-300">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}