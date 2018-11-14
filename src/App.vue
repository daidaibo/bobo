<template>
  <div id="app">
    <div class="flex-layout">
      <topbar></topbar>
      <div class="auto-flex">
        <div class="auto-scroll">
          <div class="wrap lmr main-wrap" style="height: 100%;">
            <skill></skill>
            <div class="fr">
              <mogul></mogul>
            </div>
            <div class="ho" style="height: 100%; overflow: auto;">
              <div class="list-article">
                <section v-for="n in 30" class="lmr">
                  <div class="fr rich-btn-box">
                    <section>
                      <div class="btn btn-default btn-sm btn-block">
                        <i class="glyphicon glyphicon-eye-open"></i>
                        <span>100</span>
                      </div>
                    </section>
                    <section>
                      <div class="btn btn-default btn-sm btn-block">
                        <i class="glyphicon glyphicon-thumbs-up"></i>
                        <span>100</span>
                      </div>
                    </section>
                    <section>
                      <div class="btn btn-default btn-sm btn-block">
                        <i class="glyphicon glyphicon-thumbs-down"></i>
                        <span>100</span>
                      </div>
                    </section>
                  </div>
                  <div class="ho">
                    <div class="title ellipsis text-lg">
                      <strong class="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae suscipit, officia tempore, repudiandae maxime laboriosam illum. Odit repellat animi maiores voluptas officiis consequuntur non delectus ut totam, aspernatur dolores culpa.</strong> 
                    </div>
                    <div class="desc line-2"><span class="p text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione molestiae repellat magnam in assumenda, consectetur vero, harum? Veniam asperiores animi quos neque assumenda excepturi explicabo ut quibusdam, sequi quia iure.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione molestiae repellat magnam in assumenda, consectetur vero, harum? Veniam asperiores animi quos neque assumenda excepturi explicabo ut quibusdam, sequi quia iure.</span></div>
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
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topbar from '@/components/topbar'
import skill from '@/components/skill'
import mogul from '@/components/mogul'
import blog from '@/components/blog'
import testing from '@/components/testing'
import projects from '@/components/projects'
import friends from '@/components/friends'
import guest from '@/components/guest'

const coms = [
  topbar,
  skill,
  mogul,
  blog,
  blog,
  testing,
  projects,
  friends,
  guest,
]

export default {
  name: 'App',
  rootData() {
    const root = this.$root
    
    return {
      nav: {
        list: [
          {name: '博文', com: 'blog'},
          {name: '实验室', com: 'testing'},
          // {name: '开源项目', com: 'projects'},
          {name: '团队', com: 'friends'},
          {name: '留言', com: 'guest'},
        ]
      },
      ...(() => {
        let map = {}
        coms.forEach((item) => {
          map = {...map, ...item.rootData.call(root)}
        })
        return map
      })()
    }
  },
  rootMethods: {
    ...(() => {
      let map = {}
      coms.forEach((item) => {
        map = {...map, ...item.rootMethods}
      })
      return map
    })()
  },
  components: {
    ...(() => {
      let map = {}
      coms.forEach((com) => {
        map[com.name] = com
      })
      return map
    })()
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  
  .list-article {
    margin-right: 10px;
    & > section {
      border-bottom: 1px solid #ddd; padding: 1.2em 0;
      &:first-child {padding-top: 0;}
      &:last-child {border-bottom: 0;}
      .rich-btn-box {
        // margin-right: 10px;
        section {
          margin-top: 5px;
          .btn {
            i {top: -0.5px}
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

  .main-wrap {
    & > div {
      padding-top: 20px;
    }
  }
}
</style>