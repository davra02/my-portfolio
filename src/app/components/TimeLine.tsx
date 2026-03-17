import Image from "next/image";

const Timeline = () => {
  return (

        
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered text-[var(--text)]">
      {/* timeline item 1 */}
      <li>
        <div className="timeline-middle h-16">
          <span className="flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)]">
            <span className="icon-[tabler--backpack] bg-[var(--muted)] text-warning size-5"></span>
          </span>
        </div>
        <div className="timeline-start me-4 mt-8 max-md:pt-2">
          <div className="text-sm font-normal text-[var(--muted)]">
            Julio, 2019
          </div>
        </div>
        <div className="timeline-end ms-4 mb-8">
          <div className="card border border-[var(--border)] bg-[var(--surface)]">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">
                Bachillerato de ciencias - Salesianos Stma. Trinidad
              </h5>
              <p>
                Acabo mis estudios pre-grado en el centro Salesianos Stma. Trinidad, en la rama de
                ciencias. 
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
                  Web del centro
                </a>
            </div>
          </div>
        </div>
        <hr />
      </li>
      {/* timeline item 2 */}
      <li className="timeline-shift">
        <div className="timeline-middle h-16">
          <span className="flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)]">
            <span className="icon-[tabler--school] bg-[var(--muted)] text-warning size-5"></span>
          </span>
        </div>
        <div className="timeline-end mt-6 px-1 md:mt-8">
          <div className="text-sm font-normal text-[var(--muted)]">
            Septiembre, 2020
          </div>
        </div>
        <div className="timeline-start me-4 mb-8">
          <div className="card border border-[var(--border)] bg-[var(--surface)]">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">
                Comienzo de estudios universitarios: Ingeniería Informática, Ingeniería del Software - Universidad de Sevilla
              </h5>
              <p>
                Empieza una nueva etapa que permite aprender y desarrollar mi pasión por la informática.
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
                Web del centro
              </a>
            </div>
          </div>
        </div>
        <hr />
      </li>
      {/* timeline item 3 */}
      <li>
        <div className="timeline-middle h-16">
          <span className="flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)]">
            <span className="icon-[tabler--briefcase] bg-[var(--muted)] text-warning size-5"></span>
          </span>
        </div>
        <div className="timeline-start me-4 mt-8 max-md:pt-2">
          <div className="text-sm font-normal text-[var(--muted)]">
            Septiembre, 2023 - Diciembre, 2025
          </div>
          
        </div>
        
        <div className="timeline-end ms-4 mb-8">
          <div className="card border border-[var(--border)] bg-[var(--surface)]">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">
                Full-Stack Developer - Axion
              </h5>
              <p>
              Trabaje en una plataforma de monitorizacion en tiempo real para infraestructura de
              radiodifusion a nivel nacional. Disene APIs REST y servicios backend para gestion de
              activos e incidencias, y construi dashboards operativos con visualizacion en mapa.
              </p>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Stack del rol</p>
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
                Web de la empresa
              </a>
            </div>
          </div>
        </div>
        <hr />
      </li>
      {/* timeline item 4 */}
      <li className="timeline-shift">
        <div className="timeline-middle h-16">
          <span className="flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)]">
            <span className="icon-[tabler--flag] text-info size-5 bg-[var(--muted)]"></span>
          </span>
        </div>
        <div className="timeline-end mt-6 px-1 md:mt-8">
          <div className="text-sm font-normal text-[var(--muted)]">Julio, 2025</div>
        </div>
        <div className="timeline-start me-4 mb-8 w-full">
          <div className="card border border-[var(--border)] bg-[var(--surface)]">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">
                Finalización de estudios universitarios: Ingeniería Informática, Ingeniería del Software - Universidad de Sevilla
              </h5>
              
              <p>
                Finalizo mis estudios universitarios en la Universidad de Sevilla, con la intención de
                seguir creciendo y desarrollando mis habilidades en el mundo laboral. En esta etapa he contribuido y/o desarrollado proyectos que me gustaría destacar:
              </p>

              <a
                href="#projects"
                className="btn btn-sm btn-soft btn-secondary"
              >
                Ir a mis proyectos <span className="icon-[tabler--brand-github] text-info size-5" />
              </a>
              
            </div>
          </div>
        </div>
        <hr />
      </li>
      {/* timeline item 5 */}
      <li>
        <div className="timeline-middle h-16">
          <span className="flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)]">
            <span className="icon-[tabler--book] bg-[var(--muted)] text-warning size-5"></span>
          </span>
        </div>
        <div className="timeline-start me-4 mt-8 max-md:pt-2">
          <div className="text-sm font-normal text-[var(--muted)]">
            Septiembre, 2025
          </div>
        </div>
        <div className="timeline-end ms-4 mb-8">
          <div className="card border border-[var(--border)] bg-[var(--surface)]">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">
                Master en Ciencia y Tecnologia Informatica - UC3M
              </h5>
              <p>
                Inicio el master en la Universidad Carlos III de Madrid, enfocado en ciencia y
                tecnologia informatica. <span className="text-[var(--muted)]">En curso.</span>
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
                Web de la universidad
              </a>
            </div>
          </div>
        </div>
        <hr />
      </li>

      {/* timeline item 6 */}
      <li className="timeline-shift">
        <div className="timeline-middle h-16">
          <span className="flex size-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)]">
            <span className="icon-[tabler--microscope] text-info size-5 bg-[var(--muted)]"></span>
          </span>
        </div>
        <div className="timeline-end mt-6 px-1 md:mt-8">
          <div className="text-sm font-normal text-[var(--muted)]">2026 - Actualidad</div>
        </div>
        <div className="timeline-start me-4 mb-8 w-full">
          <div className="card border border-[var(--border)] bg-[var(--surface)]">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">
                Asistente de investigacion - Universidad Carlos III de Madrid
              </h5>
              <p>
                Desarrollo sistemas y prototipos de software aplicados a mi TFM en colaboracion con
                industria, con foco en plataformas de datos y sistemas distribuidos. <span className="text-[var(--muted)]">En curso.</span>
              </p>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Stack del rol</p>
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
                Web de la universidad
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