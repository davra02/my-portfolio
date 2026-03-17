import Image from "next/image";

type Lang = "es" | "en";

interface TimelineProps {
  lang: Lang;
}

const Timeline = ({ lang }: TimelineProps) => {
  const t =
    lang === "en"
      ? {
          stack: "Role stack",
          inProgress: "In progress.",
          universitySite: "University website",
          companySite: "Company website",
          schoolSite: "School website",
          projects: "Go to projects",
          research: {
            date: "2026 - Present",
            title: "Research Assistant - Universidad Carlos III de Madrid",
            description:
              "I develop software systems and prototypes related to my MSc thesis in collaboration with industry, focused on data platforms and distributed systems.",
          },
          msc: {
            date: "September, 2025",
            title: "MSc in Computer Science and Technology - UC3M",
            description:
              "I started my MSc at Universidad Carlos III de Madrid, focused on computer science and technology.",
          },
          degree: {
            date: "July, 2025",
            title:
              "Completion of university studies: Computer Engineering, Software Engineering - Universidad de Sevilla",
            description:
              "I completed my university studies at Universidad de Sevilla with the goal of continuing to grow in the software industry. During this period I contributed to and developed projects worth highlighting:",
          },
          axion: {
            date: "September, 2023 - December, 2025",
            title: "Full-Stack Developer - Axion",
            description:
              "I worked on a real-time monitoring platform for nationwide broadcasting infrastructure. I designed REST APIs and backend services for asset and incident management, and I built map-based operational dashboards.",
          },
          startUni: {
            date: "September, 2020",
            title:
              "Start of university studies: Computer Engineering, Software Engineering - Universidad de Sevilla",
            description:
              "A new stage began where I could learn and further develop my passion for software engineering.",
          },
          highSchool: {
            date: "July, 2019",
            title: "Science Baccalaureate - Salesianos Stma. Trinidad",
            description:
              "I completed my pre-university studies at Salesianos Stma. Trinidad in the science track.",
          },
        }
      : {
          stack: "Stack del rol",
          inProgress: "En curso.",
          universitySite: "Web de la universidad",
          companySite: "Web de la empresa",
          schoolSite: "Web del centro",
          projects: "Ir a mis proyectos",
          research: {
            date: "2026 - Actualidad",
            title: "Asistente de investigacion - Universidad Carlos III de Madrid",
            description:
              "Desarrollo sistemas y prototipos de software aplicados a mi TFM en colaboracion con industria, con foco en plataformas de datos y sistemas distribuidos.",
          },
          msc: {
            date: "Septiembre, 2025",
            title: "Master en Ciencia y Tecnologia Informatica - UC3M",
            description:
              "Inicio el master en la Universidad Carlos III de Madrid, enfocado en ciencia y tecnologia informatica.",
          },
          degree: {
            date: "Julio, 2025",
            title:
              "Finalizacion de estudios universitarios: Ingenieria Informatica, Ingenieria del Software - Universidad de Sevilla",
            description:
              "Finalizo mis estudios universitarios en la Universidad de Sevilla, con la intencion de seguir creciendo y desarrollando mis habilidades en el mundo laboral. En esta etapa he contribuido y/o desarrollado proyectos que me gustaria destacar:",
          },
          axion: {
            date: "Septiembre, 2023 - Diciembre, 2025",
            title: "Full-Stack Developer - Axion",
            description:
              "Trabaje en una plataforma de monitorizacion en tiempo real para infraestructura de radiodifusion a nivel nacional. Disene APIs REST y servicios backend para gestion de activos e incidencias, y construi dashboards operativos con visualizacion en mapa.",
          },
          startUni: {
            date: "Septiembre, 2020",
            title:
              "Comienzo de estudios universitarios: Ingenieria Informatica, Ingenieria del Software - Universidad de Sevilla",
            description:
              "Empieza una nueva etapa que permite aprender y desarrollar mi pasion por la informatica.",
          },
          highSchool: {
            date: "Julio, 2019",
            title: "Bachillerato de ciencias - Salesianos Stma. Trinidad",
            description:
              "Acabo mis estudios pre-grado en el centro Salesianos Stma. Trinidad, en la rama de ciencias.",
          },
        };

  return (

        
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered text-[var(--text)]">
      {/* timeline item 1 */}
      <li className="timeline-shift">
        <div className="timeline-middle h-16">
          <span className="flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)]">
            <span className="icon-[tabler--microscope] text-info size-5 bg-[var(--muted)]"></span>
          </span>
        </div>
        <div className="timeline-end mt-6 px-1 md:mt-8">
          <div className="text-sm font-normal text-[var(--muted)]">{t.research.date}</div>
        </div>
        <div className="timeline-start ms-4 me-4 mb-8 w-full">
          <div className="card border border-[var(--border)] bg-[var(--surface)]">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">{t.research.title}</h5>
              <p>
                {t.research.description} <span className="text-[var(--muted)]">{t.inProgress}</span>
              </p>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{t.stack}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">React</span>
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">Next.js</span>
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">ASP.NET</span>
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">SQL</span>
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">HocusPocus</span>
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">SysMLv2</span>
                </div>
              </div>
              <a
                href="https://www.uc3m.es"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-soft btn-secondary"
              >
                {t.universitySite}
              </a>
            </div>
          </div>
        </div>
        <hr />
      </li>
      {/* timeline item 2 */}
      <li>
        <div className="timeline-middle h-16">
          <span className="flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)]">
            <span className="icon-[tabler--book] bg-[var(--muted)] text-warning size-5"></span>
          </span>
        </div>
        <div className="timeline-start ms-4 me-4 mt-8 max-md:pt-2">
          <div className="text-sm font-normal text-[var(--muted)]">
            {t.msc.date}
          </div>
        </div>
        <div className="timeline-end ms-4 mb-8">
          <div className="card border border-[var(--border)] bg-[var(--surface)]">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">{t.msc.title}</h5>
              <p>
                {t.msc.description} <span className="text-[var(--muted)]">{t.inProgress}</span>
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Image
                  src="/uc3m.png"
                  alt="Logo UC3M"
                  width={80}
                  height={80}
                  className="w-20 rounded border border-[var(--border)]"
                />
              </div>
              <a
                href="https://www.uc3m.es"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-soft btn-secondary"
              >
                {t.universitySite}
              </a>
            </div>
          </div>
        </div>
        <hr />
      </li>
      {/* timeline item 3 */}
      <li className="timeline-shift">
        <div className="timeline-middle h-16">
          <span className="flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)]">
            <span className="icon-[tabler--flag] text-info size-5 bg-[var(--muted)]"></span>
          </span>
        </div>
        <div className="timeline-end mt-6 px-1 md:mt-8">
          <div className="text-sm font-normal text-[var(--muted)]">{t.degree.date}</div>
        </div>
        <div className="timeline-start ms-4 me-4 mb-8 w-full">
          <div className="card border border-[var(--border)] bg-[var(--surface)]">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">{t.degree.title}</h5>
              
              <p>
                {t.degree.description}
              </p>

              <a
                href="#projects"
                className="btn btn-sm btn-soft btn-secondary"
              >
                {t.projects} <span className="icon-[tabler--brand-github] text-info size-5" />
              </a>
              
            </div>
          </div>
        </div>
        <hr />
      </li>
      {/* timeline item 4 */}
      <li>
        <div className="timeline-middle h-16">
          <span className="flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)]">
            <span className="icon-[tabler--briefcase] bg-[var(--muted)] text-warning size-5"></span>
          </span>
        </div>
        <div className="timeline-start ms-4 me-4 mt-8 max-md:pt-2">
          <div className="text-sm font-normal text-[var(--muted)]">
            {t.axion.date}
          </div>
          
        </div>
        
        <div className="timeline-end ms-4 mb-8">
          <div className="card border border-[var(--border)] bg-[var(--surface)]">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">{t.axion.title}</h5>
              <p>
              {t.axion.description}
              </p>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{t.stack}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">Angular</span>
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">NestJS</span>
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">Spring</span>
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">SQL (Postgres)</span>
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">Redis</span>
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]">CouchDB</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Image
                  src="/logo-axion.svg"
                  alt="timeline Image"
                  width={80}
                  height={80}
                  className="w-20 rounded border border-[var(--border)]"
                />
              </div>

              <a
                href="https://www.axion.es"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-soft btn-secondary"
              >
                {t.companySite}
              </a>
            </div>
          </div>
        </div>
        <hr />
      </li>
      {/* timeline item 5 */}
      <li className="timeline-shift">
        <div className="timeline-middle h-16">
          <span className="flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)]">
            <span className="icon-[tabler--school] bg-[var(--muted)] text-warning size-5"></span>
          </span>
        </div>
        <div className="timeline-end mt-6 px-1 md:mt-8">
          <div className="text-sm font-normal text-[var(--muted)]">
            {t.startUni.date}
          </div>
        </div>
        <div className="timeline-start ms-4 me-4 mb-8">
          <div className="card border border-[var(--border)] bg-[var(--surface)]">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">{t.startUni.title}</h5>
              <p>
                {t.startUni.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Image
                  src="/us.png"
                  alt="timeline Image"
                  width={80}
                  height={80}
                  className="w-20 rounded border border-[var(--border)]"
                />
              </div>
              <a
                href="https://www.us.es"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-soft btn-secondary"
              >
                {t.schoolSite}
              </a>
            </div>
          </div>
        </div>
        <hr />
      </li>
      {/* timeline item 6 */}
      <li>
        <div className="timeline-middle h-16">
          <span className="flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)]">
            <span className="icon-[tabler--backpack] bg-[var(--muted)] text-warning size-5"></span>
          </span>
        </div>
        <div className="timeline-start ms-4 me-4 mt-8 max-md:pt-2">
          <div className="text-sm font-normal text-[var(--muted)]">
            {t.highSchool.date}
          </div>
        </div>
        <div className="timeline-end ms-4 mb-8">
          <div className="card border border-[var(--border)] bg-[var(--surface)]">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">{t.highSchool.title}</h5>
              <p>
                {t.highSchool.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Image
                  src="/salesianos.jpg"
                  alt="timeline Image"
                  width={80}
                  height={80}
                  className="w-20 rounded border border-[var(--border)]"
                />
              </div>
                <a
                  href="https://trinidad.salesianos.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-soft btn-secondary"
                >
                  {t.schoolSite}
                </a>
            </div>
          </div>
        </div>
        <hr />
      </li>
      
    </ul>
  );
};

export default Timeline;