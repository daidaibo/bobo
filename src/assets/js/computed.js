export default {
  com() {
    const root = this.$root
    const r = root.router
    
    switch (r.coms[0]) {
      default:
        return r.coms[0]
    }
  }
}