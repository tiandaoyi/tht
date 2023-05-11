import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/main.ts',
	output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
			sourcemap: true
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
			sourcemap: true
    },
    {
      name: 'tht',
      file: 'dist/bundle.iife.js',
      format: 'iife',
			sourcemap: true
    }
  ],
	plugins: [
    typescript()
  ]
};
