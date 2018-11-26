<template>
  <div class="editor">
    <div style="height: 100%;">
      <div class="wrap" style="height: 100%;">
        <div class="flex-layout">
          <div>
            <input type="text" placeholder="标题（最多100字）" class="form-control" minlength="10" maxlength="100"

            >
          </div>
          <div>
            <input type="text" placeholder="简述（最多200字）" class="form-control" minlength="10" maxlength="100"

            >
          </div>
          <div class="auto-flex">
            <textarea class="form-control" style="height: 100%;"
              placeholder="内容" 
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editor',
  rootData() {
    return {}
  },
  rootMethods: {

  },
  mounted() {
    const root = this.$root
    
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