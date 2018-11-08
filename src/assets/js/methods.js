export default {
  updateCom(com, r) {
    const root = this.$root
    
    root.isRouterPush = true
    root.updateRouter(r)
    root.router.coms.unshift(com)

    while (root.router.coms.length > 2) {
      root.router.coms.pop()
    }
  },
  updateRouter(o, isRouterPush) {
    const root = this.$root
    const r = root.router
    
    root.isRouterPush = isRouterPush

    for (let key in o) {
      root.$set(r, key, o[key])
    }
  },
  routerInit() {
    const root = this.$root
    let r = {}

    try {
      r = JSON.parse(decodeURIComponent(location.hash.substring(1)))
    } catch (e) {
      console.warn('router parse err')
    }

    r.coms = r.coms || ['blog']

    root.router = r
  },
  init() {
    const root = this.$root
    const r = root.router
    
    window.onpopstate = root.routerInit.bind(root)
    root.routerInit()
  }
}