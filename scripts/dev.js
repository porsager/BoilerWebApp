const wright = require('wright')
    , rollup = require('rollup')
    , sass = require('sass')
    , commonJs = require('rollup-plugin-commonjs')
    , nodeResolve = require('rollup-plugin-node-resolve')

wright({
  main: 'assets/index.html',
  run: true,
  js: {
    path: 'index.js',
    watch: 'src/**/*.js',
    compile: compileJs
  },
  css: {
    path: 'style.css',
    watch: 'src/css/**/*.scss',
    compile: compileSass
  }
})

let cache
function compileJs() {
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

function compileSass() {
  return new Promise((resolve, reject) => {
    sass.render({
      file: 'src/css/index.scss'
    }, (err, result) =>
      err
        ? reject(err)
        : resolve(result.css)
    )
  })
}
