import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    target: "cloudflare",   // ✅ Cloudflare deployment (not vercel)
  },
});
