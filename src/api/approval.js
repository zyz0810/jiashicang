import request from '@/utils/request'
import Qs from 'qs'
/* 备案审批走势
 */
export function checkWeek(data) {
  return request({
    url: `/api/Administrative_check/week`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 备案审批类型分析
 */
export function checkAnalyse(data) {
  return request({
    url: `/api/Administrative_check/analyse`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 备案审批详情
 */
export function listCheck(data) {
  return request({
    url: `/api/Administrative_check/listCheck`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 备案审批数据驾驶舱
 */
export function checkIndex(data) {
  return request({
    url: `/api/Administrative_check/index`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
