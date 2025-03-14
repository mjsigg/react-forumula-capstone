import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import jsconfigPaths from "vite-jsconfig-paths"; // Import the plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), jsconfigPaths()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
