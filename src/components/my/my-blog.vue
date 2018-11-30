<template>
  <my-wrapper>
    <div class="my-blog">
      <no-data-head-text v-if="myBlog.list.length === 0"></no-data-head-text>
      <ul class="list-group" v-else>
        <li class="list-group-item p lmr"
          v-for="(item, idx) in myBlog.list"
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
  name: 'my-blog',
  rootData() {
    return {
      myBlog: {
        list: [],
        map: {},
      }
    }
  },
  rootMethods: {
    fetchMyBlogList() {
      const root = this.$root
      const r = root.router
      
      root.get('user.php', {
        a: 'get-my-blog-list',
      }, (list) => {
        root.myBlog.list = list
      })
    }
  },
  computed: {
    myBlog() {
      return this.$root.myBlog
    }
  }
}
</script>

<style lang="scss" scoped>
.my-blog {

}
</style>