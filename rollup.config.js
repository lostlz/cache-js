import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
	input: 'src/index.js',
	output:[
		{
			file: pkg.main,
			format: 'cjs',
		},
		{
			file: pkg.module,
			format: 'esm',
		},
		{
			file: pkg.browser,
			format: 'umd',
			name: '@lostlz/cache-js',
		},
	],
	plugins: [
		resolve(), // so Rollup can find `ms`
		commonjs(), // so Rollup can convert `ms` to an ES module
		terser(),
	]
}

