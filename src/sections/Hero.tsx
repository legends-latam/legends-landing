import type { RefObject } from "react";
import { cls } from "../lib/ui";
import { DISCORD_BETA } from "./DiscordModal";

export function Hero({ roleIdx, canvasRef }: { roleIdx: number; canvasRef: RefObject<HTMLCanvasElement | null> }) {
  return (
    <>
      {/* ===== 1 · ABOVE THE FOLD ===== */}
      <section id="top" className="hero sec" style={{ position: "relative", overflow: "hidden", minHeight: "820px", display: "flex", alignItems: "center", padding: "64px 40px 80px", background: "#0C0E11" }}>
        <canvas id="lgHeroCanvas" ref={canvasRef} aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%", display: "block", pointerEvents: "none" }}></canvas>
        <div className="w-hero-tl" aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "34%", height: "min(46%, 380px)", background: "#181C20", clipPath: "polygon(0 0, 100% 0, 0 100%)", pointerEvents: "none" }}></div>
        <div className="w-hero-tr" aria-hidden="true" style={{ position: "absolute", right: "0", top: "0", width: "36%", height: "min(50%, 420px)", background: "#52E000", clipPath: "polygon(38% 0, 100% 0, 100% 100%)", pointerEvents: "none" }}></div>
        <div className="w-hero-bl" aria-hidden="true" style={{ position: "absolute", left: "0", bottom: "0", width: "20%", height: "min(18%, 150px)", background: "#52E000", clipPath: "polygon(0 0, 100% 100%, 0 100%)", pointerEvents: "none" }}></div>

        <div className="hero-grid" style={{ position: "relative", width: "100%", maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.02fr 0.98fr", gap: "40px", alignItems: "center" }}>
          <div className="para" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="rise" style={{ "--d": ".05s", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#52E000", boxShadow: "0 0 12px #52E000" }}></span>
              <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2.4px", textTransform: "uppercase", color: "#52E000" }}>Coach AI personal para Dota 2 · gratis</span>
            </div>
            <h1 className="rise h1" style={{ "--d": ".15s", margin: "0", fontSize: "72px", lineHeight: ".96", fontWeight: "900", letterSpacing: "-1.5px", textTransform: "uppercase", color: "#FFFFFF" }}>Sube de MMR.<br />Entrena como<br /><span style={{ position: "relative", display: "block", height: "1em", color: "#52E000", textShadow: "0 0 30px rgba(82,224,0,.35)" }}><span className={cls("role", roleIdx === 0)}>Midlaner</span><span className={cls("role", roleIdx === 1)}>Carry</span><span className={cls("role", roleIdx === 2)}>Offlaner</span><span className={cls("role", roleIdx === 3)}>Support</span></span></h1>
            <p className="rise lead" style={{ "--d": ".22s", margin: "0", maxWidth: "600px", fontSize: "17px", lineHeight: "1.55", color: "#E6E9ED" }}>Legends analiza tus replays de Dota 2, encuentra tus 3 brechas y te arma una ruta de entrenamiento semanal para tu rol. Gratis, sin Pay to Win y sin tocar tus FPS.</p>
            <div className="rise" style={{ "--d": ".28s", display: "grid", gridTemplateColumns: "52px 1fr", gap: "14px", alignItems: "start", maxWidth: "600px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "999px", border: "2px solid #52E000", overflow: "hidden", background: "#13171B", boxShadow: "0 0 18px rgba(82,224,0,.35)" }}>
                <img width="640" height="900" decoding="async" srcSet="/assets/watata-confiado-240.webp 240w, /assets/watata-confiado-480.webp 480w, /assets/watata-confiado.webp 640w" sizes="(max-width: 720px) 128px, 214px" src="/assets/watata-confiado.webp" alt="Watata, tu coach" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 10%", display: "block", transform: "scale(1.4)", transformOrigin: "50% 20%" }} />
              </div>
              <div style={{ background: "#13171B", border: "1px solid rgba(82,224,0,.4)", borderRadius: "12px", padding: "12px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", color: "#52E000" }}>Watata · Tu coach</span>
                <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.5", color: "#E6E9ED" }}>Yo leo tus replays, tú juegas. En minutos tienes tu diagnóstico y tu primer desafío de la semana.</p>
              </div>
            </div>
            <div className="rise" style={{ "--d": ".4s", display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
              <a className="btn-p cta-main dl" href={DISCORD_BETA} target="_blank" rel="noopener noreferrer" aria-haspopup="dialog" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "56px", padding: "18px 30px", borderRadius: "10px", background: "#52E000", color: "#0C0E11", fontSize: "14px", fontWeight: "800", letterSpacing: "1.8px", textTransform: "uppercase", whiteSpace: "nowrap", boxShadow: "0 10px 30px rgba(82,224,0,.25)" }}>Descargar gratis para Windows ▸</a>
              <span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "1.6px", textTransform: "uppercase", color: "#8C929B" }}>Sin formularios · conectas Steam con un clic · sin Pay to Win</span>
              <span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "1.6px", textTransform: "uppercase", color: "#8C929B" }}>Windows 64 bits · descarga vía Discord · Legends Beta</span>
            </div>
            <div className="rise hero-chips" style={{ "--d": ".55s", display: "flex", flexWrap: "wrap", gap: "9px" }}>
              <span className="chip" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 12px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(255,255,255,.15)", fontSize: "11px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}><span style={{ color: "#52E000" }}>✓</span>Gratis y sin trampas</span>
              <span className="chip" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 12px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(255,255,255,.15)", fontSize: "11px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}><span style={{ color: "#F0564B" }}>✕</span>Pay to Win</span>
              <span className="chip" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 12px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(255,255,255,.15)", fontSize: "11px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}><span style={{ color: "#F5DD1F" }}>▲</span>+50 métricas</span>
              <span className="chip" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 12px", borderRadius: "10px", background: "#13171B", border: "1px solid rgba(255,255,255,.15)", fontSize: "11px", fontWeight: "800", letterSpacing: "1.4px", textTransform: "uppercase", color: "#FFFFFF" }}><span style={{ color: "#52E000" }}>0</span>FPS perdidos</span>
            </div>
          </div>

          <div className="rise hero-scene parb" style={{ "--d": ".35s", position: "relative", height: "580px" }}>
            <div className="scene" style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%" }}>
              <div style={{ position: "absolute", left: "3%", top: "4%", width: "92%", borderRadius: "16px", overflow: "hidden", background: "#13171B", border: "1px solid rgba(82,224,0,.45)", boxShadow: "0 40px 90px rgba(0,0,0,.65), 0 0 70px rgba(82,224,0,.16)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 12px", background: "#0C0E11", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "999px", background: "#F0564B" }}></span>
                  <span style={{ width: "9px", height: "9px", borderRadius: "999px", background: "#F5DD1F" }}></span>
                  <span style={{ width: "9px", height: "9px", borderRadius: "999px", background: "#52E000" }}></span>
                  <span style={{ marginLeft: "8px", fontSize: "9px", fontWeight: "800", letterSpacing: "1.6px", textTransform: "uppercase", color: "#8C929B" }}>Legends · Modo Coach · Pos 2</span>
                </div>
                <img width="1400" height="807" decoding="async" srcSet="/assets/shot-coach-640.webp 640w, /assets/shot-coach-1000.webp 1000w, /assets/shot-coach.webp 1400w" sizes="(max-width: 720px) calc(92vw - 34px), (max-width: 1120px) 88vw, 600px" fetchPriority="high" src="/assets/shot-coach.webp" alt="Modo Coach de Legends: diagnóstico de tu mejor partida como midlaner con 3 KPIs" style={{ width: "100%", display: "block", height: "auto" }} />
              </div>
              <div className="px1" style={{ position: "absolute", right: "-3%", top: "-4%" }}>
                <div className="float sc-badge" style={{ width: "150px", padding: "14px 16px", borderRadius: "12px", background: "#0C0E11", border: "1px solid rgba(82,224,0,.7)", color: "#FFFFFF", boxShadow: "0 20px 50px rgba(0,0,0,.5), 0 0 40px rgba(82,224,0,.3)", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span className="n" style={{ fontSize: "58px", fontWeight: "900", lineHeight: ".9", letterSpacing: "-2px", color: "#52E000", textShadow: "0 0 22px rgba(82,224,0,.45)" }}>72</span>
                  <span style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", color: "#FFFFFF" }}>Mid score</span>
                  <span style={{ fontSize: "10px", fontWeight: "600", color: "#C9CED6" }}>récord personal ▲</span>
                </div>
              </div>
              <div className="px2 sc-chat" style={{ position: "absolute", right: "-5%", top: "26%", width: "30%" }}>
                <div className="float" style={{ "--fd": ".4s", height: "250px", borderRadius: "14px", overflow: "hidden", background: "#13171B", border: "1px solid rgba(255,255,255,.14)", boxShadow: "0 24px 60px rgba(0,0,0,.55)" }}>
                  <img width="516" height="786" decoding="async" loading="lazy" src="/assets/shot-chat.webp" alt="Chat con Watata, el coach de Legends" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 0", display: "block" }} />
                </div>
              </div>
              <div className="px3" style={{ position: "absolute", left: "-6%", bottom: "13%", width: "80%" }}>
                <div className="float" style={{ "--fd": ".9s", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(82,224,0,.35)", boxShadow: "0 24px 60px rgba(0,0,0,.55)" }}>
                  <img width="1350" height="116" decoding="async" srcSet="/assets/crop-kpis-700.webp 700w, /assets/crop-kpis.webp 1350w" sizes="(max-width: 720px) 80vw, 500px" src="/assets/crop-kpis.webp" alt="Tres KPIs de la partida: dominio de la mid lane 90, presencia en peleas 80, timing de item core 45" style={{ width: "100%", display: "block", height: "auto" }} />
                </div>
              </div>
              <div className="px4 sc-toast" style={{ position: "absolute", left: "-8%", top: "46%", width: "42%" }}>
                <div className="float" style={{ "--fd": "1.4s", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(82,224,0,.4)", boxShadow: "0 20px 50px rgba(0,0,0,.55)" }}>
                  <img width="382" height="94" decoding="async" src="/assets/crop-toast.webp" alt="Aviso: programa listo, una partida sumada a tu programa" style={{ width: "100%", display: "block", height: "auto" }} />
                </div>
              </div>
              <div aria-hidden="true" className="glowy" style={{ position: "absolute", right: "2%", bottom: "4%", width: "240px", height: "240px", borderRadius: "999px", background: "radial-gradient(circle, rgba(82,224,0,.45) 0%, rgba(82,224,0,0) 70%)", pointerEvents: "none" }}></div>
              <img width="640" height="900" decoding="async" srcSet="/assets/watata-confiado-240.webp 240w, /assets/watata-confiado-480.webp 480w, /assets/watata-confiado.webp 640w" sizes="(max-width: 720px) 128px, 214px" className="sc-watata" src="/assets/watata-confiado.webp" alt="Watata, el coach de Legends, con los brazos cruzados" style={{ position: "absolute", right: "-2%", bottom: "-2%", height: "300px", width: "auto", display: "block", filter: "drop-shadow(0 20px 30px rgba(0,0,0,.6))" }} />
            </div>
          </div>
        </div>
        <span className="hint" aria-hidden="true" style={{ position: "absolute", left: "50%", bottom: "20px", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", color: "#8C929B", fontSize: "9px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase" }}><span>Desliza</span><span style={{ display: "block", width: "12px", height: "12px", borderRight: "2px solid #52E000", borderBottom: "2px solid #52E000", transform: "rotate(45deg)", animation: "hint 1.6s ease-in-out infinite" }}></span></span>
      </section>
    </>
  );
}
