export default {
  isLogined() {
    const root = this.$root
    return !!root.user.name
  }
}