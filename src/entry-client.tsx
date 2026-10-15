import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("app")!;
const app = <App url={window.location.pathname} />;

// En producción el HTML viene prerenderizado y se hidrata; en `vite dev` se renderiza desde cero.
// El HTML ya está pintado: la hidratación (animaciones, canvas, sonido, modal de Discord) puede esperar al idle.
const start = () => { if (container.hasChildNodes()) hydrateRoot(container, app); else createRoot(container).render(app); };
if (container.hasChildNodes() && "requestIdleCallback" in window) window.requestIdleCallback(start, { timeout: 1500 });
else start();
