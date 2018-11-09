<template>
  <div class="friends">
    <div class="container">
      <div class="list-friends">
        <section v-for="n in 40">
          <div class="inner">
            <div class="head-img" :style="{backgroundImage: 'url(./static/img/avatar.jpg)'}"></div>
            <div class="lmr user-sub-info">
              <div class="fr">
                <span class="btn btn-primary btn-xs">个人网站</span>
              </div>
              <div class="ellipsis">
                <span>摘星fy</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'friends',
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
.friends {
  .list-friends {
    & > section {
      width: 20%; float: left; padding: 10px;
      .inner {
        background: #fff; box-shadow: 0 0 5px rgba(0,0,0,.3); border-radius: 4px; overflow: hidden;
        .head-img {
          padding-top: 100%; background: #eee no-repeat center / cover;
        }
        .user-sub-info {
          height: 44px; padding: .8em;
        }
      }
    }
  }
}
</style>
