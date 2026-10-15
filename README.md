# Legends · Landing page (handoff)

Diseño de la landing de Legends listo para construirse con Claude Code.

- Abre `static/index.html` en el navegador para ver la versión funcional (animaciones, canvas, sonido e interacciones). Necesita internet solo para la fuente Archivo de Google Fonts.
- `CLAUDE.md` es el brief para Claude Code: tokens, estructura, interacciones, pendientes y criterios de aceptación.
- `design/` guarda los artboards originales del canvas de Claude Design y los tokens del design system.
- `assets/` tiene el logo, Watata y las capturas de la app.

## Cómo empezar con Claude Code

```bash
cd legends-landing
claude
```

Y en la sesión, por ejemplo:

> Lee CLAUDE.md y static/index.html. Crea un proyecto Vite + React + TypeScript + Tailwind en ./site que reproduzca esta landing exactamente (diseño, responsive, animaciones, canvas del hero, sonido y FAQ), usando los tokens de design/tokens.json como variables CSS. Mueve las imágenes de assets/ a site/public. Deja los enlaces de descarga como constantes en un solo archivo de configuración.

## Sitio publicable (`web/`) · legendslatam.com

`web/` es la landing en **React + Vite + TypeScript, prerenderizada a HTML estático** para GitHub Pages: cada ruta se renderiza en el build con `react-dom/server` y el HTML completo (texto, FAQ, JSON-LD) llega a Google y a los rastreadores de IA sin ejecutar JavaScript; React se hidrata después para las animaciones, el canvas, el sonido y la descarga.

```bash
cd web
npm install
npm run dev        # desarrollo en http://localhost:5173 (sin prerender)
npm run build      # → web/dist (cliente + SSR + prerender de /, /descargar/ y 404)
npm run preview    # sirve web/dist en http://localhost:4173
npm run images     # regenera las variantes de imágenes (solo si cambian los originales en assets/)
```

Lighthouse móvil sobre `web/dist` (1 de octubre de 2026): accesibilidad 100, buenas prácticas 100, SEO 100 y rendimiento 99 con limitación simulada (la que usa PageSpeed Insights) o 100 con limitación real de red y CPU (`--throttling-method=devtools`). El punto restante es el LCP del titular en la simulación: Chrome solo lo cuenta cuando se pinta con Archivo, y la fuente (27 KB) viaja junto al HTML.

| Ruta | Qué es |
|---|---|
| `web/src/pages/Landing.tsx` | Estado `{ roleIdx, step, mmr, done, faq, sound }` y el efecto de montaje (reveals, rotación de rol, pasos, parallax, canvas, audio). |
| `web/src/sections/*.tsx` | Las secciones del diseño (Header, Hero, Trust, Problem, Offer, Route, Results, Faq, Closing, Footer), con los estilos inline del diseño original. |
| `web/src/data/faq.ts` | Las 9 preguntas: alimentan el acordeón y el JSON-LD `FAQPage`. |
| `web/src/sections/DiscordModal.tsx` | Modal de Legends Beta que abren los CTA de descarga y la constante `DISCORD_BETA` con la invitación (ver abajo). |
| `web/src/lib/release.ts` | Resolvedor del instalador en GitHub Releases. **Sin uso** mientras la descarga ocurra en Discord. |
| `web/src/lib/fx.ts` | Canvas del hero y motor de sonido (Web Audio), portados del diseño. |
| `web/src/seo.ts` | `<title>`, metadatos, Open Graph/Twitter y JSON-LD por ruta (`SoftwareApplication`, `Organization`, `WebSite`, `WebPage`, `FAQPage`, `BreadcrumbList`). |
| `web/src/styles.css` | CSS global del diseño (container queries, animaciones, `prefers-reduced-motion`). |
| `web/public/fonts/archivo-latin.woff2` | Archivo variable (400–900) reducida al subconjunto latino + español con `pyftsubset` (27 KB), alojada en el sitio y precargada desde `web/index.html`: sin peticiones a Google Fonts. Si se añaden caracteres fuera de ese rango, regenerar el subconjunto. |
| `web/src/pages/Descargar.tsx` | `/descargar/`: explica que la descarga ocurre en Discord y lleva al canal de Legends Beta. |
| `web/src/pages/NotFound.tsx` | `404.html`. |
| `web/public/` | `robots.txt` (con rastreadores de IA permitidos), `llms.txt`, `sitemap.xml`, `site.webmanifest`, `og-image.png`, favicons, `CNAME`, `.nojekyll` y las imágenes en `assets/`. |
| `web/prerender.mjs` | Genera el HTML estático de cada ruta a partir del bundle SSR e incrusta el CSS crítico. |
| `web/scripts/images.mjs` | `npm run images`: genera las variantes responsive (`srcset`) y los iconos pequeños a partir de `assets/` con sharp. |
| `web/scripts/html2jsx.py` | Conversor usado para portar `static/index.html` a `src/sections/*.tsx`; solo si se re-exporta el diseño. |
| `.github/workflows/deploy-pages.yml` | Instala, comprueba tipos, construye y publica `web/dist` en GitHub Pages en cada push a `main`. |

### Cómo funciona la descarga

El sitio no entrega el `.exe`: la descarga y las invitaciones a Legends Beta ocurren en Discord. Los CTA de descarga apuntan a la invitación del servidor de Discord "Legends Beta" (`DISCORD_BETA` en `web/src/sections/DiscordModal.tsx`): sin JavaScript abren Discord en otra pestaña; con JavaScript, un clic normal abre el modal de Legends Beta, que explica el acceso y lleva al canal. `/descargar/` cuenta lo mismo con un enlace directo al canal. Si la invitación de Discord cambia o vence, actualiza `DISCORD_BETA` y los enlaces de `web/public/llms.txt`.

Para volver a servir el instalador desde el sitio, `web/src/lib/release.ts` (hoy sin uso) resuelve el último `Legends_<version>_x64-setup.exe` de `github.com/legends-latam/desktop-legends-release` con la API pública de GitHub.

### Publicar en GitHub Pages

1. Crea el repositorio (por ejemplo `legends-latam/legendslatam.com`), sube esta carpeta y haz push a `main`.
2. En **Settings → Pages**, elige **Source: GitHub Actions**. El workflow construye `web/` y publica `web/dist`.
3. En **Settings → Pages → Custom domain** escribe `legendslatam.com` y activa **Enforce HTTPS** cuando el certificado esté listo.
4. DNS del dominio:
   - `A` en `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` en `@` → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` en `www` → `<usuario-u-org>.github.io` (GitHub redirige `www` al dominio raíz).
5. Verifica el dominio en **Settings → Pages** (o en la organización, **Settings → Pages → Verified domains**) para evitar que otro usuario lo reclame.
6. Tras el primer despliegue, envía `https://legendslatam.com/sitemap.xml` en Google Search Console **y en Bing Webmaster Tools** (ChatGPT Search y Copilot usan el índice de Bing).
