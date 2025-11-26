import ts from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/rollup/bundle.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [ts(), json()],
};
