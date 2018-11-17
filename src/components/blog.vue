<template>
  <div class="blog" :style="{minHeight: $root.is.ios ? 'calc(100% + 1px)' : '100%'}">
    <div class="list-blog" :style="{marginRight: $root.is.windows ? '6px' : '0'}">
      <section v-for="n in 20" class="lmr">
        <div class="fr rich-btn-box">
          <section>
            <div class="btn btn-default btn-sm btn-block">
              <!-- <span>浏览</span> -->
              <i class="glyphicon glyphicon-eye-open"></i>
              <span>100</span>
            </div>
          </section>
          <section>
            <div class="btn btn-default btn-sm btn-block">
              <!-- <span>赞同</span> -->
              <i class="glyphicon glyphicon-ok"></i>
              <span>100</span>
            </div>
          </section>
          <section>
            <div class="btn btn-default btn-sm btn-block">
              <!-- <span>评论</span> -->
              <i class="glyphicon glyphicon-comment"></i>
              <span>100</span>
            </div>
          </section>
        </div>
        <div class="ho lmr">
          <div class="fl head-img-box">
            <div class="head-img" :style="{backgroundImage: 'url(./static/img/avatar.jpg)'}"></div>
          </div>
          <div class="ho bd">
            <div class="title ellipsis text-lg">
              <strong class="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae suscipit, officia tempore, repudiandae maxime laboriosam illum. Odit repellat animi maiores voluptas officiis consequuntur non delectus ut totam, aspernatur dolores culpa.</strong> 
            </div>
            <div class="desc line-2">
              <span class="p text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut ipsa doloremque architecto aliquid placeat fuga dignissimos dolore! Minima magnam eius ducimus aspernatur porro provident recusandae esse neque non sunt.</span>
            </div>
            <div class="btn-box af">
              <div class="fr">
                <time class="text-gray">2018-11-14 16:38:29</time>
              </div>
              <div>
                <div class="btn btn-default btn-xs">
                  <i class="glyphicon glyphicon-tag"></i>
                  <span class="tag">js</span>
                </div>
                <div class="btn btn-default btn-xs">
                  <i class="glyphicon glyphicon-tag"></i>
                  <span class="tag">php</span>
                </div>
                <div class="btn btn-default btn-xs">
                  <i class="glyphicon glyphicon-tag"></i>
                  <span class="tag">mysql</span>
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
      &:first-child {padding-top: 0;}
      &:last-child {border-bottom: 0;}
      .bd {
        border-bottom: 1px solid #ddd; padding: 1.2em 0;
      }
      .head-img-box {
        padding-top: 24px;
        .head-img {
          width: 60px; height: 60px; border-radius: 25%; background: #eee no-repeat center / cover;
        }
      }
      .rich-btn-box {
        padding-top: 5px;
        section {
          margin-bottom: 5px;
          .btn {
            i {top: -0.5px}
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .ho {
        .title {}
        .desc {margin: .5em 0 1em 0;}
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