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
    handler(newVal, oldVal) {
      const root = this.$root
      const r = root.router
      const com = newVal[0]
      
      if (!root.isLogined && /^my-/.test(com)) {
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
        case 'my-visited':
          root.fetchVisitedList()
          break
        case 'my-blog':
          root.fetchMyBlogList()
          break
      }

      if (!['blog-info', 'editor'].includes(com) && root.router.blogId) {
        root.updateRouter({blogId: undefined})
      }
    }
  },
  setting: {
    deep: true,
    handler(newVal) {
      vm.createAni()
      localStorage.setting = JSON.stringify(newVal)
    }
  }
}
