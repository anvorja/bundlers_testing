import { defineConfig } from "@rspack/cli";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../dist/rspack"),
    filename: "bundle.js",
  },
  mode: "production",
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
            },
          },
        },
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
});
