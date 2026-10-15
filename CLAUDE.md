# Legends · Landing page — brief para Claude Code

Este paquete es el handoff del diseño de la landing de **Legends (Tu Coach AI Personal para Dota 2)**, hecho en Claude Design con el design system "Legends". Tu trabajo es convertirlo en un sitio real, manteniendo el diseño píxel a píxel y todas las interacciones.

## Qué hay en la carpeta

| Ruta | Qué es |
|---|---|
| `static/index.html` | **Referencia funcional completa.** HTML + CSS + JS vanilla, sin dependencias. Ábrelo en un navegador: tiene todas las animaciones, el fondo canvas, el sonido y la interactividad. Es la fuente de verdad del comportamiento. |
| `design/Main.dc.html` | El artboard original del canvas (plantilla del runtime de Claude Design, ver "Cómo leer el .dc.html"). |
| `design/Mobile.dc.html` | Artboard móvil: solo monta `Main.dc.html` a 430 px. No tiene contenido propio. |
| `design/canvas.json` | Índice del canvas (tamaños de artboards: escritorio 1440 × 7400, móvil 430 × 8000). |
| `design/tokens.json` | Tokens del design system Legends (colores HSL, tipografía, radios, sombras, formas diagonales). |
| `assets/` | Logo, 4 poses de Watata (WebP con alpha), capturas y recortes de la app (WebP). `assets/manifest.json` mapea las URLs `/_blob/<id>` del diseño a cada archivo. |

## Stack sugerido

Vite + React + TypeScript + Tailwind, igual que la app de Legends (`desktop-legends`, ver `tokens.json › meta`). Si la landing va a vivir dentro del repo de la app, reutiliza sus tokens de `src/index.css` / `tailwind.config.ts` y sus átomos (`NeonButton`, `StatChip`, `Kicker`, `MeterBar`, `LegendsBrand`, `WatataAvatar`). Si es un repo aparte, define los tokens de `design/tokens.json` como variables CSS/Tailwind. Un sitio estático (Astro o HTML plano) también sirve: el `static/index.html` ya es desplegable tal cual.

## Reglas de diseño que no se negocian

- **Solo oscuro.** Fondo `#0C0E11`, paneles `#13171B`, tarjetas `#191E24`, tarjeta interior `#242B33`. Verde de marca `#52E000` (hsl 98 100% 44%); hover y texto verde pequeño `#6EF21C`; amarillo `#F5DD1F` (recompensas, rol activo); rojo `#F0564B` (solo estados negativos); azul `#8A93F0`.
- **Sobre verde el texto es siempre `#0C0E11`, nunca blanco.** Nunca texto directamente sobre los triángulos verdes del fondo: el contenido va en paneles opacos.
- **Tipografía:** Archivo (Google Fonts, 400–900). Títulos, kickers, botones y chips en MAYÚSCULAS con peso 800–900; kickers 11 px con tracking 2.4 px; cuerpo 13.5–16 px.
- **Radios:** paneles 18 px, tarjetas 16 px, burbujas 12–14 px, botones y chips 10 px, píldoras 999 px.
- **Diagonales:** triángulos verdes en esquinas opuestas (`clip-path`), un triángulo `#181C20` arriba a la izquierda; en móvil se reubican o se ocultan para que nunca queden bajo texto (ver el `@container (max-width: 720px)` del CSS).
- **Voz:** español neutro, tuteo; Watata (el gato con headset) habla en primera persona. Glifos tipográficos `· ▲ ▼ ▸ ✓ ✕ →`, sin emoji.
- **Estructura (framework de conversión, un solo CTA):** 1 hero con beneficio + subtítulo + CTA "Descargar gratis para Windows" → 2 autoridad y confianza (cinta + 6 cifras) → 3 problema (dolores + panel sin/con Legends) → 4 oferta (8 beneficios, cómo funciona en 3 pasos, chat con Watata, ruta semanal gamificada) → 5 prueba social (Diego +1.200 MMR y dos casos reales de la app) → 6 FAQ acordeón (9 preguntas) → 7 cierre con CTA y footer sin enlaces de escape. No agregues menú de navegación: la barra superior solo lleva marca, toggle de sonido y el CTA.

## Interactividad a replicar (todo está implementado en `static/index.html`)

1. **Hero:** palabra de rol que rota cada 2,6 s (Midlaner → Carry → Offlaner → Support); escena 3D con `perspective` que sigue el mouse (`--mx`, `--my`), tarjetas flotantes (`ccFloat` 3,6 s), parallax leve con el scroll (`--sy`), fondo `<canvas>` 2D con piso en perspectiva neón, haces de luz y partículas (pausado fuera de pantalla y con `document.hidden`).
2. **Reveal al hacer scroll:** elementos `.rv` / `.rv-x` entran con `IntersectionObserver` (umbral 0,08) y retardo `--d`. Sin JS todo queda visible (las reglas cuelgan de `.lp.js`).
3. **Cómo funciona:** 3 pasos; avanza solo cada 5,2 s (barra de progreso `stepBar`), el clic fija un paso y pausa el avance 15 s; la captura hace crossfade (`.shot.on`) con un zoom lento.
4. **Desafío de la ruta:** botón "Completar desafío" → estado `done`: la barra de XP pasa de 68 % a 74 %, el contador de 340 a 370 XP, aparece "¡Nodo completado! +30 XP" con el `+30 XP` flotando (`xpFloat`).
5. **Prueba social:** el "+1.200" cuenta de 0 a 1.200 (easing cúbico, 1,7 s) al entrar en pantalla; la barra de meses y los anillos de KPI (DML 90, PPD 80, TIC 45) se animan con `stroke-dashoffset`.
6. **FAQ:** acordeón de un abierto a la vez (`.faq.open`, `max-height`), chevron rotado, `aria-expanded`.
7. **Sonido (Web Audio, sin archivos):** toggle en la barra con ecualizador animado; apagado por defecto y recordado en `localStorage('lg-sound')`. Sonidos: blip al pasar por botones/tarjetas/pasos/preguntas, clic en los CTA, whoosh al cambiar de paso, pop al abrir/cerrar FAQ, ticks durante el contador, arpegio de "subida de nivel" al completar el desafío, tono suave al revelar cada título de sección, y un colchón ambiental muy bajo solo mientras el hero está visible. El audio solo arranca tras un gesto del usuario (política de autoplay).
8. **`prefers-reduced-motion`:** apaga flotaciones, parallax, rotación de rol, barra de pasos y el ecualizador; los reveals aparecen sin transición.

