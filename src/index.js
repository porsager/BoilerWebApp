import './style.js'

import m from 'mithril'
import b from 'bss'

'dev'
window.run = m.redraw
b.setDebug(true)
'/dev'

window.addEventListener('resize', m.redraw)
window.addEventListener('orientationchange', m.redraw)

m.mount(document.body, {
  view: () => m('h1', 'Boiling...')
})
