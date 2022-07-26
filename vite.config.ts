import { defineConfig } from "vite";
import path from "path";
import ReactInspector from "vite-plugin-react-inspector";

export default defineConfig({
  plugins: [ReactInspector()],
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
      import { jsx } from '@emotion/react'
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
