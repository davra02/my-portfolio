import React from "react";
import ProjectCard from "./components/ProyectCard";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/TimeLine";

type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
  updated_at: string;
};

const GITHUB_USER = "davra02";
const FEATURED_ORG = "Whispy-Decentralized-chat-application";
const FEATURED_REPO = "Whispy-Client";
const FEATURED_DESCRIPTION =
  "Aplicacion social de mensajeria descentralizada con Ceramic Network. " +
  "Cifrado extremo a extremo en mensajes privados y uso de blockchain para ciertas funciones.";
const PROJECT_LIMIT = 6;

async function getFeaturedProject(): Promise<GithubRepo | null> {
  const response = await fetch(
    `https://api.github.com/repos/${FEATURED_ORG}/${FEATURED_REPO}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as GithubRepo;
}

async function getGithubProjects(): Promise<GithubRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=30&sort=pushed`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    return [];
  }

  const repos = (await response.json()) as GithubRepo[];

  return repos.filter((repo) => !repo.fork).slice(0, PROJECT_LIMIT);
}

export default async function Home() {
  const [featuredProject, projects] = await Promise.all([
    getFeaturedProject(),
    getGithubProjects(),
  ]);

  const combinedProjects = [
    ...(featuredProject ? [featuredProject] : []),
    ...projects.filter((project) => project.name !== FEATURED_REPO),
  ].slice(0, PROJECT_LIMIT);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Navbar siempre visible */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Contenedor del contenido con un padding-top para compensar la navbar */}
      <div className="relative z-10 min-h-screen pt-20">
        <AboutMe />
        <section id="timeline" className="mx-auto mt-16 max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Mi carrera</h2>
            <span className="h-px flex-1 bg-[var(--border)] ml-6" />
          </div>
          <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <Timeline />
          </div>
        </section>
        <section id="projects" className="mx-auto mt-16 max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Proyectos</h2>
            <span className="h-px flex-1 bg-[var(--border)] ml-6" />
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {combinedProjects.length > 0 ? (
              combinedProjects.map((project) => (
                <ProjectCard
                  key={project.html_url}
                  title={project.name}
                  description={
                    project.name === FEATURED_REPO
                      ? FEATURED_DESCRIPTION
                      : project.description ?? "Sin descripcion"
                  }
                  image={null}
                  link={project.html_url}
                  badge={project.name === FEATURED_REPO ? "Destacado" : null}
                />
              ))
            ) : (
              <ProjectCard
                title={"Proyectos en GitHub"}
                description={"No se pudieron cargar los repositorios. Intentalo mas tarde."}
                image={null}
                link={`https://github.com/${GITHUB_USER}`}
              />
            )}
          </div>
        </section>
        <section id="contact" className="mx-auto mt-16 max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Contacto</h2>
            <span className="h-px flex-1 bg-[var(--border)] ml-6" />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="https://www.linkedin.com/in/david-reyes-al%C3%A9s-465264305"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)]">
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
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="8" y1="11" x2="8" y2="16" />
                    <line x1="8" y1="8" x2="8" y2="8" />
                    <path d="M12 16v-3a2 2 0 0 1 4 0v3" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">LinkedIn</p>
                  <p className="mt-1 text-base font-semibold text-[var(--text)]">David Reyes Ales</p>
                </div>
              </div>
            </a>
            <a
              href="mailto:davidreyesales@gmail.com"
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)]">
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
                    <rect x="4" y="6" width="16" height="12" rx="2" />
                    <path d="M4 8l8 5 8-5" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Email</p>
                  <p className="mt-1 text-base font-semibold text-[var(--text)]">davidreyesales@gmail.com</p>
                </div>
              </div>
            </a>
            <a
              href="https://instagram.com/david_ra02"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)]">
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
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="16.5" cy="7.5" r="0.8" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Instagram</p>
                  <p className="mt-1 text-base font-semibold text-[var(--text)]">@david_ra02</p>
                </div>
              </div>
            </a>
          </div>
        </section>
        <footer className="mx-auto mt-20 max-w-6xl px-6 pb-10 text-sm text-[var(--muted)]">
          © 2025 - Mi Portfolio
        </footer>
      </div>
    </div>
  );
}