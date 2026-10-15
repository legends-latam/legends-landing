import { DISCORD_BETA } from "./DiscordModal";

export function Closing() {
  return (
    <>
      {/* ===== 7 · CIERRE ===== */}
      <section id="descargar" className="sec" style={{ position: "relative", overflow: "hidden", padding: "96px 40px", background: "#0F1216" }}>
        <div className="w-cta" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "44%", height: "100%", background: "#52E000", clipPath: "polygon(0 0, 100% 0, 64% 100%, 0 100%)", pointerEvents: "none" }}></div>
        <div className="w-cta-br" aria-hidden="true" style={{ position: "absolute", right: "0", bottom: "0", width: "18%", height: "min(30%, 220px)", background: "#52E000", clipPath: "polygon(100% 0, 100% 100%, 0 100%)", pointerEvents: "none" }}></div>
        <div className="cta-grid rv" style={{ position: "relative", width: "100%", maxWidth: "1280px", margin: "0 auto", background: "#13171B", border: "1px solid rgba(82,224,0,.5)", borderRadius: "18px", overflow: "hidden", display: "grid", gridTemplateColumns: "1.2fr .8fr", boxShadow: "0 40px 90px rgba(0,0,0,.6)" }}>
          <div className="cta-text" style={{ padding: "56px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2.4px", textTransform: "uppercase", color: "#52E000" }}>Último paso · gratis · Windows</span>
            <h2 className="h2" style={{ margin: "0", fontSize: "46px", lineHeight: "1.02", fontWeight: "900", letterSpacing: "-.5px", textTransform: "uppercase", color: "#FFFFFF" }}>Tu ruta te espera.</h2>
            <p className="lead" style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#C9CED6" }}>Descarga Legends, conecta tu Steam y sube tus primeros replays. En minutos tienes tu diagnóstico, tus 3 brechas y tu primer desafío de la semana.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
              <a className="btn-p pulse cta-main dl" href={DISCORD_BETA} target="_blank" rel="noopener noreferrer" aria-haspopup="dialog" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "56px", padding: "18px 30px", borderRadius: "10px", background: "#52E000", color: "#0C0E11", fontSize: "14px", fontWeight: "800", letterSpacing: "1.8px", textTransform: "uppercase", whiteSpace: "nowrap" }}>Descargar gratis para Windows ▸</a>
              <span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "1.6px", textTransform: "uppercase", color: "#8C929B" }}>Sin formularios · sin tarjeta · sin Pay to Win</span>
              <span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "1.6px", textTransform: "uppercase", color: "#8C929B" }}>Windows 64 bits · descarga vía Discord · Legends Beta</span>
            </div>
            <div className="cta-chips" style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
              <span style={{ padding: "8px 11px", borderRadius: "10px", background: "#0C0E11", border: "1px solid rgba(255,255,255,.15)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>✓ Gratis y sin trampas</span>
              <span style={{ padding: "8px 11px", borderRadius: "10px", background: "#0C0E11", border: "1px solid rgba(255,255,255,.15)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>0 FPS perdidos</span>
              <span style={{ padding: "8px 11px", borderRadius: "10px", background: "#0C0E11", border: "1px solid rgba(255,255,255,.15)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>No capturamos tus datos</span>
              <span style={{ padding: "8px 11px", borderRadius: "10px", background: "#0C0E11", border: "1px solid rgba(255,255,255,.15)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>Seguridad 100 %</span>
            </div>
          </div>
          <div className="cta-art" style={{ position: "relative", minHeight: "420px", background: "#0C0E11", overflow: "hidden" }}>
            <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: "56%", width: "360px", height: "360px", transform: "translate(-50%, -50%)", borderRadius: "999px", background: "radial-gradient(circle, rgba(82,224,0,.4) 0%, rgba(82,224,0,0) 70%)", pointerEvents: "none" }}></div>
            <span style={{ position: "absolute", zIndex: "2", left: "50%", top: "20px", transform: "translateX(-50%)", padding: "9px 12px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(82,224,0,.5)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#6EF21C", whiteSpace: "nowrap" }}>Watata · ¡Vamos a por esa racha!</span>
            <img width="613" height="900" decoding="async" srcSet="/assets/watata-senala-360.webp 360w, /assets/watata-senala-520.webp 520w, /assets/watata-senala.webp 613w" sizes="(max-width: 720px) 123px, 259px" loading="lazy" className="cta-watata wpop" src="/assets/watata-senala.webp" alt="Watata señalándote: tu ruta te espera" style={{ position: "absolute", left: "50%", bottom: "-4px", transform: "translateX(-50%)", height: "380px", width: "auto", display: "block", filter: "drop-shadow(0 20px 30px rgba(0,0,0,.6))" }} />
          </div>
        </div>
      </section>
    </>
  );
}
