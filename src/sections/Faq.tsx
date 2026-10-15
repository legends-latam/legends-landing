import { FAQ, FAQ_LEFT, FAQ_RIGHT } from "../data/faq";
import { cls } from "../lib/ui";

function Item({ i, open, onToggle }: { i: number; open: boolean; onToggle: () => void }) {
  const { q, a } = FAQ[i];
  return (
    <div className={cls("faq", open, "open")} style={{ background: "#13171B", border: "1px solid rgba(255,255,255,.1)", borderRadius: "14px", overflow: "hidden" }}>
      <button type="button" className="q" aria-expanded={open} onClick={onToggle} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", textAlign: "left", cursor: "pointer", background: "transparent", border: "0", padding: "18px 20px", color: "#FFFFFF", fontSize: "15px", fontWeight: "800", letterSpacing: ".2px" }}><span>{q}</span><span className="chev" style={{ flexShrink: "0", color: "#8C929B", fontSize: "14px" }}>▼</span></button>
      <div className="ans"><p style={{ margin: "0", padding: "0 20px 18px", fontSize: "14px", lineHeight: "1.6", color: "#C9CED6" }}>{a}</p></div>
    </div>
  );
}

export function Faq({ faq, toggleFaq }: { faq: number; toggleFaq: (i: number) => void }) {
  const col = (ids: number[]) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {ids.map((i) => <Item key={i} i={i} open={faq === i} onToggle={() => toggleFaq(i)} />)}
    </div>
  );
  return (
    <>
      {/* ===== 6 · FAQ ===== */}
      <section id="faq" className="sec" style={{ position: "relative", overflow: "hidden", padding: "112px 40px", background: "#0C0E11" }}>
        <div style={{ position: "relative", width: "100%", maxWidth: "1280px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "32px" }}>
          <div className="sec-head rv" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "32px", alignItems: "end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "2.4px", textTransform: "uppercase", color: "#52E000" }}>Preguntas frecuentes</span>
              <h2 className="h2" style={{ margin: "0", fontSize: "46px", lineHeight: "1.02", fontWeight: "900", letterSpacing: "-.5px", textTransform: "uppercase", color: "#FFFFFF" }}>Lo que todo jugador pregunta antes de descargar</h2>
            </div>
            <p className="lead faq-lead" style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#C9CED6" }}>Respuestas directas, sin letra chica. Si te queda alguna duda, Watata la responde dentro de la app.</p>
          </div>
          <div className="faq-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", alignItems: "start" }}>
            {col(FAQ_LEFT)}
            {col(FAQ_RIGHT)}
          </div>
        </div>
      </section>
    </>
  );
}
