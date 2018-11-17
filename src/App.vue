<template>
  <div id="app">
    <div class="flex-layout">
      <topbar></topbar>
      <div class="auto-flex">
        <div class="auto-scroll">
          <div class="wrap lmr lmr-panel main-wrap">
            <div class="fl">
              <skill></skill>
            </div>
            <div class="fr">
              <mogul></mogul>
            </div>
            <div class="ho">
              <blog></blog>
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
}

</style>