## Responsive

El diseño usa **container queries** sobre el root (`container-type: inline-size`): `@container (max-width: 1120px)` apila las grillas y `@container (max-width: 720px)` compacta todo para móvil (oculta chips secundarios, cuerpos de tarjeta, imágenes de apoyo; cambia tamaños). Al convertirlo a un sitio, puedes pasarlas a `@media` con los mismos puntos de corte. El móvil fue diseñado y validado a 430 px de ancho.

## Cómo leer el `.dc.html`

Es el mismo HTML, pero con bindings de plantilla: `{{hole}}` es un valor que devuelve `renderVals()` de la clase `Component` (al final del archivo); `class="{{st1}}"` es una clase calculada; `onClick="{{pick1}}"` un handler; `<sc-if value="{{done}}">` un bloque condicional. `static/index.html` ya resolvió todo eso con atributos `data-dc-*` y un runtime mínimo (`DCLogic`), así que para portar a React: el estado es `{ roleIdx, step, paused, mmr, done, faq, sound }`, `renderVals()` es el equivalente del render y los métodos `initCanvas`, `initAudio/sfx/ambient`, `countUp`, `pickStep`, `toggleFaq`, `complete`, `toggleSound` se copian casi tal cual a hooks/efectos.

## Pendientes de contenido (no inventar)

- Enlace real de descarga en los dos CTA (hoy `#descargar` y `#`).
- Enlaces de Privacidad y Términos del footer (hoy `#`). Las redes ya están enlazadas: TikTok https://www.tiktok.com/@legends.dsv · YouTube https://www.youtube.com/@Legendsdsv · Instagram https://www.instagram.com/legends.dsv. Los iconos del diseño son genéricos (nota musical, play, cámara); si quieres los logotipos oficiales, usa los kits de marca de cada plataforma o un paquete como `simple-icons` respetando sus guías de uso.
- Si hay más jugadores con subida de MMR, agrégalos en la prueba social; los dos casos actuales son capturas reales de la app (Stephano Pos 2 · Mid Score 72 y Pos 5 · DVW 87). No escribir testimonios inventados.
- El FAQ afirma que Legends corre en Windows; confirmar antes de publicar.

## Criterios de aceptación

- Lighthouse: rendimiento ≥ 90 en móvil (sin librerías 3D; canvas 2D y CSS), carga < 2,5 s.
- Sin dependencias externas salvo Google Fonts (Archivo). Imágenes como WebP con `loading="lazy"` fuera del hero.
- Accesible: botones reales, `aria-expanded`/`aria-pressed`, foco visible verde, contraste ≥ 4,5:1 en texto.
- Funciona sin JS (contenido visible) y respeta `prefers-reduced-motion`.

## Sitio publicable (`web/`)

`web/` es la landing real: React + Vite + TypeScript **prerenderizada a HTML estático** (`npm run build` → `web/dist`) y publicada en GitHub Pages con el dominio `legendslatam.com`. `static/index.html` queda como referencia de diseño; **la fuente de verdad del sitio es `web/src`**. Las secciones (`web/src/sections/*.tsx`) conservan los estilos inline del diseño; el CSS global vive en `web/src/styles.css` (las reglas que dependen de JS cuelgan de `html.js`, clase que pone un script inline en `web/index.html`, así sin JavaScript todo queda visible). El estado y los efectos están en `web/src/pages/Landing.tsx`; el canvas y el audio en `web/src/lib/fx.ts`; el SEO/JSON-LD por ruta en `web/src/seo.ts`; las FAQ en `web/src/data/faq.ts` (alimentan el acordeón y el `FAQPage`). **El sitio no entrega el `.exe`: la descarga ocurre en Discord.** Los CTA de descarga apuntan a la invitación del servidor "Legends Beta" (constante `DISCORD_BETA` en `web/src/sections/DiscordModal.tsx`); con JS, el clic abre ese modal (`<dialog>` nativo) en lugar de navegar, y `/descargar/` lleva directo al canal. `web/src/lib/release.ts` (resolvedor del instalador en GitHub Releases) queda sin uso, por si se vuelve a servir la descarga desde el sitio. La fuente Archivo está alojada en `web/public/fonts/` (variable, latino) y declarada en `web/index.html`; no se usa Google Fonts en el sitio publicado. Para buscadores de IA: `web/public/robots.txt` permite sus rastreadores y `web/public/llms.txt` resume el producto; mantenlo al día si cambia el contenido. Ver README para DNS y despliegue.
