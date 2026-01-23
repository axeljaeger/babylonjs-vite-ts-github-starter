import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
	base: '/',
	server: {
		host: true,
		port: 3000,
		strictPort: true,
	},
	plugins: [
		mode === 'analyze' && visualizer({
			open: true,
			filename: 'dist/stats.html',
			gzipSize: true,
			brotliSize: true,
		}),
	],
	build: {
		rollupOptions: {
			output: {
				manualChunks: mode === 'analyze' ? undefined : {
					babylonjs: ['@babylonjs/core'],
				},
			},
		},
		reportCompressedSize: mode === 'analyze',
	},
}));
