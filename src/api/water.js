import request from '@/utils/request'
import Qs from 'qs'
/* 站点查询
 * type
 */
export function findSite(data) {
  return request({
    url: `/api/site_river/findSite`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 异常站点查询
 * type
 */
export function abnormalSite(data) {
  return request({
    url: `/api/site_river/abnormalSite`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 告警站点查询
 * type
 */
export function warnSite(data) {
  return request({
    url: `/api/site_river/warnSite`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 河长接口
 */
export function riverList(data) {
  return request({
    url: `/api/river/riverList`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
