"use client"
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white"
    >
      <motion.img
        src="/foto_provisional.jpeg" // Cambia esto por el nombre de tu archivo
        alt="Mi Foto"
        className="w-40 h-40 rounded-full border-4 border-gray-700 shadow-lg hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
    />

      <motion.div
        className="mt-6 text-center max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-4xl font-bold">¡Hola! Soy David</h1>
        <p className="mt-4 text-gray-400">
          Soy un ingeniero informático apasionado por el desarrollo de software,
          la innovación tecnológica y las soluciones creativas. ¡Encantado de
          que estés aquí!
        </p>
      </motion.div>
    </section>
  );
}