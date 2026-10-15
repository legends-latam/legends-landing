#!/usr/bin/env python3
"""Convierte el body de ../static/index.html en los componentes React de src/sections/ (TSX).

Herramienta de migración: se usó una vez para portar el diseño de Claude Design a React sin
perder píxeles. Solo vuelve a ejecutarla si se re-exporta el diseño; sobrescribe src/sections/*.tsx
(salvo Faq.tsx, que es manual) y src/data/faq.ts.
    python3 scripts/html2jsx.py
"""
import re, json, sys
from pathlib import Path

WEB = Path(__file__).resolve().parent.parent
ROOT = WEB.parent
SRC = (ROOT / "static/index.html").read_text()
OUT = WEB / "src"
RELEASES_LATEST = "https://github.com/legends-latam/desktop-legends-release/releases/latest"

DIMS = {
    "legends-logo.png": (500, 500), "legends-logo-76.webp": (76, 76), "watata-explica-160.webp": (160, 215),
    "crop-cofres.webp": (555, 285), "crop-kpis.webp": (1350, 116), "crop-progreso.webp": (555, 198),
    "crop-ruta.webp": (777, 636), "crop-share.webp": (683, 256), "crop-toast.webp": (382, 94),
    "shot-chat.webp": (516, 786), "shot-coach.webp": (1400, 807), "shot-perfil.webp": (747, 792),
    "shot-replays.webp": (1400, 810), "shot-steps.webp": (1400, 108), "shot-wards.webp": (1400, 808),
    "watata-celebra.webp": (656, 900), "watata-confiado.webp": (640, 900), "watata-explica.webp": (670, 900),
    "watata-senala.webp": (613, 900),
}

body = SRC[SRC.index('<div id="lg"'):SRC.index("\n</div>\n\n<script>")]

# ---------- marcadores de sección ----------
marks = [
    ("Header", "<!-- ===== NAV", "<!-- ===== 1 ·"),
    ("Hero", "<!-- ===== 1 ·", "<!-- ===== 2 ·"),
    ("Trust", "<!-- ===== 2 ·", "<!-- ===== 3 ·"),
    ("Problem", "<!-- ===== 3 ·", "<!-- ===== 4 ·"),
    ("Offer", "<!-- ===== 4 ·", "<!-- ===== 4b ·"),
    ("Route", "<!-- ===== 4b ·", "<!-- ===== 5 ·"),
    ("Results", "<!-- ===== 5 ·", "<!-- ===== 6 ·"),
    ("Faq", "<!-- ===== 6 ·", "<!-- ===== 7 ·"),
    ("Closing", "<!-- ===== 7 ·", "<!-- ===== FOOTER"),
    ("Footer", "<!-- ===== FOOTER", None),
]
sections = {}
for name, a, b in marks:
    i = body.index(a)
    j = body.index(b) if b else len(body)
    sections[name] = body[i:j].strip("\n")

# ---------- FAQ data ----------
faq = re.findall(r'<div class="faq(?: open)?" data-dc-class="fq(\d)".*?<span>(.*?)</span><span class="chev".*?<div class="ans"><p[^>]*>(.*?)</p></div>', body, flags=re.S)
assert len(faq) == 9, len(faq)
faq_sorted = sorted(faq, key=lambda t: int(t[0]))
(OUT / "data").mkdir(parents=True, exist_ok=True)
ts = "/** Las 9 preguntas del acordeón. El índice es el id usado por el estado `faq`. Columna izquierda: 0, 8, 1, 2 · derecha: 3–7. */\nexport interface FaqItem { q: string; a: string }\n\nexport const FAQ: FaqItem[] = [\n"
for i, q, a in faq_sorted:
    ts += f"  {json.dumps({'q': q, 'a': a}, ensure_ascii=False)},\n"
ts += "];\n\nexport const FAQ_LEFT = [0, 8, 1, 2];\nexport const FAQ_RIGHT = [3, 4, 5, 6, 7];\n"
(OUT / "data/faq.ts").write_text(ts)

