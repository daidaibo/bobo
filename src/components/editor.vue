<template>
  <div class="editor">
    <div style="height: 100%;">
      <div class="wrap" style="height: 100%;">
        <form class="flex-layout"
          @submit.prevent="$root.operateBlog"
        >
          <div>
            <div v-if="r.blogTitle">回复：{{r.blogTitle}}</div>
            <input type="text" placeholder="标题（最多100字）" class="form-control" minlength="5" maxlength="100" required 
              v-else
              v-model="blogInfo.title"
            >
          </div>
          <div v-if="!r.blogTitle">
            <input type="text" placeholder="简述（最多200字）" class="form-control" minlength="5" maxlength="200" required 
              v-model="blogInfo.description"
            >
          </div>
          <div v-if="!r.blogTitle">
            <input type="text" placeholder="标签（多个用空格隔开）" class="form-control" required 
              v-model="blogInfo.tags"
            >
          </div>
          <div class="auto-flex">
            <textarea class="form-control" required style="height: 100%;"
              :placeholder="r.blogTitle ? '输入回复内容（支持 Markdown）' : '内容 Markdown（不要问：如何学好xx语言，帮我调试错误 ...）'"
              v-model="blogInfo.content"
            ></textarea>
          </div>
          <div>
            <button type="submit" class="btn btn-success btn-block">确定</button>
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

      if (root.is.sendingData) {
        root.alert('数据发送中，请稍后')
        return
      }

      Object.keys(blogInfo).forEach((key) => {
        typeof blogInfo[key] === 'string' && (blogInfo[key] = blogInfo[key].trim())
      })

      root.getUid((uid) => {
        root.post('blog.php', {
          a: r.blogId && !r.blogTitle ? 'blog-update' : 'blog-add',
          pid: r.blogTitle ? r.blogId : 0,
          title: blogInfo.title,
          description: blogInfo.description,
          belong: r.belong || 'aw',
          tags: blogInfo.tags,
          content: blogInfo.content,
          pub: uid,
          blogId: r.blogId,
        }, (data) => {
          if (data.alreadyHave) {
            if (confirm('当前问题已存在，是否查看？')) {
              root.updateCom('blog-info', {
                blogId: data.row.id
              })
            }
          } else {
            root.updateCom('blog-info', {
              blogId: r.blogId || data.id
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
    },
    r() {
      return this.$root.router
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