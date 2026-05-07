import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from '@cloudflare/vite-plugin'
import { TanStackRouterPlugin } from '@tanstack/router-plugin'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

export default defineConfig({
  plugins: [
    tanstackStart({
      target: 'cloudflare',
    }),
    TanStackRouterPlugin(),
    react(),
    cloudflare({
      // Prevents wrangler.toml parse errors – use only if your config is empty or invalid
      configPath: false,
    }),
  ],
})
