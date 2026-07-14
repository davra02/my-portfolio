# Portfolio — David Reyes Alés

Portfolio personal donde recojo mi trayectoria como ingeniero de software backend, mi experiencia profesional y los proyectos que me gustaría destacar.

🔗 **[www.davidreyesales.com](https://www.davidreyesales.com)**

## Sobre el sitio

Una single-page construida con el App Router de Next.js, con tres secciones:

- **Sobre mí** — presentación, métricas destacadas y stack principal.
- **Mi carrera** — línea temporal con formación y experiencia profesional.
- **Proyectos** — selección de trabajos personales y académicos.

Está disponible en **español e inglés** (`?lang=es` / `?lang=en`, español por defecto) y soporta **tema claro y oscuro**.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) con [daisyUI](https://daisyui.com) y [FlyonUI](https://flyonui.com)
- [Framer Motion](https://www.framer.com/motion/) para animaciones
- [tsParticles](https://particles.js.org) para el fondo interactivo

## Desarrollo

```bash
npm install
npm run dev
```

La aplicación queda disponible en [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run build   # compila el proyecto
npm run lint    # ejecuta ESLint
```

## Estructura

```
public/                  # imágenes, logos y CV
src/app/
  page.tsx               # composición de la página y datos de proyectos
  layout.tsx             # layout raíz y metadatos
  globals.css            # estilos globales y variables de tema
  components/
    AboutMe.tsx          # sección de presentación
    TimeLine.tsx         # trayectoria académica y profesional
    ProyectCard.tsx      # tarjeta de proyecto
    Navbar.tsx           # navegación, idioma y tema
    Particle.tsx         # fondo de partículas
```

Los textos de cada sección viven junto a su componente, con las variantes en español e inglés seleccionadas mediante la prop `lang`.

## Contacto

- [LinkedIn](https://www.linkedin.com/in/david-reyes-al%C3%A9s-465264305)
- [GitHub](https://github.com/davra02)
- davidreyesales@gmail.com
