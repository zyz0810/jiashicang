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
    url: `/api/c_lean_car/list`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
