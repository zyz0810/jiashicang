import request from '@/utils/request'
import Qs from 'qs'
/* 车辆信息
 */
export function cleancarList(data) {
  return request({
    url: `/admin/SanitationCar/carList`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取车辆基础信息
 * card_no 车牌号，多个用逗号分隔
 */
export function cleanCarAddressList(data) {
  return request({
    url: `/api/cleanCar/list`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取车辆最新的定位数据
 * card_no 车牌号，多个用逗号分隔
 */
export function lastGPS(data) {
  return request({
    url: `/api/cleanCar/lastGPS`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取车辆最新的定位数据
 * card_no 	车牌号，只能输入一个
 * start	日期：YYYY-MM-dd格式
 * end 日期：YYYY-MM-dd格式
 * returnRow  返回个数，系统默认1000 条。允许最高 也是 1000
 * compressionType 根据两点间的 距离进行数据 压缩。支持 0;50;200;1000 四种距离。
 */
export function carHistory(data) {
  return request({
    url: `/api/cleanCar/history`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 获取车辆轨迹视频
 * card_no 	车牌号，只能输入一个
 */
export function getGps(data) {
  return request({
    url: `/api/clean_car/getGps`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/* 在线离线环卫车数量接口
 */
export function cleanCarNum(data) {
  return request({
    url: `/api/cleanCar/statistics`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
