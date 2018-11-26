<template>
  <div class="editor">
    <div style="height: 100%;">
      <div class="wrap" style="height: 100%;">
        <form class="flex-layout"
          @submit.prevent="$root.operateBlog"
        >
          <div>
            <input type="text" placeholder="标题（最多100字）" class="form-control" minlength="10" maxlength="100" required 
              v-model="blogInfo.title"
            >
          </div>
          <div>
            <input type="text" placeholder="简述（最多200字）" class="form-control" minlength="10" maxlength="200" required 
              v-model="blogInfo.description"
            >
          </div>
          <div>
            <input type="text" placeholder="标签（多个用空格隔开）" class="form-control" required 
              v-model="blogInfo.tags"
            >
          </div>
          <div class="auto-flex">
            <textarea class="form-control" required style="height: 100%;" placeholder="内容 Markdown（不要问：如何学好xx语言，帮我调试错误 ...）认真写"
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
      blogInfo: {
        title: '',
        description: '',
        tags: '',
        content: '',
        authorInfo: {
          headImg: '',
        },
      }
    }
  },
  rootMethods: {
    getBlogInfo() {
      const root = this.$root
      const r = root.router
      
      if (!r.blogId) {
        console.warn('getBlogInfo err no blogId')
        return
      }

      clearTimeout(root.timerGetBlogInfo)
      root.timerGetBlogInfo = setTimeout(() => {
        root.get('', {
          a: 'blog-get-info',
          blogId: r.blogId
        }, (blogInfo) => {
          blogInfo.authorInfo = root.user.map[blogInfo.author]
          blogInfo.tags_ = blogInfo.tags.split(/\s+/g)
          root.blogInfo = blogInfo
        })
      }, 5)
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
            root.alert('操作成功')
            root.updateCom('blog-info', {
              blogId: data.id || r.blogId
            })
            root.getBlogInfo()
          }
        })
      })
      console.log('operateBlog')
    },
  },
  computed: {
    blogInfo() {
      return this.$root.blogInfo
    }
  },
  mounted() {
    const root = this.$root
    const r = root.router
    
    r.blogId && root.getBlogInfo()
  }
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