// Prerenderiza cada ruta a HTML estático dentro de dist/ (lo que publica GitHub Pages).
// Se ejecuta después de `vite build` (cliente) y `vite build --ssr` (servidor).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(here, "dist");
let template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

// CSS inline: el bundle de estilos es pequeño (~4 KB gzip) y así no bloquea el primer render.
template = template.replace(/<link rel="stylesheet"[^>]*href="(\/_app\/[^"]+\.css)"[^>]*>/g, (_, href) => {
  const css = fs.readFileSync(path.join(dist, href), "utf8");
  return `<style>${css}</style>`;
});
// El bundle solo añade interactividad (el HTML ya está completo y los enlaces funcionan sin JS):
// prioridad baja para que no compita con la fuente ni con las imágenes del hero.
template = template.replace(/<script type="module" crossorigin src="(\/_app\/[^"]+\.js)"><\/script>/, '<script type="module" crossorigin fetchpriority="low" src="$1"></script>');

const { render } = await import(pathToFileURL(path.join(dist, "server", "entry-server.js")).href);

const routes = [
  ["/", "index.html"],
  ["/descargar/", path.join("descargar", "index.html")],
  ["/404", "404.html"],
];

for (const [url, file] of routes) {
  const { html, head } = render(url);
  const page = template.replace("<!--app-head-->", head).replace("<!--app-html-->", html);
  const out = path.join(dist, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page);
  console.log(`prerender ${url} → dist/${file} (${(page.length / 1024).toFixed(1)} KB)`);
}

fs.rmSync(path.join(dist, "server"), { recursive: true, force: true });
