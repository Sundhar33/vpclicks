import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: "dist", // 👈 Vercel looks for this folder by default
  },
  // 👇 This makes sure all routes (React Router, etc.) work correctly
  base: "./",
});
