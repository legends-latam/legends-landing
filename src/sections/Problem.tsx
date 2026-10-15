export function Problem() {
  return (
    <>
      {/* ===== 3 · CONEXIÓN CON EL PROBLEMA ===== */}
      <section id="problema" className="sec" style={{ position: "relative", overflow: "hidden", padding: "112px 40px", background: "#0C0E11" }}>
        <div className="w-prob-tl" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "28%", height: "min(36%, 300px)", background: "#181C20", clipPath: "polygon(0 0, 100% 0, 0 100%)", pointerEvents: "none" }}></div>
        <div className="cols2" style={{ position: "relative", width: "100%", maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <span className="rv" style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2.4px", textTransform: "uppercase", color: "#52E000" }}>El problema · ¿te suena?</span>
            <h2 className="rv h2" style={{ "--d": ".08s", margin: "0", fontSize: "46px", lineHeight: "1.02", fontWeight: "900", letterSpacing: "-.5px", textTransform: "uppercase", color: "#FFFFFF" }}>Pierdes, el chat dice «gg mid»… y nadie te dice por qué</h2>
            <p className="rv lead" style={{ "--d": ".14s", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#C9CED6" }}>La pantalla final te da números sin explicación. Abres un replay de 45 minutos y no sabes qué mirar. Las guías son genéricas; tu partida no. Y así el MMR se queda donde está.</p>
            <div className="rv" style={{ "--d": ".2s", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "12px 14px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(240,86,75,.4)" }}><span style={{ color: "#F0564B", fontWeight: "900" }}>✕</span><span style={{ fontSize: "13.5px", lineHeight: "1.5", color: "#E6E9ED" }}>Los stats de la pantalla final no te dicen qué cambiar.</span></div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "12px 14px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(240,86,75,.4)" }}><span style={{ color: "#F0564B", fontWeight: "900" }}>✕</span><span style={{ fontSize: "13.5px", lineHeight: "1.5", color: "#E6E9ED" }}>Un replay sin guía es tiempo perdido.</span></div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "12px 14px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(240,86,75,.4)" }}><span style={{ color: "#F0564B", fontWeight: "900" }}>✕</span><span style={{ fontSize: "13.5px", lineHeight: "1.5", color: "#E6E9ED" }}>Las guías genéricas no conocen tu rango, tu rol ni tu héroe.</span></div>
              <div className="pain4" style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "12px 14px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(240,86,75,.4)" }}><span style={{ color: "#F0564B", fontWeight: "900" }}>✕</span><span style={{ fontSize: "13.5px", lineHeight: "1.5", color: "#E6E9ED" }}>Jugar 10 partidas más no es entrenar: es repetir el mismo error 10 veces.</span></div>
            </div>
            <div className="rv wq" style={{ "--d": ".26s", display: "grid", gridTemplateColumns: "44px 1fr", gap: "12px", alignItems: "center", maxWidth: "560px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "999px", border: "2px solid #52E000", overflow: "hidden", background: "#13171B" }}><img width="160" height="215" decoding="async" loading="lazy" src="/assets/watata-explica-160.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 8%", display: "block", transform: "scale(1.5)", transformOrigin: "50% 18%" }} /></div>
              <p style={{ margin: "0", fontSize: "15px", fontWeight: "700", lineHeight: "1.45", color: "#FFFFFF" }}>«Perder no es el problema. No saber por qué, sí.» <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#52E000" }}>— Watata</span></p>
            </div>
          </div>

          <div className="rv-x" style={{ "--d": ".1s", background: "#13171B", border: "1px solid rgba(255,255,255,.1)", borderRadius: "18px", overflow: "hidden", boxShadow: "0 40px 90px rgba(0,0,0,.6)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div style={{ padding: "14px 18px", background: "#0C0E11", borderBottom: "1px solid rgba(255,255,255,.08)", fontSize: "10px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", color: "#F0564B" }}>✕ Sin Legends</div>
              <div style={{ padding: "14px 18px", background: "#0C0E11", borderBottom: "1px solid rgba(255,255,255,.08)", borderLeft: "1px solid rgba(255,255,255,.08)", fontSize: "10px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", color: "#52E000" }}>✓ Con Legends</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div className="cmp-col" style={{ padding: "18px", display: "flex", flexDirection: "column", gap: "12px", borderRight: "1px solid rgba(255,255,255,.08)" }}>
                <div className="cmp-row" style={{ padding: "12px", borderRadius: "10px", background: "#0C0E11", border: "1px solid rgba(255,255,255,.08)" }}><span style={{ display: "block", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#8C929B" }}>Pantalla final</span><span style={{ fontSize: "13px", color: "#C9CED6" }}>K / D / A y GPM. Nada de por qué.</span></div>
                <div className="cmp-row" style={{ padding: "12px", borderRadius: "10px", background: "#0C0E11", border: "1px solid rgba(255,255,255,.08)" }}><span style={{ display: "block", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#8C929B" }}>Replay</span><span style={{ fontSize: "13px", color: "#C9CED6" }}>45 minutos sin saber qué mirar.</span></div>
                <div className="cmp-row" style={{ padding: "12px", borderRadius: "10px", background: "#0C0E11", border: "1px solid rgba(255,255,255,.08)" }}><span style={{ display: "block", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#8C929B" }}>Guía</span><span style={{ fontSize: "13px", color: "#C9CED6" }}>La misma para todos los rangos.</span></div>
                <div className="cmp-row" style={{ padding: "12px", borderRadius: "10px", background: "#0C0E11", border: "1px solid rgba(255,255,255,.08)" }}><span style={{ display: "block", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#8C929B" }}>Plan</span><span style={{ fontSize: "13px", color: "#C9CED6" }}>«Jugar más».</span></div>
              </div>
              <div className="cmp-col" style={{ padding: "18px", display: "flex", flexDirection: "column", gap: "12px", background: "rgba(82,224,0,.05)" }}>
                <div className="cmp-row" style={{ padding: "12px", borderRadius: "10px", background: "#0C0E11", border: "1px solid rgba(82,224,0,.4)" }}><span style={{ display: "block", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#52E000" }}>3 KPIs de tu rol</span><span style={{ fontSize: "13px", color: "#E6E9ED" }}>Con su cálculo, pesos y benchmark.</span></div>
                <div className="cmp-row" style={{ padding: "12px", borderRadius: "10px", background: "#0C0E11", border: "1px solid rgba(82,224,0,.4)" }}><span style={{ display: "block", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#52E000" }}>Tu partida, explicada</span><span style={{ fontSize: "13px", color: "#E6E9ED" }}>Watata elige la más representativa y te dice dónde está la ganancia.</span></div>
                <div className="cmp-row" style={{ padding: "12px", borderRadius: "10px", background: "#0C0E11", border: "1px solid rgba(82,224,0,.4)" }}><span style={{ display: "block", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#52E000" }}>Ruta para tu rango y rol</span><span style={{ fontSize: "13px", color: "#E6E9ED" }}>3 brechas → 12 desafíos semanales.</span></div>
                <div className="cmp-row" style={{ padding: "12px", borderRadius: "10px", background: "#0C0E11", border: "1px solid rgba(82,224,0,.4)" }}><span style={{ display: "block", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#52E000" }}>Plan</span><span style={{ fontSize: "13px", color: "#E6E9ED" }}>Entrenar lo que de verdad te frena.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
