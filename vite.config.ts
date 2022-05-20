import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: [
      // { find: "@", replacement: path.resolve(__dirname, "./src") },
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
