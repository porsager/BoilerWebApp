const wright = require('wright')
    , sass = require('sass')

wright({
  main: 'assets/index.html',
  serve: 'src',
  run: true,
  css: {
    path: 'style.css',
    watch: 'src/css/**/*.scss',
    compile: compileSass
  }
})

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
