import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from '@cloudflare/vite-plugin'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

export default defineConfig({
  plugins: [
    tanstackStart({ target: 'cloudflare' }),
    TanStackRouterVite(),
    react(),
    cloudflare({
      configPath: false,   // avoids wrangler.toml parse errors
    }),
  ],
})
