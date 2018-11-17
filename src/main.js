import '@/assets/boot/css/bootstrap.css'
// import '@/assets/boot/css/bootstrap-theme.css'
import '@/assets/css/reset.scss'
import '@/assets/css/main.scss'
import '@/assets/js/dataAux'

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

window.vm = new Vue({
  el: '#app',
  data() {
    const root = this.$root
    const r = root.router
    const ua = navigator.userAgent
    
    return {
      ...App.rootData.call(root),
      is: {
        local: [':300', 'localhost'].some(v => location.origin.indexOf(v) > -1),
        windows: ua.indexOf('Windows NT') > -1,
        android: ua.indexOf('Linux; Android') > -1,
        ios: ua.indexOf('like Mac OS X') > -1,
        iPhone: ua.indexOf('iPhone; CPU iPhone OS') > -1,
        iPad: ua.indexOf('iPad; CPU OS') > -1,
      },
      router: {
        coms: []
      },
      user: {
        mode: 'reg',
        isShowPanel: 0,
        name: '',
        password: '',
        level: 0,
      },
    }
  },
  methods: {
    ...App.rootMethods,
    ...require('@/assets/js/methods').default,
  },
  watch: {
    ...require('@/assets/js/watch').default,
  },
  computed: {
    ...require('@/assets/js/computed').default,
  },
  components: { App },
  template: '<App/>',
  mounted() {
    const root = this.$root
    let r
    
    root.init()
    r = root.router
  }
})
