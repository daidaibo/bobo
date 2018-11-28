Array.prototype.remove = function(item) {
  const arr = this

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      arr.splice(i, 1)
      i--
    }
  }

  return arr
}

String.prototype.fill = function(fillBy, maxLen, isNext) {
  let str = this.toString()

  fillBy = fillBy || '0'
  maxLen = maxLen || 2

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

window.rand = (m, n) => {
  return Math.floor(Math.random() * (n - m + 1) + m)
}