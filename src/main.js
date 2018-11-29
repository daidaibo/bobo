import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/reset.scss'
import '@/assets/css/main.scss'
import '@/assets/js/com'
import '@/assets/js/dataAux'
import '@/assets/js/filter'

import CryptoJS from 'crypto-js'
import sha256 from 'crypto-js/sha256'

window.CryptoJS = CryptoJS
window.sha256 = sha256

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

window.root = window.$root = window.vm = new Vue({
  el: '#app',
  data() {
    return {
      ...require('@/assets/js/methods').default.rootData.call(this),
      ...App.rootData.call(this),
    }
  },
  methods: {
    ...require('@/assets/js/methods').default.rootMethods,
    ...App.rootMethods,
  },
  watch: {
    ...require('@/assets/js/watch').default,
  },
  computed: {
    ...require('@/assets/js/computed').default
  },
  components: { App },
  template: '<App/>',
  mounted() {
    const root = this.$root
    const r = root.router

    root.init()
  }
})

{
  const root = window.vm
  let nodeStyle = document.createElement('style')

  nodeStyle.innerHTML = new Array(root.lenAni).fill().map((_, idx) => {
    let dw = window.innerWidth
    let w = dw * (2 / 5)
    w = w < 400 ? 400 : w
    const deg = 90
    const o = {
      translateX: `translateX(${rand(-w, w)}px)`,
      translateY: `translateY(${rand(-w, w)}px)`,
      translateZ: `translateZ(${rand(-dw / 2, 0)}px)`,
      rotateX: `rotateX(${rand(-deg, deg)}deg)`,
      rotateY: `rotateY(${rand(-deg, deg)}deg)`,
      // rotate: `rotateX(${rand(-deg, deg)}deg)`,
      // scale: `scale(${rand(-100, 100) / 100})`,
    }
    const types = Object.keys(o)

    let result = []
    // result.push([o['translateZ']])
    new Set(new Array(rand(3, 5)).fill().map((_, idx) => {
      return types[rand(0, types.length - 1)]
    })).forEach((item) => {
      result.unshift(o[item])
    })
    result = result.join(' ')

    return `
      .ani-${idx}-enter-active, .ani-${idx}-leave-active {
        transition: all 1s;
      }
      .ani-${idx}-enter, .ani-${idx}-leave-to {
        opacity: 0;
        transform: ${result};
      }
    `
  }).join('')

  document.body.appendChild(nodeStyle)
}