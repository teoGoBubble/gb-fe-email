import * as path from 'path'
import * as fs from 'fs'
import { Plugin } from 'esbuild'

export const tsPaths: Plugin = {
  name: 'tspaths',
  setup(build) {
    build.onResolve({ filter: /^@\// }, args => {
      const tsConfig = JSON.parse(fs.readFileSync('./tsconfig.json', 'utf8'))
      const baseUrl = tsConfig.compilerOptions.baseUrl || '.'
      const resolvedPath = path.resolve(baseUrl, args.path.replace('@/', ''))
      return { path: resolvedPath }
    })
  }
}
