import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative px-6 pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[320px,1fr] md:gap-10">
        <div className="mx-auto h-48 w-48 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] sm:h-56 sm:w-56 md:mx-0 md:h-64 md:w-64">
          <Image
            src="/yo.png"
            alt="Mi Foto"
            width={256}
            height={256}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Sobre mí
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Hola, soy David Reyes. Software Engineer enfocado en backend y sistemas distribuidos.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:mt-5 sm:text-base">
            Tengo experiencia construyendo aplicaciones en tiempo real y servicios backend para entornos operativos.
            Actualmente curso el master en Ciencia y Tecnologia Informatica en UC3M y participo como asistente de
            investigacion en desarrollos aplicados al TFM. Me interesan la observabilidad, la infraestructura y las
            plataformas de datos.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="/CV16Mar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-secondary"
            >
              Ver CV
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Backend
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Sistemas distribuidos
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Observabilidad
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.2em]">
              Plataformas de datos
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.2em]">
              Arquitectura de software
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.2em]">
              Tiempo real
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}