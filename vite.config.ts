import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // सभी node_modules अलग फाइल में रहेंगे
          }
        }
      }
    }
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://clicker-game-api.me",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
