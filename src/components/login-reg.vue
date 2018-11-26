<template>
  <div 
    :class="['mask no-select login-reg', {'visible-hide': !$root.user.isShowPanel}]"
    @click="$root.user.isShowPanel = false"
  >
    <div class="inner"
      :style="{transform: 'perspective(600px) translateZ(-1px) translateY(' + ($root.user.isShowPanel ? 0 : -100) + 'px) rotateY(' + ($root.user.mode === 'login' ? 0 : -180 ) + 'deg)'}"
      @click.stop
    >
      <form class="abs form-reg" @submit.prevent="$root.loginReg">
        <div class="gray-title">
          <div class="c">注册</div>
        </div>
        <div class="space">
          <table class="table-form">
            <tr>
              <td>邮箱：</td>
              <td>
                <input type="email" class="form-control" autocomplete="off" required tabindex="-1" 
                  v-model="$root.user.info.email"
                >
              </td>
            </tr>
            <tr>
              <td>密码：</td>
              <td>
                <input type="password" class="form-control" autocomplete="off" required tabindex="-1" minlength="6" maxlength="30"
                  v-model="$root.user.info.password"
                >
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div class="btn-box">
                  <button type="submit" class="btn btn-success">注册</button>
                  <button type="button" class="btn btn-default" @click.stop="$root.user.mode = 'login'">登录</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </form>
      <form class="abs form-login" @submit.prevent="$root.loginReg">
        <div class="gray-title">
          <div class="c">登录</div>
        </div>
        <div class="space">
          <table class="table-form">
            <tr>
              <td>邮箱：</td>
              <td>
                <input type="email" class="form-control" autocomplete="off" required 
                  v-model="$root.user.info.email"
                >
              </td>
            </tr>
            <tr>
              <td>密码：</td>
              <td>
                <input type="password" class="form-control" autocomplete="off" required minlength="6" maxlength="30"
                  v-model="$root.user.info.password"
                >
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div class="btn-box">
                  <button type="submit" class="btn btn-success">登录</button>
                  <button type="button" class="btn btn-default" @click.stop="$root.user.mode = 'reg'">注册</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-reg',
  rootData() {
    return {}
  },
  rootMethods: {
    logout() {
      const root = this.$root
      const r = root.router
      
      root.get('', {a: 'logout'}, () => {
        root.getUserInfo()
      })
    },
    loginReg() {
      const root = this.$root
      const r = root.router
      const user = root.user

      user.info.email = user.info.email.trim()

      root.getUid((uid) => {
        const isLogin = user.mode === 'login'
        const password = sha256(user.info.password)
        const requestData = {
          a: isLogin ? 'login' : 'reg',
          email: user.info.email,
          password: isLogin ? sha256(password + uid) : password,
          uid: isLogin ? undefined : uid,
        }

        !isLogin && (requestData.uid = uid)

        root.get('', requestData, (data) => {
          root.user.isShowPanel = 0
          root.getUserInfo()
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-reg {
  transition: .5s all;
  & > .inner {
    height: 198px; overflow: visible; background: transparent;
    transform-style: preserve-3d;
    transition: .5s all;

    .form-login {transform: translateZ(1px);}
    .form-reg {transform: translateZ(-1px) scale(-1, 1);}

    .btn-box {
      .btn {margin-right: 5px;}
    }
    form {
      width: 100%; height: 100%; position: absolute; left: 0; top: 0; background: #fff; border-radius: 4px; overflow: hidden;
    }
  }
}
</style>