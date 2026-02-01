import { defineConfig } from 'vite';

export default defineConfig(() => ({
	base: 'https://axeljaeger.github.io/babylonjs-vite-ts-github-starter/',
	server: {
		host: true,
		port: 3000,
		strictPort: true,
	  },
}));
