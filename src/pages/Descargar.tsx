import { DISCORD_BETA } from "../sections/DiscordModal";
import "./descargar.css";

/**
 * /descargar/ · el sitio ya no entrega el .exe: la descarga y la invitación a Legends Beta
 * ocurren en Discord. La página explica el acceso y lleva al canal (funciona sin JS).
 */
export function Descargar() {
  return (
    <div className="dlp">
      <header className="dlp-header">
        <div className="dlp-nav">
          <a className="dlp-brand" href="/" aria-label="Legends, volver al inicio">
            <img src="/assets/legends-logo-76.webp" alt="" width="76" height="76" />
            <span><b>Legends</b><small>Tu Coach AI Personal</small></span>
          </a>
          <a className="dlp-back" href="/">← Volver al inicio</a>
        </div>
      </header>

      <main className="dlp-main">
        <div className="dlp-tri dlp-tri-tl" aria-hidden="true"></div>
        <div className="dlp-tri dlp-tri-tr" aria-hidden="true"></div>
        <div className="dlp-tri dlp-tri-bl" aria-hidden="true"></div>
        <div className="dlp-wrap">
          <section className="dlp-panel" aria-labelledby="dlp-title">
            <span className="dlp-k">Legends Beta · gratis · Windows</span>
            <h1 id="dlp-title">Descarga <span>Legends</span> desde Discord</h1>
            <p className="dlp-lead">La descarga de Legends ocurre en nuestro canal de Discord. Únete a Legends Beta: por ese canal te enviaremos tu invitación y todo lo que necesitas para empezar.</p>
            <a className="dlp-cta" href={DISCORD_BETA} target="_blank" rel="noopener noreferrer">Unirme al Discord de Legends Beta ▸</a>
            <span className="dlp-meta">Windows 64 bits · descarga e invitación por Discord</span>
            <div className="dlp-chips" aria-label="Garantías">
              <span className="dlp-chip">✓ Gratis y sin trampas</span><span className="dlp-chip">0 FPS perdidos</span><span className="dlp-chip">No capturamos tus datos</span><span className="dlp-chip">Steam OpenID · sin contraseña</span>
            </div>
            <h2 className="dlp-k dlp-h2">Así empiezas</h2>
            <div className="dlp-steps">
              <div className="dlp-step"><span className="dlp-num">1</span><b>Únete al Discord</b><span>Entra al canal de Legends Beta con el botón de arriba. Se abre en una pestaña nueva.</span></div>
              <div className="dlp-step"><span className="dlp-num">2</span><b>Recibe tu invitación</b><span>Por ese canal te invitamos a Legends Beta y te llega el instalador para Windows.</span></div>
              <div className="dlp-step"><span className="dlp-num">3</span><b>Conecta Steam y entrena</b><span>Steam OpenID sin contraseña, hasta 5 replays y tu diagnóstico por rol en minutos.</span></div>
            </div>
          </section>
          <div className="dlp-art" aria-hidden="true">
            <div className="dlp-glow"></div>
            <span className="dlp-bubble">Watata · Te espero en Discord</span>
            <img className="dlp-watata" src="/assets/watata-celebra.webp" srcSet="/assets/watata-celebra-440.webp 440w, /assets/watata-celebra.webp 656w" sizes="(max-width: 720px) 219px, 321px" alt="" width="656" height="900" decoding="async" />
          </div>
        </div>
      </main>

      <footer className="dlp-footer"><div>© 2026 Legends. Dota 2 es una marca de Valve Corporation. Legends no está afiliado a Valve.</div></footer>
    </div>
  );
}
