# my-portfolio

Portfolio personal de David Reyes Alés. Next.js 15 (App Router) + Tailwind,
desplegado en Vercel en `www.davidreyesales.com`.

## Demos de proyectos montadas bajo una ruta

El portfolio va creciendo con **demos/webapps de proyectos propios**, cada una
accesible en `www.davidreyesales.com/<nombre>`. Son demos de escaparate: sin
persistencia ni backend salvo que se diga lo contrario — cada visita arranca
limpia.

Cada demo es un **deployment de Vercel independiente**, no vive en este repo.
Este repo solo la expone: `next.config.ts` reescribe la ruta hacia el origen de
la demo, **quitando el prefijo**.

### Demos actuales

| Ruta | Origen | Repo |
| --- | --- | --- |
| `/maze_planner` | `https://mazeplanner.vercel.app` | `n-maze_planner`, carpeta `webapp/` (Vite + React + TS) |

### Cómo añadir una demo nueva

1. **Proyecto nuevo en Vercel** desde el repo del proyecto. Si el front vive en
   una subcarpeta (lo habitual: el repo raíz es Python/otra cosa), pon
   **Root Directory = esa subcarpeta**.
2. **Base path en el front**: la SPA debe construirse con su base en
   `/<nombre>/` (en Vite: `base` en `vite.config.ts`). Así el `index.html`
   referencia `/<nombre>/assets/...`, URLs que siguen siendo válidas bajo el
   dominio del portfolio.
3. **Rewrite aquí**, en `next.config.ts`, añadiendo el par (ruta exacta + resto):

   ```ts
   { source: "/<nombre>",        destination: ORIGEN },
   { source: "/<nombre>/:path*", destination: `${ORIGEN}/:path*` },
   ```

4. **Desactiva Deployment Protection** en el proyecto Vercel de la demo. Si está
   activa, este proxy recibe un 401 y el visitante ve una pantalla de login.

### Gotchas (los dos nos han mordido ya)

- **El `base` del front y el rewrite tienen que cuadrar.** El rewrite quita el
  prefijo, así que el front *debe* construirse con base `/<nombre>/`. Si se
  despliega con base `/`, el HTML pide `/assets/...`, esa ruta no casa con el
  rewrite, y la responde este portfolio → **404 en todos los assets**. Síntoma
  típico: la página carga pero sin CSS ni JS.
- **No agrupes libs pesadas con `manualChunks`** (Rollup/Vite) si solo se
  alcanzan por un import dinámico: las convierte en dependencia estática del
  entry y anula el lazy-loading. El split automático de Vite ya hace lo correcto.
- **`next.config.ts` se evalúa en build.** Los rewrites se compilan al
  `routes-manifest.json`, así que cambiar un origen (o una env var que lo
  alimente) **exige redeploy**; no basta con guardar la variable en el dashboard.
- Las URLs de las demos son públicas y estables: van hardcodeadas como valor por
  defecto. Las env vars se reservan para secretos o valores que cambian por
  entorno.
