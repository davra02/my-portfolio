import React from "react";
import type { Metadata } from "next";
import ProjectCard from "./components/ProyectCard";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/TimeLine";

type Lang = "es" | "en";

const SITE_URL = "https://www.davidreyesales.com";

type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
  updated_at: string;
  icon?: React.ReactNode;
  demo_url?: string;
  doc?: { url: string; kind: "paper" | "report" };
  status?: "published" | "inProgress";
};

const GITHUB_USER = "davra02";
const FEATURED_REPO = "Whispy-Client";
const FEATURED_DESCRIPTION_ES =
  "Aplicación social de mensajería descentralizada con Ceramic Network. " +
  "Cifrado extremo a extremo en mensajes privados y uso de blockchain para ciertas funciones.";
const FEATURED_DESCRIPTION_EN =
  "Decentralized social messaging app built on Ceramic Network. " +
  "End-to-end encryption for private messages and blockchain-backed features.";
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
const PINNED_PROJECTS: GithubRepo[] = [
  {
    name: "req-classifier",
    description:
      "Software requirements classifier and quality checker (ISO/IEC/IEEE 29148, INCOSE GtWR) that layers deterministic rules with Jev (TypeSafe AI) judgments, rigorously benchmarked against classical ML, a fine-tuned DeBERTa and Claude under a preregistered protocol.",
    html_url: "https://github.com/davra02/req-classifier",
    fork: false,
    updated_at: "",
    icon: PROJECT_ICONS["req-classifier"],
    status: "inProgress",
  },
  {
    name: "Whispy",
    description:
      "Decentralized end-to-end encrypted messaging platform exploring user-owned identity, distributed data storage, and privacy-first social communication.",
    html_url: "https://github.com/davra02/Whispy",
    fork: false,
    updated_at: "",
    icon: PROJECT_ICONS.Whispy,
    doc: {
      url: "https://github.com/davra02/Whispy/blob/main/whispy_memorandum.pdf",
      kind: "report",
    },
  },
  {
    name: "n-dim_maze_planner",
    description:
      "AI planning toolkit for temporal multi-agent maze problems in PDDL, featuring OPTIC integration, interactive 3D visualization, graph export, and benchmarking.",
    html_url: "https://github.com/davra02/n-dim_maze_planner",
    fork: false,
    updated_at: "",
    icon: PROJECT_ICONS["n-dim_maze_planner"],
    demo_url: "/maze_planner",
  },
  {
    name: "HISEMOTIONS @ IberLEF 2026",
    description:
      "Multi-label emotion detection in 16th–17th century Spanish letters. Fine-tuned BETO, mDeBERTa and MarIA with LLM data augmentation and per-label threshold tuning (0.36 Macro F1 on the hidden test). System paper published in the IberLEF 2026 proceedings (CEUR-WS).",
    html_url:
      "https://github.com/davra02/old_spanish_emotions_classifier/tree/implementacion",
    fork: false,
    updated_at: "",
    icon: PROJECT_ICONS["HISEMOTIONS @ IberLEF 2026"],
    doc: {
      url: "https://ceur-ws.org/Vol-4273/HISEMOTIONS_paper7.pdf",
      kind: "paper",
    },
    status: "published",
  },
  {
    name: "PokeClass",
    description:
      "Pokémon image classifier built on a ResNet18 convolutional network fine-tuned with PyTorch, packaged as an Electron + React desktop app and shipped alongside a Streamlit demo for quick in-browser inference.",
    html_url: "https://github.com/davra02/PokeClass",
    fork: false,
    updated_at: "",
    icon: PROJECT_ICONS.PokeClass,
  },
  {
    name: "SysML v2 Collaborative Modeler",
    description:
      "Real-time collaborative diagramming application compliant with the SysML v2 standard, developed as part of my MSc thesis at UC3M. Built with React and Next.js on the frontend, an ASP.NET backend over PostgreSQL, and HocusPocus for conflict-free multi-user editing.",
    html_url: "",
    fork: false,
    updated_at: "",
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
      ? "David Reyes Alés — Backend & Applied AI Engineer"
      : "David Reyes Alés — Ingeniero de Software, Backend e IA aplicada";
  const description =
    lang === "en"
      ? "Portfolio of David Reyes Alés. I build backend services and real-time platforms, and apply AI where it adds measurable value. MSc at UC3M."
      : "Portfolio de David Reyes Alés. Construyo servicios backend y plataformas en tiempo real, y aplico IA donde aporta valor medible. MSc en UC3M.";
  const keywords =
    lang === "en"
      ? ["David Reyes Alés", "backend", "software engineer", "applied AI", "NLP", "distributed systems", "portfolio", "UC3M"]
      : ["David Reyes Alés", "backend", "ingeniero de software", "IA aplicada", "NLP", "sistemas distribuidos", "portfolio", "UC3M"];

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
          featuredDescription: FEATURED_DESCRIPTION_EN,
          noDescription: "No description",
          featuredBadge: "Featured",
          fallbackTitle: "GitHub Projects",
          fallbackDescription: "Repositories could not be loaded. Please try again later.",
          footer: "David Reyes Alés",
          demoLabel: "Open app",
          docLabel: { paper: "Read paper", report: "Read report" },
          status: { published: "Published", inProgress: "In progress" },
        }
      : {
          career: "Mi carrera",
          projects: "Proyectos",
          featuredDescription: FEATURED_DESCRIPTION_ES,
          noDescription: "Sin descripción",
          featuredBadge: "Destacado",
          fallbackTitle: "Proyectos en GitHub",
          fallbackDescription: "No se pudieron cargar los repositorios. Inténtalo más tarde.",
          footer: "Mi Portfolio",
          demoLabel: "Abrir aplicación",
          docLabel: { paper: "Leer paper", report: "Leer memoria" },
          status: { published: "Publicado", inProgress: "En desarrollo" },
        };

  const combinedProjects = PINNED_PROJECTS;

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
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
            {combinedProjects.length > 0 ? (
              combinedProjects.map((project, index) => (
                <ProjectCard
                  key={`${project.html_url}-${index}`}
                  title={project.name}
                  description={
                    project.name === FEATURED_REPO
                      ? text.featuredDescription
                      : project.description ?? text.noDescription
                  }
                  image={null}
                  link={project.html_url}
                  badge={
                    project.name === FEATURED_REPO
                      ? text.featuredBadge
                      : project.status
                        ? text.status[project.status]
                        : null
                  }
                  icon={project.icon}
                  demoUrl={project.demo_url}
                  demoLabel={text.demoLabel}
                  docUrl={project.doc?.url}
                  docLabel={
                    project.doc ? text.docLabel[project.doc.kind] : undefined
                  }
                />
              ))
            ) : (
              <ProjectCard
                title={text.fallbackTitle}
                description={text.fallbackDescription}
                image={null}
                link={`https://github.com/${GITHUB_USER}`}
              />
            )}
          </div>
        </section>
        <footer className="mx-auto mt-16 max-w-6xl px-4 pb-10 text-sm text-[var(--muted)] sm:mt-20 sm:px-6">
          © 2026 - {text.footer}
        </footer>
      </div>
    </div>
  );
}