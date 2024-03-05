import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
    base: "https://axeljaeger.github.io/babylonjs-vite-ts-github-starter/",
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  })
);