export default {
  rootData() {
    const ua = navigator.userAgent
    return {
      lenAni: 30,
      is: {
        local: location.origin.indexOf(808) > -1,
      },
      router: {
        coms: [],
        countAni: 0,
      },
    }
  },
  rootMethods: {
    routerInit() {
      const root = this.$root
      let r

      try {
        r = JSON.parse(decodeURIComponent(location.hash.substring(1)))
      } catch (e) {
        r = {}
        console.log('hash parse err')
      }

      r.coms = r.coms || ['blog']
      r.countAni = r.countAni || 0

      root.router = r
    },
    updateRouter(o, isRouterPush) {
      const root = this.$root
      
      root.isRouterPush = isRouterPush

      for (let key in o) {
        root.$set(root.router, key, o[key])
      }
    },
    updateCom(com) {
      const root = this.$root
      const r = root.router
      
      root.isRouterPush = true
      r.countAni++
      r.coms.unshift(com)

      while (r.coms.length > 2) {
        r.coms.pop()
      }
    },
    init() {
      const root = this.$root
      const r = root.router
      
      root.routerInit()
      window.onpopstate = root.routerInit.bind(root)
    }
  },
}