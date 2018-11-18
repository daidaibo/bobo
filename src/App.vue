<template>
  <div id="app">
    <div class="flex-layout">
      <topbar v-if="$root.is.pc"></topbar>
      <div class="auto-flex">
        <div class="auto-scroll">
          <div class="wrap lmr lmr-panel main-wrap">
            <!-- <div class="fl">
              <skill></skill>
            </div> -->
            <div class="fr" v-if="$root.is.pc">
              <mogul></mogul>
            </div>
            <div class="ho">
              <div
                v-for="(com, idx) in $root.router.coms"
                :key="idx"
                :is="com"
                v-if="idx === 0"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <login-reg></login-reg>
  </div>
</template>

<script>
import topbar from '@/components/topbar'
import skill from '@/components/skill'
import loginReg from '@/components/loginReg'

import mogul from '@/components/mogul'
import blog from '@/components/blog'
import testing from '@/components/testing'
import projects from '@/components/projects'
import friends from '@/components/friends'
import guest from '@/components/guest'
import editor from '@/components/editor'

const coms = [
  topbar,
  skill,
  loginReg,
  
  mogul,
  blog,
  blog,
  testing,
  projects,
  friends,
  guest,
  editor,
]

export default {
  name: 'App',
  rootData() {
    const root = this.$root
    
    return {
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
  .main-wrap {
    & > .ho {
      overflow: hidden;
      & > div {
        width: 100%; height: 100%; position: absolute; left: 0; top: 0; overflow: auto; padding-top: 20px;
      }
    }
  }
}

</style>