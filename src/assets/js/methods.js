export default {
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
  updateRouter(o, isRouterPush) {
    const root = this.$root
    const r = root.router

    root.isRouterPush = isRouterPush

    for (let key in o) {
      root.$set(root.router, key, o[key])
    }
  },
  json2url(data) {
    return Object.keys(data).map(k => k + encodeURIComponent(data[k])).join('&')
  },
  get(url, data, succ, fail) {
    const root = this.$root
    const r = root.router
    const xhr = new XMLHttpRequest

    xhr.onreadystatechange = () => {
      root.xhrOnreadystatechange(xhr)
    }
    xhr.open('GET', url + '?' + root.json2url(data), true)
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
      root.xhrOnreadystatechange(xhr)
    }
    xhr.open('POST', url, true)
    xhr.send(formData)
  },
  xhrOnreadystatechange(xhr) {
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
    try {
      data = JSON.parse(data)
    } catch (e) {
      console.warn('数据解析失败', data)
      return
    }

    if (data.code) {
      fail && fail(data)
    } else {
      succ && succ(data)
    }
  },
  init() {
    const root = this.$root
    const r = root.router
    
    root.routerInit()
    window.onpopstate = root.routerInit.bind(root)
  },
}