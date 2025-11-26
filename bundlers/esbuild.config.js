import { build } from "esbuild";
import { readFileSync } from "fs";

await build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "dist/esbuild/bundle.js",
  format: "esm",
  sourcemap: true,
  minify: true,
  loader: {
    '.json': 'json'
  }
});

console.log("✔ ESBuild completado");
