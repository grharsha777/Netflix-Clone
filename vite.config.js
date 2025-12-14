import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'gsap', 'lucide-react']
  },
  build: {
    rollupOptions: {
      input: './index.html'
    }
  },
  server: {
    port: 3000
  }
});
