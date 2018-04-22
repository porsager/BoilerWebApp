import './style.js'

import m from 'mithril'
import b from 'bss'

window.m = m
b.setDebug(true)

m.mount(document.body, {
  view: () => m('h1', 'Hey there')
})
