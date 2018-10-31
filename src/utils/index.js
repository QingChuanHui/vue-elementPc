/**
 * 工具类 Created by jiachenpan on 16/11/18.
 */

const parseTime = function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

const formatTime = function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

const getLocalStorage = (...args) => {
  const storage = {}
  for (const arg of args) {
    storage[arg] = window
      .localStorage
      .getItem(arg) || ''
  }
  return storage
}

const setLocalStorage = (data) => {
  for (const prop in data) {
    window
      .localStorage
      .setItem(prop, data[prop])
  }
}

const removeLocalStorage = (...args) => {
  for (const arg of args) {
    window
      .localStorage
      .removeItem(arg)
  }
}
// sessionStorage 保存
const getSessionStorage = (...args) => {
  const storage = {}
  for (const arg of args) {
    storage[arg] = window
      .sessionStorage
      .getItem(arg) || ''
  }
  return storage
}

const setSessionStorage = (data) => {
  for (const prop in data) {
    window
      .sessionStorage
      .setItem(prop, data[prop])
  }
}
/**
 * 获取url参数
 * @param {*} name  参数名
 */
const getLocationParam = function(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window
    .location
    .hash.split('?')[1]
    .match(reg)
  if (r != null) return decodeURIComponent(r[2])
  return ''
}
/**
 * 生成GUID
 * @returns {*}
 */
const Guid = function newGuid() {
  let guid = formatTime(new Date(), 'yyyyMMdd-HHmm-ss')
  for (let i = 1; i <= 18; i++) {
    const n = Math.floor(Math.random() * 16.0).toString(16)
    guid += n
    if ((i === 2) || (i === 6) || (i === 10)) {
      guid += '-'
    }
  }
  return guid
}

/**
 * 深度复制 数组 数组中的对象
 * @param {*} source 数据
 */
const objDeepCopy = function objDeepCopy(source) {
  var sourceCopy = source instanceof Array ? [] : {}
  for (var item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? objDeepCopy(source[item]) : source[item]
  }
  return sourceCopy
}

/**
 * 保留小数位数方法
 * @param number 数
 * @param defaultBit  默认的小数位数
 * @returns
 */
const NumberFixed = function NumberFixed(number, { defaultBit = 0 }) {
  if (number === 'Infinity' || isNaN(number) || number === undefined || number == null) {
    return 0
  }
  let n = 2
  if (defaultBit !== 0) { // 有默认小数位数读取默认
    n = defaultBit
  }
  return +(+number).toFixed(n)
}
const localStorageTool = {// localstorage 的方法
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage
}
const sessionStorageTool = {// sessionStorageTool 的方法
  getSessionStorage,
  setSessionStorage
}

/**
 * 百度坐标距离计算,从压缩代码里扣出来的
 */
const R = 6370996.81 // 地球半径(米)
const p = null
const j = void 0
const Ib = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
function Jb(a) {
  let b = ''
  let c = null
  let d = null
  let e = ''
  let f = null
  let g = ''
  let i = 0
  f = /[^A-Za-z0-9\+\/\=]/g
  if (!a || f.exec(a)) return a
  a = a.replace(/[^A-Za-z0-9\+\/\=]/g, '')
  do {
    c = Ib.indexOf(a.charAt(i++))
    d = Ib.indexOf(a.charAt(i++))
    f = Ib.indexOf(a.charAt(i++))
    g = Ib.indexOf(a.charAt(i++))
    c = c << 2 | d >> 4
    d = (d & 15) << 4 | f >> 2
    e = (f & 3) << 6 | g
    b += String.fromCharCode(c)
    f !== 64 && (b += String.fromCharCode(d))// && 逻辑运算表达式中只要一个是false就取false的值，都是true取后面，都是false取前面
    f !== 64 && (b += String.fromCharCode(e))
  }
  while (i < a.length)
  return isNaN(b) ? 0 : b
}
function Za(a) {
  return typeof a === 'string'
}
function Point(a, b) {
  isNaN(a) && (a = Jb(a))
  Za(a) && (a = parseFloat(a))
  isNaN(b) && (b = Jb(b))
  Za(b) && (b = parseFloat(b))
  this.lng = a
  this.lat = b
}
Point.prototype.mb = function(a) {
  return a && this.lat === a.lat && this.lng === a.lng
}
function OD(a, b, c) {
  for (; a > c;) a -= c - b
  for (; a < b;) a += c - b
  return a
}
function SD(a, b, c) {
  b !== p && (a = Math.max(a, b))
  c !== p && (a = Math.min(a, c))
  return a
}
function Tk(a) {
  return Math.PI * a / 180
}
function Pe(a, b, c, d) {
  return R * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a))
}
function Vo(a, b) {
  if (!a || !b) return 0
  a.lng = OD(a.lng, -180, 180)
  a.lat = SD(a.lat, -74, 74)
  b.lng = OD(b.lng, -180, 180)
  b.lat = SD(b.lat, -74, 74)
  return Pe(Tk(a.lng), Tk(b.lng), Tk(a.lat), Tk(b.lat))
}
const getDistance = function getDistance(p1x, p1y, p2x, p2y) {
  if (!p1x || !p1y || !p2x || !p2y) {
    return 0
  }
  var p1 = new Point(p1x, p1y)
  var p2 = new Point(p2x, p2y)
  if (p1 && p2) {
    if (p1.mb(p2)) return 0
    var c
    c = Vo(p1, p2)
    if (c === p || c === j) c = 0
    return c.toFixed(2)
  } else {
    return 0
  }
}

const juliHandler = function filed(value) {
  if (value >= 1000) {
    return (value / 1000).toFixed(2) + 'km'
  } else {
    return value + 'm'
  }
}
export {
  localStorageTool, // localstorage 工具
  getLocationParam,
  sessionStorageTool, // sessionstorage 工具app 不能用sessioinStorage
  parseTime,
  formatTime,
  NumberFixed, // 保留小数位数 js减法计算问题
  objDeepCopy, // 深度复制
  Guid, // 生成juid
  getDistance, // 获取两个经纬度距离
  juliHandler // 距离处理方法
}
