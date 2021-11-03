import request from '@/utils/request'
import Qs from 'qs'
/* 灯杆基础数据接⼝
 */
export function getLampPostList(data) {
  return request({
    url: `/api/light/getlamppostlist`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 柜⼦基础数据接⼝⼝
 */
export function getcontrolcabinetlist(data) {
  return request({
    url: `/api/light/getcontrolcabinetlist`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}

/* 亮灯率、节能率、综合评价、告警接⼝
 * year 如2021
 */
export function getevaluate(data) {
  return request({
    url: `/api/light/getevaluate`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 停车场列表
 * park_name 停车场名称
 */
export function parkList(data) {
  return request({
    url: `/api/park/list`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 数字停车 -- 总泊车位数量
 */
export function getAllPark(data) {
  return request({
    url: `/api/park/getAllPark`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取共享单车的列表数据和数量
 */
export function getShareCar(data) {
  return request({
    url: `/api/General/getShareCar`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
