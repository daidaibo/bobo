<template>
  <div id="app">
    <div class="flex-layout">
      <div class="topbar">
        <nav class="navbar navbar-inverse" style="border-radius: 0; margin-bottom: 0;">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="###">BoBo</a>
            </div>
                
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
              <ul class="nav navbar-nav">
                <li
                  v-for="(item, idx) in $root.nav.list"
                  :class="{active: item.com === $root.activeCom}"
                  @click="$root.updateCom(item.com)"
                >
                  <a href="javascript:" draggable="false">{{item.name}}</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class="auto-flex main-container">
        <div class="abs">
          <div
            v-for="(item, idx) in $root.router.coms" :is="item"
            v-if="idx === 0"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const coms = [
  {name: 'boot', path: 'components/boot'},
  {name: 'blog', path: 'components/blog'},
  {name: 'aw', path: 'components/aw'},
  {name: 'lang', path: 'components/lang'},
  {name: 'friends', path: 'components/friends'},
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
      nav: {
        list: [
          {name: '博文', com: 'blog'},
          {name: '问答', com: 'aw'},
          {name: '语言', com: 'lang'},
          {name: '伙伴', com: 'friends'},
        ]
      },
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
  components: {
    ...(() => {
      let map = {}
      coms.forEach((item) => {
        map[item.name] = item.com
      })
      return map
    })()
  },
  mounted() {
    const root = this.$root
    const r = root.router
    
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
  & > .flex-layout {
    & > .auto-flex {
      & > .abs {
        padding-top: 15px;
      }
    }
  }
}
</style>