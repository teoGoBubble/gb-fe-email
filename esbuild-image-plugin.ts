import * as fs from 'fs'
import * as path from 'path'
import { Plugin } from 'esbuild'

export const imagePlugin: Plugin = {
  name: 'image',
  setup(build) {
    build.onResolve({ filter: /\.(png|jpg|jpeg|gif|svg)$/ }, args => {
      const imagePath = path.resolve(args.resolveDir, args.path)
      return { path: imagePath, namespace: 'image-ns' }
    })

    build.onLoad({ filter: /.*/, namespace: 'image-ns' }, async (args) => {
      const contents = await fs.promises.readFile(args.path)
      const base64 = contents.toString('base64')
      const ext = path.extname(args.path).substring(1)
      return {
        contents: `export default "data:image/${ext};base64,${base64}"`,
        loader: 'js'
      }
    })
  }
}