// Genera las variantes responsive de public/assets (srcset) y los iconos pequeños.
// Lee los originales de ../assets (handoff) y escribe en public/assets. Uso: npm run images
// (sharp está en devDependencies; las variantes generadas se versionan en git).
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";
const here = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(here, "..", "..", "assets") + path.sep;      // originales del handoff de diseño
const A = path.join(here, "..", "public", "assets") + path.sep;    // salida publicada
const jobs = [
  ["watata-confiado.webp", [240, 480], 70],
  ["watata-senala.webp", [360, 520], 70],
  ["watata-celebra.webp", [440], 70],
  ["shot-coach.webp", [640, 1000]],
  ["shot-perfil.webp", [660]],
  ["shot-replays.webp", [720]],
  ["shot-wards.webp", [720]],
  ["crop-kpis.webp", [700]],
];
for (const [name, widths, quality = 80] of jobs) {
  const base = name.replace(/\.webp$/, "");
  for (const w of widths) {
    const out = `${A}${base}-${w}.webp`;
    const info = await sharp(SRC + name).resize({ width: w }).webp({ quality, effort: 6 }).toFile(out);
    console.log(`${base}-${w}.webp ${info.width}x${info.height} ${(info.size/1024).toFixed(0)} KB`);
  }
}
// avatar de Watata (44–52 px): versión pequeña
let info = await sharp(SRC + "watata-explica.webp").resize({ width: 160 }).webp({ quality: 82 }).toFile(A + "watata-explica-160.webp");
console.log(`watata-explica-160.webp ${info.width}x${info.height} ${(info.size/1024).toFixed(0)} KB`);
// logo para nav/footer (38 px → 2x)
info = await sharp(SRC + "legends-logo.png").resize({ width: 76 }).webp({ quality: 85, alphaQuality: 90 }).toFile(A + "legends-logo-76.webp");
console.log(`legends-logo-76.webp ${info.width}x${info.height} ${(info.size/1024).toFixed(1)} KB`);
