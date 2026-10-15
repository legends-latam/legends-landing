import "./notfound.css";

/** 404.html · GitHub Pages la sirve para cualquier ruta inexistente. */
export function NotFound() {
  return (
    <div className="nfp">
      <div className="nfp-tri nfp-tl" aria-hidden="true"></div>
      <div className="nfp-tri nfp-tr" aria-hidden="true"></div>
      <div className="nfp-tri nfp-bl" aria-hidden="true"></div>
      <main className="nfp-panel">
        <span className="nfp-k">Error 404 · página no encontrada</span>
        <h1>Esta ruta no existe en el mapa</h1>
        <div className="nfp-w">
          <img src="/assets/watata-explica-160.webp" alt="" width="160" height="215" />
          <p>«Tranquilo: perderse pasa. Vuelve al inicio o descarga Legends y empezamos tu ruta.» <span className="nfp-k nfp-sig">— Watata</span></p>
        </div>
        <div className="nfp-row">
          <a className="nfp-p" href="/">Ir al inicio ▸</a>
          <a className="nfp-s" href="/descargar/">Descargar Legends</a>
        </div>
      </main>
    </div>
  );
}
