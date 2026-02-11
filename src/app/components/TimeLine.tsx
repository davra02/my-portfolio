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
            Septiembre, 2023
          </div>
          
        </div>
        
        <div className="timeline-end ms-4 mb-8">
          <div className="card border border-[var(--border)] bg-[var(--surface)]">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">
                Puesto de FullStack Developer - Axion
              </h5>
              <p>
              Tuve la oportunidad de comenzar a ejercer de desarrollador a jornada parcial en la
              empresa Axion, en la que he podido aprender y desarrollar mis habilidades en el
              mundo laboral. Actualmente sigo trabajando en la empresa y acumulo más de un año de experiencia.
              </p>

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
      
    </ul>
  );
};

export default Timeline;