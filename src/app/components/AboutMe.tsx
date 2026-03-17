import Image from "next/image";

type Lang = "es" | "en";

interface AboutMeProps {
  lang: Lang;
}

export default function AboutMe({ lang }: AboutMeProps) {
  const copy =
    lang === "en"
      ? {
          section: "About Me",
          title: "Hi, I am David Reyes. Software Engineer focused on backend and distributed systems.",
          description:
            "I have experience building real-time applications and backend services for operational environments. I am currently pursuing my MSc in Computer Science and Technology at UC3M and I also work as a research assistant on software systems developed as part of my master's thesis. I am especially interested in observability, infrastructure and data platforms.",
          tags: [
            "Backend",
            "Distributed systems",
            "Observability",
            "Data platforms",
            "Software architecture",
            "Real-time",
          ],
          cv: "Download CV",
          location: "Madrid, Spain",
          linkedin: "LinkedIn",
          email: "Email",
          instagram: "Instagram",
          github: "GitHub",
        }
      : {
          section: "Sobre mi",
          title: "Hola, soy David Reyes. Software Engineer enfocado en backend y sistemas distribuidos.",
          description:
            "Tengo experiencia construyendo aplicaciones en tiempo real y servicios backend para entornos operativos. Actualmente curso el master en Ciencia y Tecnologia Informatica en UC3M y participo como asistente de investigacion en desarrollos aplicados al TFM. Me interesan la observabilidad, la infraestructura y las plataformas de datos.",
          tags: [
            "Backend",
            "Sistemas distribuidos",
            "Observabilidad",
            "Plataformas de datos",
            "Arquitectura de software",
            "Tiempo real",
          ],
          cv: "Descargar CV",
          location: "Madrid, Espana",
          linkedin: "LinkedIn",
          email: "Email",
          instagram: "Instagram",
          github: "GitHub",
        };

  return (
    <section
      id="about"
      className="relative px-6 pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[320px,1fr] md:gap-10">
        <div className="mx-auto flex flex-col items-center gap-4 md:mx-0">
          <div className="h-48 w-48 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] sm:h-56 sm:w-56 md:h-64 md:w-64">
            <Image
              src="/yo.png"
              alt="Mi Foto"
              width={256}
              height={256}
              className="h-full w-full object-cover"
            />
          </div>
          <Image
            src="/personal_logo.png"
            alt="Logo personal"
            width={170}
            height={170}
            className="h-auto w-32 sm:w-36"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            {copy.section}
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:mt-5 sm:text-base">
            {copy.description}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted)] sm:text-sm">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 text-[var(--accent)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
              <circle cx="12" cy="11" r="2.2" />
            </svg>
            <span>{copy.location}</span>
          </div>
          <div className="mt-4">
            <a
              href="/CV-WEB.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text)] transition-all duration-300 hover:shadow-[var(--card-hover-shadow)] hover:border-[var(--card-hover-border)]"
            >
              {copy.cv}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="https://www.linkedin.com/in/david-reyes-al%C3%A9s-465264305"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={copy.linkedin}
              title={copy.linkedin}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--card-hover-shadow)] hover:border-[var(--card-hover-border)]"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8" />
                <path d="M12 16v-3a2 2 0 0 1 4 0v3" />
              </svg>
            </a>
            <a
              href="mailto:davidreyesales@gmail.com"
              aria-label={copy.email}
              title={copy.email}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--card-hover-shadow)] hover:border-[var(--card-hover-border)]"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="6" width="16" height="12" rx="2" />
                <path d="M4 8l8 5 8-5" />
              </svg>
            </a>
            <a
              href="https://instagram.com/david_ra02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={copy.instagram}
              title={copy.instagram}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--card-hover-shadow)] hover:border-[var(--card-hover-border)]"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <circle cx="16.5" cy="7.5" r="0.8" />
              </svg>
            </a>
            <a
              href="https://github.com/davra02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={copy.github}
              title={copy.github}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--card-hover-shadow)] hover:border-[var(--card-hover-border)]"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.8a3.3 3.3 0 0 0-.9-2.5c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.6 12.6 0 0 0-6.8 0C5.7 1.5 4.6 1.8 4.6 1.8a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3.1 9c0 5.2 3.1 6.4 6.1 6.7a3.3 3.3 0 0 0-.9 2.5V22" />
              </svg>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {copy.tags[0]}
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {copy.tags[1]}
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {copy.tags[2]}
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.2em]">
              {copy.tags[3]}
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.2em]">
              {copy.tags[4]}
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.2em]">
              {copy.tags[5]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}