import request from '@/utils/request'
import Qs from 'qs'
/* 获取所有预警设备预警信息
 */
export function warring(data) {
  return request({
    url: `/api/jh_bridge/warring`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取当前项目所有监测项
 */
export function typeData(data) {
  return request({
    url: `/api/jh_bridge/typeData`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取监测项下面的监测线
 */
export function dataLine(data) {
  return request({
    url: `/api/jh_bridge/dataLine`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取监测线下面的测点
 * monitorlineid
 */
export function dataPoint(data) {
  return request({
    url: `/api/jh_bridge/dataPoint`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取实时数据
 * monitorlineid 监测线id
 * type 监测项
 * pointid 测点id
 */
export function currentData(data) {
  return request({
    url: `/api/jh_bridge/currentData`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取单个监测点历史数据（15天内）
 * pointid 	测点id
 * beginTime 开始时间（例：：2020-02-12 12:30:15 24小时制）
 * endTime 结束时间 （例：：2020-02-22 12:30:15 24小时制）
 * primeval 正常调用可不加，原始数据加参数设为1
 */
export function historicalData(data) {
  return request({
    url: `/api/jh_bridge/historicalData`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