# ---------- conversión ----------
ATTR_MAP = {"class": "className", "stroke-width": "strokeWidth", "stroke-linecap": "strokeLinecap",
            "stroke-linejoin": "strokeLinejoin", "stroke-dasharray": "strokeDasharray", "tabindex": "tabIndex",
            "crossorigin": "crossOrigin", "for": "htmlFor", "srcset": "srcSet"}

def camel(k):
    if k.startswith("--"): return f'"{k}"'
    return re.sub(r"-([a-z])", lambda m: m.group(1).upper(), k)

def style_to_jsx(s):
    parts = []
    for decl in s.split(";"):
        decl = decl.strip()
        if not decl: continue
        k, v = decl.split(":", 1)
        parts.append(f'{camel(k.strip())}: {json.dumps(v.strip(), ensure_ascii=False)}')
    return "style={{ " + ", ".join(parts) + " }}"

def convert_tag(m):
    tag = m.group(0)
    if tag.startswith("<!--"):
        return "{/* " + tag[4:-3].strip() + " */}"
    if tag.startswith("</"): return tag
    name = re.match(r"<([a-zA-Z0-9]+)", tag).group(1)
    attrs_s = tag[len(name) + 1:].rstrip(">").rstrip("/").strip()
    out = []
    for am in re.finditer(r'([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:="([^"]*)")?', attrs_s):
        k, v = am.group(1), am.group(2)
        if k == "style":
            out.append(style_to_jsx(v)); continue
        k2 = ATTR_MAP.get(k, k)
        if v is None: out.append(k2)
        else: out.append(f'{k2}="{v}"')
    selfclose = name in ("img", "br", "input", "meta", "link", "hr")
    return f"<{name}" + ("".join(" " + a for a in out)) + (" />" if selfclose else ">")

def to_jsx(html):
    return re.sub(r"<!--.*?-->|</?[a-zA-Z][^>]*>", convert_tag, html, flags=re.S)

def must(s, old, new, n=1):
    c = s.count(old)
    if c != n: sys.exit(f"ERROR {c}x (esperado {n}): {old[:80]!r}")
    return s.replace(old, new)

# Variantes responsive generadas con sharp (ancho en px) y el tamaño con el que se muestra cada imagen.
SRCSET = {
    "watata-confiado.webp": ([240, 480, 640], "(max-width: 720px) 128px, 214px"),
    "watata-senala.webp": ([360, 520, 613], "(max-width: 720px) 123px, 259px"),
    "shot-coach.webp": ([640, 1000, 1400], "(max-width: 720px) calc(92vw - 34px), (max-width: 1120px) 88vw, 600px"),
    "shot-perfil.webp": ([660, 747], "(max-width: 720px) calc(100vw - 38px), (max-width: 1120px) 94vw, 660px"),
    "shot-replays.webp": ([720, 1400], "(max-width: 720px) calc(100vw - 38px), (max-width: 1120px) 94vw, 660px"),
    "shot-wards.webp": ([720, 1400], "(max-width: 720px) calc(100vw - 38px), (max-width: 1120px) 94vw, 660px"),
    "crop-kpis.webp": ([700, 1350], "(max-width: 720px) 80vw, 500px"),
}

def srcset_for(name):
    if name not in SRCSET: return ""
    widths, sizes = SRCSET[name]
    base = name[:-5]
    orig_w = DIMS[name][0]
    parts = [f"/assets/{base}-{w}.webp {w}w" if w != orig_w else f"/assets/{name} {orig_w}w" for w in sorted(set(widths))]
    return f' srcset="{", ".join(parts)}" sizes="{sizes}"'

