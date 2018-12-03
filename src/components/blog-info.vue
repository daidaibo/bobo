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
                  <time class="text-xs text-gray">{{blogInfo.time | date}}</time>
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
            <!-- <div class="btn btn-default btn-sm">
              <i class="glyphicon glyphicon-star-empty"></i>
              <span>收藏</span>
            </div> -->
            <div class="btn btn-default btn-sm"
              onclick="document.querySelector('.blog-info').scrollTop = document.querySelector('#comment-bar').getBoundingClientRect().top"
            >
              <i class="glyphicon glyphicon-comment"></i>
              <span>{{blogInfo.commentList.length}}条评论</span>
            </div>
            <!-- <div class="btn btn-default btn-sm">
              <i class="glyphicon glyphicon-flag"></i>
              <span>举报</span>
            </div> -->
            <div class="btn btn-default btn-sm"
              @click="$root.updateCom('editor', {blogId: blogInfo.id})"
              v-if="blogInfo.author === $root.user.info.id || $root.user.isAdmin"
            >
              <i class="glyphicon glyphicon-pencil"></i>
              <span>编辑</span>
            </div>
            <div class="btn btn-default btn-sm"
              @click.stop="$root.qr.isShow = !$root.qr.isShow"
            >
              <div>
                <i class="glyphicon glyphicon-share-alt"></i>
                <span>分享</span>
              </div>
              <div class="share-qr-in-btn" id="box-share-qr"
                v-if="$root.qr.isShow"
                style="z-index: 10;" 
              >
                <img src="" id="img-qr" style="border-radius: 4px;">
              </div>
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
          v-html="blogInfo.content_"
        ></div>
        <div style="margin: 15px 0; border-bottom: 1px solid #e7e7e7; padding-bottom: 1em;"
          id="comment-bar" 
        >
          <div class="fr">
            <span class="btn btn-success btn-sm"
              @click="$root.gotoReplay"
            >添加评论</span>
          </div>
          <div class="ellipsis">
            <strong class="text-lg">评论</strong>
          </div>
        </div>
        <div style="margin: 15px 0;">
          <div class="c" v-if="blogInfo.commentList.length == 0">
            <h3 style="margin: 2em 0;" class="text-pale">暂无评论</h3>
          </div>
          <div class="list-comment" v-else>
            <section class="lmr"
              v-for="(item, idx) in blogInfo.commentList"
            >
              <div class="fl">
                <div class="avatar" :style="{backgroundImage: 'url(' + item.authorInfo.headImg + ')'}"></div>
              </div>
              <div class="ho">
                <div class="top lmr">
                  <div class="fr">
                    <time class="text-xs">{{item.time | date}}</time>
                  </div>
                  <div class="ellipsis">
                    <strong>{{item.authorInfo.name}}</strong>
                    <a href="javascript:" class="text-xs" style="margin-left: 10px;"
                      v-if="item.author === $root.user.info.id"
                      @click="$root.blogRemove(item, idx, blogInfo.commentList)"
                    >删除</a>

                    <!-- <a href="javascript:" class="link-replay text-xs"
                      @click="$root.gotoReplay"
                    >回复</a> -->
                  </div>
                </div>
                <div class="box-replay">
                  <p v-html="item.content_"></p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {markdown} from 'markdown'

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
        commentList: [],
      }
    }
  },
  rootMethods: {
    gotoReplay() {
      const root = this.$root
      const r = root.router
      const blogInfo = root.blogInfo

      root.updateCom('editor', {blogId: blogInfo.id, blogTitle: blogInfo.title})
    },
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
          blogInfo.content_ = markdown.toHTML(blogInfo.content)
          blogInfo.authorInfo = root.user.map[blogInfo.author]
          blogInfo.tags_ = blogInfo.tags.split(/\s+/g)
          blogInfo.commentList = blogInfo.commentList || []
          blogInfo.commentList.forEach((item) => {
            item.authorInfo = root.user.map[item.author]
            item.content_ = markdown.toHTML(item.content)
          })
          root.blogInfo = blogInfo
        }, () => {
          history.length > 1 ? history.back() : root.updateCom('blog')
        })
      }, 5)
    },
  },
  computed: {
    r() {
      return this.$root.router
    },
    blog() {
      return this.$root.blog
    },
    blogInfo() {
      return this.$root.blogInfo
    }
  },
}
</script>

<style lang="scss">
.blog-info {
  .blog-content {
    font-size: 16px; line-height: 1.8em;
    p {
      margin-bottom: 1.5em; /* text-indent: 2em; */
      * {text-indent: 0;}
    }
    // img {display: block; margin: 0 auto;}
  }
  img {max-width: 100%;}

  .wrap > div {
    margin: 24px 0;
  }

  .list-comment {
    & > section {
      border-bottom: 1px solid #e7e7e7; padding: 1em 0;
      &:last-child {
        border-bottom: none;
      }
      .box-replay {
        p {
          margin-bottom: 0;
        }
      }
    }
    .link-replay {
      margin-left: 10px;
    }
  }
}

#img-qr {width: 100%; height: 100%;}
</style>