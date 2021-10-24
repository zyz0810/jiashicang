import request from '@/utils/request'
import Qs from 'qs'
/* 案件归集数字驾驶舱
 */
export function caseCount(data) {
  return request({
    url: `/api/general/caseCount`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 二级指挥平台
 */
export function commandCase(data) {
  return request({
    url: `/api/general/commandCase`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
export function collectData(data) {
  return request({
    url: `/api/general/collectData`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
