import Vue from 'vue'

Vue.filter('date', (time, format) => {
  return new Date(time * 1000).format(format || 'y-m-d')
})