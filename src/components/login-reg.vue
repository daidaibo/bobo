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
                <input type="email" class="form-control" autocomplete="off" required 
                  v-model="$root.user.email"
                >
              </td>
            </tr>
            <tr>
              <td>密码：</td>
              <td>
                <input type="password" class="form-control" autocomplete="off" required 
                  v-model="$root.user.password"
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
                  v-model="$root.user.email"
                >
              </td>
            </tr>
            <tr>
              <td>密码：</td>
              <td>
                <input type="password" class="form-control" autocomplete="off" required 
                  v-model="$root.user.password"
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
    loginReg() {
      const root = this.$root
      const r = root.router
      const user = root.user

      user.email = user.email.trim()

      if (user.mode === 'login') {
        root.getUid((uid) => {
          root.get('', {
            a: 'login',
            email: user.email,
            password: sha256(sha256(user.password) + uid),
          }, (data) => {
            console.log(data)
          })
        })
      } else {
        // 注册
        
      }

      // console.log(user.email)
      // console.log(user.password)
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