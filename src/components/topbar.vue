<template>
  <div class="topbar no-select">
    <div class="wrap lmr">
      <div class="logo text-lg fl">BoBo-Fans</div>
      <div class="nav fl">
        <ul>
          <li
            v-for="(item, idx) in $root.nav.list"
            :key="idx"
            :class="['p', {on: idx === 0}]"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="fr">
        <ul>
          <li>登录</li>
          <li>注册</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topbar',
  rootData() {
    return {
      nav: {
        list: [
          {name: '问答', com: 'blog'},
          // {name: '实验室', com: 'testing'},
          // {name: '开源项目', com: 'projects'},
          {name: '团队', com: 'friends'},
          {name: '留言', com: 'guest'},
        ]
      },
    }
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
.topbar {
  height: 50px; line-height: 50px; color: #999;
  background: #222;
  // background: rgb(35,110,231);
  * {vertical-align: top;}
  .nav,
  .fr {
    ul {
      li {
        text-decoration: none; color: inherit; padding: 0 15px; display: inline-block; cursor: pointer;
        &:hover {color: #fff;}
        &.on {
          color: #fff;
          background: #080808;
          background: rgba(0,0,0,.5);
        }
      }
    }
  }
  .fr {
    ul {
      li {
        padding: 0; margin-left: 30px
      }
    }
  }
}

</style>