"use client";
import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string | null;
  link?: string | null;
  badge?: string | null;
  icon?: React.ReactNode;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  badge,
  icon,
}: ProjectCardProps) {
  const imageSrc  = image?.trim();
  const linkHref  = link?.trim();
  const badgeText = badge?.trim();

  const cardClasses =
    "group relative flex flex-col overflow-hidden rounded-xl border bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--card-hover-shadow)] hover:border-[var(--card-hover-border)]";

  const cardContent = (
    <>
      {/* Accent top bar — slides in on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{
          background:
            "linear-gradient(90deg, var(--accent) 0%, transparent 100%)",
        }}
      />

      {/* Optional image */}
      {imageSrc && (
        <div className="overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={title}
            className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        {/* Header row: badge + arrow */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            {badgeText && (
              <span
                className="mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.28em]"
                style={{
                  background: "var(--accent-dim)",
                  color: "var(--accent)",
                }}
              >
                <span
                  className="h-1 w-1 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                {badgeText}
              </span>
            )}

            <div className="flex items-center gap-2">
              {icon && (
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md border text-[var(--accent)]"
                  style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}
                  aria-hidden="true"
                >
                  {icon}
                </span>
              )}
              <h2
                className="text-[0.9375rem] font-semibold leading-snug text-[var(--text)]"
              >
                {title}
              </h2>
            </div>
          </div>

          {/* Arrow — only for linked cards */}
          {linkHref && (
            <svg
              viewBox="0 0 20 20"
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 16L16 4M16 4H7M16 4v9" />
            </svg>
          )}
        </div>

        {/* Description */}
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[var(--muted)]">
          {description}
        </p>
      </div>
    </>
  );

  if (linkHref) {
    return (
      <motion.a
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
    <motion.div
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cardClasses}
    >
      {cardContent}
    </motion.div>
  );
}
