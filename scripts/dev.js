const wright = require('wright')
    , rollup = require('rollup')
    , commonJs = require('rollup-plugin-commonjs')
    , nodeResolve = require('rollup-plugin-node-resolve')

wright({
  main: 'assets/index.html',
  run: true,
  js: {
    path: 'index.js',
    compile
  }
})

let cache
function compile() {
  return rollup.rollup({
    input: 'src/index.js',
    cache,
    plugins: [
      nodeResolve(),
      commonJs()
    ]
  })
  .then(bundle => {
    cache = bundle.cache
    return bundle.generate({
      format: 'iife',
      sourcemap: true
    })
  })
  .then(r => r.output[0])
}
