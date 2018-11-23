export default {
  router: {
    deep: true,
    handler(newVal) {
      const root = this.$root
      const r = root.router
      let targetUrl = ''
      let hashData = JSON.stringify(newVal)

      !root.is.local && (hashData = encodeURIComponent(hashData))
      targetUrl = location.origin + location.pathname + location.search + '#' + hashData
      history[root.isRouterPush ? 'pushState' : 'replaceState']({}, '', targetUrl)

      delete root.isRouterPush
    }
  },
  'router.coms': {
    deep: true,
    handler(newVal) {
      const root = this.$root
      const r = root.router
      
      switch (newVal[0]) {
        case 'blog':
          root.blogGetList()
          break
        case 'team':

          break
      }
    }
  },
}