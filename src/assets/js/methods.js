export default {
  rootData() {
    const ua = navigator.userAgent
    const isLocal = location.origin.indexOf(808) > -1
    let setting

    try {
      setting = JSON.parse(localStorage.setting)
    } catch (e) {
      setting = {}
    }

    setting = { ...{
        ani: {
          type: '3d',
          duration: '1000',
          direction: 'tb',
          translate: '50',
        }
      },
      ...setting
    }

    return {
      dw: window.innerWidth,
      lenAni: 30,
      requestUrl: isLocal ? 'http://192.168.1.107/fans/' : '/fans/',
      requestUrl: isLocal ? 'http://10.4.10.41/fans/' : '/fans/',
      // requestUrl: 'http://10.4.10.41/fans',
      is: {
        local: isLocal,
        win: ua.indexOf('Windows NT') > -1,
      },
      qr: {
        isShow: 0,
      },
      setting,
      router: {
        coms: [],
        countAni: 0,
      },
      user: {
        mode: 'reg',
        isShowPanel: false,
        list: [],
        map: {},
        isAdmin: false,
        info: {
          id: '',
          email: '',
          birthday: '',
          password: '',
          name: '',
          description: '',
          level: '',
          errCount: '',
          errTime: '',
          url: '',
          addr: '',
          buss: '',
          bussUrl: '',
          time: '',
          headImg: '',
        },
      },
    }
  },
  rootMethods: {
    log(msg) {
      console.log(msg)
    },
    alert(msg) {
      alert(msg)
    },
    confirm(msg) {
      confirm(msg)
    },
    json2url(o) {
      return Object.keys(o).map(k => k + '=' + encodeURIComponent(o[k])).join('&')
    },
    getUid(cb) {
      const root = this.$root
      const r = root.router
      
      root.get('api.php', {
        a: 'get-uid'
      }, (data) => {
        cb && cb(sha256(data.uid).toString())
      })
    },
    createUrl(url) {
      const root = this.$root
      return root.requestUrl + url
    },
    get(url, data, succ, err) {
      const root = this.$root
      const xhr = new XMLHttpRequest()

      url = root.createUrl(url)
      xhr.onreadystatechange = root.onreadystatechange.bind(root, xhr, succ, err)
      xhr.open('GET', url + '?' + root.json2url(data) , true)
      xhr.send()
    },
    post(url, data, succ, err) {
      const root = this.$root
      const xhr = new XMLHttpRequest()
      const formData = new FormData()

      for (let key in data) {
        formData.append(key, data[key])
      }

      url = root.createUrl(url)
      xhr.onreadystatechange = root.onreadystatechange.bind(root, xhr, succ, err)
      xhr.open('POST', url, true)
      xhr.send(formData)
    },
    onreadystatechange(xhr, succ, err) {
      const root = this.$root

      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          root.err(xhr.responseText, succ, err)
        } else {
          err && err.bind(root, xhr.responseText, xhr)
        }
      }
    },
    err(str, succ, err) {
      const root = this.$root
      let data

      try {
        data = JSON.parse(str)
      } catch (e) {
        console.warn('数据解析失败', str)
        return
      }

      data = data || {}

      switch (data.code) {
        case 1:
          console.log(data.msg)
          break
        case 2:
          alert(data.msg)
          break
      }

      switch (data.msg) {
        case '账号异常':
          root.setUserInfo({})
          break
      }

      if (data.code) {
        console.warn(data.msg)
        err && err.call(root, data)
      } else {
        succ && succ.call(root, data)
      }
    },
    routerInit() {
      const root = this.$root
      let r

      try {
        r = JSON.parse(decodeURIComponent(location.hash.substring(1)))
      } catch (e) {
        r = {}
        console.log('hash parse err')
      }

      r.coms = r.coms || ['blog']
      r.countAni = r.countAni || 0

      root.router = r
    },
    updateRouter(o, isRouterPush) {
      const root = this.$root
      
      root.isRouterPush = isRouterPush

      for (let key in o) {
        root.$set(root.router, key, o[key])
      }
    },
    updateCom(com, extend) {
      const root = this.$root
      const r = root.router
      
      for (let key in extend) {
        root.$set(root.router, key, extend[key])
      }

      if (r.coms[0] === com) {
        return
      }

      root.isRouterPush = true
      r.countAni++
      r.coms.unshift(com)

      while (r.coms.length > 2) {
        r.coms.pop()
      }
    },
    createAni() {
      const root = this.$root
      const r = root.router
      const setting = root.setting
      let styleAni = document.getElementById('styleAni') || document.createElement('style')
      let sHtml = ''

      styleAni.id = 'styleAni'

      switch (setting.ani.type) {
        case 'none':

          break
        case 'fade':
          sHtml = `
            .ani-def-enter-active, .ani-def-leave-active {transition: opacity ${setting.ani.duration}ms;}
            .ani-def-enter, .ani-def-leave-to {opacity: 0;}
          `
          break
        case 'slide':
          const mapDirection = {
            lr: 'translateX(' + setting.ani.translate + 'px)',
            tb: 'translateY(' + setting.ani.translate + 'px)',
          }
          sHtml = `
            .ani-def-enter-active, .ani-def-leave-active {transition: all ${setting.ani.duration}ms;}
            .ani-def-enter, .ani-def-leave-to {opacity: 0; transform: ${mapDirection[setting.ani.direction]};}
          `
          break
        case '3d':
          sHtml = new Array(root.lenAni).fill().map((_, idx) => {
            let dw = window.innerWidth
            let w = dw * (2 / 5)
            w = w < 400 ? 400 : w
            const deg = 90
            const o = {
              translateX: `translateX(${rand(-w, w)}px)`,
              translateY: `translateY(${rand(-w, w)}px)`,
              translateZ: `translateZ(${rand(-dw / 2, 0)}px)`,
              rotateX: `rotateX(${rand(-deg, deg)}deg)`,
              rotateY: `rotateY(${rand(-deg, deg)}deg)`,
              // rotate: `rotateX(${rand(-deg, deg)}deg)`,
              // scale: `scale(${rand(-100, 100) / 100})`,
            }
            const types = Object.keys(o)

            let result = []
            // result.push([o['translateZ']])
            new Set(new Array(rand(3, 5)).fill().map((_, idx) => {
              return types[rand(0, types.length - 1)]
            })).forEach((item) => {
              result.unshift(o[item])
            })
            result = result.join(' ')

            return `
              .ani-${idx}-enter-active, .ani-${idx}-leave-active {
                transition: all ${setting.ani.duration}ms;
              }
              .ani-${idx}-enter, .ani-${idx}-leave-to {
                opacity: 0;
                transform: ${result};
              }
            `
          }).join('')
          break
      }

      styleAni.innerHTML = sHtml
      document.body.appendChild(styleAni)
    },
    fetchAllUser(cb) {
      const root = this.$root
      
      root.get('user.php', {a: 'user-list'}, (data) => {
        const map = {}
        data.forEach((item) => {
          map[item.id] = item
        })
        root.user.list = data
        root.user.map = map
        cb && cb.call(root)
      })
    },
    fetchUserInfo(cb) {
      const root = this.$root

      root.get('user.php', {a: 'user-info'}, (data) => {
        root.setUserInfo(data, cb)
      })
    },
    clickApp() {
      const root = this.$root
      root.qr.isShow = false
    },
    setUserInfo(data, cb) {
      const root = this.$root
      
      data = data || {}
      ;[
        'id', 'name', 'email', 'sex', 'birthday', 'password', 'description', 'level', 'errCount', 'errTime', 'url', 'addr', 'buss', 'bussUrl', 'time', 'headImg',
      ].forEach((key) => {
        root.user.info[key] = data[key] || ''
      })
      
      root.user.info.birthday_ = new Date(data.birthday * 1000).format('y-m-d')
      root.user.isAdmin = data.level == 9
      cb && cb.call(root)
    },
    init() {
      const root = this.$root
      const r = root.router
      
      root.fetchAllUser(() => {
        root.fetchUserInfo(() => {
          root.routerInit()
          window.onpopstate = root.routerInit.bind(root)
        })
      })
    }
  },
}

window.onresize = () => {
  vm.dw = window.innerWidth
}