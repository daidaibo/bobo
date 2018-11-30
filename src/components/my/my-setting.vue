<template>
  <my-wrapper>
    <div class="my-setting">
      <div class="alert alert-info">
        <i class="glyphicon glyphicon-info-sign"></i>
        <span>修改后，自动生效</span>
      </div>
      <form @submit.prevent>
        <table class="table-form">
          <tr>
            <td>动画模式</td>
            <td>
              <select class="form-control"
                v-model="setting.ani.type"
              >
                <option value="none">无</option>
                <option value="fade">淡入淡出</option>
                <option value="slide">滑入滑出</option>
                <option value="3d">3d动画</option>
              </select>
            </td>
          </tr>
          <tr v-if="setting.ani.type !== 'none'">
            <td>动画时长</td>
            <td>
              <div>
                <input type="number" class="form-control" min="0" max="2000"
                  v-model="setting.ani.duration"
                >
              </div>
            </td>
          </tr>
          <tr v-if="setting.ani.type == 'slide'">
            <td>偏移方向</td>
            <td>
              <div>
                <select class="form-control"
                  v-model="setting.ani.direction"
                >
                  <option value="lr">左右</option>
                  <option value="tb">上下</option>
                </select>
              </div>
            </td>
          </tr>
          <tr v-if="setting.ani.type == 'slide'">
            <td>偏移范围</td>
            <td>
              <div>
                <input type="number" class="form-control"
                  v-model="setting.ani.translate"
                >
              </div>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </my-wrapper>
</template>

<script>
export default {
  name: 'my-setting',
  rootData() {
    return {
      
    }
  },
  rootMethods: {

  },
  computed: {
    setting() {
      return this.$root.setting
    }
  }
}
</script>

<style lang="scss" scoped>
.my-setting {

}
</style>