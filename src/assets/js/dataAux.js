Date.prototype.format = function(format) {
  const o = {
    y: this.getFullYear(),
    m: this.getMonth() + 1,
    d: this.getDate(),
    h: this.getHours(),
    i: this.getMinutes(),
    s: this.getSeconds(),
  }

  return (format || 'y-m-d h:i:s').replace(/y|m|d|h|i|s/g, (key) => {
    return o[key]
  })
}

String.prototype.fill = function(fillBy, maxLen, isNext) {
  let str = this.toString()
  fillBy = fillBy || '0'
  maxLen = maxLen === undefined ? 2 : maxLen

  while (str.length < maxLen) {
    str = isNext ? str + fillBy : fillBy + str
  }

  return str
}