<template>
  <div class="user-info">
    <form @submit.prevent="updateUserInfo">
      <table class="table-form" v-if="!$root.router.isUserEditing">
        <tbody>
          <tr>
            <td>昵　　称：</td>
            <td>
              <div>{{$root.user.info.name}}</div>
            </td>
          </tr>
          <tr>
            <td>性　　别：</td>
            <td>
              <div>{{$root.user.info.sex == 1 ? '女' : '男'}}</div>
            </td>
          </tr>
          <tr>
            <td>邮箱地址：</td>
            <td>
              <div>{{$root.user.info.email}}</div>
            </td>
          </tr>
          <tr>
            <td>个人说明：</td>
            <td>
              <div>{{$root.user.info.description}}</div>
            </td>
          </tr>
          <tr>
            <td>个人网站：</td>
            <td>
              <div>{{$root.user.info.url}}</div>
            </td>
          </tr>
          <tr>
            <td>公　　司：</td>
            <td>
              <div>{{$root.user.info.buss}}</div>
            </td>
          </tr>
          <tr>
            <td>公司网址：</td>
            <td>
              <div>{{$root.user.info.bussUrl}}</div>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <span class="btn btn-success"
                @click="$root.updateRouter({isUserEditing: true}, 'push')"
              >编辑</span>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table-form" v-else>
        <tbody>
          <tr>
            <td>邮箱地址：</td>
            <td>
              <span>{{$root.user.info.email}}</span>
              <span class="text-danger" style="margin-left: 10px;">(*用于登录，不可修改)</span>
            </td>
          </tr>
          <tr>
            <td>昵　　称：</td>
            <td>
              <input type="text" class="form-control" required
                v-model="$root.user.info.name"
              >
              <div class="alert alert-danger"
                v-if="isNicknameNotValid"
              >请输入霸气的的昵称</div>
            </td>
          </tr>
          <tr>
            <td>性别：</td>
            <td>
              <select class="form-control" v-model="$root.user.info.sex">
                <option value="0">男</option>
                <option value="1">女</option>
              </select>
            </td>
          </tr>
          <!-- <tr>
            <td>生　　日：</td>
            <td>
              <input type="text" class="form-control"
                :value="$root.user.info.birthday | date"
                @change="updateBirthday"
              >
              <div class="alert alert-danger"
                v-if="isNaN($root.user.info.birthday)"
              >请输入正确的日期</div>
            </td>
          </tr> -->
          <tr>
            <td>个人说明：</td>
            <td>
              <input type="text" class="form-control"
                v-model="$root.user.info.description"
              >
            </td>
          </tr>
          <tr>
            <td>个人网站：</td>
            <td>
              <input type="text" class="form-control"
                v-model="$root.user.info.url"
              >
            </td>
          </tr>
          <tr>
            <td>公　　司：</td>
            <td>
              <input type="text" class="form-control"
                v-model="$root.user.info.buss"
              >
            </td>
          </tr>
          <tr>
            <td>公司网址：</td>
            <td>
              <input type="text" class="form-control"
                v-model="$root.user.info.bussUrl"
              >
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <div class="btn-box">
                <button type="submit" class="btn btn-success">确定</button>
                <span class="btn btn-default" @click="$root.updateRouter({isUserEditing: undefined}, 'push')">返回</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
export default {
  name: 'user-info',
  rootData() {
    return {

    }
  },
  methods: {

  },
  computed: {
    isNicknameNotValid() {
      return !root.user.info.name || /^未命名/.test(root.user.info.name)
    },
  },
  methods: {
    updateUserInfo() {
      const root = this.$root
      const user = root.user
      const info = user.info

      if (this.isNicknameNotValid) {
        console.log('this.isNicknameNotValid', this.isNicknameNotValid)
        return
      }

      root.getUid((uid) => {
        root.post('', {
          a: 'update-user-info',
          name: info.name,
          sex: info.sex,
          description: info.description,
          url: info.url,
          buss: info.buss,
          bussUrl: info.bussUrl,
          pub: uid,
        }, (data) => {
          // console.log(data)
          alert('修改成功')
          root.getUserInfo()
          root.getAllUser()
        })
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.user-info {
  .table-form {
    .alert {
      margin: 10px 0 0 0;
    }
  }
}
</style>