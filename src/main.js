import '@/assets/boot/css/bootstrap.css'
// import '@/assets/boot/css/bootstrap-theme.css'
import '@/assets/css/reset.scss'
import '@/assets/css/main.scss'

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  data() {
    const root = this.$root
    const r = root.router
    
    return {
      ...App.rootData.call(root)
    }
  },
  methods: {
    ...App.rootMethods,
  },
  watch: {
    ...require('@/assets/js/watch').default,
  },
  computed: {
    ...require('@/assets/js/watch').default,
  },
  components: { App },
  template: '<App/>'
})
