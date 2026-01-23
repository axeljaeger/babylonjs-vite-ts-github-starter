import { defineConfig } from 'vite';
import { analyzer } from 'vite-bundle-analyzer';

export default defineConfig(({ mode }) => ({
	base: '/',
	server: {
		host: true,
		port: 3000,
		strictPort: true,
	},
	plugins: [
		mode === 'analyze' && analyzer({
			analyzerMode: 'static',
			fileName: 'stats',
			reportTitle: 'Bundle Analyzer',
			defaultSizes: 'gzip',
			openAnalyzer: true,
		}),
	].filter(Boolean),
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
