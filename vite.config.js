import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

// =================
// MAIN
// =================
const config = defineConfig( {
	build: {
		target: "es2015"
	},
	plugins: [
		sveltekit(),
		imagetools( { force: true } )
	],
	server: {
		port: 3000,
		fs: {
			allow: [ "." ]
		}
	}
} );
export default config;
