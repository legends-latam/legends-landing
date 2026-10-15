import { useEffect, useRef, useState } from "react";
import { Sfx, startHeroCanvas, type SfxName } from "../lib/fx";
import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { Trust } from "../sections/Trust";
import { Problem } from "../sections/Problem";
import { Offer } from "../sections/Offer";
import { Route } from "../sections/Route";
import { Results } from "../sections/Results";
import { Faq } from "../sections/Faq";
import { Closing } from "../sections/Closing";
import { Footer } from "../sections/Footer";
import { DiscordModal } from "../sections/DiscordModal";

/**
 * Landing completa. Estado: { roleIdx, step, mmr, done, faq, sound } (igual que el diseño).
 * El efecto de montaje replica componentDidMount del runtime original: reveals con
 * IntersectionObserver, rotación de rol, avance de pasos, parallax, canvas y audio.
 */
export function Landing() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [step, setStep] = useState(0);
  const [mmr, setMmr] = useState(1200);
  const [done, setDone] = useState(false);
  const [faq, setFaq] = useState(0);
  const [sound, setSound] = useState(false);
  const [discord, setDiscord] = useState(false);

  const fx = useRef<Sfx | null>(null);
  if (!fx.current) fx.current = new Sfx();
  const stepRef = useRef(0); stepRef.current = step;
  const faqRef = useRef(0); faqRef.current = faq;
  const doneRef = useRef(false); doneRef.current = done;
  const pausedRef = useRef(false);
  const resumeT = useRef(0);
  const reduceRef = useRef(false);
  const heroVisible = useRef(true);
  const counted = useRef(false);
  const cRaf = useRef(0);

  const sfx = (n: SfxName) => fx.current?.sfx(n);

  const countUp = () => {
    if (counted.current) return;
    counted.current = true;
    if (reduceRef.current) { setMmr(1200); return; }
    const T = 1700, t0 = performance.now();
    let lastTick = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / T);
      const e = 1 - Math.pow(1 - p, 3);
      setMmr(Math.round(1200 * e));
      if (now - lastTick > 70 && p < 0.97) { lastTick = now; sfx("tick"); }
      if (p >= 1) sfx("open");
      if (p < 1) cRaf.current = requestAnimationFrame(tick);
    };
    cRaf.current = requestAnimationFrame(tick);
  };

  const pickStep = (i: number) => {
    if (i !== stepRef.current) sfx("whoosh");
    setStep(i);
    pausedRef.current = true;
    window.clearTimeout(resumeT.current);
    resumeT.current = window.setTimeout(() => { pausedRef.current = false; }, 15000);
  };

  const toggleFaq = (i: number) => {
    sfx(faqRef.current === i ? "close" : "open");
    setFaq((f) => (f === i ? -1 : i));
  };

  const complete = () => {
    if (doneRef.current) return;
    sfx("levelup");
    setDone(true);
  };

  const toggleSound = () => {
    const f = fx.current!;
    const next = !f.on;
    f.on = next;
    setSound(next);
    try { localStorage.setItem("lg-sound", next ? "1" : "0"); } catch { /* ignorar */ }
    if (next) {
      if (f.initAudio()) { f.resumeAudio(); f.sfx("on"); f.updateAmbient(heroVisible.current); }
    } else {
      f.ambient(false);
    }
  };

  useEffect(() => {
    const root = rootRef.current;
    const f = fx.current!;
    if (!root) return;
    const reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    reduceRef.current = reduce;
    let pref: string | null = null;
    try { pref = localStorage.getItem("lg-sound"); } catch { pref = null; }
    const soundOn = pref === "1";
    f.on = soundOn;
    setSound(soundOn);
    setMmr(reduce ? 1200 : 0);

    const onFirstGesture = () => {
      if (f.on && f.initAudio()) { f.resumeAudio(); f.updateAmbient(heroVisible.current); }
    };
    window.addEventListener("pointerdown", onFirstGesture, { passive: true });
    const onOver = (e: MouseEvent) => {
      if (!f.on) return;
      const target = e.target as HTMLElement | null;
      const t = target?.closest?.(".btn-p, .card, .faq .q, .step, .tile, .chip, .stat, .snd");
      if (!t) return;
      if (e.relatedTarget && t.contains(e.relatedTarget as Node)) return;
      f.sfx("hover");
    };
    root.addEventListener("mouseover", onOver);
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (f.on && target?.closest?.(".btn-p")) f.sfx("click");
      // CTA de descarga: la descarga ocurre en Discord, así que el clic abre el modal de Legends Beta
      // (sin JS, o con Ctrl/⌘/Shift, el enlace lleva directo a la invitación de Discord).
      if (target?.closest?.("a.dl") && !e.defaultPrevented && !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)) {
        e.preventDefault();
        setDiscord(true);
      }
    };
    root.addEventListener("click", onClick);

    const rvs = Array.from(root.querySelectorAll<HTMLElement>(".rv, .rv-x"));
    const reveal = (el: HTMLElement) => {
      el.classList.add("in");
      if (el.hasAttribute("data-count")) countUp();
      if (el.classList.contains("sec-head")) f.sfx("rise");
    };
    const timers: number[] = [];
    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting || e.intersectionRatio > 0) { reveal(e.target as HTMLElement); io?.unobserve(e.target); }
        }
      }, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });
      rvs.forEach((el) => io!.observe(el));
      timers.push(window.setTimeout(() => {
        const vh = window.innerHeight || 900;
        rvs.forEach((el) => {
          if (el.classList.contains("in")) return;
          if (el.getBoundingClientRect().top < vh + 120) reveal(el);
        });
      }, 7000));
    } else {
      rvs.forEach(reveal);
    }

    if (!reduce) timers.push(window.setInterval(() => setRoleIdx((r) => (r + 1) % 4), 2600));
    timers.push(window.setInterval(() => { if (!pausedRef.current && !reduce) setStep((s) => (s + 1) % 3); }, 5200));

    let pend: MouseEvent | null = null, mvRaf = 0, scRaf = 0;
    const onMove = (e: MouseEvent) => {
      pend = e;
      if (mvRaf) return;
      mvRaf = requestAnimationFrame(() => {
        mvRaf = 0;
        if (!pend) return;
        const vw = window.innerWidth || 1440, vh = window.innerHeight || 900;
        const mx = Math.max(-1, Math.min(1, (pend.clientX / vw - 0.5) * 2));
        const my = Math.max(-1, Math.min(1, (pend.clientY / vh - 0.5) * 2));
        root.style.setProperty("--mx", mx.toFixed(3));
        root.style.setProperty("--my", my.toFixed(3));
      });
    };
    const onScroll = () => {
      if (scRaf) return;
      scRaf = requestAnimationFrame(() => {
        scRaf = 0;
        const y = window.scrollY || window.pageYOffset || 0;
        root.style.setProperty("--sy", String(Math.round(Math.min(y, 1400))));
      });
    };
    if (!reduce) {
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    const stopCanvas = canvasRef.current
      ? startHeroCanvas(canvasRef.current, { reduce, onVisible: (v) => { heroVisible.current = v; f.updateAmbient(v); } })
      : () => {};
    const onVis = () => f.updateAmbient(heroVisible.current);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      timers.forEach((t) => { window.clearInterval(t); window.clearTimeout(t); });
      window.clearTimeout(resumeT.current);
      io?.disconnect();
      if (cRaf.current) cancelAnimationFrame(cRaf.current);
      if (mvRaf) cancelAnimationFrame(mvRaf);
      if (scRaf) cancelAnimationFrame(scRaf);
      stopCanvas();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointerdown", onFirstGesture);
      root.removeEventListener("mouseover", onOver);
      root.removeEventListener("click", onClick);
      f.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="lg" ref={rootRef} className="lp" style={{ "--mx": "0", "--my": "0", "--sy": "0", position: "relative", width: "100%", background: "#0C0E11", color: "#FFFFFF", fontFamily: "'Archivo', system-ui, sans-serif", containerType: "inline-size" }}>
      <Header sound={sound} toggleSound={toggleSound} />
      <main>
        <Hero roleIdx={roleIdx} canvasRef={canvasRef} />
        <Trust />
        <Problem />
        <Offer step={step} pickStep={pickStep} />
        <Route done={done} complete={complete} />
        <Results mmr={mmr} />
        <Faq faq={faq} toggleFaq={toggleFaq} />
        <Closing />
      </main>
      <Footer />
      <DiscordModal open={discord} onClose={() => { sfx("close"); setDiscord(false); }} />
    </div>
  );
}
