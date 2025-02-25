import React from "react";
import ProjectCard from "./components/ProyectCard";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/TimeLine";
import Particle from "./components/Particle";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Fondo de partículas, quedando en la capa inferior */}
      <Particle />
      
      {/* Navbar siempre visible */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Contenedor del contenido con un padding-top para compensar la navbar */}
      <div className="relative z-10 bg-gray-800 bg-opacity-80 min-h-screen text-white pt-16">
        <AboutMe />
        <div id="timeline" className="bg-black-100 py-4 z-[200]">
          <h2 className="text-3xl font-bold text-center text-white">Mi Carrera</h2>
        </div>
        <div className="rounded-[10px] mx-auto my-[4vw] p-[4vw] max-w-[75vw] bg-white/10">
          <Timeline />
        </div>
        <div id="projects" className="bg-black-100 py-4 z-[200]">
          <h2 className="text-3xl font-bold text-center text-white">Mis Proyectos</h2>
        </div>
        <div className="rounded-[10px] mx-auto my-[4vw] p-[4vw] max-w-[75vw] bg-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <ProjectCard title={"Proyecto ejemplo"} description={"ejemplo"} image={""} link={""} />    
          {/* Más ProjectCard según necesites */}
        </div>
        <footer className="text-center py-6">
          <p className="text-gray-500">© 2025 - Mi Portfolio</p>
        </footer>
      </div>
    </div>
  );
}