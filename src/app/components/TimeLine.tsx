import React from "react";
import Image from "next/image";

const Timeline = () => {
  return (

        
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">
      {/* timeline item 1 */}
      <li>
        <div className="timeline-middle h-16">
          <span className="bg-gray-800 flex size-8 items-center justify-center rounded-full">
            <span className="icon-[tabler--backpack] bg-gray-400 text-warning size-5"></span>
          </span>
        </div>
        <div className="timeline-start me-4 mt-8 max-md:pt-2">
          <div className="text-base-content/50 text-sm font-normal">
            Julio, 2019
          </div>
        </div>
        <div className="timeline-end ms-4 mb-8">
          <div className="card bg-gray-900">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">
                Bachillerato de ciencias - Salesianos Stma. Trinidad
              </h5>
              <p>
                Acabo mis estudios pre-grado en el centro Salesianos Stma. Trinidad, en la rama de
                ciencias. 
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <img
                  src="/salesianos.jpg"
                  alt="timeline Image"
                  className="w-20 rounded"
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
          <span className="bg-gray-800 flex size-8 items-center justify-center rounded-full">
            <span className="icon-[tabler--school] bg-gray-400 text-warning size-5"></span>
          </span>
        </div>
        <div className="timeline-end mt-6 px-1 md:mt-8">
          <div className="text-base-content/50 text-sm font-normal">
            Septiembre, 2020
          </div>
        </div>
        <div className="timeline-start me-4 mb-8">
          <div className="card bg-gray-900">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">
                Comienzo de estudios universitarios: Ingeniería Informática, Ingeniería del Software - Universidad de Sevilla
              </h5>
              <p>
                Empieza una nueva etapa que permite aprender y desarrollar mi pasión por la informática.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <img
                  src="/us.png"
                  alt="timeline Image"
                  className="w-20 rounded"
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
          <span className="bg-gray-800 flex size-8 items-center justify-center rounded-full">
            <span className="icon-[tabler--briefcase] bg-gray-400 text-warning size-5"></span>
          </span>
        </div>
        <div className="timeline-start me-4 mt-8 max-md:pt-2">
          <div className="text-base-content/50 text-sm font-normal">
            Septiembre, 2023
          </div>
          
        </div>
        
        <div className="timeline-end ms-4 mb-8">
          <div className="card bg-gray-900">
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
                <img
                  src="/logo-axion.svg"
                  alt="timeline Image"
                  className="w-20 rounded"
                  
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
          <span className="bg-gray-800 flex size-8 items-center justify-center rounded-full">
            <span className="icon-[tabler--flag] text-info size-5 bg-gray-400"></span>
          </span>
        </div>
        <div className="timeline-end mt-6 px-1 md:mt-8">
          <div className="text-base-content/50 text-sm font-normal">Julio, 2025</div>
        </div>
        <div className="timeline-start me-4 mb-8 w-full">
          <div className="card bg-gray-900">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">
                Finalización de estudios universitarios: Ingeniería Informática, Ingeniería del Software - Universidad de Sevilla
              </h5>
              
              <p>
                Finalizo mis estudios universitarios en la Universidad de Sevilla, con la intención de
                seguir creciendo y desarrollando mis habilidades en el mundo laboral. En esta etapa he contribuido y/o desarrollado proyectos que me gustaría destacar:
              </p>

              <a
                href="#proyectos"
                className="btn btn-sm btn-soft btn-secondary"
              >
                Ir a mis proyectos <span className="icon-[tabler--brand-github] text-info size-5" />
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