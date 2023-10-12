import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

const input = ['src/index.ts']

export default defineConfig([
  {
    input,
    output: {
      format: 'cjs',
      file: 'dist/index.cjs',
    },
    plugins: [
      typescript({ tsconfig: './tsconfig.json', declaration: false }),
      terser({}),
    ],
  },
  {
    input,
    output: {
      format: 'esm',
      file: 'dist/index.js',
    },
    plugins: [typescript({ tsconfig: './tsconfig.json' }), terser({})],
  },
])
