// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/api': {
        target: 'http://ec2-51-21-3-88.eu-north-1.compute.amazonaws.com',
        changeOrigin: true,
        // ❌ Удали rewrite или закомментируй
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
