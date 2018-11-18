<template>
  <div class="blog" :style="{minHeight: $root.is.ios ? 'calc(100% + 1px)' : '100%'}">
    <div class="list-blog" :style="{marginRight: $root.is.windows ? '6px' : '0'}">
      <section v-for="(item, idx) in $root.article.list" class="lmr">
        <div class="fr rich-btn-box">
          <section>
            <div class="btn btn-default btn-sm btn-block">
              <!-- <span>浏览</span> -->
              <i class="glyphicon glyphicon-eye-open"></i>
              <span>0</span>
            </div>
          </section>
          <section>
            <div class="btn btn-default btn-sm btn-block">
              <!-- <span>赞同</span> -->
              <i class="glyphicon glyphicon-ok"></i>
              <span>0</span>
            </div>
          </section>
          <section>
            <div class="btn btn-default btn-sm btn-block">
              <!-- <span>评论</span> -->
              <i class="glyphicon glyphicon-comment"></i>
              <span>0</span>
            </div>
          </section>
        </div>
        <div class="ho lmr">
          <div class="fl head-img-box p">
            <div class="head-img" :style="{backgroundImage: 'url('+(item.authorInfo.headImg)+')'}"></div>
            <div class="c nickname ellipsis">{{item.authorInfo.name}}</div>
          </div>
          <div class="ho bd">
            <div class="title ellipsis text-lg">
              <strong class="p">{{item.title}}</strong> 
            </div>
            <div class="desc line-2">
              <span class="p text-gray">{{item.description}}</span>
            </div>
            <div class="btn-box af">
              <div class="fr">
                <time class="text-gray">2018-11-14</time>
              </div>
              <div>
                <div class="btn btn-default btn-xs"
                  v-for="(item, idx) in item.tags_"
                >
                  <i class="glyphicon glyphicon-tag"></i>
                  <span class="tag">{{item}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  rootData() {
    return {}
  },
  rootMethods: {

  },
  mounted() {
    const root = this.$root
    const r = root.router
    
    
  }
}
</script>

<style lang="scss" scoped>
.blog {
  min-height: 100%;
  .list-blog {
    & > section {
      padding: 1.2em 0; border-bottom: 1px solid #ddd;
      &:first-child {padding-top: 0;}
      &:last-child {border-bottom: 0;}
      .bd {}
      .head-img-box {
        .head-img {
          width: 60px; height: 60px; border-radius: 25%; background: #eee no-repeat center / cover; position: relative; overflow: hidden; border: 1px solid #ddd;
        }
        .nickname {
          line-height: 2em; max-width: 60px;
        }
      }
      .rich-btn-box {
        section {
          margin-bottom: 5px;
          .btn {
            .glyphicon {
              top: -.5px;
            }
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .ho {
        .title {
          strong {
            vertical-align: top;
          }
        }
        .desc {margin: 6px 0 10px 0;}
        .btn-box {
          .btn {
            margin-right: 5px;
          }
          .fr {
            .btn {
              
            }
          }
        }
      }
    }
  }
}

</style>