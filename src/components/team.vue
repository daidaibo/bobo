<template>
  <div class="team">
    <div>
      <div class="list-member"
        :style="{padding: $root.is.win ? '10px 20px' : '' }"
      >
        <section class="team-card"
          v-for="(item, idx) in $root.user.list"
          v-if="item.name.indexOf('未命名') !== 0"
          :key="idx"
        >
          <div class="inner">
            <div class="head-img p"
              :style="{backgroundImage: 'url(' + item.headImg + ')'}"
            ></div>
            <div class="info">
              <div class="text-box lmr">
                <div class="ellipsis nickname c">
                  <a :class="{def: !item.url}" target="_blank" :href="item.url || 'javascript:'">{{item.name}}</a>
                  <template v-if="item.buss">
                    <span>@</span>
                    <a :class="{def: !item.bussUrl}" target="_blank" :href="item.bussUrl || 'javascript:'">{{item.buss}}</a>
                  </template>
                </div>
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
  name: 'team',
  rootData() {
    return {}
  },
  rootMethods: {

  }
}

{
  const nodeStyle = document.createElement('style')

  nodeStyle.id = 'nodeStyle'
  nodeStyle.innerHTML = new Array(30).fill().map((_, idx, arr) => {
    const len = arr.length
    const per = parseInt((1 / (idx + 1) * 10000)) / 100

    return `
      @media (min-width: ${idx * 200}px) {
        .list-member .team-card {width: ${per}%;}
      }
    `
  }).join('')
  document.body.appendChild(nodeStyle)
}
</script>

<style lang="scss" scoped>
.team {
  .list-member {
    padding: 6px;
    .team-card {
      display: inline-block; padding: 6px;
      .inner {
        background: #fff; border-radius: 4px; overflow: hidden;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
        .head-img {
          padding-top: 100%; background: #eee no-repeat center / cover;
        }
        .info {
          height: 36px; padding: .8em .2em; border-top: 1px solid #eee; font-size: 12px;
          .fr {
            max-width: 50%;
          }
        }
      }
    }
  }
}
</style>