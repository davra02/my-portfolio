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
            Hola, soy David Reyes. Ingeniero de software con mirada de sistemas.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:mt-5 sm:text-base">
            He trabajado como desarrollador full stack, pero mi perfil es mas amplio: estoy cursando el master en
            Ciencia y Tecnologia Informatica y mi TFM lo oriento a Ingenieria de sistemas. Me gusta pensar soluciones
            a gran escala de forma pragmatica, sin perder el foco en lo que realmente aporta valor.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Ingenieria
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Arquitectura
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Sistemas
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.2em]">
              Fullstack
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.2em]">
              Ciencias de computacion
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs sm:tracking-[0.2em]">
              Inteligencia artificial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}