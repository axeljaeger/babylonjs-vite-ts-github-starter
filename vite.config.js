import { defineConfig } from 'vite';

export default defineConfig(() => ({
	base: '/',
	server: {
		host: true, // wichtig für Codespaces
		port: 4173,
		strictPort: true,
		headers: {
		  'Content-Type': 'text/html', // hilft Safari
		},
	  },
}));
