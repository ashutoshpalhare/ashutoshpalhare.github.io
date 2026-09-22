
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Cloudflare adapter off
  cloudflare: false,

  tanstackStart: {
    server: { entry: "server" },
    // SPA mode enable → static shell + client-side hydration
    spa: {
      enabled: true,
    },
    // Optional but recommended for single-page portfolio
    prerender: {
      enabled: true,
    },
  },

  vite: {
    base: "/",
  },
});