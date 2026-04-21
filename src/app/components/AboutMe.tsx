import Image from "next/image";

type Lang = "es" | "en";

interface AboutMeProps {
  lang: Lang;
}

export default function AboutMe({ lang }: AboutMeProps) {
  const copy =
    lang === "en"
      ? {
          role: "Backend Engineer · Distributed Systems · MSc UC3M",
          title: "David Reyes",
          description:
            "I build real-time platforms and backend services for operational environments. Currently pursuing an MSc at UC3M and working as a research assistant on data platforms and distributed systems with industry partners.",
          stats: [
            { value: "2.5+", label: "Years in prod." },
            { value: "85%", label: "CI/CD cut" },
            { value: "50+", label: "Users served" },
          ],
          tags: ["Backend", "Distributed systems", "Observability", "Data platforms", "Architecture", "Real-time"],
          cv: "Download CV",
          location: "Madrid, Spain",
          available: "Open to offers",
          linkedin: "LinkedIn",
          email: "Email",
          instagram: "Instagram",
          github: "GitHub",
        }
      : {
          role: "Backend Engineer · Sistemas Distribuidos · MSc UC3M",
          title: "David Reyes",
          description:
            "Construyo plataformas en tiempo real y servicios backend para entornos operativos. Actualmente curso el MSc en UC3M y participo como asistente de investigación en plataformas de datos y sistemas distribuidos con industria.",
          stats: [
            { value: "2.5+", label: "Años en prod." },
            { value: "85%", label: "Reducción CI/CD" },
            { value: "50+", label: "Usuarios" },
          ],
          tags: ["Backend", "Sistemas distribuidos", "Observabilidad", "Plataformas de datos", "Arquitectura", "Tiempo real"],
          cv: "Descargar CV",
          location: "Madrid, España",
          available: "Abierto a ofertas",
          linkedin: "LinkedIn",
          email: "Email",
          instagram: "Instagram",
          github: "GitHub",
        };

  const socials = [
    {
      label: copy.linkedin,
      href: "https://www.linkedin.com/in/david-reyes-al%C3%A9s-465264305",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="8" y1="11" x2="8" y2="16" />
          <circle cx="8" cy="8.5" r="0.6" fill="currentColor" />
          <path d="M12 16v-3a2 2 0 0 1 4 0v3" />
        </svg>
      ),
    },
    {
      label: copy.github,
      href: "https://github.com/davra02",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.8a3.3 3.3 0 0 0-.9-2.5c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.6 12.6 0 0 0-6.8 0C5.7 1.5 4.6 1.8 4.6 1.8a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3.1 9c0 5.2 3.1 6.4 6.1 6.7a3.3 3.3 0 0 0-.9 2.5V22" />
        </svg>
      ),
    },
    {
      label: copy.email,
      href: "mailto:davidreyesales@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="M4 8l8 5 8-5" />
        </svg>
      ),
    },
    {
      label: copy.instagram,
      href: "https://instagram.com/david_ra02",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="relative flex min-h-[calc(100vh-64px)] flex-col justify-center px-5 pb-20 pt-28 sm:px-6"
    >
      {/* Decorative accent blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full opacity-30 blur-[90px]"
        style={{ background: "var(--accent-glow)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 left-4 h-56 w-56 rounded-full opacity-20 blur-[70px]"
        style={{ background: "var(--accent-dim)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Eyebrow label */}
        <p className="anim-fade-in delay-0 text-[10px] uppercase tracking-[0.45em] text-[var(--muted)]">
          {copy.role}
        </p>

        {/* Main grid */}
        <div className="mt-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr,300px] lg:gap-20">

          {/* ── Left: content ── */}
          <div>
            {/* Name headline */}
            <h1
              className="anim-fade-up delay-1 font-semibold leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 7.5vw, 5.8rem)" }}
            >
              {copy.title}
              <span style={{ color: "var(--accent)" }}>.</span>
            </h1>

            {/* Divider + subtitle */}
            <div className="anim-slide-right delay-2 mt-3 flex items-center gap-3">
              <span
                className="h-px w-10 flex-shrink-0"
                style={{ background: "var(--accent)" }}
              />
              <span className="text-sm text-[var(--muted)]">
                {lang === "en" ? "Backend Software Engineer" : "Ingeniero de Software Backend"}
              </span>
            </div>

            {/* Description */}
            <p className="anim-fade-up delay-3 mt-6 max-w-[54ch] text-[0.9375rem] leading-[1.85] text-[var(--muted)]">
              {copy.description}
            </p>

            {/* Stats row */}
            <div className="anim-fade-up delay-4 mt-8 grid grid-cols-3 gap-3">
              {copy.stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border bg-[var(--surface)] p-4 transition-shadow duration-300 hover:shadow-[var(--shadow)]"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="text-[1.75rem] font-semibold leading-none" style={{ color: "var(--text)" }}>
                    {value}
                  </div>
                  <div className="mt-1.5 text-[9px] uppercase tracking-[0.22em] text-[var(--muted)]">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA + social pill group */}
            <div className="anim-fade-up delay-5 mt-8 flex flex-wrap items-center gap-3">
              {/* Primary CTA */}
              <a
                href="/CV-7.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-lg px-5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:-translate-y-px hover:opacity-90 active:translate-y-0"
                style={{ background: "var(--accent)" }}
              >
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M10 3v10M5 13l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {copy.cv}
              </a>

              {/* Social links as a pill group */}
              <div
                className="flex items-center gap-0.5 rounded-lg border bg-[var(--surface)] p-1"
                style={{ borderColor: "var(--border)" }}
              >
                {socials.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    aria-label={label}
                    title={label}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-[var(--muted)] transition-all duration-200 hover:bg-[var(--accent-dim)] hover:text-[var(--text)]"
                  >
                    {icon}
                  </a>
                ))}
              </div>

              {/* Available badge */}
              <div
                className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
              >
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {copy.available}
              </div>
            </div>

            {/* Tags */}
            <div className="anim-fade-up delay-6 mt-5 flex flex-wrap gap-2">
              {copy.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: image ── */}
          <div className="anim-scale-in delay-2 relative mx-auto w-full max-w-[300px] lg:mx-0">
            {/* Decorative offset frame */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border"
              style={{ borderColor: "var(--accent)", opacity: 0.2 }}
            />

            {/* Image container */}
            <div
              className="relative overflow-hidden rounded-2xl border"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <Image
                src="/yo.png"
                alt="David Reyes"
                width={300}
                height={370}
                className="h-full w-full object-cover"
                priority
              />

              {/* Location badge */}
              <div
                className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs backdrop-blur-sm"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  background: "var(--surface-strong)",
                }}
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3 flex-shrink-0 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
                <span className="text-[var(--muted)]">{copy.location}</span>
              </div>
            </div>

            {/* Personal logo */}
            <div className="mt-4 flex justify-center opacity-70 transition-opacity duration-300 hover:opacity-100">
              <Image
                src="/personal_logo.png"
                alt="Logo personal de David Reyes"
                width={110}
                height={110}
                className="w-24"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
