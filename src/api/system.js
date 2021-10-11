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
/* 综合概览 -- 详情  获取监控点列表
 * class 1AI视频、2河道视频、3停车场视频、4普通视频
 */
export function getAllVideoPoint(data) {
  return request({
    url: `/ai/monitory_point/getAllPoint`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
