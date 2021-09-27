import request from '@/utils/request'
import Qs from 'qs'
/* 车辆信息
 */
export function cleancarList(data) {
  return request({
    url: `/admin/SanitationCar/carList`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取车辆基础信息
 * card_no 车牌号，多个用逗号分隔
 */
export function cleanCarAddressList(data) {
  return request({
    url: `/api/cleanCar/list`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取车辆最新的定位数据
 * card_no 车牌号，多个用逗号分隔
 */
export function lastGPS(data) {
  return request({
    url: `/api/cleanCar/lastGPS`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
