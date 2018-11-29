import Vue from 'vue'

Vue.component('my-nav', {
  template: `
    <div class="my-nav">
      <div class="box-avatar">
        <div class="avatar" :style="{backgroundImage: 'url(./static/img/avatar.jpg)'}"></div>
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

Vue.component('my-wrap', {
  template: `
    <div class="my-wrap">
      <div>
        <div class="wrap">
          <div class="lmr">
            <div class="fl">
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