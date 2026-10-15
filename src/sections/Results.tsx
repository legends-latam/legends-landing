import { fmtMmr } from "../lib/ui";

export function Results({ mmr }: { mmr: number }) {
  return (
    <>
      {/* ===== 5 · PRUEBA SOCIAL ===== */}
      <section id="resultados" className="sec" style={{ position: "relative", overflow: "hidden", padding: "112px 40px", background: "#0F1216" }}>
        <div className="w-res" aria-hidden="true" style={{ position: "absolute", right: "0", top: "0", width: "22%", height: "min(30%, 300px)", background: "#52E000", clipPath: "polygon(40% 0, 100% 0, 100% 100%)", pointerEvents: "none" }}></div>
        <div style={{ position: "relative", width: "100%", maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "36px" }}>
          <div className="sec-head rv" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "32px", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2.4px", textTransform: "uppercase", color: "#52E000" }}>Prueba social · resultados reales</span>
              <h2 className="h2" style={{ margin: "0", fontSize: "46px", lineHeight: "1.02", fontWeight: "900", letterSpacing: "-.5px", textTransform: "uppercase", color: "#FFFFFF" }}>Lo que pasa cuando entrenas con un plan</h2>
            </div>
            <p className="lead" style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#C9CED6" }}>Jugar más no es entrenar. Con un diagnóstico por rol y una ruta semanal, cada partida suma hacia algo concreto. Capturas reales de la app, sin retoques.</p>
          </div>

          <div className="cols3" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: "14px", alignItems: "stretch" }}>
            <div className="card rv res-main" data-count="1" style={{ "--d": ".05s", position: "relative", overflow: "hidden", background: "#13171B", border: "1px solid rgba(82,224,0,.55)", borderRadius: "18px", padding: "30px", display: "flex", flexDirection: "column", gap: "14px", boxShadow: "0 0 60px rgba(82,224,0,.12)" }}>
              <div aria-hidden="true" style={{ position: "absolute", right: "-40px", top: "-40px", width: "220px", height: "220px", borderRadius: "999px", background: "radial-gradient(circle, rgba(82,224,0,.22) 0%, rgba(82,224,0,0) 70%)", pointerEvents: "none" }}></div>
              <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2.4px", textTransform: "uppercase", color: "#52E000" }}>Resultado real · Diego</span>
              <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                <span className="big" style={{ fontSize: "92px", fontWeight: "900", lineHeight: ".9", letterSpacing: "-3px", color: "#52E000", textShadow: "0 0 30px rgba(82,224,0,.35)" }}>+<span>{fmtMmr(mmr)}</span></span>
                <span style={{ fontSize: "16px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", color: "#FFFFFF" }}>MMR</span>
              </div>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#E6E9ED" }}>Diego mejoró <strong style={{ color: "#FFFFFF" }}>1200 MMR en 3 meses</strong> jugando y utilizando Legends.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "6px" }}>
                <div style={{ height: "10px", borderRadius: "999px", background: "rgba(255,255,255,.06)", overflow: "hidden" }}><div className="fill" style={{ "--w": "100%", "--fd": ".4s", height: "100%", borderRadius: "999px", background: "linear-gradient(90deg, #3EA903, #52E000, #6EF21C)" }}></div></div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#8C929B" }}><span>Mes 1</span><span style={{ textAlign: "center" }}>Mes 2</span><span style={{ textAlign: "right" }}>Mes 3 · +1200 ▲</span></div>
              </div>
              <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: "9px" }}>
                <span style={{ padding: "7px 10px", borderRadius: "10px", background: "rgba(82,224,0,.1)", border: "1px solid rgba(82,224,0,.45)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>Jugando</span>
                <span style={{ padding: "7px 10px", borderRadius: "10px", background: "rgba(82,224,0,.1)", border: "1px solid rgba(82,224,0,.45)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>+ Legends</span>
                <span style={{ padding: "7px 10px", borderRadius: "10px", background: "rgba(82,224,0,.1)", border: "1px solid rgba(82,224,0,.45)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>3 meses</span>
              </div>
            </div>
            <div className="card rv" style={{ "--d": ".12s", background: "#191E24", border: "1px solid rgba(255,255,255,.1)", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2.4px", textTransform: "uppercase", color: "#52E000" }}>Caso real en la app · Stephano · Pos 2 · Divine II</span>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px" }}><span className="ph" style={{ fontSize: "56px", fontWeight: "900", lineHeight: ".9", letterSpacing: "-2px", color: "#FFFFFF", whiteSpace: "nowrap" }}>72</span><span style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", color: "#C9CED6" }}>Mid Score · récord personal ▲</span></div>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#C9CED6" }}>«Dominaste la lane: 127 last hits, 531 XPM, supervivencia perfecta y una ventaja clara sobre Ember Spirit. El siguiente salto es capitalizar ese inicio.» <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#52E000" }}>— Watata · Modo Coach</span></p>
              <span style={{ marginTop: "auto", fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#8C929B" }}>DML 90 · PPD 80 · TIC 45 · Storm Spirit · 22 jun</span>
            </div>
            <div className="card rv" style={{ "--d": ".19s", background: "#191E24", border: "1px solid rgba(255,255,255,.1)", borderRadius: "18px", padding: "26px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2.4px", textTransform: "uppercase", color: "#52E000" }}>Caso real en la app · Pos 5 · Hard Support</span>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px" }}><span className="ph" style={{ fontSize: "56px", fontWeight: "900", lineHeight: ".9", letterSpacing: "-2px", color: "#FFFFFF", whiteSpace: "nowrap" }}>87</span><span style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", color: "#C9CED6" }}>DVW · nivel Élite · 35 wards</span></div>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#C9CED6" }}>«En esta victoria tu presencia en peleas fue de 100 % y colocaste 35 wards, pero la safelane quedó frenada: ahí está tu mayor ganancia.» <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#52E000" }}>— Watata · Analizar</span></p>
              <span style={{ marginTop: "auto", fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#8C929B" }}>Victoria · PPD 88 · DVW 87 · brecha detectada: IHS 12 · Witch Doctor</span>
            </div>
          </div>

          <div className="cols2" style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: "14px", alignItems: "stretch" }}>
            <div className="card rv" style={{ "--d": ".08s", background: "#13171B", border: "1px solid rgba(255,255,255,.1)", borderRadius: "18px", padding: "28px", display: "flex", flexDirection: "column", gap: "18px" }}>
              <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2.4px", textTransform: "uppercase", color: "#52E000" }}>Captura real de la app · Pos 2 · Storm Spirit · 22 jun</span>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "22px" }}>
                <div className="scoretile" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 18px", borderRadius: "12px", background: "#52E000", color: "#0C0E11", boxShadow: "0 0 40px rgba(82,224,0,.3)" }}>
                  <span className="n" style={{ fontSize: "52px", fontWeight: "900", lineHeight: ".9", letterSpacing: "-2px" }}>72</span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}><span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase" }}>Mid score</span><span style={{ fontSize: "10px", fontWeight: "600" }}>récord personal ▲</span></span>
                </div>
                <div className="gauge" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="27" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="6"></circle><circle className="val" cx="32" cy="32" r="27" fill="none" stroke="#52E000" strokeWidth="6" strokeLinecap="round" strokeDasharray="169.6" transform="rotate(-90 32 32)" style={{ "--off": "16.96" }}></circle></svg>
                  <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}><span style={{ fontSize: "26px", fontWeight: "900", lineHeight: "1", color: "#FFFFFF" }}>90</span><span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "1.4px", textTransform: "uppercase", color: "#8C929B" }}>DML · Dominio de la mid lane</span></span>
                </div>
                <div className="gauge" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="27" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="6"></circle><circle className="val" cx="32" cy="32" r="27" fill="none" stroke="#52E000" strokeWidth="6" strokeLinecap="round" strokeDasharray="169.6" transform="rotate(-90 32 32)" style={{ "--off": "33.92" }}></circle></svg>
                  <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}><span style={{ fontSize: "26px", fontWeight: "900", lineHeight: "1", color: "#FFFFFF" }}>80</span><span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "1.4px", textTransform: "uppercase", color: "#8C929B" }}>PPD · Presencia en peleas</span></span>
                </div>
                <div className="gauge" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="27" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="6"></circle><circle className="val" cx="32" cy="32" r="27" fill="none" stroke="#F5DD1F" strokeWidth="6" strokeLinecap="round" strokeDasharray="169.6" transform="rotate(-90 32 32)" style={{ "--off": "93.28" }}></circle></svg>
                  <span style={{ display: "flex", flexDirection: "column", gap: "3px" }}><span style={{ fontSize: "26px", fontWeight: "900", lineHeight: "1", color: "#FFFFFF" }}>45 ▼</span><span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "1.4px", textTransform: "uppercase", color: "#8C929B" }}>TIC · Timing de item core</span></span>
                </div>
              </div>
              <p style={{ margin: "0", fontSize: "13.5px", lineHeight: "1.55", color: "#C9CED6" }}>Cada KPI viene con su desglose: pesos por fase, benchmark de tu héroe y rango, y la partida de origen. El color nunca es la única señal: siempre va con el número y una flecha ▲/▼.</p>
            </div>
            <div className="card rv share" style={{ "--d": ".16s", background: "#13171B", border: "1px solid rgba(255,255,255,.1)", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2.4px", textTransform: "uppercase", color: "#52E000" }}>Extracto para compartir</span>
              <div className="float" style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(82,224,0,.4)", boxShadow: "0 20px 50px rgba(0,0,0,.5)" }}><img width="683" height="256" decoding="async" loading="lazy" src="/assets/crop-share.webp" alt="Tarjeta para compartir: 72 Carry Score, Stephano, Hard Carry Pos 1" style={{ width: "100%", display: "block", height: "auto" }} /></div>
              <p style={{ margin: "0", fontSize: "13.5px", lineHeight: "1.55", color: "#C9CED6" }}>Tu score en una tarjeta lista para Discord, TikTok o Instagram. Presume el récord, no el pay to win.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