# --- preprocesado HTML (antes de JSX) ---
def pre(html, name):
    html = html.replace("../assets/", "/assets/")
    html = html.replace('src="/assets/legends-logo.png" alt="Legends" style="width: 38px; height: 38px; display: block;"',
                        'src="/assets/legends-logo-76.webp" alt="Legends" style="width: 38px; height: 38px; display: block;"')
    html = html.replace('src="/assets/legends-logo.png" alt="" style="width: 36px; height: 36px; display: block;"',
                        'src="/assets/legends-logo-76.webp" alt="" style="width: 36px; height: 36px; display: block;"')
    html = html.replace('src="/assets/watata-explica.webp"', 'src="/assets/watata-explica-160.webp"')
    # imágenes: dimensiones, lazy, prioridad
    def fix_img(m):
        t = m.group(0)
        src = re.search(r'src="/assets/([^"]+)"', t)
        if not src: return t
        n = src.group(1); w, h = DIMS[n]
        attrs = f' width="{w}" height="{h}" decoding="async"' + srcset_for(n)
        # Fuera del hero todo es lazy; en el hero, el chat (oculto en móvil) también.
        if name not in ("Hero", "Header") or n == "shot-chat.webp": attrs += ' loading="lazy"'
        elif n == "shot-coach.webp": attrs += ' fetchpriority="high"'
        t = t.replace("<img", "<img" + attrs, 1)
        st = re.search(r'style="([^"]*)"', t)
        if st and "width: 100%" in st.group(1) and "height" not in st.group(1):
            t = t.replace(st.group(0), f'style="{st.group(1).rstrip()} height: auto;"', 1)
        return t
    html = re.sub(r"<img\b[^>]*>", fix_img, html)
    return html

# --- postprocesado JSX (bindings dinámicos) ---
DL_ATTRS = 'href={dlHref(rel)} {...dlAttrs(rel)}'
META_LINE = '<span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "1.6px", textTransform: "uppercase", color: "#8C929B" }}>Instalador .exe · Windows 64 bits · <span>{dlLabel(rel)}</span></span>'

def post(jsx, name):
    jsx = jsx.replace('fetchpriority="high"', 'fetchPriority="high"')
    if name == "Header":
        jsx = must(jsx, 'className="snd" data-dc-class="sndCls" data-dc-click="toggleSound" aria-pressed="false" data-dc-attr="aria-pressed:sndOn"',
                   "className={cls(\"snd\", sound)} onClick={toggleSound} aria-pressed={sound}")
        jsx = must(jsx, '<span data-dc-text="sndLabel">Sonido off</span>', '<span>{sound ? "Sonido on" : "Sonido off"}</span>')
        jsx = must(jsx, '<a className="btn-p" href="#descargar" ', f'<a className="btn-p dl" {DL_ATTRS} ')
    if name == "Hero":
        jsx = must(jsx, '<canvas id="lgHeroCanvas" ', '<canvas id="lgHeroCanvas" ref={canvasRef} ')
        for i in range(4):
            jsx = re.sub(rf'className="role(?: on)?" data-dc-class="ro{i}"', f'className={{cls("role", roleIdx === {i})}}', jsx)
        jsx = must(jsx, '<a className="btn-p cta-main" href="#descargar" ', f'<a className="btn-p cta-main dl" {DL_ATTRS} ')
        jsx = must(jsx, 'Sin formularios · conectas Steam con un clic · sin Pay to Win</span>',
                   'Sin formularios · conectas Steam con un clic · sin Pay to Win</span>\n        ' + META_LINE)
    if name == "Offer":
        for i in range(3):
            jsx = re.sub(rf'className="step(?: on)?" data-dc-class="st{i}" data-dc-click="pick{i}"',
                         f'className={{cls("step", step === {i})}} onClick={{() => pickStep({i})}}', jsx)
            jsx = re.sub(rf'className="shot(?: on)?" data-dc-class="sh{i}"', f'className={{cls("shot", step === {i})}}', jsx)
        jsx = must(jsx, '<span data-dc-text="cap">Paso 1 · Descarga y conecta Steam</span>', '<span>{STEP_CAPTIONS[step]}</span>')
        # frase definitoria para buscadores (IA y clásicos)
        jsx = must(jsx, 'Legends analiza tus replays .dem después de la partida y los compara con el benchmark de tu rango y tu rol.',
                   'Legends es una aplicación gratuita para Windows que analiza tus replays .dem de Dota 2 después de la partida y los compara con el benchmark de tu rango y tu rol.')
    if name == "Route":
        jsx = must(jsx, 'width: "68%" }} data-dc-style="width:xpW" data-dc-x=""', 'width: done ? "74%" : "68%" }}')
        jsx = must(jsx, '<span data-dc-text="xp">340</span>', '<span>{done ? 370 : 340}</span>')
        jsx = re.sub(r'<div data-dc-if="todo" style=\{\{ display: "contents" \}\}>(.*?)</div>',
                     r'{!done && (<div style={{ display: "contents" }}>\1</div>)}', jsx, flags=re.S)
        jsx = re.sub(r'<div data-dc-if="done" style=\{\{ display: "contents" \}\}>\s*(<div.*?</div>)\s*</div>',
                     r'{done && (<div style={{ display: "contents" }}>\1</div>)}', jsx, flags=re.S)
        jsx = must(jsx, 'data-dc-click="complete"', 'onClick={complete}')
    if name == "Results":
        jsx = must(jsx, '<span data-dc-text="mmr">1.200</span>', '<span>{fmtMmr(mmr)}</span>')
    if name == "Closing":
        jsx = must(jsx, '<a className="btn-p pulse cta-main" href="#" ', f'<a className="btn-p pulse cta-main dl" {DL_ATTRS} ')
        jsx = must(jsx, 'Sin formularios · sin tarjeta · sin Pay to Win</span>',
                   'Sin formularios · sin tarjeta · sin Pay to Win</span>\n        ' + META_LINE)
    if "data-dc" in jsx:
        sys.exit(f"ERROR: quedan bindings data-dc en {name}:\n" + "\n".join(l for l in jsx.splitlines() if "data-dc" in l)[:800])
    return jsx

