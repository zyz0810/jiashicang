import request from '@/utils/request'
import Qs from 'qs'
/* 备案审批数字驾驶舱
 */
export function generalApprove(data) {
  return request({
    url: `/api/general/approve`,
    method: 'post',
    data: Qs.stringify(data,{ arrayFormat: 'indices', allowDots: true })
  })
}
