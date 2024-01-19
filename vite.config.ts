import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    eslint({
      failOnWarning: true,
    }),
  ],
  server: {
    port: 3300,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
});
