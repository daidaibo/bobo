<template>
  <div class="blog">
    <div>
      <div class="wrap">
        <div class="list-blog">
          <section class="lmr"
            v-for="(item, idx) in $root.blog.mapBranch[0] || []"
            :key="idx"
          >
            <div class="fl no-select">
              <div class="box-user text-xs c" :title="item.authorInfo.name">
                <div class="avatar" :style="{backgroundImage: 'url(' + (item.authorInfo.headImg) + ')'}"></div>
                <div class="nickname ellipsis">{{item.authorInfo.name}}</div>
                <div
                  v-if="item.author === $root.user.info.id || $root.user.isAdmin"
                  @click="$root.blogRemove(item, idx, $root.blog.list)"
                ><a href="javascript:">删除</a></div>
              </div>
            </div>
            <div class="fr btn-box no-select">
              <div class="btn btn-default btn-sm btn-block">
                <i class="glyphicon glyphicon-eye-open"></i>
                <span>{{item.read}}</span>
              </div>
              <div class="btn btn-default btn-sm btn-block">
                <i class="glyphicon glyphicon-ok"></i>
                <span>{{item.agree_.length || 0}}</span>
              </div>
              <div class="btn btn-default btn-sm btn-block">
                <i class="glyphicon glyphicon-comment"></i>
                <span>{{($root.blog.mapBranch[item.id] || []).length || 0}}</span>
              </div>
            </div>
            <div class="ho">
              <div class="title ellipsis">
                <strong class="text-bigger p"
                  :title="item.title"
                  @click="$root.updateCom('blog-info', {blogId: item.id}, 'push')"
                >{{item.title}}</strong>
              </div>
              <div class="desc line-2 text-gray p"
                :title="item.description"
                @click="$root.updateCom('blog-info', {blogId: item.id}, 'push')"
              >{{item.description}}</div>
              <div class="box-tag">
                <div class="btn btn-xs btn-default"
                  v-for="(tag, idx) in item.tags_"
                  :key="idx"
                >
                  <i class="glyphicon glyphicon-tag"></i>
                  <span>{{tag}}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  rootData() {
    return {
      blog: {
        list: [],
        map: [],
        mapBranch: {
          '0': [],
        },
      }
    }
  },
  rootMethods: {
    blogRemove(item, idx, arr) {
      const root = this.$root
      
      if (!confirm('确定要删除吗？')) {
        return
      }

      root.get('blog.php', {
        a: 'blog-remove',
        blogId: item.id
      }, (data) => {
        arr.remove(item)
      })
    },
    fetchBlogList() {
      const root = this.$root
      const r = root.router

      clearTimeout(root.timerFetchBlogList)
      root.timerFetchBlogList = setTimeout(() => {
        root.get('blog.php', {
          a: 'blog-list',
          belong: 'aw',
        }, (data) => {
          const map = {}
          const mapBranch = {}

          data.forEach((item) => {
            item.agree_ = item.agree ? item.agree.split(',') : []
            item.disagree_ = item.disagree ? item.disagree.split(',') : []
            item.tags_ = item.tags ? item.tags.split(/\s+/) : []
            map[item.id] = item
            item.authorInfo = root.user.map[item.author] || {}
            mapBranch[item.pid] = mapBranch[item.pid] || []
            mapBranch[item.pid].push(item)
          })

          root.blog.list = data
          root.blog.map = map
          root.blog.mapBranch = mapBranch
        })
      }, 1)
    },
  },
}
</script>

<style lang="scss" scoped>
.blog {
  padding: 1em 0;
  .list-blog {
    section {
      border-bottom: 1px solid #e7e7e7; padding: 1em 0;
      & > .fl {
        max-width: 70px; margin-bottom: -50px;
        .avatar {
          width: 70px; height: 70px;
        }
      }
      &:last-child {border-bottom: none;}
      .box-user {
        cursor: pointer;
        .nickname {margin-top: 6px;}
      }
      .desc {margin: 8px 0;}
      .box-tag {
        margin-bottom: -5px;
        .btn {margin: 0 5px 5px 0;}
      }
    }
  }
}
</style>