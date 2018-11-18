export default {
  uuid(maxLen) {
    let str = ''

    maxLen = maxLen || 32
    
    while (str.length < maxLen) {
      str += parseInt(Math.random().toString().replace('0.', '')).toString(36)
    }

    return str.substring(0, maxLen)
  },
  clone(o) {
    return JSON.parse(JSON.stringify(o))
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

    r.coms = r.coms || []
    r.coms.length === 0 && r.coms.push('blog')

    while (r.coms.length > 2) {
      r.coms.pop()
    }

    root.router = r
  },
  updateCom(com) {
    const root = this.$root
    const r = root.router
    
    root.isRouterPush = true
    r.coms.unshift(com)
  },
  updateRouter(o, isRouterPush) {
    const root = this.$root
    const r = root.router

    root.isRouterPush = isRouterPush

    for (let key in o) {
      root.$set(root.router, key, o[key])
    }
  },
  json2url(data) {
    return Object.keys(data).map(k => k + '=' + encodeURIComponent(data[k])).join('&')
  },
  get(url, data, succ, fail) {
    const root = this.$root
    const r = root.router
    const xhr = new XMLHttpRequest

    xhr.onreadystatechange = () => {
      root.xhrOnreadystatechange(xhr, succ, fail)
    }
    xhr.open('GET', root.requestUrl + '?' + root.json2url(data), true)
    xhr.send()
  },
  post(url, data, succ, fail) {
    const root = this.$root
    const r = root.router
    const xhr = new XMLHttpRequest
    const formData = new FormData()

    for (let key in data) {
      formData.append(key, data[key])
    }

    xhr.onreadystatechange = () => {
      root.xhrOnreadystatechange(xhr, succ, fail)
    }
    xhr.open('POST', root.requestUrl, true)
    xhr.send(formData)
  },
  xhrOnreadystatechange(xhr, succ, fail) {
    const root = this.$root

    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        root.err(xhr.responseText, (data) => {
          succ && succ(data, xhr.responseText)
        }, fail)
      } else {
        console.warn('网络异常', xhr.responseText)
        fail && fail(xhr.responseText)
      }
    }
  },
  err(data, succ, fail) {
    const root = this.$root
    const r = root.router
    
    try {
      data = JSON.parse(data)
    } catch (e) {
      console.warn('数据解析失败', data)
      return
    }

    switch (data.code) {
      case 1:
        console.log(data.msg)
        fail && fail(data)
        break
      case 2:
        alert(data.msg)
        fail && fail(data)
        break
      case 100:
        root.user.isShowPanel = 1
        root.user.mode = 'login'
        break
      default:
        succ && succ(data)
        break
    }
  },
  getAllUser(cb) {
    const root = this.$root
    
    root.get('', {a: 'getAllUser'}, (user) => {
      const map = {}

      user.list.forEach((item, idx, arr) => {
        map[item.id] = item
      })

      root.user = {...root.user, ...user.info}
      root.user.map = map
      root.user.list = user.list

      cb && cb()
    })
  },
  init() {
    const root = this.$root
    const r = root.router

    root.getAllUser(() => {
      root.routerInit()
      window.onpopstate = root.routerInit.bind(root)
    })
  },
}