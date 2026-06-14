import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(() => {
  const base = '/';
  return {
    base,
    plugins: [
    react(),
    federation({
      name: 'workspace',
      filename: 'workspace.js',
      exposes: {
        './App': './src/App.tsx',
      },
      shared: ['react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled', 'react-router-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: true,
    cssCodeSplit: false,
    assetsDir: '',
    sourcemap: false, // Keep the remote bundle light
  },
  };
});