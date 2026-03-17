"use client";

import React, { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "theme";
type ThemeMode = "light" | "dark";
type Lang = "es" | "en";

interface NavbarProps {
  lang: Lang;
}

export default function Navbar({ lang }: NavbarProps) {
  const [theme, setTheme] = useState<ThemeMode | null>(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: ThemeMode = prefersDark ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const handleToggleTheme = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const labels =
    lang === "en"
      ? {
          about: "About",
          career: "Career",
          projects: "Projects",
          theme: "Toggle color mode",
        }
      : {
          about: "Sobre mi",
          career: "Mi carrera",
          projects: "Proyectos",
          theme: "Cambiar modo de color",
        };

  const languageOptions = [
    { code: "es" as const, href: "/", label: "ES" },
    { code: "en" as const, href: "/?lang=en", label: "EN" },
  ];

  return (
    <nav className="border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <h1 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text)] sm:text-sm sm:tracking-[0.2em]">
          David Reyes
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:gap-6 sm:text-xs sm:tracking-[0.2em]">
          <ul className="flex flex-wrap items-center gap-3 sm:gap-6">
            <li>
              <a href="#about" className="transition-colors hover:text-[var(--text)]">
                {labels.about}
              </a>
            </li>
            <li>
              <a href="#timeline" className="transition-colors hover:text-[var(--text)]">
                {labels.career}
              </a>
            </li>
            <li>
              <a href="#projects" className="transition-colors hover:text-[var(--text)]">
                {labels.projects}
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-1 rounded-full border border-[var(--border)] p-0.5">
            {languageOptions.map((option) => {
              const isActive = option.code === lang;

              return (
                <a
                  key={option.code}
                  href={option.href}
                  aria-label={option.code === "en" ? "English version" : "Version en espanol"}
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] transition-colors ${
                    isActive
                      ? "bg-[var(--surface-strong)] text-[var(--text)]"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {option.label}
                </a>
              );
            })}
          </div>
          <button
            type="button"
            onClick={handleToggleTheme}
            className="flex items-center justify-center rounded-full border border-[var(--border)] p-2 text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            aria-label={labels.theme}
          >
            {theme === "dark" ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2.5" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="21.5" />
                <line x1="2.5" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="21.5" y2="12" />
                <line x1="4.4" y1="4.4" x2="6.2" y2="6.2" />
                <line x1="17.8" y1="17.8" x2="19.6" y2="19.6" />
                <line x1="17.8" y1="6.2" x2="19.6" y2="4.4" />
                <line x1="4.4" y1="19.6" x2="6.2" y2="17.8" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15.5A8.5 8.5 0 0 1 8.5 3a7.5 7.5 0 1 0 12.5 12.5Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}