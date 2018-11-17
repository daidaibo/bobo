<template>
  <div>
    <div class="panel panel-default no-wrap no-select">
      <div class="panel-heading">
        <h3 class="panel-title">大佬信息</h3>
      </div>
      <ul class="list-group">
        <li class="list-group-item p">
          <a href="javascript:" target="_blank" class="def">大佬简介</a>
        </li>
        <li class="list-group-item p">
          <a href="http://www.imooc.com/t/108955" target="_blank" class="def">大佬在慕课网</a>
        </li>
        <li class="list-group-item p">
          <a target="_blank" class="def"
            href="//shang.qq.com/wpa/qunwpa?idkey=159d80637e42e6dd9374249a65a7274b34029ee49e66e19e09210240639bf6d7"
          >QQ群 123456</a>
        </li>
      </ul>
    </div>
    <!-- <div class="panel panel-default no-wrap no-select">
      <div class="panel-heading">
        <h3 class="panel-title">筛选</h3>
      </div>
      <div class="panel-body">
        <ul style="line-height: 1.8em;">
          <li v-for="n in 5"><a href="javascript:">2018年11月20日</a></li>
        </ul>
      </div>
    </div> -->
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