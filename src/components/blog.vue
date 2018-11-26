<template>
  <div class="blog">
    <div>
      <div class="wrap">
        <div class="list-blog">
          <section class="lmr"
            v-for="(item, idx) in $root.blog.list"
            :key="idx"
          >
            <div class="fl no-select">
              <div class="box-user">
                <div class="avatar" :style="{backgroundImage: 'url(' + (item.authorInfo.headImg) + ')'}"></div>
                <div class="nickname ellipsis text-xs c"
                  :title="item.authorInfo.name"
                >{{item.authorInfo.name}}</div>
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
                  @click="$root.updateCom('blog-info', {blogId: item.id}, 'push')"
                >{{item.title}}</strong>
              </div>
              <div class="desc line-2 text-gray">
                <span class="p" 
                  @click="$root.updateCom('blog-info', {blogId: item.id}, 'push')"
                >{{item.description}}</span>
              </div>
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
        mapBranch: [],
      }
    }
  },
  rootMethods: {

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
        max-width: 70px;
        .avatar {
          width: 70px; height: 70px;
        }
      }
      &:last-child {border-bottom: none;}
      .box-user {
        cursor: pointer;
        .nickname {line-height: 2.6em;}
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