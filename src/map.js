import axios from 'axios'
const ak = 'Zgvao4zZE6L1DYqiGocXjkSSULStabdQ'
export function MP(ak) {
  const BMap_URL = 'https://api.map.baidu.com/api?v=2.0&ak=Zgvao4zZE6L1DYqiGocXjkSSULStabdQ&s=1&callback=onBMapCallback'
  return new Promise((resolve, reject) => {
    // 如果已加载直接返回
    if (typeof BMap !== 'undefined') {
      resolve(BMap)
      return true
    }
    // 百度地图异步加载回调处理
    window.onBMapCallback = function() {
      console.log('百度地图脚本初始化成功...')
      resolve(BMap)
    }
    // 插入script脚本
    const scriptNode = document.createElement('script')
    scriptNode.setAttribute('type', 'text/javascript')
    scriptNode.setAttribute('src', BMap_URL)
    document.body.appendChild(scriptNode)
  })
}
/**
 * 获取当前地区
 * @param {*} param
 */
export function getLocationCity(location) {
  return new Promise((resolve, reject) => {
    axios.get('http://api.map.baidu.com/geocoder/v2/?location=' + location + '&output=json&coordtype=bd09ll,wgs84ll&pois=1&ak=' + ak) // http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location=35.658651,139.745415&output=json&pois=1&ak=您的ak
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
