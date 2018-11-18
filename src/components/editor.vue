<template>
  <div class="com-editor abs pt">
    <form class="flex-layout"
      @submit.prevent="$root.operateArticle"
    >
      <div>
        <input type="text" class="form-control" placeholder="标题（最多30个字）" maxlength="30" required 
          v-model="$root.editor.title"
        >
      </div>
      <div>
        <input type="text" class="form-control" placeholder="标签（多个用空格隔开）" maxlength="100" required 
          v-model="$root.editor.tags"
        >
      </div>
      <div class="auto-flex">
        <textarea class="form-control" placeholder="描述（详细而不要拖沓）" required 
          v-model="$root.editor.description"
        ></textarea>
      </div>
      <div class="ho">
        <input type="submit" class="btn btn-success btn-block" value="确定">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'editor',
  rootData() {
    return {}
  },
  rootMethods: {
    operateArticle() {
      const root = this.$root
      const r = root.router
      const editor = root.editor

      root.post('', {
        a: 'article-add',
        title: editor.title.trim(),
        tags: editor.tags.trim(),
        description: editor.description.trim(),
      }, (data) => {
        root.updateCom('blog')
      })
    }
  },
  mounted() {
    const root = this.$root
    const r = root.router
    
  }
}
</script>

<style lang="scss" scoped>
.com-editor {
  .flex-layout {
    & > div {
      margin-bottom: 15px;
    }
    & > .auto-flex {
      textarea {
        height: 100%;
      }
    }
  }
}
</style>