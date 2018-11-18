export default {
  router: {
    deep: true,
    handler(newVal) {
      const root = this.$root
      let hashData = JSON.stringify(newVal)
      !root.is.local && (hashData = encodeURIComponent(hashData))
      const targetUrl = location.origin + location.pathname + location.search + '#' + hashData
      history[root.isRouterPush ? 'pushState' : 'replaceState']({}, '', targetUrl)
      delete root.isRouterPush
    }
  },
  'user.isShowPanel'(newVal) {
    const root = this.$root
    const user = root.user

    if (!newVal) return

    root.$nextTick(() => {
      const el = document.querySelector('.form-' + user.mode + ' input')
      el && el.focus()
    })
  },
  'router.coms'(newVal) {
    const root = this.$root
    const r = root.router
    
    if (newVal[0] !== 'blog') {
      return
    }

    root.get('', {a: 'article-get-list'}, (data) => {
      data.forEach((item, idx, arr) => {
        item.authorInfo = root.user.map[item.author]
        item.tags_ = item.tags.split(/\s+/g)
      })
      root.article.list = data
    })
  }
}