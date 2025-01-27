import typescript from '@rollup/plugin-typescript2';
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
        typescript({ useTsconfigDeclarationDir: true }),
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
