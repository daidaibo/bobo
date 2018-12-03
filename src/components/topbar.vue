<template>
  <div class="topbar no-select">
    <div class="wrap lmr">
      <div class="fl"
        v-if="$root.dw > 500"
      >
        <div class="logo text-big">BoBo-Fans</div>
      </div>
      <div class="fl" style="margin-right: 0;">
        <ul>
          <li
            v-for="(item, idx) in $root.nav.list"
            :key="idx"
            :class="{on: item.com === $root.com}"
            @click="$root.updateCom(item.com, {blogId: undefined})"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="fr" style="max-width: none; margin-left: 0;">
        <ul v-if="$root.isLogined">
          <li style="margin-left: 0;">
            <div class="btn btn-sm btn-success" style="top: -1px;"
              @click="$root.gotoEditor"
            >
              <i class="glyphicon glyphicon-plus"></i>
              <span>提问</span>
            </div>
          </li>
          <li @click="$root.updateCom('my-info', {subCom: 'user-info'})">我的</li>
          <li @click="$root.logout()">退出</li>
        </ul>
        <ul v-else>
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
      },
      my: {
        nav: {
          list: [
            {name: '个人信息', com: 'my-info'},
            {name: '修改密码', com: 'my-password'},
            // {name: '我的收藏', com: 'my-collection'},
            {name: '浏览记录', com: 'my-visited'},
            {name: '我的文章', com: 'my-blog'},
            // {name: '留言管理', com: 'my-comment'},
            {name: '设置', com: 'my-setting'},
          ]
        }
      },
      admin: {
        nav: {
          list: [
            // {name: '后台管理', com: 'manage-user'},
            // {name: '用户访问', com: 'manage-user-mark'},
          ]
        }
      },
    }
  },
  rootMethods: {
    gotoEditor() {
      const root = this.$root
      const r = root.router
      
      if (!r.blogId && r.coms[0] === 'editor') {
        return
      }

      r.coms.unshift('editor')
      r.countAni++
      root.updateRouter({
        blogId: undefined,
        blogTitle: undefined,
      }, 'push')
      root.clearEditor()
    },
  }
}
</script>

<style lang="scss" scoped="">
.topbar {
  line-height: 44px;
  background: #222;
  color: #999;
  .logo {
    cursor: pointer;
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