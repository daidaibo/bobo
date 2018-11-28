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
  'router.blogId'(newVal) {
    const root = this.$root
    newVal ? root.fetchBlogInfo() : root.clearEditor()
  },
  'router.coms': {
    deep: true,
    handler(newVal) {
      const root = this.$root
      const r = root.router
      const com = newVal[0]
      
      if (!root.isLogined && com === 'me') {
        root.updateCom('blog')
        return
      }

      switch (com) {
        case 'blog':
          root.fetchBlogList()
          break
        case 'editor':
          
          break
        case 'team':

          break
      }
    }
  },
}