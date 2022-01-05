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

/* 获取燃气顶部数量
 */
export function dataAnalysis(data) {
  return request({
    url: `/api/gas/dataAnalysis`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取燃气钢瓶状态
 */
export function fileStatus(data) {
  return request({
    url: `/api/gas/fileStatus`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取燃气钢瓶充装
 */
export function listRecord(data) {
  return request({
    url: `/api/gas/listRecord`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取燃气钢瓶签收
 */
export function listSign(data) {
  return request({
    url: `/api/gas/listSign`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取全部信息点位列表
 */
export function listAllSign(data) {
  return request({
    url: `/api/gas/listAllSign`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取客户信息点位列表
 */
export function listClient(data) {
  return request({
    url: `/api/gas/listClient`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
