import b from 'bss'

b.css({
  'html': b.height('100%').boxSizing('border-box'),
  'body': b.m(0).minHeight('100%').ff('biome'),
  'input, textarea': b.fontFamily('inherit'),
  '*, *:before, *:after': b.boxSizing('inherit'),
  'svg': b.fill('currentColor').va('middle'),
  'svg:not(:root)': b.overflow('hidden')
})
