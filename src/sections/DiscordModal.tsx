import { useEffect, useRef } from "react";
import "./discord-modal.css";

/** Invitación al servidor de Discord "Legends Beta": la descarga y las invitaciones a la beta ocurren ahí. */
export const DISCORD_BETA = "https://discord.gg/XtGmMgDm3";

/**
 * Modal que aparece al pulsar "Descargar": el sitio ya no entrega el .exe, la descarga ocurre
 * en el canal de Discord de Legends Beta. <dialog> nativo: foco atrapado, Esc cierra, el fondo
 * queda inerte; clic fuera también cierra.
 */
export function DiscordModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      if (typeof d.showModal === "function") d.showModal(); else d.setAttribute("open", "");
      ctaRef.current?.focus();
    } else if (!open && d.open) {
      if (typeof d.close === "function") d.close(); else d.removeAttribute("open");
    }
  }, [open]);

  const close = () => ref.current?.close();

  return (
    <dialog ref={ref} className="dcm" aria-labelledby="dcm-title" aria-describedby="dcm-desc" onClose={onClose} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="dcm-panel">
        <div className="dcm-art" aria-hidden="true">
          <div className="dcm-tri-tl"></div>
          <div className="dcm-tri"></div>
          <div className="dcm-glow"></div>
          <span className="dcm-bubble">Watata · Te espero en Discord</span>
          <img className="dcm-watata" src="/assets/watata-confiado-240.webp" srcSet="/assets/watata-confiado-240.webp 240w, /assets/watata-confiado-480.webp 480w" sizes="104px" alt="" width="240" height="338" loading="lazy" decoding="async" />
        </div>
        <button type="button" className="dcm-x" onClick={close} aria-label="Cerrar">✕</button>

        <div className="dcm-body">
          <span className="dcm-k">Legends Beta · Discord</span>
          <h2 id="dcm-title" className="dcm-h">Únete a <span>Legends Beta</span></h2>
          <p id="dcm-desc" className="dcm-p">La descarga de Legends ocurre en nuestro canal de Discord. Únete a Legends Beta: por ese canal te enviaremos tu invitación y todo lo que necesitas para empezar.</p>

          <ol className="dcm-steps">
            <li className="on"><span className="dcm-n" aria-hidden="true">1</span><span><b>Únete al Discord</b><small>Canal de Legends Beta</small></span></li>
            <li><span className="dcm-n" aria-hidden="true">2</span><span><b>Recibe tu invitación</b><small>Te invitamos a Legends Beta por ese canal</small></span></li>
            <li><span className="dcm-n" aria-hidden="true">3</span><span><b>Descarga Legends</b><small>El instalador para Windows también llega por Discord</small></span></li>
          </ol>

          <div className="dcm-actions">
            <a ref={ctaRef} className="btn-p dcm-cta" href={DISCORD_BETA} target="_blank" rel="noopener noreferrer" aria-label="Unirme al canal de Discord de Legends Beta (se abre en una pestaña nueva)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z"></path></svg>
              Unirme al Discord ▸
            </a>
            <button type="button" className="dcm-later" onClick={close}>Ahora no</button>
          </div>
          <p className="dcm-alt">Gratis · Windows 64 bits · sin Pay to Win</p>
        </div>
      </div>
    </dialog>
  );
}
