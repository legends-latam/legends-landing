export function Footer() {
  return (
    <>
      {/* ===== FOOTER limpio · marca, redes y legal (sin menú de escape) ===== */}
      <footer style={{ position: "relative", padding: "36px 40px", background: "#0C0E11", borderTop: "1px solid rgba(255,255,255,.08)" }}>
        <div style={{ width: "100%", maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "18px" }}>
          <div className="foot" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img width="76" height="76" decoding="async" loading="lazy" src="/assets/legends-logo-76.webp" alt="" style={{ width: "36px", height: "36px", display: "block" }} />
              <span style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: "14px", fontWeight: "900", letterSpacing: "3px", textTransform: "uppercase", color: "#FFFFFF" }}>Legends</span><span style={{ fontSize: "9px", fontWeight: "700", letterSpacing: "1.6px", textTransform: "uppercase", color: "#52E000" }}>Tu Coach AI Personal</span></span>
            </div>
            <div className="social" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", color: "#8C929B", marginRight: "4px" }}>Síguenos</span>
              <a className="chip" href="https://www.tiktok.com/@legends.dsv" target="_blank" rel="noopener noreferrer" aria-label="Legends en TikTok, @legends.dsv" title="@legends.dsv" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "8px 14px", borderRadius: "999px", background: "#13171B", border: "1px solid rgba(255,255,255,.15)", color: "#FFFFFF", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#52E000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>TikTok</a>
              <a className="chip" href="https://www.youtube.com/@Legendsdsv" target="_blank" rel="noopener noreferrer" aria-label="Legends en YouTube, @Legendsdsv" title="@Legendsdsv" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "8px 14px", borderRadius: "999px", background: "#13171B", border: "1px solid rgba(255,255,255,.15)", color: "#FFFFFF", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#52E000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M10 8l6 4-6 4z"></path></svg>YouTube</a>
              <a className="chip" href="https://www.instagram.com/legends.dsv" target="_blank" rel="noopener noreferrer" aria-label="Legends en Instagram, @legends.dsv" title="@legends.dsv" style={{ display: "inline-flex", alignItems: "center", gap: "8px", minHeight: "44px", padding: "8px 14px", borderRadius: "999px", background: "#13171B", border: "1px solid rgba(255,255,255,.15)", color: "#FFFFFF", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#52E000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><circle cx="12" cy="13" r="3.5"></circle></svg>Instagram</a>
            </div>
          </div>
          <span style={{ fontSize: "11px", lineHeight: "1.5", color: "#8C929B" }}>© 2026 Legends. Dota 2 y Deadlock son marcas de Valve Corporation; League of Legends de Riot Games; Fortnite de Epic Games. Legends no está afiliado a ninguna de ellas. <a href="#" style={{ color: "#8C929B", textDecoration: "underline" }}>Privacidad</a> · <a href="#" style={{ color: "#8C929B", textDecoration: "underline" }}>Términos</a></span>
        </div>
      </footer>
    </>
  );
}
