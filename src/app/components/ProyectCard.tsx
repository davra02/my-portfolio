"use client"
import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-900 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
  >
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-400">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-400 mt-2 block"
      >
        Ver proyecto
      </a>
    </div>
  </motion.div>
  );
}