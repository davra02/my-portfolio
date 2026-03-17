/* eslint-disable @next/next/no-img-element */
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
  const cardClasses =
    "group block rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--card-hover-shadow)] hover:border-[var(--card-hover-border)]";

  const cardContent = (
    <>
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
      </div>
    </>
  );

  if (linkHref) {
    return (
      <motion.a
        whileHover={{ scale: 1.03 }}
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
        aria-label={`Abrir proyecto ${title}`}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.03 }} className={cardClasses}>
      {cardContent}
    </motion.div>
  );
}