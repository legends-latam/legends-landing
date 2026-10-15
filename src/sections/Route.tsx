export function Route({ done, complete }: { done: boolean; complete: () => void }) {
  return (
    <>
      {/* ===== 4b · LA RUTA SEMANAL (gamificación, dentro de la oferta) ===== */}
      <section id="ruta" className="sec" style={{ position: "relative", overflow: "hidden", padding: "112px 40px", background: "#0C0E11" }}>
        <div className="w-ruta" aria-hidden="true" style={{ position: "absolute", right: "0", top: "0", width: "46%", height: "100%", background: "#52E000", clipPath: "polygon(36% 0, 100% 0, 100% 100%, 0 100%)", pointerEvents: "none" }}></div>
        <div className="cols2" style={{ position: "relative", width: "100%", maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <span className="rv" style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2.4px", textTransform: "uppercase", color: "#52E000" }}>Entrenar · tu ruta de la semana</span>
            <h2 className="rv h2" style={{ "--d": ".08s", margin: "0", fontSize: "46px", lineHeight: "1.02", fontWeight: "900", letterSpacing: "-.5px", textTransform: "uppercase", color: "#FFFFFF" }}>Cada semana, un desafío nuevo desde tus brechas</h2>
            <p className="rv lead" style={{ "--d": ".14s", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#C9CED6" }}>Watata convierte tus 3 brechas en 12 desafíos: role-play, decisiones rápidas y lecciones cortas. Ganas XP, abres cofres, cuidas tus vidas y mantienes la racha. Entrenar deja de ser «ver replays».</p>
            <div className="rv" style={{ "--d": ".2s", display: "flex", flexWrap: "wrap", gap: "9px" }}>
              <span className="chip" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 12px", borderRadius: "10px", background: "rgba(82,224,0,.1)", border: "1px solid rgba(82,224,0,.45)", fontSize: "11px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>3 brechas</span>
              <span className="chip" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 12px", borderRadius: "10px", background: "rgba(245,221,31,.1)", border: "1px solid rgba(245,221,31,.45)", fontSize: "11px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>12 desafíos</span>
              <span className="chip" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 12px", borderRadius: "10px", background: "rgba(138,147,240,.1)", border: "1px solid rgba(138,147,240,.45)", fontSize: "11px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>Cofres +50 XP</span>
              <span className="chip" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 12px", borderRadius: "10px", background: "rgba(240,86,75,.1)", border: "1px solid rgba(240,86,75,.45)", fontSize: "11px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>Vidas ●●●●●</span>
            </div>
            <div className="rv" style={{ "--d": ".28s", background: "#13171B", border: "1px solid rgba(82,224,0,.45)", borderRadius: "16px", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "0 20px 50px rgba(0,0,0,.4)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", color: "#52E000" }}>Brecha 1 · Lane (IHS) · pruébalo</span>
                <span style={{ padding: "5px 9px", borderRadius: "7px", background: "#F5DD1F", color: "#0C0E11", fontSize: "10px", fontWeight: "800", letterSpacing: "1.2px", textTransform: "uppercase" }}>+30 XP</span>
              </div>
              <div style={{ fontSize: "18px", fontWeight: "800", color: "#FFFFFF" }}>Safelane estable</div>
              <div style={{ fontSize: "13.5px", lineHeight: "1.5", color: "#C9CED6" }}>Protege la progresión de tu carry sin regalar tu propia vida: dos decisiones rápidas por oleada.</div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ flexGrow: "1", height: "8px", borderRadius: "999px", background: "rgba(255,255,255,.06)", overflow: "hidden" }}><div style={{ height: "100%", borderRadius: "999px", background: "#52E000", transition: "width .8s cubic-bezier(.2,.7,.3,1)", width: done ? "74%" : "68%" }}></div></div>
                <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#8C929B", whiteSpace: "nowrap" }}>Nivel 7 · <span>{done ? 370 : 340}</span> / 500 XP</span>
              </div>
              {!done && (<div style={{ display: "contents" }}>
                <button type="button" className="btn-p" onClick={complete} style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", padding: "12px 20px", border: "0", borderRadius: "10px", background: "#52E000", color: "#0C0E11", fontSize: "12px", fontWeight: "800", letterSpacing: "1.8px", textTransform: "uppercase", cursor: "pointer" }}>Completar desafío ▸</button>
              </div>)}
              {done && (<div style={{ display: "contents" }}><div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px", minHeight: "44px", padding: "10px 14px", borderRadius: "10px", background: "rgba(82,224,0,.12)", border: "1px solid rgba(82,224,0,.5)", color: "#6EF21C", fontSize: "13px", fontWeight: "800" }}><span>✓</span><span>¡Nodo completado! +30 XP. Cuando quieras seguimos: tu ruta te espera.</span><span className="xpf" aria-hidden="true" style={{ position: "absolute", right: "14px", top: "-6px", color: "#F5DD1F", fontWeight: "900" }}>+30 XP</span></div></div>)}
            </div>
          </div>

          <div className="vis rv-x" style={{ position: "relative", minHeight: "580px" }}>
            <div className="float" style={{ position: "absolute", left: "0", top: "2%", width: "86%", borderRadius: "18px", overflow: "hidden", background: "#0C0E11", border: "1px solid rgba(82,224,0,.45)", boxShadow: "0 40px 90px rgba(0,0,0,.6)" }}>
              <img width="777" height="636" decoding="async" loading="lazy" src="/assets/crop-ruta.webp" alt="Ruta de la semana en Entrenar: Watata y el diagnóstico del coach en curso, con los primeros desafíos bloqueados" style={{ width: "100%", display: "block", height: "auto" }} />
            </div>
            <div className="float" style={{ "--fd": ".5s", position: "absolute", right: "-2%", top: "0", width: "50%", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,.14)", boxShadow: "0 24px 60px rgba(0,0,0,.55)", background: "#13171B" }}>
              <img width="555" height="198" decoding="async" loading="lazy" src="/assets/crop-progreso.webp" alt="Progreso de la semana: 0 de 12 desafíos, por Lane, Peleas y Visión" style={{ width: "100%", display: "block", height: "auto" }} />
            </div>
            <div className="float" style={{ "--fd": "1s", position: "absolute", right: "0", bottom: "6%", width: "54%", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(245,221,31,.45)", boxShadow: "0 24px 60px rgba(0,0,0,.55)", background: "#13171B" }}>
              <img width="555" height="285" decoding="async" loading="lazy" src="/assets/crop-cofres.webp" alt="Cofres de recompensa bloqueados de +50 XP" style={{ width: "100%", display: "block", height: "auto" }} />
            </div>
            <div style={{ position: "absolute", left: "4%", bottom: "0", display: "flex", flexWrap: "wrap", gap: "9px" }}>
              <span style={{ padding: "9px 12px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(255,255,255,.15)", fontSize: "11px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>Racha ▲ 4</span>
              <span style={{ padding: "9px 12px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(255,255,255,.15)", fontSize: "11px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>Nivel 7 · 340 / 500 XP</span>
              <span style={{ padding: "9px 12px", borderRadius: "10px", background: "#F5DD1F", color: "#0C0E11", fontSize: "11px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase" }}>+40 XP hoy</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
