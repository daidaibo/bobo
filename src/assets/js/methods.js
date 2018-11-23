export default {
  rootData() {
    const ua = navigator.userAgent
    const isLocal = location.origin.indexOf(808) > -1
    return {
      lenAni: 30,
      requestUrl: 'http://10.4.10.41/bobo/interface.php',
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
        email: isLocal ? 'test-1@codding.cn' : '',
        password: isLocal ? '123123' : '',
        list: [],
        map: {},
      },
    }
  },
  rootMethods: {
    json2url(o) {
      return Object.keys(o).map(k => k + '=' + encodeURIComponent(o[k])).join('&')
    },
    getUid(cb) {
      const root = this.$root
      const r = root.router
      
      root.get('', {a: 'getUid'}, (data) => {
        cb && cb(data.uid)
      })
    },
    get(url, data, succ, err) {
      const root = this.$root
      const xhr = new XMLHttpRequest()

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

      xhr.onreadystatechange = root.onreadystatechange.bind(root, xhr, succ, err)
      xhr.open('GET', root.requestUrl + url, true)
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
      let data = {}

      try {
        data = JSON.parse(str)
      } catch (e) {
        console.log('数据解析失败', str)
        return
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
    updateCom(com) {
      const root = this.$root
      const r = root.router
      
      root.isRouterPush = true
      r.countAni++
      r.coms.unshift(com)

      while (r.coms.length > 2) {
        r.coms.pop()
      }
    },
    getDataDefault(cb) {
      const root = this.$root
      
      root.get('', {a: 'getDataDefault'}, (data) => {
        const map = {}
        data.userList.forEach((item, idx, arr) => {
          map[item.id] = item
        })
        root.user = {...root.user, ...data.userInfo}
        root.user.list = data.userList
        root.user.map = map
        cb && cb()
      })
    },
    blogGetList() {
      const root = this.$root
      const r = root.router
      
      root.get('', {
        a: 'blog-get-list',
        belong: 'aw',
      }, (data) => {
        const map = {}
        const mapBranch = {}

        data.forEach((item) => {
          // item.read_ = item.read ? item.read.split(',') : []
          item.agree_ = item.agree ? item.agree.split(',') : []
          item.disagree_ = item.disagree ? item.disagree.split(',') : []
          item.tags_ = item.tags ? item.tags.split(/\s+/) : []
          map[item.id] = item
          mapBranch[item.pid] = mapBranch[item.pid] || []
          mapBranch[item.pid].push(item)
        })

        root.blog.list = data
        root.blog.map = map
        root.blog.mapBranch = mapBranch
      })
    },
    init() {
      const root = this.$root
      const r = root.router
      
      root.getDataDefault(() => {
        root.routerInit()
        window.onpopstate = root.routerInit.bind(root)
      })
    }
  },
}