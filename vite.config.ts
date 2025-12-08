import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

export default defineConfig(({ mode }) => ({
  base: '/',
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    {
      name: 'copy-files',
      writeBundle() {
        // Copy CNAME file to dist directory
        if (fs.existsSync('CNAME')) {
          fs.copyFileSync('CNAME', 'dist/CNAME');
        }
        // Copy 404.html for GitHub Pages client-side routing
        if (fs.existsSync('public/404.html')) {
          fs.copyFileSync('public/404.html', 'dist/404.html');
        }
        // Copy favicon.ico to dist directory
        if (fs.existsSync('public/favicon.ico')) {
          fs.copyFileSync('public/favicon.ico', 'dist/favicon.ico');
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
