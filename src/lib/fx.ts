/**
 * Efectos del hero portados tal cual desde static/index.html:
 *  - startHeroCanvas: piso en perspectiva neón, haces de luz y partículas (canvas 2D),
 *    pausado fuera de pantalla y con document.hidden.
 *  - Sfx: sonidos con Web Audio (sin archivos) y colchón ambiental del hero.
 */

export function startHeroCanvas(
  c: HTMLCanvasElement,
  opts: { reduce: boolean; onVisible: (visible: boolean) => void },
): () => void {
  const ctx = c.getContext("2d");
  if (!ctx) return () => {};
  const motion = !opts.reduce;
  let w = 1, h = 1, dpr = 1;
  let raf = 0, running = false;

  const resize = () => {
    const r = c.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = Math.max(1, Math.round(r.width));
    h = Math.max(1, Math.round(r.height));
    c.width = Math.round(w * dpr);
    c.height = Math.round(h * dpr);
  };
  resize();

  const P: { x: number; y: number; r: number; v: number; ph: number }[] = [];
  for (let i = 0; i < 70; i++) P.push({ x: Math.random(), y: Math.random(), r: 0.5 + Math.random() * 1.5, v: 0.012 + Math.random() * 0.03, ph: Math.random() * 6.283 });
  const beams = [
    { x: 0.08, col: "82,224,0", hh: 0.4, ph: 0 },
    { x: 0.27, col: "245,221,31", hh: 0.24, ph: 1.7 },
    { x: 0.6, col: "82,224,0", hh: 0.3, ph: 3.1 },
    { x: 0.83, col: "138,147,240", hh: 0.2, ph: 4.4 },
    { x: 0.95, col: "82,224,0", hh: 0.34, ph: 2.2 },
  ];
  const t0 = performance.now();
  let lastT = t0;

  const draw = (now: number) => {
    const t = (now - t0) / 1000;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const hz = h * 0.56, vx = w * 0.5;
    let g = ctx.createRadialGradient(vx, hz, 0, vx, hz, w * 0.55);
    g.addColorStop(0, "rgba(82,224,0,0.22)");
    g.addColorStop(0.5, "rgba(82,224,0,0.06)");
    g.addColorStop(1, "rgba(82,224,0,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.lineWidth = 1;
    const N = 16, ph = motion ? (t * 0.22) % 1 : 0.35;
    for (let i = 0; i < N; i++) {
      const z = (i + ph) / N;
      const y = hz + (h - hz) * z * z;
      const a = 0.04 + 0.42 * z;
      ctx.strokeStyle = `rgba(82,224,0,${a.toFixed(3)})`;
      ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(w, y + 0.5); ctx.stroke();
    }
    const V = 16, sp = w * 0.085;
    for (let k = -V; k <= V; k++) {
      const av = 0.05 + 0.2 * (1 - Math.abs(k) / V);
      ctx.strokeStyle = `rgba(82,224,0,${av.toFixed(3)})`;
      ctx.beginPath(); ctx.moveTo(vx, hz); ctx.lineTo(vx + k * sp * 2.2, h); ctx.stroke();
    }
    ctx.strokeStyle = "rgba(110,242,28,0.5)";
    ctx.beginPath(); ctx.moveTo(0, hz + 0.5); ctx.lineTo(w, hz + 0.5); ctx.stroke();
    for (const b of beams) {
      const bob = motion ? Math.sin(t * 0.7 + b.ph) * 0.03 : 0;
      const x = b.x * w, top = hz - h * (b.hh + bob), bh = h - top;
      ctx.fillStyle = `rgba(${b.col},0.08)`; ctx.fillRect(x - 7, top, 14, bh);
      ctx.fillStyle = `rgba(${b.col},0.22)`; ctx.fillRect(x - 2.5, top, 5, bh);
      ctx.fillStyle = `rgba(${b.col},0.9)`; ctx.fillRect(x - 0.75, top, 1.5, bh);
    }
    const dt = Math.min(0.05, (now - lastT) / 1000); lastT = now;
    for (const p of P) {
      if (motion) { p.y -= p.v * dt; if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); } }
      const ap = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(t * 1.6 + p.ph));
      ctx.fillStyle = `rgba(160,255,90,${ap.toFixed(3)})`;
      ctx.beginPath(); ctx.arc(p.x * w, p.y * h, p.r, 0, 6.283); ctx.fill();
    }
    g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "rgba(12,14,17,0.8)");
    g.addColorStop(0.35, "rgba(12,14,17,0)");
    g.addColorStop(0.8, "rgba(12,14,17,0)");
    g.addColorStop(1, "rgba(12,14,17,1)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    if (motion && running) raf = requestAnimationFrame(draw);
  };

  const start = () => {
    if (running) return;
    running = true;
    lastT = performance.now();
    if (motion) raf = requestAnimationFrame(draw); else draw(performance.now());
  };
  const stop = () => {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  };

  let ro: ResizeObserver | undefined;
  if ("ResizeObserver" in window) {
    ro = new ResizeObserver(() => { resize(); if (!motion || !running) draw(performance.now()); });
    ro.observe(c);
  }
  let io: IntersectionObserver | undefined;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver((es) => {
      for (const e of es) { if (e.isIntersecting) start(); else stop(); opts.onVisible(e.isIntersecting); }
    }, { threshold: 0 });
    io.observe(c);
  } else {
    start();
  }
  const onVis = () => { if (document.hidden) stop(); else start(); };
  document.addEventListener("visibilitychange", onVis);

  return () => {
    stop();
    ro?.disconnect();
    io?.disconnect();
    document.removeEventListener("visibilitychange", onVis);
  };
}

