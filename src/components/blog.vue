<template>
  <div class="blog">
    <div class="wrap">
      <div class="list-article">
        <section class="lmr"
          v-for="(item, idx) in 30"
          :key="idx"
        >
          <div class="fl">
            <div class="box-user">
              <div class="avatar" :style="{backgroundImage: 'url(./static/img/avatar.jpg)'}"></div>
              <div class="nickname c">摘星fy</div>
            </div>
          </div>
          <div class="fr btn-box">
            <div class="btn btn-default btn-sm btn-block">
              <i class="glyphicon glyphicon-eye-open"></i>
              <span>100</span>
            </div>
            <div class="btn btn-default btn-sm btn-block">
              <i class="glyphicon glyphicon-eye-open"></i>
              <span>100</span>
            </div>
            <div class="btn btn-default btn-sm btn-block">
              <i class="glyphicon glyphicon-eye-open"></i>
              <span>100</span>
            </div>
          </div>
          <div class="ho">
            <div class="title p ellipsis">
              <strong class="text-bigger">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deserunt, cupiditate fugit ipsum nam quis. Porro incidunt maxime, soluta nulla illo, natus quae et, similique vel, voluptas rem in eligendi.</strong>
            </div>
            <div class="desc p line-2">去年张小龙的微信为了推小程序，弄了一个“跳一跳”的游戏，火爆朋友圈。偶然间看到这个奇才做的“跳一跳”的外挂，直接傻眼好吗？！王德发，还能这样玩。不过看完后，彻底笑成神精病了，自此，入坑快手“手工耿”。去年张小龙的微信为了推小程序，弄了一个“跳一跳”的游戏，火爆朋友圈。偶然间看到这个奇才做的“跳一跳”的外挂，直接傻眼好吗？！王德发，还能这样玩。不过看完后，彻底笑成神精病了，自此，入坑快手“手工耿”。</div>
            <div class="box-tag">
              <div class="btn btn-xs btn-default">
                <i class="glyphicon glyphicon-tag"></i>
                <span>javascript</span>
              </div>
              <div class="btn btn-xs btn-default">
                <i class="glyphicon glyphicon-tag"></i>
                <span>php</span>
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
  name: 'blog',
  rootData() {
    return {}
  },
  rootMethods: {

  },
}
</script>

<style lang="scss" scoped>
.blog {
  padding: 10px 0;
  .list-article {
    section {
      border-bottom: 1px solid #e7e7e7; padding: .8em 0;
      &:last-child {border-bottom: none;}
      .box-user {
        cursor: pointer;
        .nickname {line-height: 2em;}
      }
      .desc {margin: 8px 0;}
    }
  }
}
</style>