import * as esbuild from 'esbuild';
import * as path from 'path';
import { fileURLToPath } from 'url';
import inlineImage from 'esbuild-plugin-inline-image';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildOptions: esbuild.BuildOptions = {
  entryPoints: [path.join(__dirname, 'emails/TestEmail/TestEmail.tsx')],
  bundle: true,
  outfile: path.join(__dirname, 'dist/index.js'),
  platform: 'node',
  target: 'node14',
  format: 'esm',
  plugins: [inlineImage()],
  external: ['@react-email/components', '@react-email/render'],
  loader: { '.ts': 'ts', '.tsx': 'tsx' },
  resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.png', '.jpg', '.jpeg', '.gif', '.svg'],
};

console.log('Starting build...');

esbuild.build(buildOptions)
  .then(() => console.log('Build completed successfully!'))
  .catch((error) => {
    console.error('Build failed:', error);
    process.exit(1);
  });

console.log('Build process initiated. Watching for changes...');