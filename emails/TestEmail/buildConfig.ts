import * as esbuild from 'esbuild'
import * as path from 'path'
import { tsPaths } from './esbuild-plugin-tspaths'

const buildOptions: esbuild.BuildOptions = {
  entryPoints: ['@/emails/index.ts'],
  bundle: true,
  outfile: '@/dist/index.js',
  platform: 'node',
  target: 'node14',
  format: 'cjs',
  plugins: [tsPaths],
}

esbuild.build(buildOptions).catch(() => process.exit(1))