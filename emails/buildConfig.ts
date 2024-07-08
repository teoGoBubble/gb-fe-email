import * as esbuild from 'esbuild'
import * as path from 'path'
import { imagePlugin } from './esbuild-image-plugin'

const buildOptions: esbuild.BuildOptions = {
  entryPoints: [path.resolve(__dirname, 'emails/index.ts')],
  bundle: true,
  outfile: path.resolve(__dirname, 'dist/index.js'),
  platform: 'node',
  target: 'node14',
  format: 'cjs',
  plugins: [imagePlugin],
}

esbuild.build(buildOptions).catch(() => process.exit(1))