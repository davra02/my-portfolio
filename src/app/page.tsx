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
};

const GITHUB_USER = "davra02";
const FEATURED_ORG = "Whispy-Decentralized-chat-application";
const FEATURED_REPO = "Whispy-Client";
const FEATURED_DESCRIPTION_ES =
  "Aplicacion social de mensajeria descentralizada con Ceramic Network. " +
  "Cifrado extremo a extremo en mensajes privados y uso de blockchain para ciertas funciones.";
const FEATURED_DESCRIPTION_EN =
  "Decentralized social messaging app built on Ceramic Network. " +
  "End-to-end encryption for private messages and blockchain-backed features.";
const PROJECT_LIMIT = 6;

type HomeProps = {
  searchParams?: Promise<{ lang?: string }> | { lang?: string };
};

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

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = await Promise.resolve(searchParams ?? {});
  const lang: Lang = resolvedSearchParams.lang === "en" ? "en" : "es";

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
          noDescription: "Sin descripcion",
          featuredBadge: "Destacado",
          fallbackTitle: "Proyectos en GitHub",
          fallbackDescription: "No se pudieron cargar los repositorios. Intentalo mas tarde.",
          footer: "Mi Portfolio",
        };

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
          <div
            className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:mt-8 sm:p-6"
            style={{ paddingLeft: "50px" }}
          >
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
              combinedProjects.map((project) => (
                <ProjectCard
                  key={project.html_url}
                  title={project.name}
                  description={
                    project.name === FEATURED_REPO
                      ? text.featuredDescription
                      : project.description ?? text.noDescription
                  }
                  image={null}
                  link={project.html_url}
                  badge={project.name === FEATURED_REPO ? text.featuredBadge : null}
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