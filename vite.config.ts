import { defineConfig } from "vite";
import path from "path";
import ReactInspector from "vite-plugin-react-inspector";
import Unocss from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";
import react from "@vitejs/plugin-react";

export default defineConfig({
  assetsInclude: ["**/*.gltf", "**/*.glb"],
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    ReactInspector(),
    Unocss({
      presets: [presetAttributify({}), presetUno()],
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: /^~/, replacement: "" },
    ],
  },
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: `
      import React from 'react'  
    `,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          return id.includes("node_modules") ? "vendor" : "common";
        },
      },
    },
  },
});
