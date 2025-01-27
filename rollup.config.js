import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'iife', // Or 'es' for ES module
        sourcemap: true, // Source map for debugging
    },
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        nodeResolve({
            browser: true, // or node
        }),
        commonjs(),
        babel({
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
            extensions: ['.js', '.ts']
        })
    ],
};
