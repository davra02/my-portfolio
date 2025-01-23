import React from "react";
import ProjectCard from "./components/ProyectCard";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen text-white">
      <Navbar />
      <AboutMe />
      <footer className="text-center py-6">
        <p className="text-gray-500">© 2025 - Mi Portfolio</p>
      </footer>
    </div>
  );
}