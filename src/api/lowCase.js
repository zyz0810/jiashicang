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
/* 二级指挥平台图表数据（右侧折线图、柱形图）
 */
export function collectData(data) {
  return request({
    url: `/api/general/collectData`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/*  信访投诉热力图
 */
export function reLetterPic(data) {
  return request({
    url: `/api/General/reLetterPic`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/*   数字城管热力图
 */
export function reManagePic(data) {
  return request({
    url: `/api/General/reManagePic`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}

/*   点位
 */
export function getManageList(data) {
  return request({
    url: `/api/General/getManageList`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
/*   点位
 */
export function getLetterList(data) {
  return request({
    url: `/api/General/getLetterList`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
