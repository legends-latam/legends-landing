import { useEffect, useState } from "react";

/**
 * SIN USO por ahora: la descarga de Legends ocurre en Discord (ver DISCORD_BETA en
 * sections/DiscordModal.tsx). Se conserva para volver a servir el .exe desde el sitio.
 *
 * Resuelve el instalador Legends_<version>_x64-setup.exe del último release estable de
 * github.com/legends-latam/desktop-legends-release.
 *
 * - Sin JavaScript (o si la API falla) los enlaces llevan a la página releases/latest.
 * - Usa la API pública (CORS abierto, 60 peticiones/hora por IP) y cachea 1 h en localStorage.
 * - Ignora drafts y prereleases; si el último release no trae el .exe, busca en los anteriores.
 */
export const REPO = "legends-latam/desktop-legends-release";
export const RELEASES_LATEST = `https://github.com/${REPO}/releases/latest`;
export const RELEASES_ALL = `https://github.com/${REPO}/releases`;

const API = `https://api.github.com/repos/${REPO}/releases`;
const RX = /^Legends_(\d+\.\d+\.\d+(?:[-+][\w.]+)?)_x64-setup\.exe$/i;
const KEY = "lg-release";
const TTL = 3_600_000;

export interface Release {
  version: string;
  tag: string;
  name: string;
  url: string;
  size: number;
  published: string;
  t: number;
}

interface GhAsset { name: string; browser_download_url: string; size: number }
interface GhRelease { tag_name: string; draft: boolean; prerelease: boolean; published_at: string; assets?: GhAsset[] }

function pick(rel: GhRelease | null): Release | null {
  if (!rel || rel.draft || rel.prerelease) return null;
  for (const a of rel.assets ?? []) {
    const m = RX.exec(a.name);
    if (m) return { version: m[1], tag: rel.tag_name, name: a.name, url: a.browser_download_url, size: a.size, published: rel.published_at, t: Date.now() };
  }
  return null;
}

async function get<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  return res.json() as Promise<T>;
}

function readCache(): Release | null {
  try {
    const c = JSON.parse(localStorage.getItem(KEY) ?? "null") as Release | null;
    if (c && c.url && RX.test(c.name ?? "") && Date.now() - c.t < TTL) return c;
  } catch { /* sin localStorage */ }
  return null;
}

export async function fetchLatestRelease(): Promise<Release | null> {
  const cached = readCache();
  if (cached) return cached;
  if (typeof fetch !== "function") return null;
  let r = pick(await get<GhRelease>(`${API}/latest`));
  if (!r) {
    const list = await get<GhRelease[]>(`${API}?per_page=15`);
    for (const x of list) { r = pick(x); if (r) break; }
  }
  if (r) { try { localStorage.setItem(KEY, JSON.stringify(r)); } catch { /* ignorar */ } }
  return r;
}

/** Estado del release: null hasta que se resuelve (coincide con el HTML prerenderizado). */
export function useLatestRelease(): Release | null {
  const [rel, setRel] = useState<Release | null>(null);
  useEffect(() => {
    let alive = true;
    fetchLatestRelease().then((r) => { if (alive && r) setRel(r); }).catch(() => { /* se mantiene releases/latest */ });
    return () => { alive = false; };
  }, []);
  return rel;
}

export function mb(bytes: number): string {
  return bytes ? `${Math.round(bytes / 1_048_576)} MB` : "";
}

export function dlHref(rel: Release | null): string {
  return rel ? rel.url : RELEASES_LATEST;
}

/** Atributos extra de los CTA de descarga (sin href). */
export function dlAttrs(rel: Release | null) {
  if (!rel) return { rel: "noopener", title: "Descargar Legends para Windows" };
  const size = rel.size ? ` · ${mb(rel.size)}` : "";
  return { rel: "noopener", download: rel.name, "data-version": rel.version, title: `Descargar Legends v${rel.version} para Windows · ${rel.name}${size}` };
}

/** "v0.7.1 · 77 MB" o el texto genérico mientras no hay datos. */
export function dlLabel(rel: Release | null): string {
  if (!rel) return "versión más reciente";
  return `v${rel.version}${rel.size ? ` · ${mb(rel.size)}` : ""}`;
}
