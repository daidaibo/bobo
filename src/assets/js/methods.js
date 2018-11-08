export default {
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

    root.router = r
  },
  init() {
    const root = this.$root
    const r = root.router
    
    window.onpopstate = root.routerInit.bind(root)
    root.routerInit()
  }
}