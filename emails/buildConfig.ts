import * as esbuild from 'esbuild'
import * as path from 'path'
import inlineImage from './esbuild-image-plugin'
import { tsPaths } from './esbuild-plugin-tspaths'

const buildOptions: esbuild.BuildOptions = {
  entryPoints: [path.join(__dirname, 'emails/index.ts')],
  bundle: true,
  outfile: path.join(__dirname, 'dist/index.js'),
  platform: 'node',
  target: 'node14',
  format: 'cjs',
  plugins: [inlineImage(), tsPaths],
  external: ['@react-email/components', '@react-email/render'],
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.svg': 'file',
  },
}

esbuild.build(buildOptions).catch(() => process.exit(1))