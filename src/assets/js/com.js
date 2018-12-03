import Vue from 'vue'

Vue.component('my-nav', {
  template: `
    <div class="my-nav">
      <div class="box-avatar">
        <div class="avatar" :style="{backgroundImage: 'url(' + $root.user.info.headImg + ')'}"></div>
      </div>
      <div class="alters">
        <ul>
          <li :class="['p', {on: item.com === $root.router.coms[0]}]" 
            v-for="(item, idx) in $root.my.nav.list"
            :key="item.name + idx"
            @click="$root.updateCom(item.com)"
          >{{item.name}}</li>
        </ul>
        <ul v-if="$root.user.isAdmin">
          <li :class="['p', {on: item.com === $root.router.coms[0]}]" 
            v-for="(item, idx) in $root.admin.nav.list"
            :key="item.name + idx"
            @click="$root.updateCom(item.com)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
  `
})

Vue.component('wrapper', {
  template: `
    <div class="wrapper-scroll"
      @scroll="handleScroll"
    >
      <div class="wrapper-body">
        <div class="wrap">
          <slot></slot>
        </div>
      </div>
    </div>
  `,
  methods: {
    handleScroll(e) {
      const root = this.$root
      const r = root.router
      
      switch (r.coms[0]) {
        case 'blog':
          root.blog.st = e.target.scrollTop
          break
      }
    }
  }
})

Vue.component('my-wrapper', {
  template: `
    <div class="my-wrapper">
      <div>
        <div class="wrap">
          <div class="lmr">
            <div class="fl" style="margin-right: 30px;">
              <my-nav></my-nav>
            </div>
            <div class="ho">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

Vue.component('no-data-head-text', {
  template: `
    <div class="c">
      <h3 class="text-pale">暂无数据</h3>
    </div>
  `
})