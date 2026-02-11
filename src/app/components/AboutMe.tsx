import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative px-6 pt-28 pb-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[320px,1fr]">
        <div className="mx-auto h-56 w-56 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] md:mx-0 md:h-64 md:w-64">
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
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            Hola, soy David Reyes. Ingeniero de software con mirada de sistemas.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)]">
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
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Fullstack
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Ciencias de computacion
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Inteligencia artificial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}