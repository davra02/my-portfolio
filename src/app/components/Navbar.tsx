import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
  <h1 className="text-2xl font-bold">Mi Portfolio</h1>
  <ul className="flex space-x-4 text-lg">
    <li><a href="#about" className="hover:text-blue-400">Sobre mí</a></li>
    <li><a href="#projects" className="hover:text-blue-400">Proyectos</a></li>
    <li><a href="#contact" className="hover:text-blue-400">Contacto</a></li>
  </ul>
</nav>
  );
}