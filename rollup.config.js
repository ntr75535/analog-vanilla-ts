import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'iife', // Immediately Invoked Function Expression
    sourcemap: true
  },
  plugins: [
      nodeResolve({browser:true}),
      commonjs(),
      typescript({tsconfig:'./tsconfig.json'})
  ],
};