export type SfxName = "hover" | "click" | "whoosh" | "open" | "close" | "tick" | "rise" | "on" | "levelup";

export class Sfx {
  /** Preferencia del usuario (toggle de la barra). */
  on = false;
  private ac: AudioContext | null = null;
  private master: GainNode | null = null;
  private amb: { g: GainNode; nodes: (OscillatorNode)[] } | null = null;
  private lastHover = 0;

  initAudio(): boolean {
    if (this.ac) return true;
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return false;
    try {
      this.ac = new AC();
      this.master = this.ac.createGain();
      this.master.gain.value = 0.55;
      this.master.connect(this.ac.destination);
    } catch { this.ac = null; return false; }
    return true;
  }

  resumeAudio(): void {
    if (this.ac && this.ac.state === "suspended") { try { void this.ac.resume(); } catch { /* ignorar */ } }
  }

  private tone(freq: number, dur: number, type: OscillatorType, gain: number, t0: number, slideTo?: number): void {
    const ac = this.ac!, o = ac.createOscillator(), g = ac.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(this.master!);
    o.start(t0); o.stop(t0 + dur + 0.03);
  }

  private noise(dur: number, gain: number, t0: number, fromHz: number, toHz: number): void {
    const ac = this.ac!, len = Math.max(1, Math.floor(ac.sampleRate * dur));
    const buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = ac.createBufferSource(); src.buffer = buf;
    const f = ac.createBiquadFilter(); f.type = "bandpass"; f.Q.value = 1.1;
    f.frequency.setValueAtTime(fromHz, t0); f.frequency.exponentialRampToValueAtTime(toHz, t0 + dur);
    const g = ac.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + dur * 0.25);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f); f.connect(g); g.connect(this.master!);
    src.start(t0); src.stop(t0 + dur + 0.03);
  }

  sfx(name: SfxName): void {
    if (!this.on || !this.ac || this.ac.state !== "running") return;
    const now = performance.now();
    if (name === "hover") { if (now - this.lastHover < 80) return; this.lastHover = now; }
    const t = this.ac.currentTime + 0.01;
    try {
      switch (name) {
        case "hover": this.tone(880, 0.06, "sine", 0.04, t, 1320); break;
        case "click": this.tone(520, 0.05, "triangle", 0.11, t); this.tone(780, 0.1, "sine", 0.09, t + 0.04, 1040); break;
        case "whoosh": this.noise(0.32, 0.13, t, 300, 2600); this.tone(220, 0.26, "sine", 0.035, t, 440); break;
        case "open": this.tone(600, 0.08, "sine", 0.08, t, 900); break;
        case "close": this.tone(700, 0.08, "sine", 0.06, t, 420); break;
        case "tick": this.tone(1900, 0.02, "sine", 0.03, t); break;
        case "rise": this.tone(180, 0.24, "sine", 0.03, t, 360); break;
        case "on": this.tone(440, 0.1, "sine", 0.08, t, 660); this.tone(880, 0.2, "sine", 0.06, t + 0.1, 1320); break;
        case "levelup": {
          const notes = [523.25, 659.25, 783.99, 1046.5];
          notes.forEach((n, i) => this.tone(n, 0.16, "triangle", 0.1, t + i * 0.09));
          this.tone(1568, 0.5, "sine", 0.07, t + 0.4, 2093);
          this.noise(0.4, 0.05, t + 0.36, 1200, 6000);
          break;
        }
      }
    } catch { /* ignorar */ }
  }

  /** Colchón ambiental solo con sonido activo, hero visible y pestaña en primer plano. */
  updateAmbient(heroVisible: boolean): void {
    this.ambient(this.on && heroVisible && !document.hidden);
  }

  ambient(on: boolean): void {
    const ac = this.ac;
    if (!ac) return;
    if (on && !this.amb) {
      try {
        const g = ac.createGain(); g.gain.value = 0.0001; g.connect(this.master!);
        const f = ac.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 240; f.connect(g);
        const o1 = ac.createOscillator(); o1.type = "sine"; o1.frequency.value = 55;
        const o2 = ac.createOscillator(); o2.type = "sine"; o2.frequency.value = 55.6;
        const o3 = ac.createOscillator(); o3.type = "triangle"; o3.frequency.value = 110.4;
        const lfo = ac.createOscillator(); lfo.frequency.value = 0.11;
        const lg = ac.createGain(); lg.gain.value = 110; lfo.connect(lg); lg.connect(f.frequency);
        o1.connect(f); o2.connect(f); o3.connect(f);
        o1.start(); o2.start(); o3.start(); lfo.start();
        g.gain.exponentialRampToValueAtTime(0.045, ac.currentTime + 1.6);
        this.amb = { g, nodes: [o1, o2, o3, lfo] };
      } catch { this.amb = null; }
    } else if (!on && this.amb) {
      const a = this.amb; this.amb = null;
      try {
        a.g.gain.cancelScheduledValues(ac.currentTime);
        a.g.gain.setValueAtTime(Math.max(0.0001, a.g.gain.value), ac.currentTime);
        a.g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.8);
      } catch { /* ignorar */ }
      setTimeout(() => { a.nodes.forEach((n) => { try { n.stop(); } catch { /* ignorar */ } }); try { a.g.disconnect(); } catch { /* ignorar */ } }, 900);
    }
  }

  close(): void {
    this.ambient(false);
    if (this.ac) { try { void this.ac.close(); } catch { /* ignorar */ } this.ac = null; }
  }
}
