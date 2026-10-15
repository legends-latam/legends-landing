/** Clase base + modificador condicional ("step" + on → "step on"). */
export function cls(base: string, on: boolean, mod = "on"): string {
  return on ? `${base} ${mod}` : base;
}

/** 1200 → "1.200" (formato del diseño). */
export function fmtMmr(n: number): string {
  return n >= 1000 ? `${Math.floor(n / 1000)}.${`00${n % 1000}`.slice(-3)}` : String(n);
}
