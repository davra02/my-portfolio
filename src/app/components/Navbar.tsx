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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(
      THEME_STORAGE_KEY
    ) as ThemeMode | null;
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initial: ThemeMode = prefersDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggleTheme = () => {
    const next: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const labels =
    lang === "en"
      ? { about: "About", career: "Career", projects: "Projects" }
      : { about: "Sobre mí", career: "Carrera", projects: "Proyectos" };

  const languageOptions = [
    { code: "es" as const, href: "/",        label: "ES" },
    { code: "en" as const, href: "/?lang=en", label: "EN" },
  ];

  const navLinks = [
    { href: "#about",    label: labels.about },
    { href: "#timeline", label: labels.career },
    { href: "#projects", label: labels.projects },
  ];

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "var(--nav-bg)"
          : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6">

        {/* Wordmark */}
        <a
          href="/"
          className="group flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
          aria-label="Home"
        >
          <span
            className="h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-125"
            style={{ background: "var(--accent)" }}
          />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text)]">
            David Reyes
          </span>
        </a>

        {/* Right controls */}
        <div className="flex items-center gap-4">

          {/* Nav links */}
          <ul className="hidden items-center gap-5 sm:flex">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group relative text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--text)]"
                >
                  {label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                    style={{ background: "var(--accent)" }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <span
            className="hidden h-4 w-px sm:block"
            style={{ background: "var(--border)" }}
          />

          {/* Language toggle */}
          <div
            className="flex items-center rounded-full border p-0.5"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            {languageOptions.map((option) => {
              const isActive = option.code === lang;
              return (
                <a
                  key={option.code}
                  href={option.href}
                  aria-label={
                    option.code === "en" ? "English version" : "Versión en español"
                  }
                  className="rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] transition-all duration-200"
                  style={{
                    background: isActive ? "var(--accent)" : "transparent",
                    color: isActive ? "#fff" : "var(--muted)",
                  }}
                >
                  {option.label}
                </a>
              );
            })}
          </div>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={handleToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-8 w-8 items-center justify-center rounded-full border text-[var(--muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--text)]"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            {theme === "dark" ? (
              /* Sun */
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2.5" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="21.5" />
                <line x1="2.5" y1="12" x2="5"  y2="12" />
                <line x1="19"  y1="12" x2="21.5" y2="12" />
                <line x1="4.4" y1="4.4"   x2="6.2"  y2="6.2" />
                <line x1="17.8" y1="17.8" x2="19.6" y2="19.6" />
                <line x1="17.8" y1="6.2"  x2="19.6" y2="4.4" />
                <line x1="4.4" y1="19.6"  x2="6.2"  y2="17.8" />
              </svg>
            ) : (
              /* Moon */
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15.5A8.5 8.5 0 0 1 8.5 3a7.5 7.5 0 1 0 12.5 12.5Z" />
              </svg>
            )}
          </button>

        </div>
      </div>
    </nav>
  );
}
