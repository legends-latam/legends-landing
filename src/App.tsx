import { Landing } from "./pages/Landing";
import { Descargar } from "./pages/Descargar";
import { NotFound } from "./pages/NotFound";
import "./styles.css";

/** Enrutado mínimo: tres páginas prerenderizadas, sin librería de rutas. */
export function App({ url }: { url: string }) {
  const path = url.replace(/[?#].*$/, "").replace(/\/+$/, "") || "/";
  if (path === "/") return <Landing />;
  if (path === "/descargar" || path === "/descargar/index.html") return <Descargar />;
  return <NotFound />;
}
