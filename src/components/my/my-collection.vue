<template>
  <div class="my-collection">
    my-collection
  </div>
</template>

<script>
export default {
  name: 'my-collection',
  rootData() {
    return {
      myCollection: {
        list: [],
        map: {},
      }
    }
  },
  rootMethods: {

  }
}
</script>

<style lang="scss" scoped>
.my-collection {

}
</style>