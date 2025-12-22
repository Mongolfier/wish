import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

import { generateIconTypesPlugin } from "../shared/plugins/generateIconTypesPlugin";

export default defineConfig({
  plugins: [
    react(),
    generateIconTypesPlugin({
      iconDir: "./src/assets/icons",
      outputDir: "./src/core/Icon",
    }),
  ],
  resolve: {
    alias: {
      "@/": resolve(__dirname, "src/stories/"),
    },
    extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
  },
});
