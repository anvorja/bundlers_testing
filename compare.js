import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { performance } from "perf_hooks";

const bundlers = [
  { name: "esbuild", cmd: "pnpm build:esbuild", output: "dist/esbuild/bundle.js" },
  { name: "rollup", cmd: "pnpm build:rollup", output: "dist/rollup/bundle.js" },
  { name: "vite", cmd: "pnpm build:vite", output: "dist/vite" },
  { name: "rspack", cmd: "pnpm build:rspack", output: "dist/rspack/bundle.js" },
  { name: "webpack", cmd: "pnpm build:webpack", output: "dist/webpack/bundle.js" }
];

function getBundleSize(outputPath) {
  if (!fs.existsSync(outputPath)) return 0;
  
  const stat = fs.statSync(outputPath);
  if (stat.isFile()) {
    return stat.size;
  }
  
  // Si es directorio, buscar archivos JS
  if (stat.isDirectory()) {
    const files = fs.readdirSync(outputPath);
    let totalSize = 0;
    
    for (const file of files) {
      const filePath = path.join(outputPath, file);
      if (file.endsWith(".js") && fs.statSync(filePath).isFile()) {
        totalSize += fs.statSync(filePath).size;
      }
    }
    return totalSize;
  }
  
  return 0;
}

console.log("\n📦 Comparando bundlers...\n");

const results = [];

// Crear directorios de salida si no existen
for (const bundler of bundlers) {
  const outputDir = path.dirname(bundler.output);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
}

for (const bundler of bundlers) {
  console.log(`➡️  Ejecutando ${bundler.name}...`);

  const start = performance.now();
  try {
    execSync(bundler.cmd, { stdio: "inherit" });
  } catch (err) {
    console.error(`❌ Error ejecutando ${bundler.name}:`, err.message);
    results.push({
      name: bundler.name,
      time: "Error",
      size: "Error"
    });
    continue;
  }
  const end = performance.now();

  const size = getBundleSize(bundler.output);

  results.push({
    name: bundler.name,
    time: (end - start).toFixed(1) + " ms",
    size: size ? (size / 1024).toFixed(2) + " KB" : "N/A"
  });
}

console.log("\n📊 Resultados:\n");
console.table(results);
