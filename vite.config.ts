import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(() => {
  const base = 'auto';
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
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true }
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: 'src/App.tsx',
    },
  },
  };
});