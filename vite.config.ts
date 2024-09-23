import { TanStackRouterVite as tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { VitePWA as pwa } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    tanstackRouter(),
    svgr(),
    pwa({
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        description: "",
        icons: [
          {
            sizes: "192x192",
            src: "/icon-192x192.png",
            type: "image/png",
          },
          {
            sizes: "512x512",
            src: "/icon-512x512.png",
            type: "image/png",
          },
        ],
        name: "protected-supabase-vite-starter",
        short_name: "protected-supabase-vite-starter",
        theme_color: "#ffffff",
      },
      registerType: "autoUpdate",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
