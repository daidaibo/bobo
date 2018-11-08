<template>
  <div id="app">
    <div class="topbar">topbar</div>
    <div class="main-container">main-container</div>
  </div>
</template>

<script>
const coms = [
  {name: 'boot', path: 'components/boot'},
].map((item) => {
  item.com = require('@/' + item.path).default
  return item
})

export default {
  name: 'App',
  rootData() {
    const root = this.$root
    const r = root.router
    
    return {
      ...(() => {
        let map = {}
        coms.forEach((item) => {
          item.com.rootData && (map = {...map, ...item.com.rootData.call(root)})
        })
        return map
      })(),
    }
  },
  rootMethods: {
    ...(() => {
      let map = {}
      coms.forEach((item) => {
        map = {...map, ...item.com.rootMethods}
      })
      return map
    })(),
  },
  mounted() {
    const root = this.$root
    const r = root.router
    
  }
}
</script>

<style lang="scss">

</style>