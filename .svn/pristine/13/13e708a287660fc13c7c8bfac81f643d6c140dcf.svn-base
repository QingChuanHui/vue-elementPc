import request from '@/utils/axios'

/**
 * 获取积分商品和优惠券
 * @param {*参数} param
 */
export function getIntegralList(param, closeLoading) {
  return request.fetchPost('/v1/app/integralGoods/selectList', param, closeLoading)// /v1/integralGoods/selectList
}
/**
 * 获取积分详细
 * @param {*参数} param
 */
export function getIntegralDetail(param, closeLoading) {
  return request.fetchPost('/v1/app/integralGoods/select', param, closeLoading)
}
/**
 * 兑换积分
 * @param {*参数} param
 */
export function createIntegralBill(param, closeLoading) {
  return request.fetchPost('/v1/app/integralGoodsBill/insert', param, closeLoading)
}
/**
 * 兑换记录
 * @param {*参数} param
 */
export function exchangeIntegralLog(param, closeLoading) {
  return request.fetchPost('/v1/app/integralGoodsBill/selectList', param, closeLoading)
}
/**
 * 单条兑换记录
 * @param {*参数} param
 */
export function exchangeIntegralByID(param, closeLoading) {
  return request.fetchPost('/v1/app/integralGoodsBill/select', param, closeLoading)
}
/**
 * 积分记录
 * @param {*参数} param
 */
export function integralLog(param, closeLoading) {
  return request.fetchPost('/v1/app/integral/selectList', param, closeLoading)
}
