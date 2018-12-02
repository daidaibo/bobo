<template>
  <my-wrapper>
    <div class="my-info">
      <form @submit.prevent="$root.updateUserInfo">
        <table class="table-form">
          <tr>
            <td>邮箱地址：</td>
            <td>
              <div>
                <span>{{userInfo.email}}</span>
                <span class="text-danger" style="margin-left: 10px;">(*用于登录，不可修改)</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>昵　　称：</td>
            <td>
              <input type="text" class="form-control" maxlength="20" required 
                v-model="userInfo.name"
              >
              <div class="alert alert-danger" style="margin: 10px 0;"
                v-if="userInfo.name.indexOf('未命名') === 0"
              >换一个高大上的名字</div>
            </td>
          </tr>
          <tr>
            <td>性　　别：</td>
            <td>
              <select class="form-control"
                v-model="userInfo.sex"
              >
                <option value="0">男</option>
                <option value="1">女</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>个人说明：</td>
            <td>
              <textarea class="form-control" maxlength="200" style="min-height: 6em;" 
                v-model="userInfo.description"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>个人网站：</td>
            <td>
              <input type="url" class="form-control" maxlength="200" 
                v-model="userInfo.url"
              >
            </td>
          </tr>
          <tr>
            <td>公　　司：</td>
            <td>
              <input type="text" class="form-control" maxlength="50" 
                v-model="userInfo.buss"
              >
            </td>
          </tr>
          <tr>
            <td>公司网址：</td>
            <td>
              <input type="url" class="form-control"
                v-model="userInfo.bussUrl"
              >
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit" class="btn btn-success">修改</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </my-wrapper>
</template>

<script>
export default {
  name: 'my-info',
  rootData() {
    return {
      
    }
  },
  rootMethods: {
    updateUserInfo() {
      const root = this.$root
      const info = root.user.info
      /*
        name
        sex
        description
        url
        buss
        bussUrl
      */

      Object.keys(info).forEach(k => info[k].trim() && (info[k] = info[k].trim()))

      if (info.name.indexOf('未命名') === 0) {
        alert('换一个高大上的名字')
        return
      }

      root.getUid((uid) => {
        root.get('user.php', {
          a: 'user-update-info',
          name: info.name,
          sex: info.sex,
          description: info.description,
          url: info.url,
          buss: info.buss,
          bussUrl: info.bussUrl,
          pub: uid,
        }, (data) => {
          root.alert('操作成功')
          root.fetchAllUser()
        })
      })
    }
  },
  computed: {
    userInfo() {
      return this.$root.user.info
    }
  },
  mounted() {
    const root = this.$root
  }
}
</script>

<style lang="scss" scoped>
.my-info {
  label {margin-right: 15px;}
}
</style>