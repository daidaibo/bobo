export default {
  rootData() {
    const ua = navigator.userAgent
    const isLocal = location.origin.indexOf(808) > -1
    return {
      lenAni: 30,
      // requestUrl: 'http://192.168.1.107/bobo/',
      requestUrl: 'http://10.4.10.41/',
      is: {
        local: isLocal,
      },
      router: {
        coms: [],
        countAni: 0,
      },
      user: {
        mode: 'login',
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
        cb && cb(sha256(data.uid))
      })
    },
    createUrl(url) {
      return url ? 'fans/' + url : 'bobo/interface.php'
    },
    get(url, data, succ, err) {
      const root = this.$root
      const xhr = new XMLHttpRequest()

      url = root.createUrl(url)
      xhr.onreadystatechange = root.onreadystatechange.bind(root, xhr, succ, err)
      xhr.open('GET', root.requestUrl + url + '?' + root.json2url(data) , true)
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
      xhr.open('POST', root.requestUrl + url, true)
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
        console.log('数据解析失败', str)
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