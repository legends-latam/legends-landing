export function Trust() {
  return (
    <>
      {/* ===== 2 · AUTORIDAD Y CONFIANZA ===== */}
      <div aria-hidden="true" style={{ position: "relative", overflow: "hidden", background: "#52E000", color: "#0C0E11", padding: "14px 0", borderTop: "1px solid rgba(0,0,0,.15)", borderBottom: "1px solid rgba(0,0,0,.15)" }}>
        <div className="mq-track" style={{ display: "flex", gap: "40px", width: "max-content", whiteSpace: "nowrap", fontSize: "12px", fontWeight: "900", letterSpacing: "2.6px", textTransform: "uppercase" }}>
          <span>Gratis y sin trampas</span><span>·</span><span>No Pay to Win</span><span>·</span><span>No reduce tus FPS</span><span>·</span><span>No + ping</span><span>·</span><span>No capturamos tus datos</span><span>·</span><span>+50 métricas por replay</span><span>·</span><span>Plan de entrenamiento por rol</span><span>·</span><span>Transparencia total</span><span>·</span><span>Seguridad 100 %</span><span>·</span>
          <span>Gratis y sin trampas</span><span>·</span><span>No Pay to Win</span><span>·</span><span>No reduce tus FPS</span><span>·</span><span>No + ping</span><span>·</span><span>No capturamos tus datos</span><span>·</span><span>+50 métricas por replay</span><span>·</span><span>Plan de entrenamiento por rol</span><span>·</span><span>Transparencia total</span><span>·</span><span>Seguridad 100 %</span><span>·</span>
        </div>
      </div>
      <section id="confianza" className="sec" style={{ position: "relative", overflow: "hidden", padding: "72px 40px", background: "#0F1216" }}>
        <div style={{ position: "relative", width: "100%", maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "28px" }}>
          <div className="rv" style={{ display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "space-between", gap: "16px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2.4px", textTransform: "uppercase", color: "#52E000" }}>Confianza · lo que puedes verificar dentro de la app</span>
              <h2 className="h2" style={{ margin: "0", fontSize: "34px", lineHeight: "1.04", fontWeight: "900", letterSpacing: "-.4px", textTransform: "uppercase", color: "#FFFFFF" }}>Hecho sobre tus replays, no sobre promesas</h2>
            </div>
            <div className="trust-chips" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ padding: "8px 11px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(255,255,255,.15)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>Legends Analyzer · replays .dem</span>
              <span style={{ padding: "8px 11px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(255,255,255,.15)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>Benchmarks por rango y rol</span>
              <span style={{ padding: "8px 11px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(82,224,0,.5)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#52E000" }}>Steam OpenID · sin contraseña</span>
            </div>
          </div>
          <div className="grid6" style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "12px" }}>
            <div className="stat card rv" style={{ "--d": ".04s", background: "#13171B", border: "1px solid rgba(255,255,255,.1)", borderRadius: "14px", padding: "20px 18px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <span className="n" style={{ fontSize: "40px", fontWeight: "900", lineHeight: ".95", letterSpacing: "-1.5px", color: "#52E000" }}>+50</span>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#FFFFFF" }}>Métricas por replay</span>
              <span className="sl" style={{ fontSize: "12px", lineHeight: "1.45", color: "#8C929B" }}>GPM, XPM, timings, teamfights, visión</span>
            </div>
            <div className="stat card rv" style={{ "--d": ".08s", background: "#13171B", border: "1px solid rgba(255,255,255,.1)", borderRadius: "14px", padding: "20px 18px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <span className="n" style={{ fontSize: "40px", fontWeight: "900", lineHeight: ".95", letterSpacing: "-1.5px", color: "#52E000" }}>3</span>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#FFFFFF" }}>KPIs por rol</span>
              <span className="sl" style={{ fontSize: "12px", lineHeight: "1.45", color: "#8C929B" }}>cada uno con su cálculo a la vista</span>
            </div>
            <div className="stat card rv" style={{ "--d": ".12s", background: "#13171B", border: "1px solid rgba(255,255,255,.1)", borderRadius: "14px", padding: "20px 18px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <span className="n" style={{ fontSize: "40px", fontWeight: "900", lineHeight: ".95", letterSpacing: "-1.5px", color: "#52E000" }}>5</span>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#FFFFFF" }}>Replays por calibración</span>
              <span className="sl" style={{ fontSize: "12px", lineHeight: "1.45", color: "#8C929B" }}>escaneo automático o carga manual</span>
            </div>
            <div className="stat card rv" style={{ "--d": ".16s", background: "#13171B", border: "1px solid rgba(255,255,255,.1)", borderRadius: "14px", padding: "20px 18px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <span className="n" style={{ fontSize: "40px", fontWeight: "900", lineHeight: ".95", letterSpacing: "-1.5px", color: "#F5DD1F" }}>0</span>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#FFFFFF" }}>FPS perdidos · 0 ping</span>
              <span className="sl" style={{ fontSize: "12px", lineHeight: "1.45", color: "#8C929B" }}>el análisis corre fuera de la partida</span>
            </div>
            <div className="stat card rv" style={{ "--d": ".2s", background: "#13171B", border: "1px solid rgba(255,255,255,.1)", borderRadius: "14px", padding: "20px 18px", display: "flex", flexDirection: "column", gap: "6px" }}>
              <span className="n" style={{ fontSize: "40px", fontWeight: "900", lineHeight: ".95", letterSpacing: "-1.5px", color: "#52E000" }}>12</span>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#FFFFFF" }}>Desafíos por semana</span>
              <span className="sl" style={{ fontSize: "12px", lineHeight: "1.45", color: "#8C929B" }}>desde tus 3 brechas, con XP y cofres</span>
            </div>
            <div className="stat card rv" style={{ "--d": ".24s", background: "#13171B", border: "1px solid rgba(82,224,0,.5)", borderRadius: "14px", padding: "20px 18px", display: "flex", flexDirection: "column", gap: "6px", boxShadow: "0 0 30px rgba(82,224,0,.12)" }}>
              <span className="n" style={{ fontSize: "40px", fontWeight: "900", lineHeight: ".95", letterSpacing: "-1.5px", color: "#52E000" }}>+1.200</span>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#FFFFFF" }}>MMR · Diego en 3 meses</span>
              <span className="sl" style={{ fontSize: "12px", lineHeight: "1.45", color: "#8C929B" }}>jugando y usando Legends</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
