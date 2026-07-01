import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Static build only — no SSR, no API routes.
// Output goes to /dist which is what Cloudflare Pages should point to
// (Build command: npm run build | Build output directory: dist)
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
