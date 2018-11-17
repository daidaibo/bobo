<template>
  <div class="mask mask-login-reg no-select no-wrap"
    :style="{opacity: $root.user.isShowPanel ? 1 : 0, 'pointer-events': $root.user.isShowPanel ? '' : 'none'}"
    @click="$root.user.isShowPanel = 0"
  >
    <div class="inner"
      :style="{transform: 'perspective(600px) translateY(' + ($root.user.isShowPanel ? 0 : -100) + 'px) translateZ(-1px) rotateY(' + ($root.user.mode === 'login' ? 0 : 180) + 'deg)'}"
      @click.stop
    >
      <form class="abs">
        <div class="gray-title lmr">
          <!-- <div class="fr">
            <span class="text-pale">&times;</span>
          </div> -->
          <div class="ellipsis">
            <span>登录</span>
          </div>
        </div>
        <div class="space">
          <table class="form-table">
            <tr>
              <td>邮箱：</td>
              <td>
                <input type="email" class="form-control" required="">
              </td>
            </tr>
            <tr>
              <td>密码：</td>
              <td>
                <input type="password" class="form-control" required="">
              </td>
            </tr>
            <tr>
              <td></td>
              <td class="td-submit">
                <input type="submit" class="btn btn-success" value="登录">
                <span class="btn btn-default" @click="$root.user.mode = 'reg'">注册</span>
                <!-- <span class="text-primary p" style="margin-left: 10px;">注册</span> -->
              </td>
            </tr>
          </table>
        </div>
      </form>
      <form class="abs">
        <div class="gray-title lmr">
          <!-- <div class="fr">
            <span class="text-pale">&times;</span>
          </div> -->
          <div class="ellipsis">
            <span>注册</span>
          </div>
        </div>
        <div class="space">
          <table class="form-table">
            <tr>
              <td>用户名：</td>
              <td>
                <input type="text" class="form-control" required="">
              </td>
            </tr>
            <tr>
              <td>密　码：</td>
              <td>
                <input type="password" class="form-control" required="">
              </td>
            </tr>
            <tr>
              <td></td>
              <td class="td-submit">
                <input type="submit" class="btn btn-success" value="注册">
                <span class="btn btn-default" @click="$root.user.mode = 'login'">登录</span>
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
    
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.mask-login-reg {
  transition: .5s opacity;
  .inner {
    min-height: 200px; overflow: visible; background: transparent;
    transform-style: preserve-3d;
    transform: perspective(600px) translateZ(-1px) rotateY(180deg);
    transition: .5s all;
    & > form {
      background: #fff; border-radius: 4px; overflow: hidden;
      &:nth-child(1) {transform: translateZ(1px);}
      &:nth-child(2) {transform: translateZ(-1px) scale(-1, 1);}
    }
    .td-submit {
      .btn {margin-right: 8px;}
    }
  }
}
</style>