import React from "react";
import type { Metadata } from "next";
import ProjectCard from "./components/ProyectCard";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/TimeLine";

type Lang = "es" | "en";

const SITE_URL = "https://www.davidreyesales.com";
const GITHUB_USER = "davra02";

type Localized = { es: string; en: string };

type Project = {
  name: string;
  description: Localized;
  html_url: string;
  icon?: React.ReactNode;
  demo_url?: string;
  doc?: { url: string; kind: "paper" | "report" };
  status?: "published" | "inProgress";
};

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  Whispy: (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a5 5 0 0 0-5 5v3" />
      <rect x="6" y="11" width="12" height="9" rx="2" />
      <circle cx="12" cy="15.5" r="1" />
    </svg>
  ),
  "n-dim_maze_planner": (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h7v7H4z" />
      <path d="M13 4h7v7h-7z" />
      <path d="M4 13h7v7H4z" />
      <path d="M13 13h7v7h-7z" />
      <path d="M11 7h2M7 11v2M17 11v2M11 17h2" />
    </svg>
  ),
  PokeClass: (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  "SysML v2 Collaborative Modeler": (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="6" height="4" rx="1" />
      <rect x="15" y="4" width="6" height="4" rx="1" />
      <rect x="9" y="16" width="6" height="4" rx="1" />
      <path d="M6 8v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8" />
      <path d="M12 12v4" />
    </svg>
  ),
  "req-classifier": (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M15 3v4h4" />
      <path d="M9 11h7M9 15h4" />
      <path d="M14.5 17.5l1.5 1.5 3-3" />
    </svg>
  ),
  "HISEMOTIONS @ IberLEF 2026": (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 5a3 3 0 0 1 6 0" />
      <path d="M5 12a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4" />
      <path d="M7 12v4a3 3 0 0 0 3 3h1" />
      <path d="M17 12v2a3 3 0 0 1-3 3h-1" />
      <path d="M9 9v3M12 9v5M15 9v3" />
    </svg>
  ),
};
const PROJECTS: Project[] = [
  {
    name: "req-classifier",
    description: {
      es: "Clasificador y verificador de calidad de requisitos de software (ISO/IEC/IEEE 29148, INCOSE GtWR) que combina reglas deterministas con juicios de Jev (TypeSafe AI), evaluado con rigor frente a ML clásico, un DeBERTa con fine-tuning y Claude bajo un protocolo prerregistrado.",
      en: "Software requirements classifier and quality checker (ISO/IEC/IEEE 29148, INCOSE GtWR) that layers deterministic rules with Jev (TypeSafe AI) judgments, rigorously benchmarked against classical ML, a fine-tuned DeBERTa and Claude under a preregistered protocol.",
    },
    html_url: "https://github.com/davra02/req-classifier",
    icon: PROJECT_ICONS["req-classifier"],
    status: "inProgress",
  },
  {
    name: "Whispy",
    description: {
      es: "Plataforma de mensajería descentralizada con cifrado de extremo a extremo que explora la identidad en manos del usuario, el almacenamiento distribuido de datos y una comunicación social centrada en la privacidad.",
      en: "Decentralized end-to-end encrypted messaging platform exploring user-owned identity, distributed data storage, and privacy-first social communication.",
    },
    html_url: "https://github.com/davra02/Whispy",
    icon: PROJECT_ICONS.Whispy,
    doc: {
      url: "https://github.com/davra02/Whispy/blob/main/whispy_memorandum.pdf",
      kind: "report",
    },
  },
  {
    name: "n-dim_maze_planner",
    description: {
      es: "Toolkit de planificación automática para problemas temporales multiagente de laberintos en PDDL, con integración de OPTIC, visualización 3D interactiva, exportación de grafos y benchmarking.",
      en: "AI planning toolkit for temporal multi-agent maze problems in PDDL, featuring OPTIC integration, interactive 3D visualization, graph export, and benchmarking.",
    },
    html_url: "https://github.com/davra02/n-dim_maze_planner",
    icon: PROJECT_ICONS["n-dim_maze_planner"],
    demo_url: "/maze_planner",
  },
  {
    name: "HISEMOTIONS @ IberLEF 2026",
    description: {
      es: "Detección multietiqueta de emociones en cartas en español de los siglos XVI y XVII. Fine-tuning de BETO, mDeBERTa y MarIA con aumento de datos mediante LLM y ajuste de umbrales por etiqueta (0,36 de Macro F1 en el test oculto). Paper de sistema publicado en las actas de IberLEF 2026 (CEUR-WS).",
      en: "Multi-label emotion detection in 16th–17th century Spanish letters. Fine-tuned BETO, mDeBERTa and MarIA with LLM data augmentation and per-label threshold tuning (0.36 Macro F1 on the hidden test). System paper published in the IberLEF 2026 proceedings (CEUR-WS).",
    },
    html_url:
      "https://github.com/davra02/old_spanish_emotions_classifier/tree/implementacion",
    icon: PROJECT_ICONS["HISEMOTIONS @ IberLEF 2026"],
    doc: {
      url: "https://ceur-ws.org/Vol-4273/HISEMOTIONS_paper7.pdf",
      kind: "paper",
    },
    status: "published",
  },
  {
    name: "PokeClass",
    description: {
      es: "Clasificador de imágenes de Pokémon basado en una red convolucional ResNet18 con fine-tuning en PyTorch, empaquetado como aplicación de escritorio con Electron + React y acompañado de una demo en Streamlit para inferencia rápida desde el navegador.",
      en: "Pokémon image classifier built on a ResNet18 convolutional network fine-tuned with PyTorch, packaged as an Electron + React desktop app and shipped alongside a Streamlit demo for quick in-browser inference.",
    },
    html_url: "https://github.com/davra02/PokeClass",
    icon: PROJECT_ICONS.PokeClass,
  },
  {
    name: "SysML v2 Collaborative Modeler",
    description: {
      es: "Aplicación de diagramado colaborativo en tiempo real conforme al estándar SysML v2, desarrollada como parte de mi TFM en la UC3M. Frontend en React y Next.js, backend en ASP.NET sobre PostgreSQL y HocusPocus para la edición multiusuario sin conflictos.",
      en: "Real-time collaborative diagramming application compliant with the SysML v2 standard, developed as part of my MSc thesis at UC3M. Built with React and Next.js on the frontend, an ASP.NET backend over PostgreSQL, and HocusPocus for conflict-free multi-user editing.",
    },
    html_url: "",
    icon: PROJECT_ICONS["SysML v2 Collaborative Modeler"],
  },
];

