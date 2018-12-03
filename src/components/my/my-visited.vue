<template>
  <my-wrapper>
    <div class="my-visited">
      <no-data-head-text v-if="visited.list.length === 0"></no-data-head-text>
      <ul class="list-group">
        <li class="list-group-item p lmr"
          v-for="(item, idx) in visited.list"
          @click="$root.updateCom('blog-info', {blogId: item.id})"
        >
          <div class="fr">
            <time>{{item.time | date('y-m-d h:i')}}</time>
          </div>
          <div class="ellipsis">{{item.title}}</div>
        </li>
      </ul>
    </div>
  </my-wrapper>
</template>

<script>
export default {
  name: 'my-visited',
  rootData() {
    return {
      visited: {
        list: [],
        map: {},
      }
    }
  },
  rootMethods: {
    fetchVisitedList() {
      const root = this.$root
      const r = root.router
      
      clearTimeout(root.timerFetchVisitedList)
      root.timerFetchVisitedList = setTimeout(() => {
        root.get('user.php', {
          a: 'get-my-visited'
        }, (list) => {
          const map = {}
          list.forEach((row) => {
            map[row.id] = row
          })
          root.visited.list = list
          root.visited.map = map
        })
      }, 1)
    }
  },
  computed: {
    visited() {
      return this.$root.visited
    }
  }
}
</script>

<style lang="scss" scoped>
.my-visited {

}

</style>