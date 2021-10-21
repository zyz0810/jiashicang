import request from '@/utils/request'
import Qs from 'qs'
/* AI图表数据
 * day_time 如2020-10-16
 */
export function analysisData(data) {
  return request({
    url:'/ai/Analysis/analysisData',
    method: 'post',
    data: Qs.stringify(data)
  })
}
/* 辖区报警次数占比分析
 * start_time 	2021-10-16
 * end_time 	2021-10-17
 */
export function departOfWarn(data) {
  return request({
    url: `/api/analyse/departOfWarn`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 报警次数和平均油烟浓度趋势分析
 * start_time 	2021-10-16
 * end_time 	2021-10-17
 */
export function timesOfWarn(data) {
  return request({
    url: `/api/analyse/timesOfWarn`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 油烟点位
 * class
 */
export function getFacilityAll(data) {
  return request({
    url: `/api/analyse/getFacilityAll`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
