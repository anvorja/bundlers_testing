import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../dist/webpack"),
    filename: "bundle.js",
  },
  mode: "production",
  devtool: "source-map",
  
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true // Ignora errores de TypeScript durante el build
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        type: "javascript/auto",
        use: {
          loader: "json-loader"
        }
      }
    ],
  },
  
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },

  // Ignorar errores de TypeScript
  stats: {
    errorDetails: true
  }
};
