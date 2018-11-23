export default {
  com() {
    const root = this.$root
    const r = root.router
    
    switch (r.coms[0]) {
      case 'editor':
      case 'blog-info':
        return 'blog'
      default:
        return r.coms[0]
    }
  }
}