HEADERS = {
    "Header": ('import { cls } from "../lib/ui";\nimport { dlAttrs, dlHref, type Release } from "../lib/release";\n\n'
               'export function Header({ sound, toggleSound, rel }: { sound: boolean; toggleSound: () => void; rel: Release | null }) {'),
    "Hero": ('import type { RefObject } from "react";\nimport { cls } from "../lib/ui";\nimport { dlAttrs, dlHref, dlLabel, type Release } from "../lib/release";\n\n'
             'export function Hero({ roleIdx, rel, canvasRef }: { roleIdx: number; rel: Release | null; canvasRef: RefObject<HTMLCanvasElement | null> }) {'),
    "Trust": "export function Trust() {",
    "Problem": "export function Problem() {",
    "Offer": ('import { cls } from "../lib/ui";\n\nexport const STEP_CAPTIONS = ["Paso 1 · Descarga y conecta Steam", "Paso 2 · Elige hasta 5 replays", "Paso 3 · Tu diagnóstico y tu ruta por rol"];\n\n'
              'export function Offer({ step, pickStep }: { step: number; pickStep: (i: number) => void }) {'),
    "Route": "export function Route({ done, complete }: { done: boolean; complete: () => void }) {",
    "Results": ('import { fmtMmr } from "../lib/ui";\n\nexport function Results({ mmr }: { mmr: number }) {'),
    "Closing": ('import { dlAttrs, dlHref, dlLabel, type Release } from "../lib/release";\n\n'
                'export function Closing({ rel }: { rel: Release | null }) {'),
    "Footer": "export function Footer() {",
}

(OUT / "sections").mkdir(parents=True, exist_ok=True)
for name, _, _ in marks:
    if name == "Faq": continue  # se escribe a mano a partir de data/faq.ts
    jsx = post(to_jsx(pre(sections[name], name)), name)
    # un solo nodo raíz: Header tiene comentario + <header>; Hero comentario + <section>… los envolvemos en <>
    body_jsx = "\n".join("      " + l if l else "" for l in jsx.splitlines())
    src = f"{HEADERS[name]}\n  return (\n    <>\n{body_jsx}\n    </>\n  );\n}}\n"
    (OUT / "sections" / f"{name}.tsx").write_text(src)
    print(f"{name}.tsx: {len(src.splitlines())} líneas")

# Trozo del FAQ para copiar estilos al componente manual
faq_block = sections["Faq"]
one = re.search(r'<div class="faq open".*?</div>\n        </div>', faq_block, flags=re.S).group(0)
print("FAQ (referencia de estilos, Faq.tsx es manual):", len(one), "caracteres")
head = faq_block[:faq_block.index('<div class="faq-grid"')]
assert head
print("OK")
