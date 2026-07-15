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
  demoUrl?: string | null;
  demoLabel?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  badge,
  icon,
  demoUrl,
  demoLabel,
}: ProjectCardProps) {
  const imageSrc  = image?.trim();
  const linkHref  = link?.trim();
  const badgeText = badge?.trim();
  const demoHref  = demoUrl?.trim();

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

        {/* Live app CTA — sits above the stretched card link */}
        {demoHref && (
          <div className="relative z-10 mt-4">
            <a
              href={demoHref}
              className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-opacity duration-200 hover:opacity-80"
              style={{
                borderColor: "var(--border)",
                background: "var(--accent-dim)",
                color: "var(--accent)",
              }}
            >
              <svg
                viewBox="0 0 20 20"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7.5 6.5l5 3.5-5 3.5z" />
                <circle cx="10" cy="10" r="7.5" />
              </svg>
              {demoLabel}
            </a>
          </div>
        )}
      </div>
    </>
  );

  // With a demo CTA the card can't be an <a> — nesting links is invalid HTML.
  // The repo link is stretched behind the content instead, keeping the whole
  // card clickable while the CTA stays on top.
  if (demoHref) {
    return (
      <motion.div
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={cardClasses}
      >
        {linkHref && (
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir proyecto ${title} en GitHub`}
            className="absolute inset-0 z-0"
          />
        )}
        {cardContent}
      </motion.div>
    );
  }

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
