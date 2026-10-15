import { cls } from "../lib/ui";

export const STEP_CAPTIONS = ["Paso 1 · Descarga y conecta Steam", "Paso 2 · Elige hasta 5 replays", "Paso 3 · Tu diagnóstico y tu ruta por rol"];

export function Offer({ step, pickStep }: { step: number; pickStep: (i: number) => void }) {
  return (
    <>
      {/* ===== 4 · PRESENTACIÓN DE LA OFERTA ===== */}
      <section id="oferta" className="sec" style={{ position: "relative", overflow: "hidden", padding: "112px 40px", background: "#0F1216" }}>
        <div aria-hidden="true" style={{ position: "absolute", right: "0", top: "0", width: "18%", height: "min(22%, 240px)", background: "#52E000", clipPath: "polygon(40% 0, 100% 0, 100% 100%)", pointerEvents: "none" }}></div>
        <div style={{ position: "relative", width: "100%", maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div className="sec-head rv" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "32px", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2.4px", textTransform: "uppercase", color: "#52E000" }}>La oferta · lo que recibes</span>
              <h2 className="h2" style={{ margin: "0", fontSize: "46px", lineHeight: "1.02", fontWeight: "900", letterSpacing: "-.5px", textTransform: "uppercase", color: "#FFFFFF" }}>Un coach que convierte cada replay en tu próximo paso</h2>
            </div>
            <p className="lead oferta-lead" style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#C9CED6" }}>Legends es una aplicación gratuita para Windows que analiza tus replays .dem de Dota 2 después de la partida y los compara con el benchmark de tu rango y tu rol. No toca el cliente del juego, no vende ventajas y no se queda con tus datos.</p>
          </div>

          <div className="grid4" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "14px" }}>
            <div className="card rv" style={{ "--d": ".05s", background: "#191E24", border: "1px solid rgba(255,255,255,.1)", borderRadius: "16px", padding: "24px", minHeight: "230px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="ico" style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(82,224,0,.1)", border: "1px solid rgba(82,224,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6EF21C" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20v-9"></path><path d="M10 20V4"></path><path d="M16 20v-7"></path><path d="M22 20H2"></path></svg></div>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#52E000" }}>Análisis personalizado · +50 métricas</span>
              <div className="ctitle" style={{ fontSize: "15px", fontWeight: "800", letterSpacing: ".3px", color: "#FFFFFF" }}>Sabes exactamente qué te frena</div>
              <div className="cbody" style={{ fontSize: "13.5px", lineHeight: "1.55", color: "#C9CED6" }}>GPM, XPM, timings, teamfights y visión de tu replay, comparados con tu rango y tu héroe.</div>
            </div>
            <div className="card rv" style={{ "--d": ".12s", background: "#191E24", border: "1px solid rgba(255,255,255,.1)", borderRadius: "16px", padding: "24px", minHeight: "230px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="ico" style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(82,224,0,.1)", border: "1px solid rgba(82,224,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6EF21C" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="6" cy="19" r="2"></circle><circle cx="18" cy="5" r="2"></circle><path d="M8 19h6a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8h6"></path></svg></div>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#52E000" }}>Plan de entrenamiento por rol</span>
              <div className="ctitle" style={{ fontSize: "15px", fontWeight: "800", letterSpacing: ".3px", color: "#FFFFFF" }}>Un plan para tu rol, no una guía genérica</div>
              <div className="cbody" style={{ fontSize: "13.5px", lineHeight: "1.55", color: "#C9CED6" }}>3 KPIs por posición, tus 3 brechas y 12 desafíos semanales con XP, cofres y vidas.</div>
            </div>
            <div className="card rv" style={{ "--d": ".19s", background: "#191E24", border: "1px solid rgba(255,255,255,.1)", borderRadius: "16px", padding: "24px", minHeight: "230px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="ico" style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(82,224,0,.1)", border: "1px solid rgba(82,224,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6EF21C" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle></svg></div>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#52E000" }}>Transparencia</span>
              <div className="ctitle" style={{ fontSize: "15px", fontWeight: "800", letterSpacing: ".3px", color: "#FFFFFF" }}>Confías en cada número</div>
              <div className="cbody" style={{ fontSize: "13.5px", lineHeight: "1.55", color: "#C9CED6" }}>Cada score muestra cómo se calculó: pesos por fase, benchmark y la partida de origen.</div>
            </div>
            <div className="card rv" style={{ "--d": ".26s", background: "#191E24", border: "1px solid rgba(255,255,255,.1)", borderRadius: "16px", padding: "24px", minHeight: "230px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="ico" style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(245,221,31,.1)", border: "1px solid rgba(245,221,31,.45)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F5DD1F" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"></path></svg></div>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#F5DD1F" }}>Optimizado para juegos</span>
              <div className="ctitle" style={{ fontSize: "15px", fontWeight: "800", letterSpacing: ".3px", color: "#FFFFFF" }}>Entrenas sin perder rendimiento</div>
              <div className="cbody" style={{ fontSize: "13.5px", lineHeight: "1.55", color: "#C9CED6" }}>No reduce tus FPS y no suma ping: el análisis corre fuera de la partida, sobre el replay.</div>
            </div>
            <div className="card rv" style={{ "--d": ".05s", background: "#191E24", border: "1px solid rgba(255,255,255,.1)", borderRadius: "16px", padding: "24px", minHeight: "230px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="ico" style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(82,224,0,.1)", border: "1px solid rgba(82,224,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6EF21C" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path></svg></div>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#52E000" }}>Seguridad 100 %</span>
              <div className="ctitle" style={{ fontSize: "15px", fontWeight: "800", letterSpacing: ".3px", color: "#FFFFFF" }}>Tu cuenta, a salvo</div>
              <div className="cbody" style={{ fontSize: "13.5px", lineHeight: "1.55", color: "#C9CED6" }}>Te conectas con Steam OpenID: Legends identifica tu SteamID y nunca te pide tu contraseña.</div>
            </div>
            <div className="card rv" style={{ "--d": ".12s", background: "#191E24", border: "1px solid rgba(255,255,255,.1)", borderRadius: "16px", padding: "24px", minHeight: "230px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="ico" style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(82,224,0,.1)", border: "1px solid rgba(82,224,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6EF21C" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="6" rx="8" ry="3"></ellipse><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"></path><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"></path><path d="M3 3l18 18"></path></svg></div>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#52E000" }}>No capturamos tus datos</span>
              <div className="ctitle" style={{ fontSize: "15px", fontWeight: "800", letterSpacing: ".3px", color: "#FFFFFF" }}>Tus datos son tuyos</div>
              <div className="cbody" style={{ fontSize: "13.5px", lineHeight: "1.55", color: "#C9CED6" }}>Lo que analizamos es para ti. No capturamos tus datos ni los usamos para nada más.</div>
            </div>
            <div className="card rv" style={{ "--d": ".19s", background: "#191E24", border: "1px solid rgba(255,255,255,.1)", borderRadius: "16px", padding: "24px", minHeight: "230px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="ico" style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(240,86,75,.1)", border: "1px solid rgba(240,86,75,.45)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F0564B" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M5.6 5.6l12.8 12.8"></path></svg></div>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#F0564B" }}>Gratis y sin trampas · no Pay to Win</span>
              <div className="ctitle" style={{ fontSize: "15px", fontWeight: "800", letterSpacing: ".3px", color: "#FFFFFF" }}>El progreso se gana, no se compra</div>
              <div className="cbody" style={{ fontSize: "13.5px", lineHeight: "1.55", color: "#C9CED6" }}>Legends es gratis y no lee memoria ni toca el cliente. Nadie compra ventajas: no nos gusta.</div>
            </div>
            <div className="card rv" style={{ "--d": ".26s", background: "#191E24", border: "1px solid rgba(255,255,255,.1)", borderRadius: "16px", padding: "24px", minHeight: "230px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="ico" style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(82,224,0,.1)", border: "1px solid rgba(82,224,0,.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6EF21C" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="11" rx="5"></rect><path d="M6 12.5h4"></path><path d="M8 10.5v4"></path><circle cx="16" cy="11" r="1"></circle><circle cx="18.5" cy="13.5" r="1"></circle></svg></div>
              <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#52E000" }}>Múltiples juegos</span>
              <div className="ctitle" style={{ fontSize: "15px", fontWeight: "800", letterSpacing: ".3px", color: "#FFFFFF" }}>Dota 2 hoy, más juegos mañana</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "5px", fontSize: "12px", color: "#C9CED6" }}>
                <span><span style={{ color: "#52E000" }}>✓</span> Dota 2 · disponible</span>
                <span><span style={{ color: "#F5DD1F" }}>●</span> League of Legends · trabajando</span>
                <span style={{ color: "#8C929B" }}>○ Fortnite · futuro</span>
                <span style={{ color: "#8C929B" }}>○ Deadlock · futuro</span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px", marginTop: "24px" }}>
            <div className="rv" style={{ display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "space-between", gap: "14px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2.4px", textTransform: "uppercase", color: "#52E000" }}>Cómo funciona</span>
                <h3 className="h3" style={{ margin: "0", fontSize: "32px", lineHeight: "1.04", fontWeight: "900", letterSpacing: "-.4px", textTransform: "uppercase", color: "#FFFFFF" }}>3 pasos simples. Legends hace el resto.</h3>
              </div>
              <span className="how-lead" style={{ fontSize: "12px", lineHeight: "1.5", color: "#8C929B", maxWidth: "420px" }}>Mientras tú juegas, Legends extrae +50 métricas, detecta tu rol, compara con tu rango y arma tu programa Coach + Entrenar.</span>
            </div>
            <div className="rv steps-strip" style={{ "--d": ".06s", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,.1)", background: "#13171B" }}>
              <img width="1400" height="108" decoding="async" loading="lazy" src="/assets/shot-steps.webp" alt="Pipeline de calibración de Legends: conexión Steam, selección de replays, análisis del replay, rol + benchmarks y programa Coach" style={{ width: "100%", display: "block", height: "auto" }} />
              <div style={{ padding: "10px 14px", borderTop: "1px solid rgba(255,255,255,.08)", fontSize: "10px", fontWeight: "700", letterSpacing: "1.4px", textTransform: "uppercase", color: "#8C929B" }}>El pipeline real de la app: tú haces el 1 y el 2 · Legends hace el 3, el 4 y el 5</div>
            </div>
            <div className="cols2" style={{ display: "grid", gridTemplateColumns: ".92fr 1.08fr", gap: "28px", alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <button type="button" className={cls("step", step === 0)} onClick={() => pickStep(0)} style={{ position: "relative", overflow: "hidden", width: "100%", textAlign: "left", cursor: "pointer", background: "#13171B", border: "1px solid rgba(255,255,255,.1)", borderRadius: "14px", padding: "18px", display: "grid", gridTemplateColumns: "40px 1fr", gap: "14px", alignItems: "start", color: "#FFFFFF" }}>
                  <span className="num" style={{ width: "40px", height: "40px", borderRadius: "999px", background: "#242B33", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "900", color: "#FFFFFF" }}>1</span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}><span style={{ fontSize: "15px", fontWeight: "800", letterSpacing: ".4px", textTransform: "uppercase" }}>Descarga y conecta Steam</span><span className="sbody" style={{ fontSize: "13px", lineHeight: "1.5", color: "#C9CED6" }}>Un clic con Steam OpenID. Sin contraseña, sin formularios, sin tocar el cliente.</span></span>
                  <span className="bar" style={{ position: "absolute", left: "0", bottom: "0", height: "3px", background: "#52E000" }}></span>
                </button>
                <button type="button" className={cls("step", step === 1)} onClick={() => pickStep(1)} style={{ position: "relative", overflow: "hidden", width: "100%", textAlign: "left", cursor: "pointer", background: "#13171B", border: "1px solid rgba(255,255,255,.1)", borderRadius: "14px", padding: "18px", display: "grid", gridTemplateColumns: "40px 1fr", gap: "14px", alignItems: "start", color: "#FFFFFF" }}>
                  <span className="num" style={{ width: "40px", height: "40px", borderRadius: "999px", background: "#242B33", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "900", color: "#FFFFFF" }}>2</span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}><span style={{ fontSize: "15px", fontWeight: "800", letterSpacing: ".4px", textTransform: "uppercase" }}>Elige hasta 5 replays</span><span className="sbody" style={{ fontSize: "13px", lineHeight: "1.5", color: "#C9CED6" }}>Legends escanea tu carpeta de replays de Dota 2 o cargas los archivos .dem a mano.</span></span>
                  <span className="bar" style={{ position: "absolute", left: "0", bottom: "0", height: "3px", background: "#52E000" }}></span>
                </button>
                <button type="button" className={cls("step", step === 2)} onClick={() => pickStep(2)} style={{ position: "relative", overflow: "hidden", width: "100%", textAlign: "left", cursor: "pointer", background: "#13171B", border: "1px solid rgba(255,255,255,.1)", borderRadius: "14px", padding: "18px", display: "grid", gridTemplateColumns: "40px 1fr", gap: "14px", alignItems: "start", color: "#FFFFFF" }}>
                  <span className="num" style={{ width: "40px", height: "40px", borderRadius: "999px", background: "#242B33", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "900", color: "#FFFFFF" }}>3</span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}><span style={{ fontSize: "15px", fontWeight: "800", letterSpacing: ".4px", textTransform: "uppercase" }}>Recibe tu diagnóstico y tu ruta por rol</span><span className="sbody" style={{ fontSize: "13px", lineHeight: "1.5", color: "#C9CED6" }}>En minutos: los 3 KPIs de tu rol explicados en Modo Coach y 12 desafíos de la semana en Entrenar. Y lo que no entiendas, se lo preguntas a Watata.</span></span>
                  <span className="bar" style={{ position: "absolute", left: "0", bottom: "0", height: "3px", background: "#52E000" }}></span>
                </button>
                <div className="auto-chips" style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "4px" }}>
                  <span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "1.6px", textTransform: "uppercase", color: "#8C929B" }}>Automático:</span>
                  <span style={{ padding: "7px 10px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(255,255,255,.15)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>+50 métricas</span>
                  <span style={{ padding: "7px 10px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(255,255,255,.15)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>Rol + benchmarks</span>
                  <span style={{ padding: "7px 10px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(255,255,255,.15)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}>Programa Coach</span>
                </div>
              </div>
              <div className="rv-x" style={{ "--d": ".1s", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div className="steps-screen" style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", borderRadius: "18px", overflow: "hidden", background: "#13171B", border: "1px solid rgba(82,224,0,.4)", boxShadow: "0 40px 90px rgba(0,0,0,.6), 0 0 60px rgba(82,224,0,.12)" }}>
                  <img width="747" height="792" decoding="async" srcSet="/assets/shot-perfil-660.webp 660w, /assets/shot-perfil.webp 747w" sizes="(max-width: 720px) calc(100vw - 38px), (max-width: 1120px) 94vw, 660px" loading="lazy" className={cls("shot", step === 0)} src="/assets/shot-perfil.webp" alt="Perfil de cuenta Steam en Legends con SteamID64, rango benchmark y extracto para compartir" />
                  <img width="1400" height="810" decoding="async" srcSet="/assets/shot-replays-720.webp 720w, /assets/shot-replays.webp 1400w" sizes="(max-width: 720px) calc(100vw - 38px), (max-width: 1120px) 94vw, 660px" loading="lazy" className={cls("shot", step === 1)} src="/assets/shot-replays.webp" alt="Selección de replays: lista de archivos .dem encontrados y partidas seleccionadas" />
                  <img width="1400" height="808" decoding="async" srcSet="/assets/shot-wards-720.webp 720w, /assets/shot-wards.webp 1400w" sizes="(max-width: 720px) calc(100vw - 38px), (max-width: 1120px) 94vw, 660px" loading="lazy" className={cls("shot", step === 2)} src="/assets/shot-wards.webp" alt="Diagnóstico por rol en Legends: KPI de densidad y distribución de warding (87 de 100) con el mapa de wards, cómo se calculó y el análisis de Watata" />
                  <span style={{ position: "absolute", left: "14px", bottom: "14px", padding: "8px 12px", borderRadius: "10px", background: "rgba(12,14,17,.85)", border: "1px solid rgba(82,224,0,.5)", fontSize: "10px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#6EF21C" }}><span>{STEP_CAPTIONS[step]}</span></span>
                </div>
                <div className="chatp" style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "14px", alignItems: "center", background: "#13171B", border: "1px solid rgba(82,224,0,.35)", borderRadius: "14px", padding: "12px 14px" }}>
                  <div className="chat-img" style={{ height: "110px", borderRadius: "10px", overflow: "hidden", border: "1px solid rgba(255,255,255,.1)", background: "#0C0E11" }}><img width="516" height="786" decoding="async" loading="lazy" src="/assets/shot-chat.webp" alt="Chat con Watata dentro de Legends" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 0", display: "block" }} /></div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", color: "#52E000" }}>Chat con Watata · incluido</span>
                    <span style={{ fontSize: "16px", fontWeight: "800", color: "#FFFFFF" }}>Pregúntale lo que sea</span>
                    <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#C9CED6" }}>Watata te ayuda con las preguntas que tengas de tus partidas: por qué se frenó tu lane, qué ítem adelantar o cómo leer un KPI.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
