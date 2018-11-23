<template>
  <div class="topbar no-select">
    <div class="wrap lmr">
      <div class="fl">
        <div class="logo text-big">BoBo-Fans</div>
      </div>
      <div class="fl">
        <ul>
          <li
            v-for="(item, idx) in $root.nav.list"
            :key="idx"
            :class="{on: item.com === $root.com}"
            @click="$root.updateCom(item.com)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="fr">
        <ul>
          <li @click="$root.user.isShowPanel = true; $root.user.mode = 'login' ">登录</li>
          <li @click="$root.user.isShowPanel = true; $root.user.mode = 'reg' ">注册</li>
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
          {name: '团队', com: 'team'},
        ]
      }
    }
  },
  rootMethods: {

  }
}
</script>

<style lang="scss" scoped="">
.topbar {
  line-height: 44px;
  background: #222;
  color: #999;
  .logo {
    margin-right: 1em; cursor: pointer;
  }
  ul {
    li {
      display: inline-block; padding: 0 1em; cursor: pointer;
      &:hover,
      &.on {color: #fff;}
      &.on {background: rgba(0,0,0,.5);}
    }
  }
  & .fr {
    ul {
      li {
        padding: 0; margin-left: 2em;
      }
    }
  }
}

@media (max-width: 375px) {
  .topbar {
    .logo {
      display: none;
    }
  }
}
</style>