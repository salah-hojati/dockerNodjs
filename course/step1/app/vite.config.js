import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true, // یا تنظیمات مرتبط با HMR
    }),
  ],
  server: {
    watch: {
      usePolling: true, // برای Docker یا WSL2
    },
    hmr: true, // فعال کردن HMR
  },
});