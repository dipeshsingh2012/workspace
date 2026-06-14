/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'workspace',
      filename: 'workspace.js',
      // Modules to expose
      exposes: {
        './App': './src/App.tsx',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true }
      },
    }),
  ],
  build: {
    assetsInlineLimit: 0,
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3000, // Optional: specify a port
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup.ts',
    css: true,
  },
});
