const fs = require('fs-extra')
    , path = require('path')
    , util = require('util')
    , sass = require('sass')

const sassRender = util.promisify(sass.render)

module.exports = function() {
  return withExt('src', 'sass').then(xs =>
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
