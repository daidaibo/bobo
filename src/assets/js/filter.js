import Vue from 'vue'

Vue.filter('date', (time, format) => {
  return new Date(time * 1000).format(format || 'y-m-d h:i')
})

Vue.filter('countComment', (node) => {
  const root = window.vm
  const mapBranch = root.blog.mapBranch
  let count = 0

  function loop(node) {
    const arr = mapBranch[node.id] || []
    arr.forEach((node) => {
      loop(node)
    })
    count += arr.length
  }

  loop(node)
  return count
})