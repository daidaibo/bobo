<template>
  <div class="blog-info">
    <div>
      <div class="wrap" style="padding-top: 1em;">
        <div class="blog-title">
          <h3 class="ellipsis">{{blogInfo.title}}</h3>
        </div>
        <div>
          <blockquote>
            <span class="text-bigger">{{blogInfo.description}}</span>
          </blockquote>
        </div>
        <div class="about-author">
          <div class="lmr">
            <div class="fl">
              <div class="avatar" :style="{backgroundImage: 'url(' + blogInfo.authorInfo.headImg + ')'}"></div>
            </div>
            <div class="ho">
              <div class="top" style="line-height: 1.8em; height: 38px;">
                <div class="fr">
                  <time class="text-xs text-gray">2018-11-29 17:11:28</time>
                </div>
                <div class="ellipsis">作者: {{blogInfo.authorInfo.name}}</div>
              </div>
              <div class="bottom">
                <div class="btn-box">
                  <div class="btn btn-default btn-xs"
                    v-for="(item, idx) in blogInfo.tags_"
                  >
                    <i class="glyphicon glyphicon-tag"></i>
                    <span>{{item}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="af">
          <div class="btn-box">
            <div class="btn btn-default btn-sm">
              <i class="glyphicon glyphicon-star-empty"></i>
              <span>收藏</span>
            </div>
            <div class="btn btn-default btn-sm">
              <i class="glyphicon glyphicon-comment"></i>
              <span>{{blogInfo | countComment($root.blog)}}条评论</span>
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
              v-if="blogInfo.author === $root.user.info.id || $root.user.isAdmin"
            >
              <i class="glyphicon glyphicon-pencil"></i>
              <span>编辑</span>
            </div>
          </div>
        </div>
        <!-- <div style="margin: 1.5em 0;">
          <div class="btn-box">
            <div class="btn btn-xs btn-default"
              v-for="(tag, idx) in blogInfo.tags_"
              :key="idx"
            >
              <i class="glyphicon glyphicon-tag"></i>
              <span>{{tag}}</span>
            </div>
          </div>
        </div> -->
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
    fetchBlogInfo() {
      const root = this.$root
      const r = root.router
      
      if (!r.blogId) {
        console.warn('fetchBlogInfo err no blogId')
        return
      }

      ;['title', 'description', 'tags', 'content'].forEach((k) => {
        root.blogInfo[k] = ''
      })

      clearTimeout(root.timerFetchBlogInfo)
      root.timerFetchBlogInfo = setTimeout(() => {
        root.get('blog.php', {
          a: 'blog-info',
          blogId: r.blogId
        }, (blogInfo) => {
          blogInfo.authorInfo = root.user.map[blogInfo.author]
          blogInfo.tags_ = blogInfo.tags.split(/\s+/g)
          root.blogInfo = blogInfo
        }, () => {
          history.length > 1 ? history.back() : root.updateCom('blog')
        })
      }, 5)
    },
  },
  computed: {
    blogInfo() {
      return this.$root.blogInfo
    }
  },
}
</script>

<style lang="scss">
.blog-info {
  font-size: 16px;
  .wrap > div {
    margin: 24px 0;
  }
  .blog-content {
    img {max-width: 100%;}
  }
}
</style>
