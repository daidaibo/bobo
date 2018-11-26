<template>
  <div class="me">
    <div>
      <div class="wrap">
        <div class="lmr">
          <div class="fl no-select">
            <div class="nav-me">
              <div>
                <div class="list-group">
                  <a
                    :class="['list-group-item p', {active: item.com === $root.router.subCom}]"
                    @click="$root.updateRouter({subCom: item.com, isUserEditing: false}, 'push')"
                    v-for="(item, idx) in subList"
                  >
                    <i class="glyphicon glyphicon-bookmark"></i>
                    <span>{{item.name}}</span>
                  </a>
                </div>
              </div>
              <div class="box-head-img">
                <div class="avatar p" :style="{backgroundImage: 'url(' + $root.user.info.headImg + ')'}"></div>
              </div>
            </div>
          </div>
          <div class="ho">
            <div :is="$root.router.subCom"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const coms = [
  'components/user-info',
  'components/update-password',
  'components/my-article',
  'components/my-visited',
  'components/my-operated',
  'components/manage-article',
].map((path) => {
  return require('@/' + path).default
})

export default {
  name: 'me',
  rootData() {
    const root = this.$root
    
    return {
      ...(() => {
        let map = {}
        coms.forEach((item) => {
          map = {...map, ...item.rootData.call(root)}
        })
        return map
      })(),
    }
  },
  rootMethods: {
    ...(() => {
      let map = {}
      coms.forEach((item) => {
        map = {...map, ...item.rootMethods}
      })
      return map
    })(),
  },
  components: {
    ...(() => {
      const map = {}
      coms.forEach((item) => {
        map[item.name] = item
      })
      return map
    })(),
  },
  computed: {
    subList() {
      const root = this.$root
      const r = root.router
      const list = [
        {name: '个人信息', com: 'user-info'},
        {name: '修改密码', com: 'update-password'},
        // {name: '文章管理', com: 'manage-article'},
        /*{name: '我的文章', com: 'my-article'},
        {name: '浏览记录', com: 'my-visited'},
        {name: '操作记录', com: 'my-operated'},*/
      ]

      if (root.user.info.level == 9) {
        list.push({name: '文章管理', com: 'manage-article'})
      }

      return list
    }
  }
}
</script>

<style lang="scss" scoped>
.me {
  padding: 15px 0;
  .nav-me {
    .box-head-img {
      margin-bottom: 15px;
      .avatar {width: 120px; height: 120px;}
    }
  }
}
</style>