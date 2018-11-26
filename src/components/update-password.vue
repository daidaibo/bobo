<template>
  <div class="update-password">
    <form @submit.prevent="updatePassword">
      <table class="table-form">
        <tr>
          <td>当前密码：</td>
          <td>
            <input type="password" class="form-control" required minlength="6" maxlength="30"
              v-model="d.passOrigin"
            >
          </td>
        </tr>
        <tr>
          <td>设置密码：</td>
          <td>
            <input type="password" class="form-control" required minlength="6" maxlength="30"
              v-model="d.newPass"
            >
          </td>
        </tr>
        <tr>
          <td>确定密码：</td>
          <td>
            <input type="password" class="form-control" required minlength="6" maxlength="30"
              v-model="d.rePass"
            >
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
</template>

<script>
export default {
  name: 'update-password',
  data() {
    return {
      d: {
        passOrigin: '',
        newPass: '',
        rePass: '',
      }
    }
  },
  methods: {
    updatePassword() {
      const root = this.$root
      const d = this.d
      
      root.getUid((uid) => {
        root.post('', {
          a: 'update-password',
          passOrigin: sha256(d.passOrigin),
          newPass: sha256(d.newPass),
          pub: uid,
        }, (data) => {
          alert('修改成功')
          d.passOrigin = ''
          d.newPass = ''
          d.rePass = ''
        })
      })
    },
  },
  rootData() {
    return {

    }
  },
  rootMethods: {

  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.update-password {

}
</style>