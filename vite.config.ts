import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 6010,
    watch: {
      usePolling: true, // sledování změn
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true, // enforcne nastavenej port
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        // Add other entry points if needed
      },
      external: ['public/vlastni/filmino/**']
    }
  }
})
