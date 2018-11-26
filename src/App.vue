<template>
  <div id="app">
    <div class="flex-layout">
      <topbar></topbar>
      <div class="auto-flex" style="overflow: hidden;">
        <transition-group :name="'ani-' + ($root.router.countAni % $root.lenAni)">
          <div
            v-for="(item, idx) in $root.router.coms"
            v-if="idx === 0"
            :key="idx"
            :is="item"
          ></div>
        </transition-group>
      </div>
    </div>
    <login-reg></login-reg>
  </div>
</template>

<script>
const coms = [
  'components/topbar',
  'components/blog',
  'components/blog-info',
  'components/team',
  'components/editor',
  'components/me',

  'components/login-reg',
].map((path) => {
  return require('@/' + path).default
})

export default {
  name: 'App',
  rootData() {
    const root = this.$root
    
    return {
      ...(() => {
        let map = {}
        coms.forEach((item) => {
          map = {...map, ...item.rootData.call(root)}
        })
        return map
      })(),
    }
  },
  rootMethods: {
    ...(() => {
      let map = {}
      coms.forEach((item) => {
        map = {...map, ...item.rootMethods}
      })
      return map
    })(),
  },
  components: {
    ...(() => {
      const map = {}
      coms.forEach((item) => {
        map[item.name] = item
      })
      return map
    })(),
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
  .flex-layout {
    & > .auto-flex {
      & > span {
        display: block; height: 100%; position: relative;
        transform-style: preserve-3d;
        transform: perspective(600px);
        & > div {
          width: 100%; height: 100%; position: absolute; left: 0; top: 0; background: #f3f6f9; overflow: auto; overflow-x: hidden;
          & > div {
            width: 100vw; min-height: calc(100% + 1px);
          }
        }
      }
    }
  }
}
</style>