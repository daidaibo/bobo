<template>
  <my-wrapper>
    <div class="my-password">
      <form @submit.prevent="$root.updatePass">
        <table class="table-form">
          <tr>
            <td>当前密码：</td>
            <td>
              <input type="password" class="form-control" required minlength="6"  maxlength="30" 
                v-model="$root.pass.origin"
              >
            </td>
          </tr>
          <tr>
            <td>设置密码：</td>
            <td>
              <input type="password" class="form-control" required minlength="6"  maxlength="30" 
                v-model="$root.pass.new"
              >
            </td>
          </tr>
          <tr>
            <td>确定密码：</td>
            <td>
              <input type="password" class="form-control" required minlength="6"  maxlength="30" 
                v-model="$root.pass.re"
              >
              <div class="alert alert-danger" style="margin: 10px 0"
                v-if="$root.pass.new !== $root.pass.re"
              >密码不一致</div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" value="确定" class="btn btn-success">
            </td>
          </tr>
        </table>
      </form>
    </div>
  </my-wrapper>
</template>

<script>
export default {
  name: 'my-password',
  rootData() {
    return {
      pass: {
        origin: '',
        new: '',
        re: '',
      }
    }
  },
  rootMethods: {
    updatePass() {
      const root = this.$root
      const pass = root.pass

      if (pass.new !== pass.re || !pass.origin || !pass.new || !pass.re) {
        console.log('缺少东西')
        return
      }

      root.getUid((uid) => {
        root.get('user.php', {
          a: 'user-update-pass',
          passOrigin: sha256(sha256(pass.origin) + uid),
          passNew: sha256(pass.new),
        }, (data) => {
          root.alert('操作成功')
          Object.keys(pass).forEach(k => pass[k] = '')
        })
      })
    }
  },
  mounted() {
    const root = this.$root
  }
}
</script>

<style lang="scss" scoped>
.my-password {

}
</style>