type HomeProps = {
  searchParams?: Promise<{ lang?: string | string[] }>;
};

function resolveLang(langParam: string | string[] | undefined): Lang {
  const value = Array.isArray(langParam) ? langParam[0] : langParam;
  return value === "en" ? "en" : "es";
}

export async function generateMetadata({ searchParams }: HomeProps): Promise<Metadata> {
  const resolvedSearchParams = (await searchParams) ?? {};
  const lang = resolveLang(resolvedSearchParams.lang);

  const title =
    lang === "en"
      ? "David Reyes Alés — Software Engineer · Backend, Infra & Applied AI"
      : "David Reyes Alés — Ingeniero de Software · Backend, infraestructura e IA aplicada";
  const description =
    lang === "en"
      ? "Portfolio of David Reyes Alés. Software engineer building backend services, real-time distributed systems and infrastructure, now focused on bringing AI into reliable software. MSc at UC3M."
      : "Portfolio de David Reyes Alés. Ingeniero de software: servicios backend, sistemas distribuidos en tiempo real e infraestructura, ahora centrado en llevar la IA a software fiable. MSc en UC3M.";
  const keywords =
    lang === "en"
      ? ["David Reyes Alés", "backend", "software engineer", "infrastructure", "applied AI", "NLP", "distributed systems", "portfolio", "UC3M"]
      : ["David Reyes Alés", "backend", "ingeniero de software", "infraestructura", "IA aplicada", "NLP", "sistemas distribuidos", "portfolio", "UC3M"];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: lang === "en" ? "/?lang=en" : "/",
      languages: {
        es: "/?lang=es",
        en: "/?lang=en",
      },
    },
    openGraph: {
      type: "website",
      siteName: "David Reyes Alés",
      title,
      description,
      url: lang === "en" ? `${SITE_URL}/?lang=en` : SITE_URL,
      locale: lang === "en" ? "en_US" : "es_ES",
      alternateLocale: lang === "en" ? "es_ES" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const lang = resolveLang(resolvedSearchParams.lang);

  const text =
    lang === "en"
      ? {
          career: "My Career",
          projects: "Projects",
          demoLabel: "Open app",
          openLabel: "Open project",
          docLabel: { paper: "Read paper", report: "Read report" },
          status: { published: "Published", inProgress: "In progress" },
        }
      : {
          career: "Mi carrera",
          projects: "Proyectos",
          demoLabel: "Abrir aplicación",
          openLabel: "Abrir proyecto",
          docLabel: { paper: "Leer paper", report: "Leer memoria" },
          status: { published: "Publicado", inProgress: "En desarrollo" },
        };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Reyes Alés",
    url: SITE_URL,
    image: `${SITE_URL}/yo.jpeg`,
    jobTitle: "Software Engineer",
    worksFor: { "@type": "Organization", name: "Liferay", url: "https://www.liferay.com" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Universidad Carlos III de Madrid", url: "https://www.uc3m.es" },
      { "@type": "CollegeOrUniversity", name: "Universidad de Sevilla", url: "https://www.us.es" },
    ],
    address: { "@type": "PostalAddress", addressLocality: "Madrid", addressCountry: "ES" },
    knowsLanguage: ["es", "en"],
    sameAs: [
      "https://www.linkedin.com/in/david-reyes-ales/",
      `https://github.com/${GITHUB_USER}`,
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* Navbar siempre visible */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar lang={lang} />
      </div>

      {/* Contenedor del contenido con un padding-top para compensar la navbar */}
      <div className="relative z-10 min-h-screen pt-20">
        <AboutMe lang={lang} />
        <section id="timeline" className="mx-auto mt-12 max-w-6xl px-4 sm:mt-16 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold">{text.career}</h2>
            <span className="hidden h-px flex-1 bg-[var(--border)] sm:block sm:ml-6" />
          </div>
          <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:mt-8 sm:p-6">
            <Timeline lang={lang} />
          </div>
        </section>
        <section id="projects" className="mx-auto mt-12 max-w-6xl px-4 sm:mt-16 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold">{text.projects}</h2>
            <span className="hidden h-px flex-1 bg-[var(--border)] sm:block sm:ml-6" />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.name}
                title={project.name}
                description={project.description[lang]}
                link={project.html_url}
                badge={project.status ? text.status[project.status] : null}
                icon={project.icon}
                demoUrl={project.demo_url}
                demoLabel={text.demoLabel}
                docUrl={project.doc?.url}
                docLabel={project.doc ? text.docLabel[project.doc.kind] : undefined}
                openLabel={text.openLabel}
              />
            ))}
          </div>
        </section>
        <footer className="mx-auto mt-16 flex max-w-6xl flex-col gap-3 border-t border-[var(--border)] px-4 pb-10 pt-6 text-sm text-[var(--muted)] sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} David Reyes Alés</span>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              { href: "mailto:davidreyesales@gmail.com", label: "Email" },
              { href: "https://www.linkedin.com/in/david-reyes-ales/", label: "LinkedIn" },
              { href: `https://github.com/${GITHUB_USER}`, label: "GitHub" },
            ].map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="transition-colors duration-200 hover:text-[var(--text)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </div>
  );
}