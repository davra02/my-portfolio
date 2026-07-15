import Image from "next/image";

type Lang = "es" | "en";

interface TimelineProps {
  lang: Lang;
}

type TimelineLink = {
  href: string;
  label: string;
  github?: boolean;
};

type TimelineEntry = {
  icon: string;
  date: string;
  title: string;
  role?: string;
  description: string;
  tags?: string[];
  logo?: { src: string; alt: string };
  links: TimelineLink[];
};

const Timeline = ({ lang }: TimelineProps) => {
  const entries: TimelineEntry[] =
    lang === "en"
      ? [
          {
            icon: "icon-[tabler--book]",
            date: "September, 2025 — July, 2026",
            title: "MSc in Computer Science and Technology — UC3M",
            role: "Software Developer — Industry Research Project",
            description:
              "MSc completed in July 2026 at Universidad Carlos III de Madrid. As part of my thesis I worked on an industry research project, developing systems and prototypes focused on data platforms and distributed systems.",
            tags: ["React", "Next.js", "ASP.NET", "SQL", "HocusPocus", "SysMLv2"],
            logo: { src: "/uc3m.png", alt: "UC3M logo" },
            links: [{ href: "https://www.uc3m.es", label: "University website" }],
          },
          {
            icon: "icon-[tabler--briefcase]",
            date: "September, 2023 — December, 2025",
            title: "Full-Stack Developer — Axion",
            description:
              "I worked on a real-time monitoring platform for nationwide broadcasting infrastructure, designing REST APIs and backend services for asset and incident management and building map-based operational dashboards. I introduced Redis Stack as a caching layer, cutting load times by 50-60%; I built the GitLab CI/CD pipeline from scratch, reducing deployment time by over 85%; and I expanded an internal login module into a company-wide authentication microservice serving hundreds of users.",
            tags: ["Angular", "NestJS", "SQL (Postgres)", "Redis", "CouchDB"],
            logo: { src: "/logo-axion.svg", alt: "Axion logo" },
            links: [{ href: "https://www.axion.es", label: "Company website" }],
          },
          {
            icon: "icon-[tabler--school]",
            date: "September, 2020 — November, 2025",
            title:
              "Computer Engineering, Software Engineering — Universidad de Sevilla",
            description:
              "Studies completed in November 2025. A stage where I developed my passion for software engineering and contributed to projects worth highlighting:",
            logo: { src: "/us.png", alt: "Universidad de Sevilla logo" },
            links: [
              { href: "#projects", label: "Go to projects", github: true },
              { href: "https://www.us.es", label: "University website" },
            ],
          },
          {
            icon: "icon-[tabler--backpack]",
            date: "July, 2019",
            title: "Science Baccalaureate — Salesianos Stma. Trinidad",
            description:
              "I completed my pre-university studies at Salesianos Stma. Trinidad in the science track.",
            logo: { src: "/salesianos.jpg", alt: "Salesianos Stma. Trinidad logo" },
            links: [
              { href: "https://trinidad.salesianos.edu", label: "School website" },
            ],
          },
        ]
      : [
          {
            icon: "icon-[tabler--book]",
            date: "Septiembre, 2025 — Julio, 2026",
            title: "Máster en Ciencia y Tecnología Informática — UC3M",
            role: "Software Developer — Industry Research Project",
            description:
              "Máster finalizado en julio de 2026 en la Universidad Carlos III de Madrid. Como parte del TFM trabajé en un proyecto de investigación con industria, desarrollando sistemas y prototipos con foco en plataformas de datos y sistemas distribuidos.",
            tags: ["React", "Next.js", "ASP.NET", "SQL", "HocusPocus", "SysMLv2"],
            logo: { src: "/uc3m.png", alt: "Logo UC3M" },
            links: [{ href: "https://www.uc3m.es", label: "Web de la universidad" }],
          },
          {
            icon: "icon-[tabler--briefcase]",
            date: "Septiembre, 2023 — Diciembre, 2025",
            title: "Full-Stack Developer — Axion",
            description:
              "Trabajé en una plataforma de monitorización en tiempo real para infraestructura de radiodifusión a nivel nacional, diseñando APIs REST y servicios backend para gestión de activos e incidencias y construyendo dashboards operativos con visualización en mapa. Introduje Redis Stack como capa de caché, reduciendo los tiempos de carga un 50-60%; construí el pipeline de CI/CD en GitLab desde cero, recortando el tiempo de despliegue más de un 85%; y amplié un módulo de login interno hasta convertirlo en un microservicio de autenticación corporativo que da servicio a cientos de usuarios.",
            tags: ["Angular", "NestJS", "SQL (Postgres)", "Redis", "CouchDB"],
            logo: { src: "/logo-axion.svg", alt: "Logo Axion" },
            links: [{ href: "https://www.axion.es", label: "Web de la empresa" }],
          },
          {
            icon: "icon-[tabler--school]",
            date: "Septiembre, 2020 — Noviembre, 2025",
            title:
              "Ingeniería Informática, Ingeniería del Software — Universidad de Sevilla",
            description:
              "Estudios finalizados en noviembre de 2025. Una etapa en la que desarrollé mi pasión por la ingeniería del software y en la que contribuí a proyectos que me gustaría destacar:",
            logo: { src: "/us.png", alt: "Logo Universidad de Sevilla" },
            links: [
              { href: "#projects", label: "Ir a mis proyectos", github: true },
              { href: "https://www.us.es", label: "Web de la universidad" },
            ],
          },
          {
            icon: "icon-[tabler--backpack]",
            date: "Julio, 2019",
            title: "Bachillerato de ciencias — Salesianos Stma. Trinidad",
            description:
              "Finalicé mis estudios preuniversitarios en el centro Salesianos Stma. Trinidad, en la rama de ciencias.",
            logo: { src: "/salesianos.jpg", alt: "Logo Salesianos Stma. Trinidad" },
            links: [
              { href: "https://trinidad.salesianos.edu", label: "Web del centro" },
            ],
          },
        ];

  return (
    <ol className="relative ms-4 border-s border-[var(--border)] text-[var(--text)]">
      {entries.map((entry) => (
        <li key={entry.title} className="relative pb-10 ps-10 last:pb-1 sm:ps-12">
          {/* Rail node */}
          <span className="absolute start-0 top-0 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)]">
            <span className={`${entry.icon} size-4 bg-[var(--muted)]`} />
          </span>

          <p className="pt-1.5 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
            {entry.date}
          </p>

          <h3 className="mt-2 text-lg font-semibold leading-snug">{entry.title}</h3>

          {entry.role && (
            <p className="mt-1 text-sm font-medium" style={{ color: "var(--accent)" }}>
              {entry.role}
            </p>
          )}

          <p className="mt-2 max-w-[72ch] text-sm leading-relaxed text-[var(--muted)]">
            {entry.description}
          </p>

          {entry.tags && (
            <div className="mt-3 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {entry.logo && (
              <Image
                src={entry.logo.src}
                alt={entry.logo.alt}
                width={56}
                height={56}
                className="w-14 rounded border border-[var(--border)]"
              />
            )}
            {entry.links.map((link) => {
              const isAnchor = link.href.startsWith("#");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={isAnchor ? undefined : "_blank"}
                  rel={isAnchor ? undefined : "noopener noreferrer"}
                  className="btn btn-sm btn-soft btn-secondary"
                >
                  {link.label}
                  {link.github && (
                    <span className="icon-[tabler--brand-github] text-info size-5" />
                  )}
                </a>
              );
            })}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
