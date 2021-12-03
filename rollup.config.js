import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/createCorner.js',
  output: {
    name: 'createCorner',
    file: 'dist/bundle.js',
    format: 'umd'
  },
  plugins: [resolve(), commonjs()],
  external: ['dopa']
};
