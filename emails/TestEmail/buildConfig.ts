const esbuild = require('esbuild');
const { fileLoader } = require('esbuild-plugin-file-loader');

esbuild.build({
  entryPoints: ['./src/index.js'], // adjust this to your entry point
  bundle: true,
  outfile: 'dist/bundle.js', // adjust output as needed
  plugins: [
    fileLoader({
      loader: 'file',
      name: '[name]-[hash].[ext]',
      extensions: ['.png', '.jpg', '.jpeg', '.gif', '.svg'],
    }),
  ],
}).catch(() => process.exit(1));