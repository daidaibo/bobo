export default {
  activeCom() {
    const root = this.$root
    const r = root.router
    
    switch (r.coms[0]) {
      case 'blog':
        return 'blog'
      case 'aw':
        return 'aw'
      case 'lang':
        return 'lang'
      case 'friends':
        return 'friends'
    }
  }
}