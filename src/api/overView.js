import request from '@/utils/request'
import Qs from 'qs'
/* 综合预览
 */
export function generalIndex(data) {
  return request({
    url: `/api/general/index`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 备案审批数字驾驶舱
 */
export function generalApprove(data) {
  return request({
    url: `/api/general/approve`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 案件归集数字驾驶舱
 */
export function generalCaseCount(data) {
  return request({
    url: `/api/general/caseCount`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
