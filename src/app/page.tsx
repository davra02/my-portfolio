import React from "react";
import ProjectCard from "./components/ProyectCard";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/TimeLine";

type Lang = "es" | "en";

type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
  updated_at: string;
  icon?: React.ReactNode;
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
  HiseMotions2026: (
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
    name: "Whispy",
    description:
      "Decentralized end-to-end encrypted messaging platform exploring user-owned identity, distributed data storage, and privacy-first social communication.",
    html_url: "https://github.com/davra02/Whispy",
    fork: false,
    updated_at: "",
    icon: PROJECT_ICONS.Whispy,
  },
  {
    name: "n-dim_maze_planner",
    description:
      "AI planning toolkit for temporal multi-agent maze problems in PDDL, featuring OPTIC integration, interactive 3D visualization, graph export, and benchmarking.",
    html_url: "https://github.com/davra02/n-dim_maze_planner",
    fork: false,
    updated_at: "",
    icon: PROJECT_ICONS["n-dim_maze_planner"],
  },
  {
    name: "PokeClass",
    description:
      "Full-stack Pokémon-themed application focused on clean product design, interactive user experience, and solid frontend-to-backend integration.",
    html_url: "https://github.com/davra02/PokeClass",
    fork: false,
    updated_at: "",
    icon: PROJECT_ICONS.PokeClass,
  },
  {
    name: "HiseMotions2026",
    description:
      "Machine learning project for emotion classification in Old Spanish texts, combining NLP, historical language analysis, and model evaluation.",
    html_url: "https://github.com/davra02/old_spanish_emotions_classifier",
    fork: false,
    updated_at: "",
    icon: PROJECT_ICONS.HiseMotions2026,
  },
];

type HomeProps = {
  searchParams?: Promise<{ lang?: string | string[] }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const langParam = Array.isArray(resolvedSearchParams.lang)
    ? resolvedSearchParams.lang[0]
    : resolvedSearchParams.lang;
  const lang: Lang = langParam === "en" ? "en" : "es";

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
                  badge={project.name === FEATURED_REPO ? text.featuredBadge : null}
                  icon={project.icon}
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