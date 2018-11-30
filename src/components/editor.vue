<template>
  <div class="editor">
    <div style="height: 100%;">
      <div class="wrap" style="height: 100%;">
        <form class="flex-layout"
          @submit.prevent="$root.operateBlog"
        >
          <div>
            <input type="text" placeholder="标题（最多100字）" class="form-control" minlength="5" maxlength="100" required 
              v-model="blogInfo.title"
            >
          </div>
          <div>
            <input type="text" placeholder="简述（最多200字）" class="form-control" minlength="5" maxlength="200" required 
              v-model="blogInfo.description"
            >
          </div>
          <div>
            <input type="text" placeholder="标签（多个用空格隔开）" class="form-control" required 
              v-model="blogInfo.tags"
            >
          </div>
          <div class="auto-flex">
            <textarea class="form-control" required style="height: 100%;" placeholder="内容 Markdown（不要问：如何学好xx语言，帮我调试错误 ...）"
              v-model="blogInfo.content"
            ></textarea>
          </div>
          <div>
            <button type="submit" class="btn btn-success btn-block">{{$root.router.blogId ? '修改' : '发布'}}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editor',
  rootData() {
    return {
    }
  },
  rootMethods: {
    clearEditor() {
      const root = this.$root
      const blogInfo = root.blogInfo

      blogInfo.title = ''
      blogInfo.description = ''
      blogInfo.tags = ''
      blogInfo.content = ''
    },
    operateBlog() {
      const root = this.$root
      const r = root.router
      const blogInfo = root.blogInfo

      root.getUid((uid) => {
        root.post('', {
          a: root.router.blogId ? 'blog-update' : 'blog-add',
          title: blogInfo.title.trim(),
          description: blogInfo.description.trim(),
          belong: 'aw'.trim(),
          tags: blogInfo.tags.trim(),
          content: blogInfo.content.trim(),
          pub: uid,
          blogId: $root.router.blogId,
        }, (data) => {
          if (data.alreadyHave) {
            if (confirm('当前问题已存在，是否查看？')) {
              root.updateCom('blog-info', {
                blogId: data.row.id
              })
            }
          } else {
            root.updateCom('blog-info', {
              blogId: data.id || r.blogId
            })
            root.fetchBlogInfo()
          }
        })
      })
    },
  },
  computed: {
    blogInfo() {
      return this.$root.blogInfo
    }
  },
}
</script>

<style lang="scss" scoped>
.editor {
  .flex-layout {
    padding: 5px 0;
    & > div {
      padding: 5px 0;
    }
  }
}
</style>