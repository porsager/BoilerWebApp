import './dev.js'
import './style.js'

import m from 'mithril'

window.addEventListener('resize', m.redraw)
window.addEventListener('orientationchange', m.redraw)

m.mount(document.body, {
  view: () => m('h1', 'Boiling...')
})
