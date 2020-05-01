import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import autoPreprocess from 'svelte-preprocess';
import html2 from 'rollup-plugin-html2'
import crypto from 'crypto';

const production = !process.env.ROLLUP_WATCH;
let cssHash;

export default {
	input: 'src/main.js',
	output: {
		format: 'iife',
		name: 'app',
		dir: 'public/build',
		entryFileNames: 'bundle.[hash].js'
	},
	plugins: [
		svelte({
			dev: !production,
			preprocess: autoPreprocess({
				postcss: {
					extract: true,
					plugins: [require('autoprefixer')]
				}
			}),
			// css: css => {
			// 	const sha256 = x => crypto.createHash('sha256').update(x, 'utf8').digest('hex');
			// 	cssHash = sha256(css.code);
			// 	css.write(`public/build/bundle.${cssHash}.css`, false)
			// }
		}),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		html2({
			template: './src/template.html',
			fileName: 'index.html',
			inject: 'head',
		}),
		commonjs(),

		!production && serve(),

		!production && livereload('public'),

		production && terser()
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
