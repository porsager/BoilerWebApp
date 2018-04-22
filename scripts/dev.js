const wright = require('wright')
    , rollup = require('rollup')
    , commonJs = require('rollup-plugin-commonjs')
    , nodeResolve = require('rollup-plugin-node-resolve')

let cache = null

wright({
  main: 'assets/index.html',
  debug: true,
  run: 'm.redraw',
  js: {
    path: 'app.js',
    compile: compile,
    watch: 'src/**/*.js'
  }
})

function compile() {
  return rollup.rollup({
    input: 'src/index.js',
    cache: cache,
    plugins: [
      commonJs(),
      nodeResolve()
    ]
  })
  .then(bundle => (
    cache = bundle,
    bundle.generate({
      format: 'iife',
      sourcemap: true
    })
  ))
  .then(output => output.code)
}
