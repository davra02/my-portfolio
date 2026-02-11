"use client"
import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string | null;
  link?: string | null;
  badge?: string | null;
}

export default function ProjectCard({ title, description, image, link, badge }: ProjectCardProps) {
  const imageSrc = image?.trim();
  const linkHref = link?.trim();
  const badgeText = badge?.trim();

  return (
    <motion.div
    whileHover={{ scale: 1.05 }}
    className="rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-transform duration-300 hover:-translate-y-1"
  >
    {imageSrc ? (
      <img src={imageSrc} alt={title} className="h-40 w-full object-cover" />
    ) : null}
    <div className="p-5">
      {badgeText ? (
        <span className="inline-flex rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
          {badgeText}
        </span>
      ) : null}
      <h2 className="text-lg font-semibold text-[var(--text)]">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
      {linkHref ? (
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex text-xs uppercase tracking-[0.2em] text-[var(--text)]"
        >
          Ver proyecto
        </a>
      ) : null}
    </div>
  </motion.div>
  );
}