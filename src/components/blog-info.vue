<template>
  <div class="blog-info">
    <div>
      <div class="wrap" style="padding-top: 1em;">
        <div class="blog-title" style="margin-bottom: 1.5em;">
          <div class="lmr">
            <div class="fl">
              <div class="avatar" style="border-radius: 50%;" 
                :style="{backgroundImage: 'url(' + blogInfo.authorInfo.headImg + ')'}"
              ></div>
            </div>
            <div class="ho">
              <h3 class="ellipsis">{{blogInfo.title}}</h3>
            </div>
          </div>
        </div>
        <div>
          <blockquote>
            <span class="text-bigger">{{blogInfo.description}}</span>
          </blockquote>
        </div>
        <div style="margin: 1.5em 0;">
          <div class="btn-box">
            <div class="btn btn-default btn-sm">
              <i class="glyphicon glyphicon-star-empty"></i>
              <span>收藏</span>
            </div>
            <div class="btn btn-default btn-sm">
              <i class="glyphicon glyphicon-comment"></i>
              <span>100条评论</span>
            </div>
            <div class="btn btn-default btn-sm">
              <i class="glyphicon glyphicon-share-alt"></i>
              <span>分享</span>
            </div>
            <div class="btn btn-default btn-sm">
              <i class="glyphicon glyphicon-flag"></i>
              <span>举报</span>
            </div>
            <div class="btn btn-default btn-sm"
              @click="$root.updateCom('editor', {blogId: blogInfo.id})"
            >
              <i class="glyphicon glyphicon-pencil"></i>
              <span>编辑</span>
            </div>
          </div>
        </div>
        <div style="margin: 1.5em 0;">
          <div class="btn-box">
            <div class="btn btn-xs btn-default"
              v-for="(tag, idx) in blogInfo.tags_"
              :key="idx"
            >
              <i class="glyphicon glyphicon-tag"></i>
              <span>{{tag}}</span>
            </div>
          </div>
        </div>
        <div class="blog-content"
          v-html="blogInfo.content"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog-info',
  rootData() {
    return {}
  },
  rootMethods: {

  },
  computed: {
    blogInfo() {
      return this.$root.blogInfo
    }
  },
  mounted() {
    const root = this.$root
    const r = root.router
    
    
  }
}
</script>

<style lang="scss">
.blog-info {
  .blog-title {
    padding-top: .2px;
  }
  .blog-content {
    img {max-width: 100%;}
  }
}
</style>
