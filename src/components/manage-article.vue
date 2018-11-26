<template>
  <div class="manage-article">
    <table class="table table-bordered white-bg" style="table-layout: fixed;" >
      <tbody>
        <tr v-for="(item, idx) in $root.blog.list">
          <td>
            <div class="ellipsis">
              <span class="p"
                @click="$root.updateCom('blog-info', {blogId: item.id})"
              >{{item.title}}</span>
            </div>
          </td>
          <td style="width: 95px;">
            <span class="btn btn-warning btn-xs" @click="$root.updateCom('editor', {blogId: item.id})">编辑</span>
            <span class="btn btn-danger btn-xs" @click="$root.blogDel(item, idx)">删除</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'manage-article',
  rootData() {
    return {}
  },
  rootMethods: {
    blogDel(item, idx) {
      const root = this.$root
      
      if (!confirm('确定要删除吗？')) {
        return
      }

      root.get('', {
        a: 'blog-del',
        blogId: item.id
      }, (data) => {
        root.blog.list.splice(idx, 1)
      })
    }
  },
  mounted() {
    const root = this.$root
    const r = root.router
    
    root.blogGetList()
  }
}  
</script>

<style lang="scss" scoped="">

</style>