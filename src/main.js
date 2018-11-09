import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css'
import '@/assets/css/reset.scss'

import Vue from 'vue'
import dataAux from '@/assets/js/dataAux'
import com from '@/assets/js/com'
import App from './App'

Vue.config.productionTip = false

window.vm = new Vue({
  el: '#app',
  data() {
    const root = this.$root

    return {
      ...dataAux.rootData.call(root),
      ...com.rootData.call(root),
      ...App.rootData.call(root),
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
    const r = root.router
    
    root.init()
  }
})
