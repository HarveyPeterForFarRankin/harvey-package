import resolve from '@rollup/plugin-node-resolve'
import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel'
import pkg from './package.json'

// add what you like here - for demo purposes it is just .js
const extensions = ['.js']

export default [
    // CommonJS (for Node) and ES module (for bundlers) build.
    {
        input: 'src/index.js',
        // bundle commondjs and es modules for different use cases
        output: [
            {
                file: pkg.main,
                format: 'cjs'
            },
            // tree shaking is only possible with es modules
            {
                file: pkg.module,
                format: 'es'
            }
        ],
        // Transpile bundle to es5
        plugins: [
            getBabelOutputPlugin({
                presets: ['@babel/preset-env']
            }),
            resolve({
                extensions // specifies the extensions of files that the plugin will operate on
            }),
            babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' })
        ]
    }
]
