// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [".csb.app"], // hoặc cụ thể là 'rxgsqk-5173.csb.app'
  },
});
