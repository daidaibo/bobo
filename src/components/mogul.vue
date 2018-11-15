<template>
  <div class="panel panel-default nowrap no-select">
    <div class="panel-heading">
      <h3 class="panel-title">大佬信息</h3>
    </div>
    <ul class="list-group">
      <!-- <li class="list-group-item p">
        <a href="javascript:" class="def">大佬简介</a>
      </li> -->
      <li class="list-group-item p">
        <a href="javascript:" class="def">
          <a href="http://www.imooc.com/t/108955" target="_blank" class="def">大佬在慕课网</a>
        </a>
      </li>
      <li class="list-group-item p">
        <a href="//shang.qq.com/wpa/qunwpa?idkey=159d80637e42e6dd9374249a65a7274b34029ee49e66e19e09210240639bf6d7" target="_blank" class="def">加入QQ群聊</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mogul',
  rootData() {
    return {}
  },
  rootMethods: {

  },
  mounted() {
    const root = this.$root
    const r = root.router
    
    
  }
}
</script>

<style>
.mogul {

}
</style>