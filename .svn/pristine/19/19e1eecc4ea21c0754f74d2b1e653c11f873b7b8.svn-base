import request from '@/utils/axios'

/**
 * 获取首页轮播图
 * @param {*参数} param
 */
export function getCarousel(param, closeLoading) {
  return request.fetchPost('/v1/app/carousel/selectTop4', param, closeLoading)
}
/**
 * 获取首页类别
 * @param {*参数} param
 */
export function getcategory(param, closeLoading) {
  return request.fetchPost('/v1/app/category/selectTop8', param, closeLoading)
}
/**
 * 判断某用户是否参与了某活动
 * @param {*参数} param
 */
export function haveJoinActivity(param, closeLoading) {
  return request.fetchPost('/v1/app/activity/haveJoinActivity', param, closeLoading)
}
/**
 * 根据Id获得活动
 * @param {*参数} param
 */
export function activity(param, closeLoading) {
  return request.fetchPost('/v1/app/activity/select', param, closeLoading)
}
/**
 * 用户参加活动
 * @param {*参数} param
 */
export function joinActivity(param, closeLoading) {
  return request.fetchPost('/v1/app/activity/joinActivity', param, closeLoading)
}
/**
 * 获得活动列表
 * @param {*参数} param
 */
export function activityList(param, closeLoading) {
  return request.fetchPost('/v1/app/activity/selectList', param, closeLoading)
}
