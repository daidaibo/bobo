function rand(m, n) {
  return Math.floor(Math.random() * (n - m + 1) + m)
}

String.prototype.fill = function(maxLen, fillBy, isNext) {
  let str = this.toString()

  maxLen = maxLen === undefined ? 2 : maxLen
  fillBy = fillBy || '0'

  while (str.length < maxLen) {
    str = isNext ? str + fillBy : fillBy + str
  }

  return str
}

Date.prototype.format = function(format) {
  const o = {
    y: (this.getFullYear()).toString().fill(),
    m: (this.getMonth() + 1).toString().fill(),
    d: (this.getDate()).toString().fill(),
    h: (this.getHours()).toString().fill(),
    i: (this.getMinutes()).toString().fill(),
    s: (this.getSeconds()).toString().fill(),
  }

  return (format || 'y-m-d h:i:s').replace(/y|m|d|h|i|s/g, (k) => {
    return o[k]
  })
}

export default {
  rootData() {
    const ua = navigator.userAgent
    
    return {
      router: {
        coms: [],
      },
      is: {
        local: ['808', '300'].some((item) => {
          return location.port.indexOf(item) > -1
        }),
        ios: ua.indexOf('like Mac OS X') > -1,
        iphone: ua.indexOf('iPhone; CPU iPhone') > -1,
        ipad: ua.indexOf('iPhone; CPU iPhone') > -1,
        android: ua.indexOf('Linux; Android') > -1,
      },
    }
  }
}