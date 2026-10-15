import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// El sitio vive en la raíz del dominio (legendslatam.com), por eso base "/".
// Los bundles van a /_app/ para no mezclarse con las imágenes de /assets/.
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    assetsDir: "_app",
    emptyOutDir: true,
  },
});
