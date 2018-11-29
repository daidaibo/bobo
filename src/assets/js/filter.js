import Vue from 'vue'

Vue.filter('date', (time, format) => {
  return new Date(time * 1000).format(format || 'y-m-d')
})

Vue.filter('countComment', (node) => {
  console.log(this.$root)

  function loop(node) {
    
  }

  loop(node)
})