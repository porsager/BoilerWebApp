const wright = require('wright')
    , sass = require('sass')
    , fs = require('fs-extra')
    , path = require('path')
    , util = require('util')

const sassRender = util.promisify(sass.render)

wright({
  main: 'assets/index.html',
  serve: 'src',
  run: true,
  debug: true,
  css: {
    path: 'style.css',
    watch: 'src/**/*.scss',
    compile: compileSass
  }
})

function compileSass() {
  return withExt('src', 'scss').then(xs =>
    Promise.all(xs.map(p => sassRender({ file: p }).then(x => x.css)))
  ).then(xs => xs.join('\n'))
}

function withExt(p, ext) {
  return fs.readdir(p).then(xs => {
    return Promise.all(xs.map(x => fs.stat(path.join(p, x)).then(s =>
      s.isDirectory()
        ? withExt(path.join(p, x), ext)
        : path.extname(x) === ('.' + ext) && path.join(p, x)
    ))).then(xs => xs.reduce((acc, x) => acc.concat(x), []).filter(x => x))
  })
}
