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
    assetsDir: '',
    sourcemap: false, // Keep the remote bundle light
    rollupOptions: {
      input: 'src/App.tsx',
    },
  },
  };
});