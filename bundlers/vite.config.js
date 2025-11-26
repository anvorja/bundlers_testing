import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist/vite",
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: () => "bundle.js",
    },
    sourcemap: true,
  },
});

