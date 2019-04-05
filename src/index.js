import m from 'mithril'

'dev'
window.run = m.redraw
'/dev'

window.addEventListener('resize', m.redraw)
window.addEventListener('orientationchange', m.redraw)

m.mount(document.body, {
  view: () => m('h1', 'Boiling...')
})
