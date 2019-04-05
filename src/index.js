import m from 'mithril'
import button from './components/button/index.js'

'dev'
window.run = m.redraw
'/dev'

window.addEventListener('resize', m.redraw)
window.addEventListener('orientationchange', m.redraw)

m.mount(document.body, {
  view: () => [
    m('h1', 'Boiling...'),
    m(button, {
      onclick: () => alert('yay')
    }, 'I am button')
  ]
})
