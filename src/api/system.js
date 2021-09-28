import request from '@/utils/request'
import Qs from 'qs'
/* 获取监控点列表
 * class 123
 * type type===allList 没有分页
 */
export function pointList(data) {
  return request({
    url: `/ai/monitory_point/pointList`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
