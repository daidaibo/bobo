// import 'bootstrap/dist/css/bootstrap.css'
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

window.vm = new Vue({
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

vm.createAni()