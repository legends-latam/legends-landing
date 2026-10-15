import { renderToString } from "react-dom/server";
import { App } from "./App";
import { headFor } from "./seo";

/** Usado por prerender.mjs: HTML del body y etiquetas del <head> para cada ruta. */
export function render(url: string): { html: string; head: string } {
  return { html: renderToString(<App url={url} />), head: headFor(url) };
}
