import { defineConfig } from 'vite';

export default defineConfig(() => ({
	base: '/',
	server: {
		host: true,
		port: 3000,
		strictPort: true,
		headers: {
		  'Content-Type': 'text/html', // hilft Safari
		},
	  },
}));
