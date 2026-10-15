import { cls } from "../lib/ui";
import { DISCORD_BETA } from "./DiscordModal";

export function Header({ sound, toggleSound }: { sound: boolean; toggleSound: () => void }) {
  return (
    <>
      {/* ===== NAV · solo marca + un CTA (sin menú de navegación) ===== */}
      <header style={{ position: "sticky", top: "0", zIndex: "50", background: "rgba(12,14,17,.84)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
        <div className="navin" style={{ width: "100%", maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "14px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#FFFFFF" }}>
            <img width="76" height="76" decoding="async" src="/assets/legends-logo-76.webp" alt="Legends" style={{ width: "38px", height: "38px", display: "block" }} />
            <span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "15px", fontWeight: "900", letterSpacing: "3px", textTransform: "uppercase" }}>Legends</span><span className="nav-sub" style={{ fontSize: "9px", fontWeight: "700", letterSpacing: "1.6px", textTransform: "uppercase", color: "#52E000" }}>Tu Coach AI Personal</span></span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button type="button" className={cls("snd", sound)} onClick={toggleSound} aria-pressed={sound} aria-label="Activar o silenciar el sonido del sitio" style={{ display: "inline-flex", alignItems: "center", gap: "9px", minHeight: "44px", padding: "8px 13px", borderRadius: "999px", background: "#0C0E11", border: "1px solid rgba(255,255,255,.15)", color: "#C9CED6", cursor: "pointer", fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase" }}>
              <span className="eq" aria-hidden="true" style={{ display: "inline-flex", alignItems: "flex-end", gap: "2px", height: "14px" }}><span style={{ display: "block", width: "3px", height: "14px", background: "currentColor", borderRadius: "1px" }}></span><span style={{ display: "block", width: "3px", height: "14px", background: "currentColor", borderRadius: "1px" }}></span><span style={{ display: "block", width: "3px", height: "14px", background: "currentColor", borderRadius: "1px" }}></span><span style={{ display: "block", width: "3px", height: "14px", background: "currentColor", borderRadius: "1px" }}></span></span>
              <span className="snd-label"><span>{sound ? "Sonido on" : "Sonido off"}</span></span>
            </button>
            
            <a className="btn-p dl" href={DISCORD_BETA} target="_blank" rel="noopener noreferrer" aria-haspopup="dialog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "12px 18px", borderRadius: "10px", background: "#52E000", color: "#0C0E11", fontSize: "11px", fontWeight: "800", letterSpacing: "1.8px", textTransform: "uppercase", whiteSpace: "nowrap" }}>Descargar<span className="nav-long"> gratis</span> ▸</a>
          </div>
        </div>
      </header>
    </>
  );
}
