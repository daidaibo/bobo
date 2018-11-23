<template>
  <div class="team">
    <div>
      <div class="wrap">
        <div class="list-member">
          <section class="team-card col-md-3 col-sm-4 col-xs-6"
            v-for="(item, idx) in $root.user.list"
          >
            <div class="inner">
              <div class="head-img p"
                :style="{backgroundImage: 'url(' + item.headImg + ')'}"
              ></div>
              <div class="info">
                <div class="text-box lmr">
                  <div class="fr ellipsis p" v-if="item.buss">
                    <a
                      :href="item.bussUrl || 'javascript:' "
                      target="_blank"
                      :class="{def: !item.bussUrl}"
                    >@{{item.buss}}</a>
                  </div>
                  <div class="ellipsis nickname">
                    <a
                      :href="item.url || 'javascript:' "
                      target="_blank"
                      :class="{def: !item.url}"
                    >{{item.name}}</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'team',
  rootData() {
    return {}
  },
  rootMethods: {

  }
}
</script>

<style lang="scss" scoped>
.team {
  padding: 1em 0;
  .list-member {
    margin: 0 -8px;
    .team-card {
      display: inline-block; padding: 8px;
      .inner {
        background: #fff; border-radius: 4px; overflow: hidden;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
        .head-img {
          padding-top: 100%; background: #eee no-repeat center / cover;
        }
        .info {
          height: 43px;
          padding: .8em;
          .fr {
            max-width: 50%;
          }
        }
      }
    }
  }
}
</style>