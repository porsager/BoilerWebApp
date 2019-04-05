const wright = require('wright')
    , sass = require('./sass')

wright({
  main: 'assets/index.html',
  serve: 'src',
  run: true,
  debug: true,
  css: {
    path: 'style.css',
    watch: 'src/**/*.sass',
    compile: sass
  }
})
